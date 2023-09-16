import { Box, Button, CssBaseline, Divider, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import { useParams } from 'react-router-dom';
import { BOOKING_DETAIL_LEVEL } from '../../../utils/consts';
import { BOOKING_VIEW_TYPE } from '../../../utils/routing/routes';
import PaymentInfo from '../../Pages/BookingTrackingPages/PaymentInfo';
import PaymentLinks from '../../Pages/BookingTrackingPages/PaymentLinks';
import '../../styles/Detail/detail.css';
import Allowed from '../Common/Allowed';
import Amenities from '../Common/Amenities';
import RescheduleRequest from '../Common/BookingProcess/RescheduleRequest';
import DetailsListItem from '../Common/DetailsListItem';
import DetailsSectionDivider from '../Common/DetailsSectionDivider';
import FAQs from '../Common/FAQs';
import HostedBy from '../Common/HostedBy';
import Policies from '../Common/Policies';
import ReportThinnai from '../Common/ReportThinnai';
import IdVerifyAndUpdate from './IdVerifyAndUpdate';
import Address from './subElements/Address';
import CarouselFoodNearby from './subElements/CarouselFoodNearby';
import NotAllowed from './subElements/NotAllowed';

const BookingDetails = ({
	booking,
	bookingDate,
	isMyBooking,
	bookingDetailLevel,
}: {
	booking: any;
	bookingDate: any;
	isMyBooking: boolean;
	bookingDetailLevel: BOOKING_DETAIL_LEVEL;
}) => {
	const { viewType } = useParams<{ viewType: BOOKING_VIEW_TYPE }>();
	const [showReschedule, setShowReschedule] = useState(false);
	const [showEdit, setShowEdit] = useState(false);

	useEffect(() => {
		switch (viewType) {
			case BOOKING_VIEW_TYPE.EDIT:
				setShowEdit(true);
				setShowReschedule(false);
				return;
			case BOOKING_VIEW_TYPE.RESCHEDULE:
				setShowReschedule(true);
				setShowEdit(false);
				return;
			case BOOKING_VIEW_TYPE.DETAILS:
			default:
				setShowReschedule(false);
				setShowEdit(false);
				return;
		}
	}, [viewType]);

	return (
		<Box display='flex' gap={5} justifyContent='center'>
			<Box
				width={{
					xl: '60%',
					md: '60%',
					sm: '100%',
					xs: '100%',
				}}
			>
				<Box>
					<Box
						bgcolor='#F7F5FF'
						marginTop='1.313rem'
						borderRadius='0.7rem'
						paddingLeft={{
							xl: '4rem',
							md: '3rem',
							sm: '4rem',
							xs: '1.5rem',
						}}
						paddingRight={{
							xl: '4rem',
							md: '3rem',
							sm: '4rem',
							xs: '1.5rem',
						}}
					>
						<Typography
							textAlign='center'
							fontSize='1rem'
							fontWeight='300'
							color='#6053AE'
							paddingY='1.2rem'
						>
							Booking Id : <span style={{ fontWeight: '400' }}>{booking._id}</span>
						</Typography>
						<Box display='flex' justifyContent='center' paddingBottom='1.125rem'>
							<img
								style={{ borderRadius: '1rem' }}
								width='100%'
								src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${booking.property?.propertyPictures[0]}`}
								alt=''
							/>
						</Box>

						{/* Update Variable */}
						<Box>
							<Typography
								fontSize={{
									xl: '1.5rem',
									md: '1.2rem',
									sm: '1.2rem',
									xs: '1.1rem',
								}}
								fontWeight='500'
								color='#383838'
							>
								{booking.property?.propertyName}
							</Typography>
						</Box>
						<Stack
							direction='row'
							justifyContent='space-between'
							paddingBottom='1.2rem'
							marginTop='0.7rem'
						>
							<Box>
								<Typography
									fontSize={{
										xl: '1.2rem',
										md: '1rem',
										sm: '1rem',
										xs: '0.9rem',
									}}
									fontWeight='300'
									color='#383838'
								>
									No. of guests :{' '}
									<span style={{ color: '#6053AE' }}>{booking.inquiry?.guestCount}</span>
								</Typography>
								<Typography
									fontSize={{
										xl: '1.2rem',
										md: '1rem',
										sm: '1rem',
										xs: '0.9rem',
									}}
									fontWeight='300'
									color='#383838'
								>
									Guest type :{' '}
									<span style={{ color: '#6053AE' }}>{booking.inquiry?.groupType}</span>
								</Typography>
							</Box>
							<Box>
								<Typography
									fontSize={{
										xl: '1.2rem',
										md: '1rem',
										sm: '1rem',
										xs: '0.9rem',
									}}
									fontWeight='300'
									color='#383838'
								>
									Time :{' '}
									<span style={{ color: '#6053AE' }}>
										{new Date(booking.bookingFrom).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}{' '}
										-{' '}
										{new Date(booking.bookingTo).toLocaleTimeString('default', {
											hour: 'numeric',
											minute: 'numeric',
											hour12: true,
										})}
									</span>
								</Typography>
								<Typography
									fontSize={{
										xl: '1.2rem',
										md: '1rem',
										sm: '1rem',
										xs: '0.9rem',
									}}
									fontWeight='300'
									color='#383838'
								>
									Date :{' '}
									<span style={{ color: '#6053AE' }}>
										{new Date(booking.bookingFrom)
											.toLocaleDateString('default', {
												year: 'numeric',
												month: 'numeric',
												day: 'numeric',
											})
											.split('/')
											.join('.')}
									</span>
								</Typography>
							</Box>
						</Stack>
						<Box paddingBottom='0.625rem'>
							<Divider />
						</Box>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							paddingBottom='20px'
						>
							<Button
								sx={{
									bgcolor: '#E9E6FF',
									paddingY: '0.625rem',
									paddingX: '0.5rem',
									borderRadius: '8px',
									color: '#6053AE',
									position: 'relative',
									textTransform: 'none',
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										left: '-10px',
										top: '0.5px',
									}}
								>
									<img width='38px' src='assets/images/ongoing_booking/ongoing-chat.svg' alt='' />
								</Box>
								<Typography
									paddingX='1rem'
									fontSize={{
										xl: '0.75rem',
										md: '0.75rem',
										sm: '0.5rem',
										xs: '0.8rem',
									}}
								>
									Chat with host
								</Typography>
							</Button>
							<Typography
								fontSize={{
									xl: '0.75rem',
									md: '0.9rem',
									sm: '0.5rem',
									xs: '0.8rem',
								}}
								fontWeight='400'
								color='#383838'
							>
								Booked on :{' '}
								<span style={{ color: '#6053AE' }}>
									{new Date(booking.bookingConfirmedAt)
										.toLocaleDateString('default', {
											month: 'long',
											day: 'numeric',
										})
										.split('/')
										.join('.')}
								</span>
							</Typography>
						</Box>
					</Box>
					<Box
						display={{
							xl: 'none',
							md: 'none',
							sm: 'block',
							xs: 'block',
						}}
					>
						<CssBaseline />
						{showReschedule && <RescheduleRequest booking={booking} bookingDate={bookingDate} />}
						{!showReschedule && (
							<IdVerifyAndUpdate
								propertyId={booking.property?._id}
								bookingId={booking._id}
								isMyBooking={isMyBooking}
								invitedGuestList={booking.invitedGuests}
							/>
						)}
					</Box>
				</Box>
				<Box
					marginTop={{
						md: 10,
						xs: 5,
					}}
				>
					<Typography
						fontSize='1.4rem'
						color='#383838'
						fontWeight='600'
						fontFamily='Montserrat'
						lineHeight='1.4em'
					>
						Review Your Experience
					</Typography>
					<Typography
						marginTop='0.2rem'
						lineHeight='1.4em'
						fontSize='0.75rem'
						color='#1A191E'
						fontWeight='400'
						fontFamily='Montserrat'
					>
						Let us know how was you experience with Thinnai
					</Typography>
					<Box marginY='3rem'>
						<Divider sx={{ borderColor: 'rgba(196, 196, 196, 0.5)', borderBottomWidth: '0.5px' }} />
					</Box>
					<PaymentLinks />
					<Box marginTop='3rem'>
						<Divider sx={{ borderColor: 'rgba(196, 196, 196, 0.5)', borderBottomWidth: '0.5px' }} />
					</Box>
				</Box>
				<Address />
				<DetailsSectionDivider />
				<DetailsListItem
					listItems={booking.property?.directions}
					header={'Steps to Reach Thinnai'}
				/>
				<DetailsSectionDivider />
				{/* Amenities */}
				<Amenities amenities={booking.property.amenities} />
				{/* Things Allowed */}
				<DetailsSectionDivider />
				<Allowed services={booking.property.services} />
				{/* Things Not Allowed */}
				<DetailsSectionDivider />
				<NotAllowed services={booking.property.services} />
				<DetailsSectionDivider />
				<DetailsListItem listItems={booking.property.houseRules} header={'House Rules'} />
				<Box
					display={{
						xl: 'none',
						md: 'none',
						sm: 'block',
						xs: 'block',
					}}
					mb='2.188rem'
				>
					<Box height={{ sm: 25, xs: 25 }} />
					<Divider />
					<Box height={{ sm: 25, xs: 25 }} />
					<Box>
						<Typography fontSize='1rem' fontWeight={400}>
							Nearby Food Joints
						</Typography>
						<Box mt='0.625rem'>
							<CarouselFoodNearby />
						</Box>
					</Box>
				</Box>
				{isMyBooking && <HostedBy />}
				<Box
					marginTop={{
						md: 10,
						xs: 5,
					}}
				>
					<Typography
						fontSize='1.4rem'
						color='#383838'
						fontWeight='600'
						fontFamily='Montserrat'
						lineHeight='1.4em'
					>
						Payment Details
					</Typography>
					<Typography
						marginTop='0.5rem'
						lineHeight='1.4em'
						fontSize='1rem'
						color='#1A191E'
						fontWeight='400'
						fontFamily='Montserrat'
					>
						Payment of <span style={{ fontWeight: 600 }}>₹2300</span> was made on 14 Dec 2022
					</Typography>
					<Box marginY='3rem'>
						<Divider sx={{ borderColor: 'rgba(196, 196, 196, 0.5)', borderBottomWidth: '0.5px' }} />
					</Box>
					<PaymentInfo />
				</Box>
				<DetailsSectionDivider />
				<FAQs />
				<DetailsSectionDivider />
				<Policies />
				<DetailsSectionDivider />
				<ReportThinnai />
			</Box>
			<Box
				border='1px solid #C5C5C5'
				boxShadow='2px 4px 8px 7px rgba(0, 0, 0, 0.04)'
				borderRadius='20px'
				padding={{
					xl: '1.875rem',
					md: '1.875rem',
					xs: '1.875rem',
				}}
				height='fit-content'
				width={{
					xl: '35%',
					md: '40%',
					sm: '100%',
					xs: '100%',
				}}
				marginTop='1rem'
				display={{
					xl: 'block',
					md: 'block',
					sm: 'none',
					xs: 'none',
				}}
			>
				{showReschedule && <RescheduleRequest booking={booking} bookingDate={bookingDate} />}
				{!showReschedule && (
					<IdVerifyAndUpdate
						propertyId={booking.property?._id}
						bookingId={booking._id}
						isMyBooking={isMyBooking}
						invitedGuestList={booking.invitedGuests}
					/>
				)}
			</Box>
		</Box>
	);
};

export default BookingDetails;
