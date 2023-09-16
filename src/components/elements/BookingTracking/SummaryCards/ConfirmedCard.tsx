import { loadBooking } from '../../../../actions/booking';
import { fourColorPalette } from '../../../../utils/consts';
import { BOOKING_VIEW_TYPE, ROUTES } from '../../../../utils/routing/routes';
import { Box, Button, Color, Typography } from '@mui/material';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface IConfirmedCardProps {
	item: any;
	color: any;
	index: number;
	isInvitedBooking?: boolean;
}

const ConfirmedCard = ({ item, color, index, isInvitedBooking = false }: IConfirmedCardProps) => {
	const dispatch: Dispatch<any> = useDispatch();
	const navigate = useNavigate();

	const onClickDetails = () => {
		if (isInvitedBooking) {
			navigate(`${ROUTES.INVITED_TO}/${item._id}`);
		} else {
			dispatch(
				loadBooking(item._id, () => navigate(`${ROUTES.CONFIRMED}/${BOOKING_VIEW_TYPE.DETAILS}`))
			);
		}
	};

	const onClickReschedule = () => {
		dispatch(loadBooking(item._id, () => navigate(`${ROUTES.CONFIRMED}/reschedule`)));
	};

	return (
		<Box
			key={index}
			bgcolor={fourColorPalette[index % 4].extraLight}
			padding={{
				xl: '2rem',
				md: '2rem',
				sm: '2rem',
				xs: '1.2rem',
			}}
			borderRadius='1rem'
			display='flex'
			gap={{
				xl: '2rem',
				md: '2rem',
				sm: '2rem',
				xs: '1.5rem',
			}}
			flexDirection={{
				xl: 'row',
				md: 'row',
				sm: 'column',
				xs: 'column',
			}}
		>
			<Box width={{ md: '40%', sm: '100%' }}>
				<img
					style={{
						width: '100%',
						objectFit: 'fill',
						borderRadius: '1.2rem',
					}}
					src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${item.property.propertyPictures[0]}`}
					alt=''
				/>
			</Box>
			<Box
				paddingRight={{
					xl: '2rem',
					md: '2rem',
					xs: '0rem',
				}}
				paddingLeft={{
					xl: '2rem',
					md: '2rem',
					xs: '0rem',
				}}
				width={{
					xl: '61.50%',
					md: '61.50%',
					sm: '90%',
					xs: '100%',
				}}
				margin='auto'
			>
				<Box
					marginBottom={{
						md: '1rem',
					}}
				>
					<Box
						fontSize={{ md: '1.5rem', sm: '1.9rem', xs: '1.4rem' }}
						className='aboutPlace__header'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '600',
							lineHeight: '1.5em',
							color: '#000000',
						}}
					>
						{item.property.propertyName}
					</Box>
				</Box>

				<Box display='flex' justifyContent='space-between'>
					<Box textAlign='left'>
						<Typography
							fontSize={{
								xl: '1.125rem',
								md: '1.125rem',
								sm: '1rem',
								xs: '0.8rem',
							}}
							marginBottom='0.5rem'
							fontWeight='300'
							color='#383838'
						>
							No. of guests :{' '}
							<span style={{ color: fourColorPalette[index % 4].medium }}>
								{item?.inquiry.guestCount}
							</span>
						</Typography>
						<Typography
							fontSize={{
								xl: '1.125rem',
								md: '1.125rem',
								sm: '1rem',
								xs: '0.8rem',
							}}
							fontWeight='300'
							color='#383838'
						>
							Guest type :{' '}
							<span style={{ color: fourColorPalette[index % 4].medium }}>
								{item?.inquiry.groupType}
							</span>
						</Typography>
					</Box>
					<Box textAlign='left'>
						<Typography
							fontSize={{
								xl: '1.125rem',
								md: '1.125rem',
								sm: '1rem',
								xs: '0.8rem',
							}}
							fontWeight='300'
							marginBottom='0.5rem'
							color='#383838'
						>
							Time :{' '}
							<span style={{ color: fourColorPalette[index % 4].medium }}>
								{new Date(item.bookingFrom).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}{' '}
								-{' '}
								{new Date(item.bookingTo).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}
							</span>
						</Typography>
						<Typography
							fontSize={{
								xl: '1.125rem',
								md: '1.125rem',
								sm: '1rem',
								xs: '0.8rem',
							}}
							fontWeight='300'
							color='#383838'
						>
							Date :{' '}
							<span style={{ color: fourColorPalette[index % 4].medium }}>
								{new Date(item.bookingFrom)
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
				</Box>
				<Box
					display='flex'
					gap='0.625rem'
					justifyContent='flex-end'
					marginTop='1.5rem'
					marginBottom='0.5rem'
				>
					<Button
						sx={{
							border: '0',
							background: fourColorPalette[index % 4].light,
							outline: 'none',
							borderRadius: '6px',
							paddingX: '4vw',
							textTransform: 'none',
							fontSize: '1rem',
							cursor: 'pointer',
							color: fourColorPalette[index % 4].dark,
							fontWeight: '600',
							width: '33.3%',
							fontFamily: 'Open Sans',
							height: '40px',
							'@media (max-width: 430px)': {
								fontSize: '0.75rem',
							},
							'@media (max-width: 342px)': {
								fontSize: '0.5rem',
							},
						}}
						onClick={onClickDetails}
					>
						Details
					</Button>
					{!isInvitedBooking && (
						<Button
							sx={{
								border: '0.4px solid #000000',
								background: 'transparent',
								outline: 'none',
								borderRadius: '6px',
								fontSize: '1rem',
								cursor: 'pointer',
								color: '#303F52',
								paddingX: '4vw',
								width: '33.3%',
								height: '40px',
								textTransform: 'none',
								'@media (max-width: 430px)': {
									fontSize: '0.75rem',
								},
								'@media (max-width: 342px)': {
									fontSize: '0.5rem',
								},
							}}
							onClick={onClickReschedule}
						>
							Reschedule
						</Button>
					)}
					{!isInvitedBooking && (
						<Button
							sx={{
								border: '0.4px solid #000000',
								background: '#1A191E',
								outline: 'none',
								borderRadius: '6px',
								fontSize: '1rem',
								paddingX: '4vw',
								cursor: 'pointer',
								color: 'white',
								height: '40px',
								width: '33.3%',
								textTransform: 'none',
								'@media (max-width: 430px)': {
									fontSize: '0.75rem',
								},
								'@media (max-width: 342px)': {
									fontSize: '0.5rem',
								},
							}}
						>
							Chat
						</Button>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default ConfirmedCard;
