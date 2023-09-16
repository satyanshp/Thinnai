import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import AppReview from './AppReview';
import ReviewSpace from './ReviewSpace';

const PaymentLinks = () => {
	const [openSpace, setOpenSpace] = React.useState(false);
	const [openAppReview, setOpenAppReview] = React.useState(false);

	const handleClickOpenSpace = () => {
		setOpenSpace(true);
	};

	const handleCloseSpace = () => {
		setOpenSpace(false);
	};

	const handleClickOpenAppReview = () => {
		setOpenAppReview(true);
	};

	const handleCloseAppReview = () => {
		setOpenAppReview(false);
	};
	return (
		<>
			<Button
				onClick={handleClickOpenSpace}
				sx={{
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0.5rem',
					display: 'flex',
					borderRadius: '5px',
					cursor: 'pointer',
					transition: '0.3s',
					textTransform: 'none',
					':hover': {
						background: '#f7f5ffad',
					},
				}}
			>
				<Box
					display='flex'
					alignItems='center'
					gap={{
						md: '1rem',
						sm: '0.396rem',
						xs: '0.396rem',
					}}
				>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						width={{
							xs: '40px',
						}}
					>
						<img width='100%' src='/assets/images/profile/personal-info.svg' alt='' />
					</Box>
					<Typography
						fontFamily='Montserrat'
						textAlign='center'
						fontSize='1rem'
						fontWeight={600}
						color='#272F3D'
					>
						Review Experience
					</Typography>
				</Box>
				<Box
					fontWeight='700'
					fontSize='1.25rem'
					sx={{
						transform: 'rotate(180deg)',
					}}
				>
					<img src='/assets/images/detail/arrowBack.svg' alt='' />
				</Box>
			</Button>
			<Box marginY='1.5rem'>
				<Divider sx={{ borderColor: 'rgba(196, 196, 196, 0.5)', borderBottomWidth: '0.5px' }} />
			</Box>
			<Button
				onClick={handleClickOpenAppReview}
				sx={{
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0.5rem',
					display: 'flex',
					borderRadius: '5px',
					cursor: 'pointer',
					transition: '0.3s',
					textTransform: 'none',
					':hover': {
						background: '#f7f5ffad',
					},
				}}
			>
				<Box
					display='flex'
					alignItems='center'
					gap={{
						md: '1rem',
						sm: '0.396rem',
						xs: '0.396rem',
					}}
				>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						width={{
							xs: '40px',
						}}
					>
						<img width='100%' src='/assets/images/profile/payments.svg' alt='' />
					</Box>
					<Typography
						fontFamily='Montserrat'
						textAlign='center'
						fontSize='1rem'
						fontWeight={600}
						color='#272F3D'
					>
						Review App
					</Typography>
				</Box>
				<Box
					fontWeight='700'
					fontSize='1.25rem'
					sx={{
						transform: 'rotate(180deg)',
					}}
				>
					<img src='/assets/images/detail/arrowBack.svg' alt='' />
				</Box>
			</Button>
			<AppReview openAppReview={openAppReview} handleCloseAppReview={handleCloseAppReview} />
			<ReviewSpace open={openSpace} handleClose={handleCloseSpace} />
		</>
	);
};

export default PaymentLinks;
