import { sendOTP } from '../../../../actions/guestAuth';
import { startLoading } from '../../../../actions/root';
import { RootState } from '../../../../store';
import { AuthButtonTheme } from '../../../../utils/consts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

interface numberProps {
	setNumber: (data: string) => void;
}

const Number = ({ setNumber }: numberProps) => {
	// For Exporting Last Two Digits of Mobile Number
	const [exportedData, setExportedData] = useState<string>('');
	const initialRender = useRef(true);

	const otpAuthLoading = useSelector<RootState, boolean>(state => state.guestAuth.loading);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
		} else {
			setNumber(exportedData);
		}
	}, [exportedData, setNumber]);

	const dispatch: Dispatch<any> = useDispatch();

	// Select field
	const handleSelect = (code: string) => {
		setOtpData({ ...otpData, code });
	};

	// Formik initial values
	const [otpData, setOtpData] = useState({
		code: '+91',
		number: '',
		loading: false,
	});

	return (
		<Formik
			initialValues={otpData}
			validationSchema={object({
				number: string()
					.required('Please enter Mobile Number')
					.transform((value: number) => (isNaN(value) ? undefined : value)),
			})}
			onSubmit={(values, formikHelpers) => {
				setOtpData({ ...values, loading: true });
				const last = values.number.toString().slice(-2);
				setExportedData(last);
				dispatch(startLoading('LOADING_USER'));
				dispatch(sendOTP({ phone: values.code.toString() + values.number }));
				formikHelpers.resetForm();
			}}
		>
			{({ errors, isValid, touched, dirty, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<Box
						className='center'
						flexDirection='column'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '400',
						}}
					>
						<Box textAlign='center' fontSize='1.2rem'>
							Enter your mobile number
						</Box>
						<Box height={5} />
						<Box
							textAlign='center'
							width={{ md: '40%', sm: '40%', xs: '87%' }}
							sx={{
								fontSize: '0.781rem',
								lineHeight: '19px',
								color: '#8f8f8f',
							}}
						>
							{/* Enter your mobile number linked to your account to login */}
						</Box>
					</Box>
					<Box height={{ xs: '20px', md: '25px', sm: '18px' }} />
					<Box
						className='center'
						gap={1}
						border='0.5px solid #1A191E'
						overflow='hidden'
						padding='0 0.625rem'
						borderRadius='6px'
						width={{ xl: '60%', md: '50%', sm: '50%', xs: '85%' }}
						height={44}
						margin='auto'
					>
						<Box id='country-selector' height='100%' display='flex' alignItems='center'>
							<Field
								select
								defaultValue='+91'
								onChange={handleSelect}
								variant='standard'
								style={{
									width: '5rem',
									backgroundColor: 'white',
									border: 'none',
									display: 'flex',
								}}
								as={TextField}
								name='code'
								InputProps={{ disableUnderline: true }}
							>
								<MenuItem value={'+91'}>
									<Box>+91</Box>
									<Box>
										<img src='/assets/images/otp/flag.svg' alt='' />
									</Box>
								</MenuItem>
							</Field>
						</Box>
						<Box
							width={{ md: '50%', sm: '50%', xs: '70%' }}
							flexGrow='1'
							height='100%'
							display='flex'
							alignItems='center'
							id='number-input'
						>
							<Field
								as={TextField}
								fullWidth
								maxLength='10'
								variant='outlined'
								name='number'
								type='number'
								style={{
									underline: {
										'&&&:before': {
											borderBottom: 'none',
										},
										'&&:after': {
											borderBottom: 'none',
										},
									},
								}}
							/>
						</Box>
					</Box>
					<Box height={50} />
					<Box className='center'>
						<Box width={{ md: '50%', sm: '65%', xs: '85%' }} height='46px'>
							<ThemeProvider theme={AuthButtonTheme('black', 'white')}>
								<Button
									fullWidth
									type='submit'
									variant='contained'
									sx={{
										textTransform: 'none',
										fontFamily: 'Open Sans',
										fontWeight: 600,
										fontSize: '1rem',
									}}
								>
									{otpAuthLoading ? 'Loading...' : 'Send OTP'}
								</Button>
							</ThemeProvider>
						</Box>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default Number;
