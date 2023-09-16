import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import { sendOTP, verifyOTP } from '../../../../actions/guestAuth';
import { startLoading } from '../../../../actions/root';
import { RootState } from '../../../../store';
import { LOADING_USER } from '../../../../utils/consts';

interface inputProps {
	lastDigits: string;
	navigateOnSuccess: Function;
	bookingId?: string;
}

const OtpInput = ({ lastDigits, navigateOnSuccess, bookingId }: inputProps) => {
	const dispatch: Dispatch<any> = useDispatch();

	const otpAuthLoading = useSelector<RootState, boolean>(state => state.guestAuth.loading);

	// Countdown
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(1);
	useEffect(() => {
		var timer = setInterval(() => {
			setSecond(second - 1);
			if (second === 0 && minute !== 0) return setMinute(0), setSecond(59);
			if (minute === 0 && second === 0) return setMinute(0), setSecond(0);
		}, 1000);
		return () => clearInterval(timer);
	});

	// Button Style
	const theme = createTheme({
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						'&.MuiButton-contained': {
							background: 'black',
						},
						'&.Mui-disabled': {
							backgroundColor: 'grey',
							color: 'white',
						},
					},
				},
			},
		},
	});

	const focusNext = (e: React.FormEvent<HTMLInputElement>, last: number) => {
		if ((e.target as HTMLInputElement).value.length) {
			((e.target as HTMLInputElement).nextElementSibling as HTMLElement)?.focus();
		} else {
			((e.target as HTMLInputElement).previousElementSibling as HTMLElement)?.focus();
		}
	};

	const wrongOtpStore = useSelector<RootState, boolean>(state => state.guestAuth.wrongOTP);
	const [wrongOtp, setWrongOtp] = useState(false);
	useEffect(() => {
		setWrongOtp(wrongOtpStore);
	}, [wrongOtpStore]);

	const fieldName = ['first', 'second', 'third', 'forth'];

	const [otpArray, setOtpArray] = useState({
		first: '',
		second: '',
		third: '',
		forth: '',
		otp: '',
		loading: false,
	});

	const phone = useSelector<RootState, string>(state => state.guestAuth.user.phone);
	const otp = useSelector<RootState, number>(state => state.guestAuth.user.otp);

	const onClick = () => {
		dispatch(sendOTP({ phone }));
		setWrongOtp(false);
		setSecond(0);
		setMinute(1);
	};

	return (
		<Formik
			initialValues={otpArray}
			validationSchema={object({
				first: string().required('Required'),
				second: string().required('Required'),
				third: string().required('Required'),
				forth: string().required('Required'),
			})}
			onSubmit={(values, formikHelpers) => {
				const otpDigits = [values.first, values.second, values.third, values.forth];
				const otpString = otpDigits.join('');
				setOtpArray({ ...values, loading: true, otp: otpString });
				dispatch(startLoading(LOADING_USER));
				dispatch(verifyOTP({ phone, otpString, bookingId }, navigateOnSuccess));
				formikHelpers.resetForm();
			}}
		>
			{({ errors, isValid, touched, dirty, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<Box className='center'>
						<Box
							className='openSans'
							sx={{
								fontSize: '1.2rem',
								lineHeight: '19px',
								color: 'black',
							}}
						>
							Enter the OTP {otp}
						</Box>
					</Box>
					<Box height={10} />
					<Box className='center'>
						<Box
							className='openSans'
							width={{ xs: '60%', sm: '100%', md: '100%' }}
							fontSize={{ xs: '0.763rem', md: '0.875rem', sm: '0.825rem' }}
							sx={{
								lineHeight: '14px',
								color: '#8F8F8F',
							}}
						>
							{'OTP is sent to the number ending with xxxxxxxx' + lastDigits}
						</Box>
					</Box>
					<Box height={30} />
					<Box className='center' sx={{ gap: '0.625rem' }}>
						{fieldName.map((name, index) => (
							<>
								<Field
									style={{
										textAlign: 'center',
										width: '50px',
										height: '43px',
										borderRadius: '6px',
										border: wrongOtp ? '0.5px solid #EE6262' : '0.5px solid #1A191E',
										outline: 'none',
										transition: '0.3s',
									}}
									onInput={(e: React.FormEvent<HTMLInputElement>) => focusNext(e, index)}
									type='text'
									maxLength='1'
									name={fieldName[index]}
									key={index}
									className='otp-input'
								/>
							</>
						))}
					</Box>
					<Box height={8} />
					<Box
						className='center'
						width={wrongOtp ? '55%' : '50%'}
						justifyContent={{ xs: 'center', md: 'center' }}
						margin='auto'
						display="block"
					>
						{wrongOtp && (
							<Box className='openSans' color='#FF5252' ml={7} justifyContent="center" fontSize='12px' display='flex' gap={0.5}>
								<Box fontWeight='300'>Wrong OTP entered.</Box>
								<Box fontWeight='800'>Try Again</Box>
							</Box>
						)}
						{/* {!wrongOtp && ( */}
							<Box
								className='openSans'
								color='#8F8F8F'
								fontSize={{ md: '1rem', sm: '1rem', xs: '0.563rem' }}
							>
								{minute < 10 ? '0' + minute : minute} : {second < 10 ? '0' + second : second}
							</Box>
						{/* )} */}
					</Box>
					<Box
						height={30}
						display='flex'
						justifyContent='center'
						gap={0.6}
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontSize: '0.9rem',
							lineHeight: '14px',
							display: 'flex',
							marginTop: '1.3rem',
							alignItems: 'center',
							color: '#000000',
						}}
					>
						<Box fontWeight='300'>Didn’t receive an OTP ?</Box>
						<Box
							component='span'
							sx={{
								cursor: 'pointer',
							}}
							fontWeight='800'
							onClick={onClick}
						>
							Resend Again
						</Box>
					</Box>
					<Box height={12} />
					<Box className='center'>
						<Box width={{ md: '50%', sm: '65%', xs: '85%' }} height='46px'>
							<ThemeProvider theme={theme}>
								<Button disabled={!isValid || !dirty} fullWidth type='submit' variant='contained' style={{textTransform: 'none',fontSize:"20px"}} >
									{otpAuthLoading ? 'Loading...' : 'Continue'}
								</Button>
							</ThemeProvider>
						</Box>
					</Box>
					<Box
						height={{
							md: 15,
							sm: 15,
						}}
					/>
					{/* <Box className='center'>
                <Box 
                    className='openSans' 
                    color='#8F8F8F'
                    fontSize={{md:'11px',sm:'11px',xs:'9px'}}
                >
                    {minute<10? "0"+minute : minute} : {second<10? "0"+second : second}
                </Box>
            </Box> */}
				</Form>
			)}
		</Formik>
	);
};
export default OtpInput;
