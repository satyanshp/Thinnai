import GroupsIcon from '@mui/icons-material/Groups';
import { Box, Button, Divider, Paper, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store';
import { timeArray } from '../../../utils/consts';
import { ROUTES } from '../../../utils/routing/routes';
import InquiryCard from '../../elements/BookingTracking/SummaryCards/InquiryCard';
import TimeCarousel from '../../elements/Common/TimeCarousel';
import Counter from '../../elements/Explore/Counter';
import Loading from '../../elements/Loading/Loading';
import BookingDetails from '../../elements/Payment/BookingDetails';
import DetailPicture from '../../elements/Payment/DetailPicture';
// import TotalAmount from '../../elements/Payment/TotalAmount';

const EnquiryStatus = () => {
	// const navigate = useNavigate();

	const CounterButton = styled(Paper)(({ theme }) => ({
		width: '1rem',
		height: '1rem',
		borderRadius: '50%',
		border: '1px solid black',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 0.375rem',
		cursor: 'pointer',
	}));

	const bookingLoading = useSelector<RootState, any>(state => state.booking.loading);
	const enquiryStatus = useSelector<RootState, any>(state => state.booking.enquiryStatus);

	const [showChangesMenu, setShowChangesMenu] = useState(false);
	const handleChangesMenu = () => {
		setShowChangesMenu(!showChangesMenu);
	};

	const [guestCount, setGuestCount] = useState(1);

	const [time, setTime] = useState(60);
	const increase = () => {
		setTime(time + 10);
	};
	const decrease = () => {
		if (time > 60) {
			setTime(time - 10);
		}
	};
	const [timeShown, setTimeShown] = useState('12:00 AM');
	const [timeIndex, setTimeIndex] = useState(0);
	const getData = (i: number) => {
		const data = timeArray[i];
		setTimeShown(data.time);
	};
	useEffect(() => {
		if (timeIndex === null) {
			let date = new Date(new Date().setMinutes(0, 0, 0)).toLocaleTimeString('default', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: true,
			});
			date = date.replace('00:', '12:');
			const indexOfCurrentTime = timeArray.findIndex(
				timeElement => timeElement.time === date.toUpperCase()
			);
			setTimeShown(timeArray[indexOfCurrentTime].time);
			setTimeIndex(indexOfCurrentTime);
			return;
		}
		const time = timeArray[timeIndex];
		setTimeShown(time.time);
	}, [timeIndex]);

	const [selected, setSelected] = useState<number>(0);
	const handleSelected = (i: number) => {
		setSelected(i);
	};

	useEffect(() => {
		if (showChangesMenu) {
			setGuestCount(enquiryStatus[selected].guestCount);
			const diff =
				new Date(enquiryStatus[selected].bookingTo).getTime() -
				new Date(enquiryStatus[selected].bookingFrom).getTime();
			const duration = diff / 1000 / 60;
			setTime(duration);
			const time = new Date(enquiryStatus[selected].bookingFrom).toLocaleTimeString('default', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: true,
			});
			setTimeShown(time);
			const index = timeArray.findIndex(item => item.time.toLowerCase() == time);
			setTimeIndex(index);
		}
	}, [enquiryStatus, selected, showChangesMenu, timeArray]);

	useEffect(() => {
		if (enquiryStatus.length === 0) {
			// navigate(ROUTES.EXPLORE);
		}
	}, []);

	return (
		<Box
			marginBottom={{
				xl: 0,
				md: 0,
				sm: '8rem',
				xs: '8rem',
			}}
		>
			{bookingLoading && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{' '}
					<Box
						width={{
							md: '30%',
							sm: '40%',
							xs: '60%',
						}}
					>
						<Loading />
					</Box>
				</Box>
			)}
			{!bookingLoading && (
				<Box
					marginTop={7}
					marginX={{
						xl: '3.75rem',
						md: '3.75rem',
						sm: '1.875rem',
						xs: '1.875rem',
					}}
				>
					<Box
						display='flex'
						flexDirection={{ md: 'row', xs: 'column' }}
						justifyContent='space-between'
						gap={10}
					>
						<Box
							width={{
								xl: '65%',
								md: '65%',
								sm: '100%',
								xs: '100%',
							}}
						>
							<Box marginBottom={5}>
								<Typography variant='h5'>Inquiry Status</Typography>
							</Box>
							<Box>
								{enquiryStatus.map((card: any) => (
									<InquiryCard key={card._id} card={card} />
								))}
							</Box>
						</Box>
						<Box
							display={{
								xl: 'block',
								md: 'block',
								sm: 'block',
								xs: 'block',
							}}
							width={{
								xl: '50%',
								md: '50%',
								sm: '100%',
								xs: '100%',
							}}
						>
							<Box
								border='1px solid #C5C5C5'
								boxShadow='2px 4px 8px 7px rgba(0, 0, 0, 0.04)'
								borderRadius='5%'
								height='fit-content'
								paddingBottom='1.875rem'
							>
								<DetailPicture selected={selected} handleSelected={handleSelected} />
								<Box
									padding={{
										xl: '0px 1.25rem 0px 1.25rem',
										md: '0px',
										sm: '0px',
										xs: '0px',
									}}
									marginX={'0px'}
								>
									{showChangesMenu && (
										<>
											<Box display={{ md: 'block', xs: 'block' }}>
												<Box className='book__header'>Select Group Details</Box>
												<Box height={15} />
												<Box
													display='flex'
													width='100%'
													justifyContent='center'
													padding='0px 0px 0px 1.25rem'
												>
													<Box display='flex' flexDirection='column' justifyContent='space-between'>
														<Box
															display='flex'
															alignItems='center'
															sx={{
																fontWeight: '400',
																fontSize: '0.875rem',
																lineHeight: '1.4em',
															}}
														>
															<GroupsIcon sx={{ fontSize: '1.25rem', textAlign: 'center' }} />
															&nbsp; No. of Guests
														</Box>
														<Box height={6} />
														<Counter maxValue={enquiryStatus[selected].property.maxGuestCount} />
													</Box>
												</Box>
											</Box>
											<Box height={25} />
											<Box>
												<Box className='book__header'>Select Timing</Box>
												<Box height={20} />
												<Box width='85%' margin='auto'>
													<Box width='100%' display='flex' justifyContent='space-around'>
														<Box width='50%'>
															<Box
																display='flex'
																width='80%'
																flexDirection='column'
																alignItems='center'
															>
																<Box className='book__timing-head'>TIME</Box>
																<Box className='book__timing-p'>{timeShown}</Box>
															</Box>
														</Box>
														<Box height='auto' width='1.5px' sx={{ background: '#DEDEDE' }} />
														<Box
															display='flex'
															width='50%'
															flexDirection='column'
															alignItems='center'
														>
															<Box className='book__timing-head'>DURATION</Box>
															<Box display='flex' alignItems='center'>
																<CounterButton onClick={decrease}>-</CounterButton>
																<Box className='book__timing-p'>{time} min</Box>
																<CounterButton onClick={increase}>+</CounterButton>
															</Box>
														</Box>
													</Box>
													<Box height={20} />
													<Divider />
													<Box height={20} />
													<Box>
														<Box display='flex' justifyContent='center'>
															<img
																height={22}
																src='/assets/images/detail/pointingArrow.svg'
																alt=''
															/>
														</Box>
														<Box
															height={3}
															sx={{ background: 'radial-gradient(#8F7EF3 , #8F7EF300);' }}
														/>
														<Box height={3} width='100%' />
														<Box width={{ md: '99.5%', xs: '99.5%', sm: '99%' }}>
															{timeIndex != null && (
																<TimeCarousel
																	data={timeArray}
																	onClick={i => getData(i)}
																	setTimeOnSlide={setTimeIndex}
																	currentIndex={timeIndex}
																/>
															)}
														</Box>
													</Box>
												</Box>
											</Box>
										</>
									)}
									{!showChangesMenu && <BookingDetails handleChangesMenu={handleChangesMenu} />}
								</Box>
								{showChangesMenu && (
									<Box
										display={{ md: 'block', xs: 'block' }}
										padding={{
											xl: '0px 1.25rem 0px 1.25rem',
											md: '0px',
											sm: '0px',
											xs: '0px',
										}}
										marginX={'0px'}
									>
										<Box height={20} width='100%' />
										<Button
											variant='contained'
											style={{
												width: '100%',
												background: '#262626',
												textTransform: 'none',
												fontFamily: 'Montserrat',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '1.1rem',
												lineHeight: '1.4em',
												color: '#FFFFFF',
											}}
											//   onClick={onClick}
											onClick={handleChangesMenu}
										>
											Save Changes
										</Button>
									</Box>
								)}
								{!showChangesMenu && (
									<>
										<Box
											marginTop='1.25rem'
											padding={{
												xl: '0px 1.25rem 0px 1.25rem',
												md: '0px 1.25rem 0px 1.25rem',
												sm: '0px 0px',
												xs: '0px 0px',
											}}
										>
											<Divider />
										</Box>
										<Box
											margin={{
												xl: '0px',
												md: '0px 0px',
												sm: '0px 1.25rem',
												xs: '0px 1.25rem',
											}}
										>
											{/* <TotalAmount /> */}
										</Box>
									</>
								)}
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default EnquiryStatus;
