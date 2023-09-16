import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { S3_BASE } from '../../../utils/consts';

const HostedBy = () => {
	const hostData = useSelector<RootState, any>(state => state.booking.booking.property?.userData);

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
				<Box height={{ sm: 50, xs: 45 }} />
				<Divider />
				<Box height={{ sm: 50, xs: 30 }} />
			</Box>
			<Typography
				fontSize={{
					xl: '2rem',
					md: '2rem',
					sm: '1rem',
					xs: '1rem',
				}}
				marginBottom='1.875rem'
			>
				Hosted By
			</Typography>
			<Box display='flex' justifyContent='space-between'>
				<Box
					display='flex'
					width='50%'
					gap={{ sm: 3.5, xs: 1 }}
					alignItems={{ sm: 'flex-start', xs: 'center' }}
					flexGrow='1'
				>
					<Box
						display='flex'
						width={{ xl: '12%', md: '12%', sm: '21%', xs: '15%' }}
						alignItems={{ xs: 'center' }}
						sx={{ aspectRatio: '1', borderRadius: '50%' }}
					>
						<img
							style={{ borderRadius: '50%' , objectFit: 'contain', width: '100%' }}
							src={
								hostData?.user.profileImage
									? S3_BASE + hostData?.user.profileImage
									: hostData?.user.avatar
							}
							alt=''
						/>
					</Box>
					<Box display='flex' justifyContent='center' flexDirection='column' height='100%'>
						<Box display='flex' alignItems='center'>
							<Box
								fontSize={{ xl: '1rem', sm: '1rem', xs: '0.72rem' }}
								lineHeight='1.5em'
								sx={{
									fontWeight: '600',
									color: '#383838',
								}}
							>
								{hostData?.user.firstName}
							</Box>
							<Box display='flex' alignItems='center' marginLeft={{ xs: 0.15, sm: 'inherit' }}>
								<CheckCircleIcon
									sx={{
										fontSize: '0.938rem',
										paddingLeft:"1rem",
										color: '#24BA0E',
										'@media (max-width: 600px)': {
											fontSize: '0.8rem !important',
										},
									}}
								/>
							</Box>
						</Box>
						<Box
							fontSize='1rem'
							sx={{
								fontFamily: 'Open Sans',
								fontStyle: 'normal',
								fontWeight: '50',
								lineHeight: '22px',
								color: '#383838',
							}}
						>
							{hostData?.guestsHosted} guests hosted
						</Box>
					</Box>
				</Box>
				<Box
					margin='auto 0'
					display={{
						xl: 'block',
						md: 'block',
						sm: 'none',
						xs: 'none',
					}}
				>
					<Button
						variant='contained'
						style={{
							background: '#E9E5FF',
							color: '#000000',
							textTransform: 'none',
							boxShadow: 'none',
							display: 'flex',
							gap: '0.625rem',
						}}
					>
						<ChatIcon sx={{ color: '#8F7EF3' }} />
						<Box
							fontSize='1.188rem'
							lineHeight='1.8em'
							sx={{
								fontFamily: 'Open Sans',
								fontStyle: 'normal',
								fontWeight: '100',
							}}
						>
							Send a msg
						</Box>
					</Button>
				</Box>
			</Box>
			<Typography
				mt='0.688rem'
				display={{
					xl: 'none',
					md: 'none',
					sm: 'block',
					xs: 'block',
				}}
				fontWeight='200'
			>
				{hostData?.aboutYourself}
				<br />
				<a style={{ color: 'black', fontWeight: '500' }} href='#'>
					read more
				</a>
			</Typography>
		</Box>
	);
};

export default HostedBy;
