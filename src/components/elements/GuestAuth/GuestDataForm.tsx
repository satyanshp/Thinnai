import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Field, Form, Formik } from 'formik';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { updateProfile } from '../../../actions/profile';
import { startLoading } from '../../../actions/root';
import { RootState } from '../../../store';
import { GENDERS } from '../../../utils/consts';
import { ROUTES } from '../../../utils/routing/routes';
import '../../styles/OtpAuth/otp.scss';
import ImageSelector from '../Common/ImageSelector';

const SelectChipListItem = styled(Paper)(({ theme }) => ({
	fontSize: '1rem',
	height: '43px',
	width: 'auto',
	border: '0.5px solid #000000',
	padding: '0.25rem 0.5rem',
	borderRadius: '6px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: 'none',
	color: '#383838',
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontWeight: '400',
	textAlign: 'center',
	lineHeight: '16px',
	cursor: 'pointer',
	gap: '0.422rem',
}));

interface IGuestRegistrationProps {
	currentUserData: any;
	bookingId?: string;
	isRegistrationForBooking?: boolean;
	onCompleteNavigateFromBooking?: Function;
	isMyBooking?: boolean;
}

const GuestDataForm = ({
	currentUserData,
	bookingId,
	isRegistrationForBooking = false,
	onCompleteNavigateFromBooking,
	isMyBooking = false,
}: IGuestRegistrationProps) => {
	const profileLoading = useSelector<RootState, boolean>(state => state.profile.loading);

	const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(915148800000));

	const [selectedGenderIndex, setSelectedGenderIndex] = useState<number>();
	const [isGenderSelected, setIsGenderSelected] = useState(false);
	const [selectedGender, setSelectedGender] = useState<string>();

	const [isRegistration, setIsRegistration] = useState(false); //Can be used to hide fields!

	const [profileCroppedImageFile, setProfileCroppedImageFile] = useState<Blob>();
	const [frontCroppedImageFile, setFrontCroppedImageFile] = useState<Blob>();
	const [backCroppedImageFile, setBackCroppedImageFile] = useState<Blob>();

	const onSelectGenderIndex = (i: number) => {
		setIsGenderSelected(true);
		if (selectedGenderIndex === i) {
			setSelectedGenderIndex(undefined);
		} else setSelectedGenderIndex(i);
		setSelectedGender(GENDERS[i].text);
	};

	const [profileFormData, setProfileFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		profession: '',
		dateOfBirth: dateOfBirth,
		idProofType: 'Aadhar',
		idProofNumber: '',
		idProofFront: '',
		idProofBack: '',
		profileImage: '',
		loading: false,
	});

	const navigate = useNavigate();

	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		if (currentUserData && currentUserData.registered) {
			setProfileFormData(currentUserData);
			setIsRegistration(false);
			const indexOfGender = GENDERS.findIndex(gender => gender.text === currentUserData.gender);
			if (indexOfGender !== -1) {
				setSelectedGender(currentUserData.gender);
				setIsGenderSelected(true);
				setSelectedGenderIndex(indexOfGender);
			}
		} else {
			setIsRegistration(true);
		}
	}, [currentUserData]);

	return (
		<Formik
			initialValues={profileFormData}
			enableReinitialize={true}
			validationSchema={object({
				firstName: string().required('Required'),
				lastName: string().required('Required'),
				email: string().required('Required').email('Enter Valid Email'),
				profession: string().required('Required'),
			})}
			onSubmit={(values, formikHelpers) => {
				setProfileFormData({
					...values,
					gender: selectedGender as string,
					dateOfBirth: dateOfBirth as Date,
					loading: true,
				});
				const userUpdate = {
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
				};
				const profileUpdate = {
					gender: selectedGender,
					profession: values.profession,
					dateOfBirth: dateOfBirth,
					idProofType: values.idProofType,
					idProofNumber: values.idProofNumber,
					idProofFront: values.idProofFront,
					idProofBack: values.idProofBack,
				};
				dispatch(startLoading('LOADING_PROFILE'));
				dispatch(
					updateProfile(
						{
							...profileUpdate,
							...userUpdate,
							profileCroppedImageFile,
							frontCroppedImageFile,
							backCroppedImageFile,
							isMyBooking,
							isRegistrationForBooking,
							bookingId,
						},
						() =>
							isRegistrationForBooking
								? onCompleteNavigateFromBooking && onCompleteNavigateFromBooking()
								: isRegistration
								? navigate(ROUTES.EXPLORE)
								: navigate(ROUTES.PERSONAL_INFO)
					)
				);
				formikHelpers.resetForm();
			}}
		>
			{({ errors, isValid, touched, dirty, values, setValues, handleSubmit }) => (
				<Form className='data-form' onSubmit={handleSubmit} style={{ width: '90%' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							margin: '0 0 14px 0',
						}}
					>
						<label className='label'>Upload Your Picture</label>
						<label className='app__info-sublabel label'>Your face should be clearly visible</label>
					</Box>
					<Box
						display='flex'
						justifyContent='center'
						marginY={{
							xl: '1.875rem',
							md: '1.875rem',
							sm: '1.25rem',
							xs: '1.25rem',
						}}
					>
						<ImageSelector
							borderRadius='50%'
							aspectRatio={1}
							required={false}
							height='173px'
							width='173px'
							background='#F3F1FF'
							border='1px dashed #8F7EF3'
							iconcolor='#8F7EF3'
							setCroppedImageFile={setProfileCroppedImageFile}
							initialImage={profileFormData.profileImage}
						/>
					</Box>
					<Box height={14} />
					<Box display={{ xl: 'flex', md: 'flex', sm: 'flex', xs: 'block' }}>
						<Box className='mb-2' width={{ xs: '100%', xl: '50%', md: '50%', sm: '50%' }}>
							<label className='label'>First Name :</label>
							<Field
								className='input-field'
								type='text'
								name='firstName'
								size='lg'
								label='Name'
								required
							/>
							{touched.firstName && errors.firstName ? (
								<span className='error-msg'>*{errors.firstName}</span>
							) : null}
						</Box>
						<Box height={14} width={14} />
						<Box className='mb-2' width={{ xs: '100%', xl: '50%', md: '50%', sm: '50%' }}>
							<label className='label'>Last Name :</label>

							<Field
								className='input-field'
								type='text'
								name='lastName'
								size='lg'
								label='Name'
								required
							/>
							{touched.lastName && errors.lastName ? (
								<span className='error-msg'>*{errors.lastName}</span>
							) : null}
						</Box>
					</Box>
					<Box height={14} />
					<Box className='mb-2' width={{ xs: '100%', xl: '100%', md: '100%', sm: '100%' }}>
						<label className='label'>Email Id :</label>
						<Field
							className='input-field'
							type='email'
							name='email'
							size='lg'
							label='Name'
							required
						/>
						{touched.email && errors.email ? (
							<span className='error-msg'>*{errors.email}</span>
						) : null}
					</Box>
					<Box height={14} />
					<Box className='app__item-container'>
						<label className='label'>Gender :</label>
						<Grid container spacing={1.5}>
							{GENDERS.map((item, index) => (
								<Grid
									key={index}
									onClick={() => {
										onSelectGenderIndex(index);
										setValues({ ...values, gender: GENDERS[index].text });
									}}
									item
								>
									<SelectChipListItem
										style={{
											backgroundColor: selectedGenderIndex === index ? '#DFDAFF' : '',
											border: selectedGenderIndex === index ? '0.5px solid #6053AE' : '',
										}}
									>
										<img style={{ height: '1rem' }} src={item.pic} alt={item.text} />
										<Box>{item.text}</Box>
									</SelectChipListItem>
								</Grid>
							))}
						</Grid>
						{isGenderSelected && selectedGenderIndex === undefined ? (
							<span style={{ marginTop: '0.625rem' }} className='error-msg'>
								* Select at least one
							</span>
						) : null}
					</Box>
					<Box height={14} />
					<Box className='mb-2' width={{ xs: '100%', xl: '100%', md: '100%', sm: '100%' }}>
						<label className='label'>Profession :</label>
						<Field
							className='input-field'
							type='text'
							name='profession'
							size='lg'
							label='Name'
							required
						/>
						{touched.profession && errors.profession ? (
							<span className='error-msg'>*{errors.profession}</span>
						) : null}
					</Box>
					<Box height={14} />
					{isRegistration && (
						<Box className='mb-2' display='flex' flexDirection='column'>
							<label className='label'>Date of Birth :</label>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<MobileDatePicker
									inputFormat='dd/MM/yyyy'
									value={dateOfBirth}
									className='date_picker'
									onChange={newValue => {
										const dob = new Date(newValue!.toString()).toJSON();
										setDateOfBirth(new Date(dob));
									}}
									renderInput={params => <TextField {...params} />}
								/>
							</LocalizationProvider>
							<Box height={14} />
						</Box>
					)}

					<Box className='mb-2' width='100%'>
						<Typography className='label'>ID Type :</Typography>
						<TextField
							value={values.idProofType}
							onChange={e => setValues({ ...values, idProofType: e.target.value })}
							name='idProofType'
							id='id-type-label'
							fullWidth
							sx={{
								paddingY: 0,
							}}
							select
						>
							{['Aadhar', 'Passport', 'Driving License'].map(item => (
								<MenuItem key={item} value={item} style={{ width: '100%' }}>
									{item}
								</MenuItem>
							))}
						</TextField>
					</Box>
					<Box height={14} />
					<Box className='mb-2' width='100%'>
						<label className='label'>ID Number :</label>
						<Field
							className='input-field'
							type='text'
							name='idProofNumber'
							size='lg'
							label='Name'
							required
						/>
						{touched.idProofNumber && errors.idProofNumber ? (
							<span className='error-msg'>*{errors.idProofNumber}</span>
						) : null}
					</Box>
					<Box height={30} />
					<Typography
						fontSize={{
							xl: '1.125rem',
							md: '1.125rem',
							sm: '1rem',
							xs: '1rem',
						}}
						color='#000000'
					>
						Upload Govt. Verified Photo ID
					</Typography>
					<Typography
						fontSize={{
							xl: '1rem',
							md: '1rem',
							sm: '0.813rem',
							xs: '0.813rem',
						}}
						fontWeight='200'
						color='#1A191E'
					>
						(Aadhar, Passport, Driver's License, Voter ID)
					</Typography>
					<Box height={15} />
					<Grid>
						<Box display='flex' height='100%'>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Box
										display='flex'
										flexDirection='column'
										gap={{ md: 'inherit', xs: '15px' }}
										justifyContent='space-between'
										width='100%'
										height='100%'
									>
										<ImageSelector
											required={true}
											height='10rem'
											width='100%'
											aspectRatio={16 / 9}
											contWidth='100%'
											background='#F3F1FF'
											border='0.5px dashed #8F7EF3'
											iconcolor='#8F7EF3'
											setCroppedImageFile={setFrontCroppedImageFile}
											initialImage={profileFormData.idProofFront}
										/>
										<Box className='pic-label' textAlign='center' position='relative' top='10px'>
											Front Side
										</Box>
									</Box>
								</Grid>
								<Grid item xs={6}>
									<Box
										flexDirection='column'
										display='flex'
										gap={{ md: 'inherit', xs: '15px' }}
										justifyContent='space-between'
										width='100%'
										height='100%'
									>
										<ImageSelector
											required={true}
											contWidth='100%'
											height='10rem'
											width='100%'
											aspectRatio={16 / 9}
											background='#FCFBF4'
											border='0.5px dashed #AD6800'
											iconcolor='#AD6800'
											setCroppedImageFile={setBackCroppedImageFile}
											initialImage={profileFormData.idProofBack}
										/>
										<Box className='pic-label' textAlign='center' position='relative' top='10px'>
											Back Side
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Box height={30} />
					<Box
						style={{
							width: '100%',
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'flex-end',
							flexDirection: 'row-reverse',
						}}
					>
						<Button
							disabled={!isValid || (isGenderSelected && selectedGenderIndex === undefined)}
							type='submit'
							variant='contained'
							sx={{ background: '#8F7EF3', width: '100%',textTransform: 'none' }}
						>
							{profileLoading ? 'Loading...' : isRegistration ? 'Proceed' : 'Save'}
						</Button>
					</Box>
					<Box height={15} />
				</Form>
			)}
		</Formik>
	);
};

export default GuestDataForm;
