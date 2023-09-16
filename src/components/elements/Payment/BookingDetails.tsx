import { Box, Button, Divider, Typography } from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../../store';
import { ROUTES } from '../../../utils/routing/routes';

const BookingDetails = ({ handleChangesMenu }: any) => {
	const navigate = useNavigate();
	const dispatch: Dispatch<any> = useDispatch();
	const property: any = useSelector<RootState, string>(state => state.details.property);

	const location = useLocation();
	const pathName = location.pathname;

	const [enquiryData, setEnquiryData] = useState<any>(Date.now());
	const [bookingFrom, setBookingFrom] = useState<any>(Date.now());
	const [bookingTo, setBookingTo] = useState<any>();

	const bookingEnquiries = useSelector<RootState, any>(state => state.booking.enquiryStatus[0]);
	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries[0]);

	useEffect(() => {
		if (pathName === ROUTES.ENQUIRY_STATUS) {
			setBookingFrom(bookingEnquiries?.bookingFrom);
			setBookingTo(bookingEnquiries?.bookingTo);
			setEnquiryData(bookingEnquiries);
		} else {
			if (enquiries) {
				setBookingFrom(enquiries.startTime);
				setBookingTo(enquiries.endTime);
				setEnquiryData(enquiries);
			}
		}
	}, [bookingEnquiries, enquiries, pathName]);

	const onClick = () => {
		navigate(-1);
	};

	return (
		<Box
			padding={{
				xl: pathName === '/inquiry' ? '0px 1.25rem 0px 1.25rem' : '0px',
				md: pathName === '/inquiry' ? '0px 1.25rem 0px 1.25rem' : '0px',
				sm: pathName === '/inquiry' ? '1.25rem 0px' : '0px',
				xs: pathName === '/inquiry' ? '1.25rem 0px' : '0px',
			}}
			marginX={
				pathName === '/congratulations' ? '0px' : pathName === '/inquiry' ? '0px' : '1.25rem'
			}
		>
			<Box
				display='flex'
				justifyContent='space-between'
				marginBottom='0.625rem'
				padding={{
					xl: '0',
					md: '0 0px',
					sm: '1.25rem 0px',
					xs: '0rem 0px',
				}}
			>
				<Typography
					fontFamily='Montserrat'
					fontWeight={600}
					fontSize={pathName ? '1.3rem' : '1.25rem'}
				>
					Booking Details{' '}
				</Typography>
				<Button
					style={{
						textTransform: 'none',
					}}
					onClick={() => (handleChangesMenu ? handleChangesMenu() : onClick())}
				>
					<Typography
						fontWeight={600}
						fontFamily='Montserrat'
						fontSize={pathName ? '1.3rem' : '1.25rem'}
						color='#6053AE'
					>
						Change
					</Typography>
				</Button>
			</Box>
			<Box paddingBottom={pathName === '/inquiry' ? '1.25rem' : '0px'}>
				<Divider />
			</Box>
			<Box
				padding={
					pathName === '/congratulations'
						? '1.25rem 0px 0px 0px'
						: pathName === '/inquiry'
						? '0.5rem 0.125rem 0.938rem 0.125rem'
						: pathName === '/payment'
						? '1.25rem 0px 0px 0px'
						: '1rem 0.2rem'
				}
				display='flex'
				justifyContent='space-between'
				flexDirection={{
					xl: 'row',
					md: 'row',
					sm: 'column',
					xs: 'column',
				}}
			>
				<Box>
					<Box display='flex' alignItems='center' fontFamily='Open Sans'>
						<Typography width='120px' fontSize='1.125rem' fontWeight='300' color='#383838'>
							No. of guests :
						</Typography>
						<Box fontSize={{ xl: '0.8vw', md: '1.2vw' }}>
							<span style={{ color: '#6053AE' }}> {enquiryData && enquiryData.guestCount}</span>
						</Box>
					</Box>
					<Box display='flex' alignItems='center' fontFamily='Open Sans'>
						<Typography width='100px' fontSize='1.125rem' fontWeight='300' color='#383838'>
							Guest type :
						</Typography>
						<Box fontSize={{ xl: '0.8vw', md: '1.2vw' }}>
							<span style={{ color: '#6053AE' }}> {enquiryData && enquiryData.groupType}</span>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box display='flex' alignItems='center' fontFamily='Open Sans'>
						<Typography fontSize='1.125rem' fontWeight='300' color='#383838'>
							Time :{' '}
						</Typography>
						<Box fontSize={{ xl: '0.8vw', md: '1.2vw' }}>
							<span style={{ color: '#6053AE' }}>
								{new Date(bookingFrom).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}{' '}
								-{' '}
								{new Date(bookingTo).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}
							</span>
						</Box>
					</Box>
					<Box display='flex' alignItems='center' fontFamily='Open Sans'>
						<Typography fontSize='1.125rem' fontWeight='300' color='#383838'>
							Date :{' '}
						</Typography>

						<Box fontSize={{ xl: '0.8vw', md: '1.2vw' }}>
							<span style={{ color: '#6053AE' }}>
								{new Date(bookingFrom)
									.toLocaleDateString('default', {
										year: 'numeric',
										month: 'short',
										day: 'numeric',
									})
									.split('/')
									.join('.')}
							</span>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default BookingDetails;
