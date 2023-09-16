import { RootState } from '../../store';
import { SHOW_ONLY_DESKTOP, SHOW_ONLY_PHONE } from '../../utils/consts';
import { ROUTES } from '../../utils/routing/routes';
import ThinnaiLogoHeader from '../elements/Common/mobileOnly/ThinnaiLogoHeader';
import Number from '../elements/GuestAuth/subElements/Number';
import OtpInput from '../elements/GuestAuth/subElements/OtpInput';
import RegistrationNavbar from '../elements/GuestAuth/subElements/RegistrationNavbar';
import '../styles/OtpAuth/otp.scss';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const GuestLogin = () => {
	const navigate = useNavigate();
	const isAuthenticated = useSelector<RootState, boolean>(state => state.guestAuth.isAuthenticated);
	const authLoading = useSelector<RootState, boolean>(state => state.guestAuth.loading);
	const registered = useSelector<RootState, boolean>(state => state.guestAuth.user.registered);

	const { bookingId } = useParams<{ bookingId: string }>();

	const [lastTwo, setLastTwo] = useState<string>('');
	//For Last Digit of Mobile Number
	const setNumber = (lastTwoNumbers: string) => {
		setLastTwo(lastTwoNumbers);
	};

	const [otpSent, setOtpSent] = useState(false);

	useEffect(() => {
		if (lastTwo?.length === 2) setOtpSent(true);
	}, [lastTwo?.length === 2]);

	useEffect(() => {
		if (!authLoading && isAuthenticated && registered && !bookingId) {
			navigate(ROUTES.EXPLORE);
		} else if (!authLoading && isAuthenticated && bookingId) {
			navigate(`${ROUTES.CONFIRM_INVITATION}/${bookingId}`);
		}
	}, [isAuthenticated, authLoading]);

	const navigateOnLoginSuccess = () => {
		let path = registered
			? bookingId
				? `${ROUTES.CONFIRM_INVITATION}/${bookingId}`
				: ROUTES.EXPLORE
			: `${ROUTES.GUEST_REGISTRATION}`;
		navigate(path);
	};

	return (
		<Grid container component='main' className='otp' height='100vh'>
			<RegistrationNavbar />
			<CssBaseline />
			<Grid
				display={SHOW_ONLY_DESKTOP}
				item
				xs={false}
				sm={false}
				md={5.5}
				sx={{
					backgroundImage: "url('/assets/images/otp/otp.svg')",
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
				}}
			></Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={6.5}
				style={{
					margin: 'auto',
					position: 'relative',
					height: '100vh',
					overflowX: 'hidden',
				}}
			>
				<Grid container>
					<Grid item xs={false} sm={false} md={1}></Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={11}
						marginTop={{
							md: '0rem',
							xs: '1rem',
						}}
					>
						<Grid container direction='column' rowGap={{ xs: '18px', md: '0.5rem', sm: '1.25rem' }}>
							<Grid item md={4} xs={4}>
								<Box height={{ md: '60px', sm: '90px', xs: '60px' }} />
								<Box
									display={{ md: 'none', sm: 'none', xs: 'block' }}
									paddingLeft={{ md: '0px', sm: '3.75rem', xs: '1.5rem' }}
									fontSize={{ sm: '2.5rem', md: '2.5rem', xs: '1.75rem' }}
									sx={{
										fontFamily: "'Montserrat', sans-serif",
										fontStyle: 'normal',
										fontWeight: '700',
										lineHeight: '34px',
										color: '#1A191E',
									}}
								>
									{!otpSent ? 'Welcome to Thinnai' : 'OTP Verification'}
								</Box>
							</Grid>
							<Box height={{ xs: 90, md: 130 }} />
							<Grid item md={4} xs={4}>
								<Box className='center'>
									<Box
										display={{ md: 'block', sm: 'block', xs: 'none' }}
										fontFamily='Montserrat'
										fontStyle='normal'
										color='#272F3D'
										fontWeight='700'
										fontSize='2.2rem'
										lineHeight='1.4em'
										textAlign='center'
										zIndex='2'
									>
										{!otpSent ? (
											<>
												Hello there, <br /> Welcome to Thinnai
											</>
										) : (
											'OTP Verification'
										)}
									</Box>
									<Box display={SHOW_ONLY_PHONE}>
										<ThinnaiLogoHeader />
									</Box>
								</Box>
							</Grid>
							<Box height={{ md: 30, xs: 50 }} />
							<Grid item md={4} xs={4}>
								{otpSent === false ? (
									<Number setNumber={setNumber} />
								) : (
									<OtpInput
										bookingId={bookingId}
										lastDigits={lastTwo}
										navigateOnSuccess={navigateOnLoginSuccess}
									/>
								)}
							</Grid>
							{/* <Box
								className='otp__or'
								position='relative'
								margin='auto'
								textAlign='center'
								marginTop={{
									sm: '1.5rem',
									md: '2rem',
								}}
								width='60%'
								color='#929292'
							>
								OR
							</Box>
							<Box height={6} />
							<Box
								margin='auto'
								width={{
									sm: '80%',
									md: '50%',
								}}
							>
								<Button
									variant='outlined'
									sx={{
										margin: 'auto',
										borderRadius: '20px',
										border: '1px solid #888888',
										color: '#747474',
										width: '100%',
										marginTop: '1rem',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '0.625rem',
										'@media (max-width: 370px)': {
											fontSize: '0.625rem',
										},
										'@media (max-width: 480px)': {
											marginTop: '-0.5rem',
										},
									}}
								>
									<Box
										sx={{
											width: '20px',
											'@media (max-width: 370px)': {
												width: '13px',
											},
										}}
										display='flex'
										justifyContent='center'
										alignItems='center'
									>
										<img width='100%' src='/assets/images/otp/google.svg' alt='' />
									</Box>
									<Box>Continue with Google</Box>
								</Button>
							</Box> 
							<Box height={10} />*/}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default GuestLogin;
