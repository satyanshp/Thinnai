import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NoBookings({ headerText = 'Bookings' }: { headerText?: string }) {
	return (
		<Box
			display='flex'
			justifyContent='center'
			flexDirection='column'
			alignItems='center'
			height='70vh'
		>
			<Box>
				<Box width='50%' margin='auto'>
					<img width='100%' src='/assets/images/confirmed/no-booking.svg' alt='' />
				</Box>
			</Box>
			<Typography
				fontFamily='Montserrat'
				fontSize={{
					md: '3.5rem',
					xs: '2.5rem',
				}}
				lineHeight='1.4em'
				fontWeight={700}
				letterSpacing='0.015em'
				color='#272F3D'
				textAlign='center'
			>
				No {headerText}
			</Typography>
			<Typography
				fontFamily='Open Sans'
				fontSize={{
					md: '1.875rem',
					xs: '1rem',
				}}
				lineHeight='1.4em'
				fontWeight={400}
				color='#50555C'
				textAlign='center'
			>
				Currently, no bookings initiated. Go to{' '}
				<Link
					style={{
						textDecoration: 'none',
						fontWeight: 700,
						color: '#8F7EF3',
					}}
					to='/'
				>
					home page.
				</Link>
			</Typography>
		</Box>
	);
}
