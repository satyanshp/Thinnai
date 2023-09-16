import GroupsIcon from '@mui/icons-material/Groups';
import { Grid, TextareaAutosize, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAlert } from '../../../actions/alert';
import {
	addEnquiry,
	setAddMoreEnquiry,
	setLoadEnquiryData,
	updateEnquiry,
} from '../../../actions/enquiry';
import { setBookingDate } from '../../../actions/search';
import { RootState } from '../../../store';
import { ALERT_TYPE, S3_BASE, timeArray } from '../../../utils/consts';
import { ROUTES } from '../../../utils/routing/routes';
import '../../styles/Book/Book.scss';
import TimeCarousel from '../Common/TimeCarousel';
import Counter from '../Explore/Counter';
import DatesCarousel from '../Explore/DatesCarousel';
import BottomButtonPaymentSummary from './mobileSubElements/BottomButtonPaymentSummary';
import PropertySummary from './mobileSubElements/PropertySummary';

interface bookProps {
	responsiveConditionalData?: boolean;
	dataFromDetails?: boolean;
	setViewBookFromDetails?: (value: boolean) => void;
}

const Book = ({
	responsiveConditionalData = false,
	dataFromDetails,
	setViewBookFromDetails,
}: bookProps) => {
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

	const dispatch: Dispatch<any> = useDispatch();
	const navigate = useNavigate();

	const loadEnquiryData = useSelector<RootState, Boolean>(state => state.enquiry.loadEnquiryData);
	const addMoreEnquiry = useSelector<RootState, Boolean>(state => state.enquiry.addMoreEnquiry);
	const enquiryId = useSelector<RootState, number>(state => state.enquiry.enquiryId);
	const enquiry = useSelector<RootState, any>(state =>
		state.enquiry.enquiries.find((enquiry: any) => enquiry.id === enquiryId)
	);
	const isAuthenticated = useSelector<RootState, any>(state => state.guestAuth.isAuthenticated);

	const property = useSelector<RootState, any>(state => state.details.property);

	const bookingDate = useSelector<RootState, Date>(state => state.search.bookingDate);

	const cleaningChargeCake = useSelector<RootState, number>(
		state => state.appSettings.cleaningChargeCake
	);
	const cleaningTableDecor = useSelector<RootState, number>(
		state => state.appSettings.cleaningTableDecor
	);
	const cleaningFloorDecor = useSelector<RootState, number>(
		state => state.appSettings.cleaningFloorDecor
	);

	const [guestCount, setGuestCount] = useState<number>(1);
	const guestCountStore = useSelector<RootState, number>(state => state.search.guestCount);
	useEffect(() => {
		setGuestCount(guestCountStore);
	}, [guestCountStore]);

	const [time, setTime] = useState(60);

	const increase = () => {
		setTime(time + 30);
	};
	const decrease = () => {
		if (time > 60) {
			setTime(time - 30);
		}
	};

	const [hostMsg, setHostMsg] = useState<string>();

	const [timeShown, setTimeShown] = useState(
		new Date(new Date().setMinutes(0, 0, 0)).toLocaleTimeString('default', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		})
	);
	const [timeIndex, setTimeIndex] = useState<number | null>(null);
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

	const [secondState, setSecondState] = useState(false);
	const [thirdState, setThirdState] = useState(false);
	const [state5, setState5] = useState<boolean>(true);
	const [state6, setState6] = useState<boolean>(false);
	const [state7, setState7] = useState<boolean>(false);
	const [state8, setState8] = useState<boolean>(false);

	const [cutlery, setCutlery] = useState<boolean>(false);
	const onClickCt = (value: boolean) => {
		setCutlery(value);
	};

	const data1 = [
		{
			text: 'Alcohol',
			pic: '/assets/images/detail/alcohol.svg',
		},
		{
			text: 'Hookah',
			pic: '/assets/images/detail/hooka.svg',
		},
	];

	const data2 = [
		{
			text: 'Cake',
			pic: '/assets/images/detail/cake.svg',
		},
		{
			text: 'Table Decor',
			pic: '/assets/images/detail/table.svg',
		},
		{
			text: 'Floor Decor',
			pic: '/assets/images/detail/belun.svg',
		},
	];

	const data3 = [
		{
			text: 'Cutlery Required',
			pic: '/assets/images/plate-1.png',
			value: true,
		},
		{
			text: 'Cutlery Not Required',
			pic: '/assets/images/plate-1.png',
			value: false,
		},
	];

	const [valueAddItem1, setValueAddItem1] = useState<string[]>([]);
	const [valueAddItem2, setValueAddItem2] = useState<string[]>([]);
	const [addonServicesSelected, setAddonServicesSelected] = useState<string[]>([]);

	const onClickAa1 = (index: number) => {
		if (valueAddItem1.includes(data1[index].text)) {
			setValueAddItem1([...valueAddItem1.filter((item: string) => item !== data1[index].text)]);
		} else {
			setValueAddItem1([...valueAddItem1, data1[index].text]);
		}
	};

	const onClickAa2 = (index: number) => {
		if (valueAddItem2.includes(data2[index].text)) {
			setValueAddItem2([...valueAddItem2.filter((item: string) => item !== data2[index].text)]);
		} else {
			setValueAddItem2([...valueAddItem2, data2[index].text]);
		}
	};

	const onAddAddonService = (addonId: string) => {
		if (addonServicesSelected.includes(addonId)) {
			setAddonServicesSelected([
				...addonServicesSelected.filter((item: string) => item !== addonId),
			]);
		} else {
			setAddonServicesSelected([...addonServicesSelected, addonId]);
		}
	};

	const [groupType, setGroupType] = useState('Friends');

	const handleChange = (event: SelectChangeEvent) => {
		setGroupType(event.target.value as string);
	};

	const hourSchedule = useSelector<RootState, any>(state => state.schedule.unavailableDatesByHours);

	const [startTime, setStartTime] = useState<Date>();

	useEffect(() => {
		const StartTime24 = new Date('01/01/2001 ' + timeShown).toLocaleTimeString('default', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		});
		const date = new Date(bookingDate);
		date.setHours(Number(StartTime24.split(':')[0]));
		date.setMinutes(Number(StartTime24.split(':')[1]));
		setStartTime(date);
	}, [bookingDate, timeShown]);

	const [endTime, setEndTime] = useState<Date>();

	useEffect(() => {
		const date = new Date(startTime as Date);
		date.setMinutes(date.getMinutes() + time);
		setEndTime(date);
	}, [startTime, time]);

	const [amount, setAmount] = useState<number>(0);
	const offers = [
		{
			offerName: 'For Gala Hours',
			offerDescription: 'Most HAPPENING HOURS of the Day',
			offerImg: '/assets/images/detail/fire.svg',
			startTimeMtoF: '2022-12-20T12:01:00.000Z',
			endTimeMtoF: '2022-12-20T23:59:00.000Z',
			startTimeStoS: '2022-12-20T00:01:00.000Z',
			endTimeStoS: '2022-12-20T23:11:00.000Z',
		},
		{
			offerName: 'For Joy Hours',
			offerDescription: 'Exclusive DISCOUNTS and OFFERS',
			offerImg: '/assets/images/detail/sale.svg',
			startTimeMtoF: '2022-12-20T00:00:00.000Z',
			endTimeMtoF: '2022-12-20T12:00:00.000Z',
			startTimeStoS: '2022-12-20T12:00:00.000Z',
			endTimeStoS: '2022-12-20T00:00:00.000Z',
		},
	];
	const finalAmount = (
		bookingDate: Date,
		startTime: Date,
		duration: number,
		guestCount: number,
		valueAddItem1: string[],
		valueAddItem2: string[]
	) => {
		const alcoholStatus = valueAddItem1.length > 0 ? 'withAlcohol' : 'withoutAlcohol';

		let timeCategory: string = '';
		if (duration === 60)
			timeCategory = alcoholStatus === 'withAlcohol' ? 'oneAndHalfHour' : 'oneHour';
		else if (duration > 60 && duration <= 90) timeCategory = 'oneAndHalfHour';
		else if (duration > 90 && duration <= 150) timeCategory = 'twoAndHalfHour';
		else if (duration > 150 && duration <= 210) timeCategory = 'threeAndHalfHour';
		else if (duration > 210)
			timeCategory = alcoholStatus === 'withAlcohol' ? 'fourHour' : 'threeAndHalfHour';

		let price = 0;

		const isWeekend = new Date(bookingDate).getDay() === 0 || new Date(bookingDate).getDay() === 6;
		let offerType: string = '';
		if (
			!isWeekend &&
			new Date(startTime).getUTCHours() >= new Date(offers[0].startTimeMtoF).getUTCHours() &&
			new Date(startTime).getUTCHours() <= new Date(offers[0].endTimeMtoF).getUTCHours()
		) {
			offerType = 'joyHours';
		} else if (
			!isWeekend &&
			new Date(startTime).getUTCHours() >= new Date(offers[1].startTimeMtoF).getUTCHours() &&
			new Date(startTime).getUTCHours() <= new Date(offers[1].endTimeMtoF).getUTCHours()
		) {
			offerType = 'galaHours';
		} else if (
			isWeekend &&
			new Date(startTime).getUTCHours() >= new Date(offers[0].startTimeStoS).getUTCHours() &&
			new Date(startTime).getUTCHours() <= new Date(offers[0].endTimeStoS).getUTCHours()
		) {
			offerType = 'joyHours';
		} else if (
			isWeekend &&
			new Date(startTime).getUTCHours() >= new Date(offers[1].startTimeStoS).getUTCHours() &&
			new Date(startTime).getUTCHours() <= new Date(offers[1].endTimeStoS).getUTCHours()
		) {
			offerType = 'galaHours';
		}

		let guestCountCategory = Math.ceil(Number(guestCount) / 2) - 1;

		if (offerType === 'joyHours') {
			price = property.pricing.joyHour[guestCountCategory][alcoholStatus][timeCategory];
		} else if (offerType === 'galaHours') {
			price = property.pricing?.galaHour[guestCountCategory][alcoholStatus][timeCategory];
		}
		//Todo: Get from app Settings
		if (valueAddItem2.includes('Cake')) price += cleaningChargeCake;
		if (valueAddItem2.includes('Table Decor')) price += cleaningTableDecor;
		if (valueAddItem2.includes('Floor Decor')) price += cleaningFloorDecor;

		addonServicesSelected.forEach(addOnService => {
			price += property.addOnServices.find(
				(serviceInternal: any) => addOnService === serviceInternal.addonServiceId
			).addOnPrice;
		});

		if (!cutlery) {
			price -= price * 0.05;
		}

		setAmount(Number(price.toFixed(2)));

		return Number(price.toFixed(2));
	};

	useEffect(() => {
		const price = finalAmount(
			bookingDate,
			startTime as Date,
			time,
			guestCount,
			valueAddItem1,
			valueAddItem2
		);
		setAmount(price);
	}, [
		bookingDate,
		startTime,
		guestCount,
		time,
		valueAddItem1,
		valueAddItem2,
		cutlery,
		addonServicesSelected,
	]);

	const onClickReserve = () => {
		let enquiry: any = {
			propertyId: property._id,
			propertyName: property.propertyName,
			propertyPictures: property.propertyPictures,
			guestCount: guestCount,
			groupType: groupType,
			city: property.city,
			state: property.state,
			bookingDate: bookingDate,
			startTime: startTime,
			endTime: endTime,
			host: property.userData.user._id,
			duration: time,
			timeIndex: timeIndex,
			cutlery: cutlery,
			additions1: valueAddItem1,
			additions2: valueAddItem2,
			addOnServicesRequested: addonServicesSelected,
			amount: amount,
			hostMsg: hostMsg,
		};
		if (loadEnquiryData) {
			dispatch(setLoadEnquiryData({ loadEnquiryData: false }));
			enquiry.id = enquiryId;
			dispatch(updateEnquiry(enquiryId, enquiry, () => navigate(ROUTES.ENQUIRY_SUMMARY)));
		} else {
			if (addMoreEnquiry) {
				dispatch(setAddMoreEnquiry({ addMoreEnquiry: false }));
			}
			enquiry.id = Math.floor(Math.random() * 1000000000);
			dispatch(addEnquiry(enquiry, () => navigate(ROUTES.ENQUIRY_SUMMARY)));
		}
	};

	useEffect(() => {
		if (loadEnquiryData || addMoreEnquiry) {
			setTime(enquiry.duration);
			setTimeIndex(enquiry.timeIndex);
			setCutlery(enquiry.cutlery);
			setValueAddItem1(enquiry.additions1);
			setValueAddItem2(enquiry.additions2);
			setGuestCount(enquiry.guestCount);
			setGroupType(enquiry.groupType);
			setHostMsg(enquiry.hostMsg);
			if (enquiry.propertyId === property._id) {
				setAddonServicesSelected(enquiry.addOnServicesRequested);
			}
			dispatch(setBookingDate({ bookingDate: enquiry.bookingDate }));
		} else {
			setGuestCount(guestCountStore);
			/* setSelect(groupTypeStore); */
		}
		if (addMoreEnquiry) {
			setSecondState(true);
			setThirdState(true);
		}
	}, []);

	const [isAvailable, setIsAvailable] = useState(true);
	useEffect(() => {
		if (startTime) {
			hourSchedule.forEach((hour: any) => {
				if (
					startTime!.getTime() > hour.unavailableFrom.getTime() &&
					startTime!.getTime() < hour.unavailableTo.getTime()
				) {
					setAlert('Host Unavailable during this period', ALERT_TYPE.INFO);
					setIsAvailable(false);
				} else {
					setIsAvailable(true);
				}
			});
		}
	}, [hourSchedule, startTime]);

	const handleNextOnPhone = () => {
		if (secondState && thirdState && groupType) {
			onClickReserve();
		} else if (secondState && state5) {
			setState6(true);
			setState5(false);
		} else if (secondState && state6) {
			setState7(true);
			setState6(false);
		} else if (secondState && state7) {
			setState7(false);
			setState8(true);
		} else if (secondState && state8) {
			setState8(false);
			setThirdState(true);
		} else {
			setSecondState(true);
		}
	};

	// useNavBlocker({
	// 	enabled: secondState || thirdState,
	// 	onBlock: navigation => {
	// 		if (thirdState) {
	// 			return navigation.confirm();
	// 		}
	// 		if (secondState && thirdState && groupType) {
	// 			setThirdState(false);
	// 		} else if (secondState && state5) {
	// 			setSecondState(false);
	// 		} else if (secondState && state6) {
	// 			setState5(true);
	// 			setState6(false);
	// 		} else if (secondState && state7) {
	// 			setState7(false);
	// 			setState6(true);
	// 		} else if (secondState && state8) {
	// 			setState7(true);
	// 			setState8(false);
	// 		} else {
	// 			setSecondState(true);
	// 		}
	// 	},
	// });

	return (
		<>
			<Box
				padding={{
					xl: '1.875rem 2.188rem',
					md: '1.25rem 1.563rem',
					sm: '3.063rem 3.063rem',
					xs: '1.25rem 1.563rem',
				}}
				width={{ xl: '100%', md: '100%', xs: 'auto' }}
				margin='auto'
				borderRadius={{ md: '20px', xs: '0px' }}
				sx={{
					background: '#FFFFFF',
					border: '1px solid #C5C5C5',
					boxShadow: '2px 4px 8px 7px rgba(0, 0, 0, 0.04)',
				}}
			>
				{secondState ? (
					thirdState ? (
						<Box>
							<Box display='flex' justifyContent='flex-end'>
								<Box
									sx={{ background: '#EFECFF' }}
									borderRadius='164px'
									width='fit-content'
									padding='5px 1.25rem'
									display={{ md: 'block', xs: 'none' }}
								>
									<Box
										fontFamily='Open Sans'
										fontStyle='normal'
										fontWeight='400'
										fontSize='0.9rem'
										lineHeight='1.11em'
										display='flex'
										alignItems='center'
										textAlign='center'
										letterSpacing='0.015em'
										color='#6053AE'
									>
										{property.directBooking === true ? 'Direct Booking' : 'On Request Booking'}
									</Box>
								</Box>
							</Box>
							{/* Mobile Only */}
							<Box height={{ sm: 40, md: 0 }} />
							<Box display={{ xs: 'block', md: 'none' }}>
								<Box
									display='flex'
									justifyContent='space-between'
									borderRadius='6px'
									border='1px solid #DEDEDE'
									height='42px'
									alignItems='center'
									zIndex='2'
									position='relative'
									sx={{ background: '#FFFFFF' }}
								>
									<Box
										width='100%'
										height='100%'
										fontWeight='700'
										fontSize='1.25rem'
										display='flex'
										alignItems='center'
									>
										<Box height='100%'>
											<Button
												style={{ height: '100%' }}
												onClick={() => setViewBookFromDetails?.(false)}
											>
												<img src='/assets/images/detail/arrowBack.svg' alt='' />
											</Button>
										</Box>
										<Box>
											<Box
												sx={{
													fontWeight: '600',
													fontSize: '0.75rem',
													lineHeight: '16px',
												}}
											>
												{new Date(bookingDate.toString()).toLocaleDateString('default', {
													month: 'long',
													day: 'numeric',
												})}
											</Box>
											<Box height={2} />
											<Box
												color='#827B7B'
												sx={{
													fontWeight: '400',
													fontSize: '0.625rem',
													lineHeight: '14px',
												}}
											>
												{guestCount !== 0 ? `${guestCount} guests .` : ''} {groupType}
											</Box>
										</Box>
									</Box>
								</Box>

								<Box height={16} />
								<PropertySummary
									propertyName={property.propertyName}
									propertyAddressString={`${property.houseNumber} ${property.tower} ${property.street}, ${property.city}
								, ${property.state}`}
									propertyThumbnail={property.propertyThumbnails[0]}
								/>
							</Box>

							{/* RESPONSIVE MENU___________________________________________________________RESPONSIVE MENU */}
							<Box height={!dataFromDetails ? '20px' : '0px'} />
							<Box
								display={{ md: 'flex', xs: 'none' }}
								justifyContent='space-between'
								padding='1.25rem'
								sx={{
									border: '1px solid #000000',
									filter: 'drop-shadow(3px 4px 8px rgba(0, 0, 0, 0.25))',
									borderRadius: '6px',
								}}
							>
								<Box width='100%'>
									<Box display='flex' justifyContent='space-between' alignItems='center'>
										<Box className='book__header' lineHeight='1.11em'>
											Book Your Thinnai
										</Box>
										<Box
											sx={{
												fontFamily: 'Inter',
												fontWeight: '600',
												fontSize: { xs: '1.613rem', md: '1.6vw', xl: '1.2vw' },
												lineHeight: '20px',
												color: '#000000',
											}}
										>
											₹ {amount}
										</Box>
									</Box>
									<Box display='flex' justifyContent='space-between'>
										<Box
											sx={{
												fontFamily: 'Open Sans',
												fontWeight: '400',
												fontSize: '0.6rem',
												lineHeight: '27px',
											}}
										>
											{new Date(bookingDate as Date).toLocaleString('default', {
												day: 'numeric',
												month: 'short',
											})}{' '}
											|{' '}
											{new Date(startTime as Date).toLocaleTimeString('default', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											})}{' '}
											-{' '}
											{new Date(endTime as Date).toLocaleTimeString('default', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											})}
										</Box>
										<Box width='170px' display='flex' justifyContent='flex-end'>
											<Box>
												<Box
													sx={{
														fontFamily: 'Open Sans',
														fontWeight: '400',
														fontSize: '0.6rem',
														lineHeight: '27px',
													}}
												>
													<span style={{ textDecoration: 'line-through' }}>
														₹ {(amount + amount * 0.2).toFixed(2)}{' '}
													</span>
													<span style={{ color: '#D23535' }}> ( 20% off )</span>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
							{/* Message to Host */}
							<Box marginTop='3.125rem'>
								<Box className='book__header' fontFamily='Montserrat'>
									Message to Host
								</Box>
								<Typography
									marginBottom='0.938rem'
									fontSize='0.938rem'
									fontWeight={400}
									lineHeight='1.3em'
									fontFamily='Open Sans'
									color='#707B8E'
								>
									Anything that you would like the host to know
								</Typography>
								<TextareaAutosize
									style={{
										// width: '95%',
										minWidth: '-webkit-fill-available',
										height: '20vh',
										padding: '0.938rem',
										fontSize: '1.125rem',
										border: '1px solid #DFDAFF',
										borderRadius: '6px',
									}}
									autoFocus
									defaultValue={hostMsg}
									onChange={(e: any) => setHostMsg(e.target.value)}
									placeholder='Leave a message!'
								></TextareaAutosize>
							</Box>
							<Box height={{ xs: 30, md: 0 }} />
							<Box height={60} />
							<Box display={{ md: 'block', xs: 'none' }}>
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
										lineHeight: '29px',
										color: '#FFFFFF',
									}}
									onClick={() => {
										if (groupType) {
											onClickReserve();
										}
									}}
								>
									Reserve Your slot
								</Button>
							</Box>
							<Box height={{ md: 30, xs: 64 }} />
						</Box>
					) : (
						<Box>
							<Box display='flex' justifyContent='flex-end'>
								<Box
									sx={{ background: '#EFECFF' }}
									borderRadius='164px'
									width='fit-content'
									padding='5px 1.25rem'
									display={{ md: 'block', xs: 'none' }}
								>
									<Box
										fontFamily='Open Sans'
										fontStyle='normal'
										fontWeight='400'
										fontSize='0.9rem'
										lineHeight='1.11em'
										display='flex'
										alignItems='center'
										textAlign='center'
										letterSpacing='0.015em'
										color='#6053AE'
									>
										{property.directBooking === true ? 'Direct Booking' : 'On Request Booking'}
									</Box>
								</Box>
							</Box>
							{/* RESPONSIVE MENU___________________________________________________________RESPONSIVE MENU */}
							<Box height={{ sm: 40, md: 0 }} />
							<Box display={{ xs: 'block', md: 'none' }}>
								<Box
									display='flex'
									justifyContent='space-between'
									borderRadius='6px'
									border='1px solid #DEDEDE'
									height='42px'
									alignItems='center'
									zIndex='2'
									position='relative'
									sx={{ background: '#FFFFFF' }}
								>
									<Box
										width='100%'
										height='100%'
										fontWeight='700'
										fontSize='1.25rem'
										display='flex'
										alignItems='center'
									>
										<Box height='100%'>
											<Button
												style={{ height: '100%' }}
												onClick={() => setViewBookFromDetails?.(false)}
											>
												<img src='/assets/images/detail/arrowBack.svg' alt='' />
											</Button>
										</Box>
										<Box>
											<Box
												sx={{
													fontWeight: '600',
													fontSize: '0.75rem',
													lineHeight: '16px',
												}}
											>
												{new Date(bookingDate.toString()).toLocaleDateString('default', {
													month: 'long',
													day: 'numeric',
												})}
											</Box>
											<Box height={2} />
											<Box
												color='#827B7B'
												sx={{
													fontWeight: '400',
													fontSize: '0.625rem',
													lineHeight: '14px',
												}}
											>
												{guestCount !== 0 ? `${guestCount} guests .` : ''} {groupType}
											</Box>
										</Box>
									</Box>
								</Box>

								<Box height={16} />
								<PropertySummary
									propertyName={property.propertyName}
									propertyAddressString={`${property.houseNumber} ${property.tower} ${property.street}, ${property.city}
								, ${property.state}`}
									propertyThumbnail={property.propertyThumbnails[0]}
								/>
							</Box>
							{/* RESPONSIVE MENU___________________________________________________________RESPONSIVE MENU */}
							<Box height={!dataFromDetails ? '20px' : '0px'} />
							<Box
								display={{ md: 'flex', xs: 'none' }}
								justifyContent='space-between'
								padding='1.25rem'
								alignItems='center'
								sx={{
									border: '1px solid #000000',
									filter: 'drop-shadow(3px 4px 8px rgba(0, 0, 0, 0.25))',
									borderRadius: '6px',
								}}
							>
								<Box
									width={{
										xs: '100%',
									}}
								>
									<Box className='book__header' lineHeight='1.3em'>
										Book Your Thinnai
									</Box>
									<Box
										sx={{
											fontFamily: 'Open Sans',
											fontWeight: '400',
											// fontSize: '0.6rem',
											fontSize: '0.6rem',
											lineHeight: '27px',
										}}
									>
										{new Date(bookingDate as Date).toLocaleString('default', {
											day: 'numeric',
											month: 'short',
										})}{' '}
										|{' '}
										{new Date(startTime as Date).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}{' '}
										-{' '}
										{new Date(endTime as Date).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}
									</Box>
								</Box>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='flex-end'
									gap='2px'
									width='135px'
								>
									<Box
										sx={{
											fontFamily: 'Inter',
											fontWeight: '600',
											fontSize: { xs: '1.613rem', md: '1.6vw', xl: '1.2vw' },
											lineHeight: '20px',
											color: '#000000',
										}}
									>
										₹ {amount}
									</Box>
									<Box>
										<Box
											sx={{
												fontFamily: 'Open Sans',
												fontWeight: '400',
												// fontSize: '0.6rem',
												fontSize: '0.6rem',
												lineHeight: '27px',
												display: 'inline-block',
												whiteSpace: 'wrap',
											}}
										>
											<span style={{ textDecoration: 'line-through' }}>
												₹ {(amount + amount * 0.2).toFixed(2)}{' '}
											</span>
											<span style={{ color: '#D23535' }}> ( 20% off )</span>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box height={{ md: 30, xs: 0 }} />
							{state5 && (
								<>
									<Box display={{ md: 'block' }}>
										<Box className='book__header'>Select Timing</Box>
										<Box height={20} />
										<Box
											width={{
												xl: '85%',
												md: '100%',
												xs: '85%',
											}}
											margin='auto'
										>
											<Box width='100%' display='flex' justifyContent='space-around'>
												<Box
													width={{
														xl: '50%',
														md: '45%',
														xs: '50%',
													}}
												>
													<Box
														display='flex'
														width='80%'
														flexDirection='column'
														alignItems='center'
													>
														<Box className='book__timing-head'>TIME</Box>
														<Box
															className='book__timing-p'
															sx={{ color: isAvailable ? '#000000' : '#FF0000' }}
														>
															{timeShown}
														</Box>
													</Box>
												</Box>
												<Box height='auto' width='1.5px' sx={{ background: '#DEDEDE' }} />
												<Box
													display='flex'
													width={{
														xl: '50%',
														md: '55%',
														xs: '50%',
													}}
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
													<img height={22} src='/assets/images/detail/pointingArrow.svg' alt='' />
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
									<Box height={30} />
									<Box display={{ md: 'block', xs: 'none' }}>
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
												lineHeight: '29px',
												color: '#FFFFFF',
											}}
											// onClick={onClickReserve}
											onClick={() => {
												if (groupType) {
													setState6(true);
													setState5(false);
												}
											}}
										>
											Next
										</Button>
									</Box>
									<Box height={{ md: 10, xs: 64 }} />
								</>
							)}
							{state6 && (
								<>
									<Box>
										<Box
											height={{
												sm: 30,
												xs: 50,
											}}
										/>
										<Box
											fontWeight={600}
											lineHeight='29px'
											color='#272f3d'
											fontSize={{
												md: '1.2vw',
												sm: '3vw',
												xs: '5vw',
											}}
										>
											Select To Add Permits To Bring
										</Box>
										<Typography
											fontWeight={400}
											fontSize={{
												md: '1vw',
												sm: '3vw',
												xs: '4vw',
											}}
											color='#707B8E'
											lineHeight='1.2em'
										>
											Cleaning charges are applicable
										</Typography>
										<Box height={20} />
										<Box
											display='flex'
											flexDirection={{
												md: 'row',
												sm: 'row',
												xs: 'column',
											}}
											alignItems='center'
											width='100%'
											gap={2}
										>
											{data2.map((item, index) => (
												<Box
													onClick={() => onClickAa2(index)}
													key={index}
													width={{
														sm: '158px',
														xs: '100%',
													}}
													height='150px'
													border='0.5px solid #868686'
													borderRadius='5px'
													style={{
														cursor: 'pointer',
														backgroundColor: valueAddItem2.includes(data2[index].text)
															? '#F2F0DF'
															: '',
													}}
													display='flex'
													justifyContent='center'
													alignItems='center'
												>
													<Box textAlign='center' padding='0.6rem'>
														<Box
															margin='auto'
															height='50px'
															width={{
																xs: '60%',
															}}
														>
															<img width='100%' height='100%' src={item.pic} alt='' />
														</Box>
														<Box height='50%' marginTop='0.6rem'>
															<Box
																marginY='0.05rem'
																fontWeight={600}
																lineHeight='1.5em'
																fontSize={{
																	sm: '0.8rem',
																	xs: '5vw',
																}}
															>
																{item.text}
															</Box>
															<Typography
																fontSize={{
																	sm: '0.6rem',
																	xs: '3.5vw',
																}}
																lineHeight='1.3em'
															>
																Cleaning Charges : 99
															</Typography>
														</Box>
													</Box>
												</Box>
											))}
										</Box>
									</Box>
									<Box height={30} />
									<Box display={{ md: 'block', xs: 'none' }}>
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
												lineHeight: '29px',
												color: '#FFFFFF',
											}}
											// onClick={onClickReserve}
											onClick={() => {
												if (groupType) {
													setState7(true);
													setState6(false);
												}
											}}
										>
											Next
										</Button>
									</Box>
									<Box height={{ md: 10, xs: 64 }} />
								</>
							)}
							{state7 && (
								<>
									<Box>
										<Box
											className='book__header'
											// fontWeight={600}
											// color='#272f3d'
											fontSize={{
												xl: '1.29rem',
												md: '1.2rem',
												sm: '1rem',
												xs: '1.29rem',
											}}
										>
											Do You Require Plates/Glasses/Cutlery?
										</Box>
										<Typography
											fontWeight={400}
											fontSize='0.938rem'
											color='#7B7E84'
											lineHeight='1.4em'
										>
											Get{' '}
											<span
												style={{
													color: '#32860A',
												}}
											>
												{' '}
												5% discount{' '}
											</span>{' '}
											on the booking price by selecting ‘No’
										</Typography>
										<Box height={15} />
										<Grid
											container
											gap={2}
											justifyContent={{
												sm: 'flex-start',
												xs: 'center',
											}}
										>
											{data3.map((item, index) => (
												<Box
													key={index}
													onClick={() => onClickCt(item.value)}
													width={{
														xl: '40%',
														md: '46%',
														sm: '158px',
														xs: '100%',
													}}
													height='163px'
													border='0.5px solid #868686'
													borderRadius='5px'
													style={{
														cursor: 'pointer',
														backgroundColor: item.value === cutlery ? '#F2F0DF' : '',
													}}
													display='flex'
													justifyContent='center'
													alignItems='center'
												>
													<Box>
														<img src={item.pic} alt='' />
														<Typography
															fontSize='1rem'
															fontWeight='600'
															fontFamily='Open Sans'
															textAlign='center'
														>
															{item.value ? 'YES' : 'NO'}
														</Typography>
														<Typography
															fontSize='0.688rem'
															lineHeight='1.2em'
															textAlign='center'
															letterSpacing='0.02em'
														>
															Discount {item.value ? 0 : 5}%
														</Typography>
													</Box>
												</Box>
											))}
										</Grid>
									</Box>

									<Box height={30} />
									<Box display={{ md: 'block', xs: 'none' }}>
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
												lineHeight: '29px',
												color: '#FFFFFF',
											}}
											onClick={() => {
												if (groupType) {
													setState7(false);
													setState8(true);
												}
											}}
										>
											Next
										</Button>
									</Box>
									<Box height={{ md: 10, xs: 64 }} />
								</>
							)}
							{state8 && (
								<>
									{/* Select Additional Services */}
									{property.addOnServices && (
										<Box display={property.addOnServices.length == 0 ? 'none' : 'block'}>
											<Box className='book__header'>Select Additional Services</Box>
											<Typography
												fontWeight={400}
												fontSize='0.938rem'
												color='#707B8E'
												lineHeight='1.2em'
											>
												Cleaning charges are applicable{' '}
											</Typography>
											<Box height={25} />
											<Box display='flex' flexDirection='column' width='100%' gap={2}>
												{property.addOnServices.map((item: any, index: number) => (
													<Box
														onClick={() => onAddAddonService(item.addonServiceId)}
														width='100%'
														border='0.5px solid #868686'
														borderRadius='5px'
														padding={{
															xl: '1.25rem',
															md: '0.8rem',
															sm: '1.25rem',
															xs: '1.25rem 0',
														}}
														gap={{
															xl: '1.75rem',
															md: '0.8rem',
															sm: '1.75rem',
															xs: '0.75rem',
														}}
														style={{
															cursor: 'pointer',
															backgroundColor: addonServicesSelected.includes(item.addonServiceId)
																? '#F2F0DF'
																: '',
														}}
														display='flex'
														key={index}
													>
														<Box
															display='flex'
															justifyContent='center'
															alignItems='center'
															flexDirection='column'
															gap='0.625rem'
															paddingLeft={{
																sm: '0rem',
																xs: '1rem',
															}}
														>
															<img
																style={{
																	width: '8vw',
																	objectFit: 'fill',
																	objectPosition: 'center',
																	borderRadius: '5px',
																}}
																src={`${S3_BASE}${item.addOnThumbnail}`}
																alt=''
																height='100vh'
															/>
														</Box>
														<Box
															display='flex'
															flexDirection='column'
															justifyContent='space-around'
														>
															<Box>
																<Typography
																	fontSize={{
																		xs: '1.25rem',
																	}}
																	sx={{
																		'@media (max-width: 1024px)': {
																			fontSize: '0.8rem',
																		},
																	}}
																	lineHeight='1.4em'
																	fontWeight={600}
																	fontFamily='Open Sans'
																	color='#000000'
																>
																	{item.addOnServiceTitle}
																</Typography>
																<Typography
																	fontSize='0.75rem'
																	lineHeight='1.2em'
																	fontWeight={400}
																	fontFamily='Open Sans'
																	color='#383838'
																	marginBottom='0.569rem'
																>
																	{item.addOnDescription}
																</Typography>
															</Box>
															<Box>
																<Typography
																	fontSize='0.875rem'
																	lineHeight='1.3em'
																	fontWeight={400}
																	fontFamily='Open Sans'
																	marginBottom='0.569rem'
																	color='#656565'
																	letterSpacing='0.02em'
																>
																	Price:{' '}
																	<span
																		style={{
																			fontWeight: '800',
																		}}
																	>
																		₹{item.addOnPrice}
																	</span>
																</Typography>
															</Box>
														</Box>
													</Box>
												))}
											</Box>
										</Box>
									)}
									<Box height={30} />
									<Box display={{ md: 'block', xs: 'none' }}>
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
												lineHeight: '29px',
												color: '#FFFFFF',
											}}
											onClick={() => {
												if (groupType) {
													setState8(false);
													setThirdState(true);
												}
											}}
										>
											Next
										</Button>
									</Box>
									<Box height={{ md: 10, xs: 64 }} />
								</>
							)}
						</Box>
					)
				) : (
					// First State
					<Box>
						<Box display='flex' justifyContent='flex-end'>
							<Box
								sx={{ background: '#EFECFF' }}
								borderRadius='164px'
								width='fit-content'
								padding='5px 1.25rem'
								display={{ md: 'block', xs: 'none' }}
							>
								<Box
									fontFamily='Open Sans'
									fontStyle='normal'
									fontWeight='400'
									fontSize='0.9rem'
									lineHeight='1.11em'
									display='flex'
									alignItems='center'
									textAlign='center'
									letterSpacing='0.015em'
									color='#6053AE'
								>
									{property.directBooking === true ? 'Direct Booking' : 'On Request Booking'}
								</Box>
							</Box>
						</Box>
						{/* RESPONSIVE MENU___________________________________________________________RESPONSIVE MENU */}
						<Box height={{ sm: 40, md: 0 }} />
						<Box display={{ xs: 'block', md: 'none' }}>
							<Box
								display='flex'
								justifyContent='space-between'
								borderRadius='6px'
								border='1px solid #DEDEDE'
								height='42px'
								alignItems='center'
								zIndex='2'
								position='relative'
								sx={{ background: '#FFFFFF' }}
							>
								<Box
									width='100%'
									height='100%'
									fontWeight='700'
									fontSize='1.25rem'
									display='flex'
									alignItems='center'
								>
									<Box height='100%'>
										<Button
											style={{ height: '100%' }}
											onClick={() => setViewBookFromDetails?.(false)}
										>
											<img src='/assets/images/detail/arrowBack.svg' alt='' />
										</Button>
									</Box>
									<Box>
										<Box
											sx={{
												fontWeight: '600',
												fontSize: '0.75rem',
												lineHeight: '16px',
											}}
										>
											{new Date(bookingDate.toString()).toLocaleDateString('default', {
												month: 'long',
												day: 'numeric',
											})}
										</Box>
										<Box height={2} />
										<Box
											color='#827B7B'
											sx={{
												fontWeight: '400',
												fontSize: '0.625rem',
												lineHeight: '14px',
											}}
										>
											{guestCount !== 0 ? `${guestCount} guests .` : ''} {groupType}
										</Box>
									</Box>
								</Box>
							</Box>
							<Box height={16} />
							<PropertySummary
								propertyName={property.propertyName}
								propertyAddressString={`${property.houseNumber} ${property.tower} ${property.street}, ${property.city}
								, ${property.state}`}
								propertyThumbnail={
									property?.propertyThumbnails
										? property?.propertyThumbnails[0]
										: '/assets/images/additional-1.png'
								}
							/>
						</Box>

						{/* RESPONSIVE MENU___________________________________________________________RESPONSIVE MENU */}
						<Box height={!dataFromDetails ? '20px' : '0px'} />
						{secondState && (
							<Box
								display={{ md: 'flex', xs: 'none' }}
								justifyContent='space-between'
								padding='1.25rem'
								sx={{
									border: '1px solid #000000',
									filter: 'drop-shadow(3px 4px 8px rgba(0, 0, 0, 0.25))',
									borderRadius: '6px',
								}}
							>
								<Box>
									<Box className='book__header' lineHeight='1.2em'>
										Book Your Thinnai
									</Box>
									<Box
										sx={{
											fontFamily: 'Open Sans',
											fontWeight: '400',
											fontSize: '0.8rem',
											lineHeight: '1.3em',
										}}
									>
										2 Guest : {property.minDuration} Hour
									</Box>
								</Box>
								<Box display='flex' flexDirection='column' alignItems='flex-end' gap='2px'>
									<Box
										sx={{
											fontFamily: 'Inter',
											fontWeight: '300',
											fontSize: '0.75rem',
											lineHeight: '19px',
											color: '#000000',
										}}
									>
										Price Starting From
									</Box>
									<Box>
										<Button
											variant='outlined'
											style={{
												borderRadius: '14px',
												fontWeight: '500',
												fontSize: '1.1rem',
												lineHeight: '20px',
												letterSpacing: '0.02em',
												padding: '2.5px 1.219rem',
												border: '1px solid #2B941C',
												color: '#2B941C',
											}}
										>
											₹ {property.pricing?.joyHour[0].withoutAlcohol.oneHour}
										</Button>
									</Box>
								</Box>
							</Box>
						)}
						<Box height={!dataFromDetails ? '0px' : '0px'} />
						<Box
							display={{ md: 'flex', xs: 'none' }}
							justifyContent='space-between'
							padding='1.25rem'
							sx={{
								border: '1px solid #000000',
								filter: 'drop-shadow(3px 4px 8px rgba(0, 0, 0, 0.25))',
								borderRadius: '6px',
							}}
						>
							<Box width='100%'>
								<Box display='flex' justifyContent='space-between' alignItems='center'>
									<Box className='book__header' lineHeight='1.11em'>
										Book Your Thinnai
									</Box>
									<Box
										sx={{
											fontFamily: 'Inter',
											fontWeight: '600',
											fontSize: { xs: '1.613rem', md: '1.6vw', xl: '1.2vw' },
											lineHeight: '20px',
											color: '#000000',
										}}
									>
										₹ {amount}
									</Box>
								</Box>
								<Box display='flex' justifyContent='space-between'>
									<Box
										sx={{
											fontFamily: 'Open Sans',
											fontWeight: '400',
											fontSize: '0.6rem',
											lineHeight: '27px',
										}}
									>
										{new Date(bookingDate as Date).toLocaleString('default', {
											day: 'numeric',
											month: 'short',
										})}{' '}
										|{' '}
										{new Date(startTime as Date).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}{' '}
										-{' '}
										{new Date(endTime as Date).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}
									</Box>
									<Box width='170px' display='flex' justifyContent='flex-end'>
										<Box>
											<Box
												sx={{
													fontFamily: 'Open Sans',
													fontWeight: '400',
													fontSize: '0.6rem',
													lineHeight: '27px',
												}}
											>
												<span style={{ textDecoration: 'line-through' }}>
													₹ {(amount + amount * 0.2).toFixed(2)}{' '}
												</span>
												<span style={{ color: '#D23535' }}> ( 20% off )</span>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box height={{ md: 20, xs: 0 }} />
						<Box
							textAlign='center'
							width='100%'
							sx={{
								background: 'rgba(243, 241, 255, 0.5)',
								paddingTop: responsiveConditionalData ? '1.25rem' : '0px',
							}}
						>
							<DatesCarousel
								propertyId={loadEnquiryData ? enquiry.propertyId : property._id}
								passedDate={loadEnquiryData ? enquiry.bookingDate : ''}
							/>
							<Box height='3rem'></Box>
							<Typography
								fontFamily='Open Sans'
								fontSize='0.7rem'
								bgcolor='#F3F1FF'
								padding='0.6rem'
								fontWeight='600'
							>
								This space receives enquiries,{' '}
								<span
									style={{
										fontWeight: '700',
									}}
								>
									{property.visibility}
								</span>{' '}
								days in advance only
							</Typography>
						</Box>
						<Box height={'2rem'} />
						<Box display={{ md: 'block' }}>
							<Box className='book__header'>Select Group Details</Box>
							<Box height={'0.75rem'} />
							<Box
								display='flex'
								width='100%'
								justifyContent='space-between'
								// padding={{ md: '0px 0px 0px 0px', sm: '0' }}
								// gap={1}
								// sx={{
								// 	'@media (max-width: 1020px)': {
								// 		padding: 0,
								// 	},
								// }}
							>
								<Box
									display='flex'
									flexDirection='column'
									justifyContent='space-between'
									// minWidth={110}
								>
									<Box
										display='flex'
										alignItems='center'
										sx={{
											fontWeight: '400',
											// fontSize: '0.875rem',
											fontSize: '0.9vw',
											lineHeight: '27px',
											'@media (max-width: 900px)': {
												fontSize: '2vw',
											},
											'@media (max-width: 600px)': {
												fontSize: '3.3vw',
											},
										}}
									>
										<GroupsIcon
											sx={{
												fontSize: '1.28vw',
												textAlign: 'center',
												'@media (max-width: 900px)': {
													fontSize: '2vw',
												},
												'@media (max-width: 600px)': {
													fontSize: '3.3vw',
												},
											}}
										/>
										&nbsp; No. of Guests
									</Box>
									<Box height={6} />
									<Counter
										maxValue={
											loadEnquiryData ? enquiry.propertyId.maxGuestCount : property.maxGuestCount
										}
									/>
								</Box>
								<Box
									// width='40%'
									display='flex'
									flexDirection='column'
									justifyContent='space-between'
									position='relative'
								>
									<Box
										display='flex'
										alignItems='center'
										sx={{
											fontWeight: '400',
											// fontSize: '0.875rem',
											fontSize: '0.9vw',
											lineHeight: '27px',
											'@media (max-width: 900px)': {
												fontSize: '2vw',
											},
											'@media (max-width: 600px)': {
												fontSize: '3.3vw',
											},
										}}
									>
										<GroupsIcon
											sx={{
												fontSize: '1.28vw',
												textAlign: 'center',
												'@media (max-width: 900px)': {
													fontSize: '2vw',
												},
												'@media (max-width: 600px)': {
													fontSize: '3.3vw',
												},
											}}
										/>
										&nbsp; Group Type
									</Box>
									<Box height={6} sx={{ minWidth: 120 }} />
									<Box height='fit-content'>
										<FormControl size='small' sx={{ m: 1, height: '33px', margin: '0' }}>
											<Select
												sx={{
													display: 'flex',
													flexDirection: 'column',
													textAlign: 'center',
													border: '1px solid #868686',
													justifyContent: 'center',
													height: '100%',
													maxWidth: groupType.length >= 8 ? '120px' : '50vw',
													paddingX: groupType.length >= 8 ? '12px' : '0',
												}}
												labelId='select-group-type'
												id='select-group-type'
												value={groupType}
												onChange={handleChange}
											>
												<MenuItem value='Couples' style={{ width: '100%' }}>
													Couples
												</MenuItem>
												<MenuItem value='Friends' style={{ width: '100%' }}>
													Friends
												</MenuItem>
												<MenuItem value='Family with kid(s)' style={{ width: '100%' }}>
													Family with Kid(s)
												</MenuItem>
												<MenuItem value='Family without Kid(s)' style={{ width: '100%' }}>
													Family without Kid(s)
												</MenuItem>
												<MenuItem value='Women only' style={{ width: '100%' }}>
													Women only
												</MenuItem>
												<MenuItem value='Men Only' style={{ width: '100%' }}>
													Men Only
												</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box height='2rem' />
						<Box>
							<Box className='book__header'>Select To Add Permits To Bring (+20% Base Charge)</Box>
							<Box height={15} />
							<Box display='flex' width='100%' gap={2}>
								{data1.map((item, index) => (
									<Box
										onClick={() => onClickAa1(index)}
										width='158px'
										height='163px'
										border='0.5px solid #868686'
										borderRadius='5px'
										style={{
											cursor: 'pointer',
											backgroundColor: valueAddItem1.includes(data1[index].text) ? '#F2F0DF' : '',
										}}
										display='flex'
										justifyContent='center'
										alignItems='center'
										key={index}
									>
										<Box
											display='flex'
											justifyContent='center'
											alignItems='center'
											flexDirection='column'
											gap={1}
										>
											<img src={item.pic} alt='' />
											<div>{item.text}</div>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
						<Box height={{ xs: 30, md: 0 }} />
						<Box height={40} />
						<Box display={{ md: 'block', xs: 'none' }}>
							<Button
								variant='contained'
								className='continue_btn'
								style={{
									width: '100%',
									background: '#262626',
									textTransform: 'none',
									fontFamily: 'Montserrat',
									fontStyle: 'normal',
									fontWeight: '500',
									fontSize: '1.1rem',
									lineHeight: '29px',
									color: '#FFFFFF',
								}}
								onClick={() => {
									if (!isAuthenticated) {
										navigate(ROUTES.LOGIN);
									} else if (isAvailable) {
										setSecondState(true);
									}
								}}
							>
								{isAuthenticated ? 'Reserve Your slot' : 'Login To Continue'}
							</Button>
						</Box>
						<Box height={{ md: 10, xs: 64 }} />
					</Box>
				)}
			</Box>
			<BottomButtonPaymentSummary
				viewBook={true}
				setViewBook={null}
				onNextBooking={handleNextOnPhone}
				totalPrice={amount}
				showReserveMessage={thirdState}
			/>
		</>
	);
};

export default Book;
