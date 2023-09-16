import { Box, Button, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import Marker from '../../Common/subElements/Marker';

const Address = () => {
	const bookedProperty = useSelector<RootState, any>(state => state.booking.booking.property);

	const geoLocation = {
		lat: 27.3826,
		lng: 79.584,
	};

	return (
		<Box>
			<Box
				display={{
					xl: 'block',
					md: 'block',
					sm: 'none',
					xs: 'none',
				}}
			>
				<Box height={{ sm: 50, xs: 25 }} />
			</Box>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Typography
					fontSize={{
						xl: '2rem',
						md: '2rem',
						sm: '1.25rem',
						xs: '1rem',
					}}
					className='aboutPlace__header'
				>
					Address
				</Typography>
				<Box
					display={{
						xl: 'block',
						md: 'block',
						sm: 'block',
						xs: 'block',
					}}
				>
					<Button
						variant='contained'
						sx={{
							textTransform: 'none',
							bgcolor: '#8F7EF3',
							borderRadius: '6px',
							color: 'white',
							fontSize: '0.625rem',
						}}
					>
						Copy
					</Button>
				</Box>
			</Box>
			<Box
				display={{
					xl: 'block',
					md: 'block',
					sm: 'none',
					xs: 'none',
				}}
				className='aboutPlace__p'
			>
				{bookedProperty?.address}
			</Box>
			<Box
				display={{
					xl: 'none',
					md: 'none',
					sm: 'block',
					xs: 'block',
				}}
				fontSize='0.75rem'
				fontWeight={400}
				fontFamily='Open Sans'
				className='aboutPlace__p'
			>
				{bookedProperty?.address}
			</Box>
			<Box height={{ sm: 50, xs: 30 }} />
			<Box height={{ md: '284px', sm: '150px', xs: '143px' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE',
					}}
					defaultCenter={{ lat: 27.3826, lng: 79.584 }}
					defaultZoom={8}
					// isMarkerShown
					yesIWantToUseGoogleMapApiInternals
				>
					<Marker {...geoLocation} />
				</GoogleMapReact>
			</Box>
		</Box>
	);
};

export default Address;
