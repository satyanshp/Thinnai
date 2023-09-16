import { Box, Button, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { ROUTES } from '../../utils/routing/routes';
import NavBar from '../elements/Explore/NavBar';
import BookingDetails from '../elements/Payment/BookingDetails';
import Note from '../elements/Payment/Note';

const Congratulations = () => {
	const navigate = useNavigate();

	//To Open Search Options
	const [searchState, setSearchState] = useState(false);
	const breakPoint = useMediaQuery('max-width(900px)');
	const [isBookingSuccess, setIsBookingSuccess] = useState<any>(true);
	const [isTransactionFailed, setIsTransactionFailed] = useState<any>(false);

	const openSearch = () => {
		setSearchState(true);
	};

	//To change SearchBar to Searched Details
	const [stateSearched, setStateSearched] = useState(false);
	const searched = () => {
		setSearchState(false);
		setStateSearched(true);
	};

	//Responsive Booking Menu FullScreen
	const [viewBook, setViewBook] = useState(false);

	const onClickHome = () => {
		navigate(ROUTES.EXPLORE);
	};

	const onClickTrack = () => {
		navigate(ROUTES.ENQUIRY);
	};

	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);

	return (
		<Box paddingBottom={7}>
			{!viewBook && (
				<Box height={70} display={{ xs: 'flex', sm: 'none' }} justifyContent='center'>
					<Box width='100%' fontWeight='700' fontSize='1.25rem' display='flex' alignItems='center'>
						<Button>
							<img src='assets/images/detail/arrowBack.svg' alt='' />
						</Button>
					</Box>
				</Box>
			)}
			<Box position='relative' display={{ xl: 'block', md: 'block', sm: 'block', xs: 'none' }}>
				{!viewBook && (
					<NavBar
						stateSearched={stateSearched}
						setStateSearched={setStateSearched}
						searchTabOpen={openSearch}
						state={searchState}
						searchTabClose={() => setSearchState(false)}
					/>
				)}
			</Box>
			<Box
				marginX={{
					xl: '3.75rem',
					md: '3.75rem',
					sm: '1.875rem',
					xs: '1.875rem',
				}}
				display='flex'
				justifyContent={{
					xl: 'space-evenly',
				}}
				flexDirection={{
					xl: 'row',
					md: 'row',
					sm: 'column',
					xs: 'column',
				}}
				marginTop={10}
				alignItems='center'
			>
				<Box
					width={{
						xl: '50%',
						md: '50%',
						sm: '100%',
						xs: '100%',
					}}
				>
					{isTransactionFailed ? (
						<Box>
							<Typography
								color='#B63232'
								fontSize='2.25rem'
								marginBottom='1.286rem'
								textAlign='center'
								fontWeight={600}
								lineHeight='1.4em'
								fontFamily='Montserrat'
							>
								Transaction Failed
							</Typography>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<img
									style={{
										display: 'block',
										maxWidth: '500px',
										width: '100%',
										height: '100%',
									}}
									src='/assets/images/congratulations/failed.svg'
									alt=''
								/>
							</Box>
							<Box
								display={{
									xl: 'none',
									md: 'none',
									sm: 'block',
									xs: 'block',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '1.286rem',
										marginTop: '4.375rem',
									}}
									flexDirection={{
										xl: 'row',
										md: 'row',
										sm: 'row',
										xs: 'column',
									}}
								>
									<Button
										style={{
											background: 'transparent',
											borderRadius: '6px',
											textTransform: 'capitalize',
											fontSize: breakPoint ? '0.875rem' : '1.125rem',
											color: 'black',
											border: '1px solid #000000',
											boxShadow: 'none',
											width: breakPoint ? '155px' : '211px',
											height: breakPoint ? '42px' : '60px',
										}}
										variant='contained'
										onClick={onClickHome}
									>
										Back to Home
									</Button>
									<Button
										onClick={() => setIsBookingSuccess(false)}
										style={{
											background: '#272F3D',
											borderRadius: '6px',
											textTransform: 'capitalize',
											fontSize: breakPoint ? '0.875rem' : '1.125rem',
											boxShadow: 'none',
										}}
										sx={{
											width: breakPoint ? '155px' : '211px',
											height: breakPoint ? '42px' : '60px',
										}}
										variant='contained'
									>
										Try a Again
									</Button>
								</Box>
							</Box>
						</Box>
					) : (
						<Box>
							<Typography
								display={{
									xl: 'block',
									md: 'block',
									sm: 'none',
									xs: 'none',
								}}
								color='#24BA0E'
								fontSize='1.5rem'
								marginBottom='3.125rem'
								textAlign='center'
							>
								Payment Successful !
							</Typography>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<img
									style={{
										display: 'block',
										maxWidth: '500px',
										width: '100%',
										height: '100%',
									}}
									src='/assets/images/congratulations/success.svg'
									alt=''
								/>
							</Box>
							<Box
								display={{
									xl: 'none',
									md: 'none',
									sm: 'block',
									xs: 'block',
								}}
							>
								<Box marginY='1.375rem'>
									<Divider />
								</Box>
								{isBookingSuccess ? (
									<>
										<Typography
											color='#24BA0E'
											fontSize='1.25rem'
											textAlign='center'
											fontFamily='Montserrat'
											lineHeight='1.4em'
										>
											Booking Successful !
										</Typography>
										<Typography
											color='#383838'
											fontSize='0.875rem'
											textAlign='center'
											fontWeight='400'
											lineHeight='1.4em'
											marginTop='1rem'
										>
											Your booking at Urban Patio has been confirmed
										</Typography>
										<Typography
											color='#383838'
											fontSize='0.875rem'
											textAlign='center'
											fontWeight='600'
											marginBottom='1.375rem'
											lineHeight='1.4em'
										>
											We wish you a fulfilling experience!
										</Typography>
									</>
								) : (
									<>
										<Typography
											color='#8F7EF3'
											fontSize='1.25rem'
											textAlign='center'
											fontFamily='Montserrat'
											lineHeight='1.4em'
										>
											Payment Successful !
										</Typography>
										<Typography
											color='#383838'
											fontSize='0.875rem'
											textAlign='center'
											fontWeight={400}
											marginTop='0.625rem'
											marginBottom='1.375rem'
											lineHeight='1.4em'
										>
											Our hosts will get back to you within 24 hours or 1 hour prior to check-in
											time, whichever is earlier
										</Typography>
									</>
								)}
							</Box>
						</Box>
					)}
				</Box>
				{isBookingSuccess ? (
					<Box
						marginX={{
							xl: '3.75rem',
							md: '3.75rem',
							sm: '1.875rem',
							xs: '1.875rem',
						}}
						width={{
							xl: '50%',
							md: '50%',
							sm: '100%',
							xs: '100%',
						}}
					>
						<Box bgcolor='#F2F0DF' paddingX='1.625rem' marginTop='1.313rem' borderRadius='10px'>
							<Typography
								textAlign='center'
								fontSize='0.75rem'
								fontWeight='300'
								color='#7E6001'
								paddingY='0.625rem'
							>
								Booking Id : <span style={{ fontWeight: '400' }}>1254678994</span>
							</Typography>
							<Box display='flex' justifyContent='center' paddingBottom='1.125rem'>
								<img width='100%' src='assets/images/ongoing_booking/mobile-booking.png' alt='' />
							</Box>
							<Stack direction='row' justifyContent='space-between' paddingBottom='0.938rem'>
								<Box>
									<Typography fontSize='0.75rem' fontWeight='300' color='#383838'>
										No. of guests : <span style={{ color: '#6053AE' }}>6</span>
									</Typography>
									<Typography fontSize='0.75rem' fontWeight='300' color='#383838'>
										Guest type : <span style={{ color: '#6053AE' }}>Family</span>
									</Typography>
								</Box>
								<Box>
									<Typography fontSize='0.75rem' fontWeight='300' color='#383838'>
										Time : <span style={{ color: '#6053AE' }}>3:00pm - 6:00pm</span>
									</Typography>
									<Typography fontSize='0.75rem' fontWeight='300' color='#383838'>
										Date : <span style={{ color: '#6053AE' }}>30.06.2022</span>
									</Typography>
								</Box>
							</Stack>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '1.286rem',
								marginTop: '2.5rem',
							}}
							flexDirection={{
								xl: 'row',
								md: 'row',
								sm: 'row',
								xs: 'column',
							}}
						>
							<Button
								style={{
									background: 'transparent',
									borderRadius: '6px',
									textTransform: 'capitalize',
									fontSize: breakPoint ? '0.875rem' : '1.125rem',
									color: 'black',
									border: '1px solid #000000',
									boxShadow: 'none',
									width: breakPoint ? '155px' : '211px',
									height: breakPoint ? '42px' : '60px',
								}}
								variant='contained'
								onClick={onClickHome}
							>
								Back to Home
							</Button>
							<Button
								onClick={() => setIsBookingSuccess(false)}
								style={{
									background: '#272F3D',
									borderRadius: '6px',
									textTransform: 'capitalize',
									fontSize: breakPoint ? '0.875rem' : '1.125rem',
									boxShadow: 'none',
								}}
								sx={{
									width: breakPoint ? '155px' : '211px',
									height: breakPoint ? '42px' : '60px',
								}}
								variant='contained'
							>
								View Booking
							</Button>
						</Box>
					</Box>
				) : (
					<Box
						width={{
							xl: '50%',
							md: '50%',
							sm: '100%',
							xs: '100%',
						}}
					>
						{!isTransactionFailed && (
							<Box
								mb='2.625rem'
								display={{
									xl: 'block',
									md: 'block',
									sm: 'none',
									xs: 'none',
								}}
							>
								<Note />
							</Box>
						)}
						<Box
							display={{
								xl: 'block',
								md: 'block',
								sm: isTransactionFailed ? 'none' : 'block',
								xs: isTransactionFailed ? 'none' : 'block',
							}}
							padding='1.875rem'
							border={{
								xl: '1px solid #000000',
								md: '1px solid #000000',
								sm: '0.5px solid #C4C4C4',
								xs: '0.5px solid #C4C4C4',
							}}
							borderRadius='10px'
						>
							<Box display='flex' justifyContent='space-between' gap={2}>
								{enquiries.map((enquiry: any, index: number) => (
									<Box
										width={{
											xl: '181.23px',
											md: '181.23px',
											sm: '100px',
											xs: '100px',
										}}
										height={{
											xl: '175px',
											md: '175px',
											sm: '103px',
											xs: '103px',
										}}
										overflow='hidden'
										borderRadius='10px'
										key={index}
									>
										<img
											width='100%'
											src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${enquiry.propertyPictures[0]}`}
											alt=''
										/>
									</Box>
								))}
							</Box>
							<Box>
								<BookingDetails />
							</Box>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									gap: '1.286rem',
									marginTop: '2.063rem',
								}}
								flexDirection={{
									xl: 'row',
									md: 'row',
									sm: 'row',
									xs: 'column',
								}}
							>
								<Button
									style={{
										background: 'transparent',
										borderRadius: '6px',
										textTransform: 'capitalize',
										fontSize: breakPoint ? '0.875rem' : '1.125rem',
										color: 'black',
										border: '1px solid #000000',
										boxShadow: 'none',
										width: breakPoint ? '155px' : '211px',
										height: breakPoint ? '42px' : '60px',
									}}
									variant='contained'
									onClick={onClickHome}
								>
									Back to Home
								</Button>
								{isBookingSuccess ? (
									<Button
										onClick={() => setIsBookingSuccess(false)}
										style={{
											background: '#272F3D',
											borderRadius: '6px',
											textTransform: 'capitalize',
											fontSize: breakPoint ? '0.875rem' : '1.125rem',
											boxShadow: 'none',
										}}
										sx={{
											width: breakPoint ? '155px' : '211px',
											height: breakPoint ? '42px' : '60px',
										}}
										variant='contained'
									>
										View Booking
									</Button>
								) : isTransactionFailed ? (
									<Button
										style={{
											background: '#272F3D',
											borderRadius: '6px',
											textTransform: 'capitalize',
											fontSize: breakPoint ? '0.875rem' : '1.125rem',
											boxShadow: 'none',
										}}
										sx={{
											width: breakPoint ? '155px' : '211px',
											height: breakPoint ? '42px' : '60px',
										}}
										variant='contained'
									>
										Try Again
									</Button>
								) : (
									<Button
										onClick={() => {
											onClickTrack();
											setIsBookingSuccess(true);
										}}
										style={{
											background: '#272F3D',
											borderRadius: '6px',
											textTransform: 'capitalize',
											fontSize: breakPoint ? '0.875rem' : '1.125rem',
											boxShadow: 'none',
										}}
										sx={{
											width: breakPoint ? '155px' : '211px',
											height: breakPoint ? '42px' : '60px',
										}}
										variant='contained'
									>
										Track Inquiry
									</Button>
								)}
							</Box>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Congratulations;
