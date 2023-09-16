import Box from '@mui/material/Box/Box';

export default function ThinnaiLogoHeader() {
	return (
		<Box
			sx={{
				width: '96px',
				aspectRatio: '1/1',
				position: 'relative',
			}}
		>
			<Box
				className='center'
				sx={{
					aspectRatio: '1/1',
					width: '96px',
					borderRadius: '50%',
					background: 'rgba(255, 255, 255, 0.88)',
					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
					position: 'absolute',
					zIndex: '2',
				}}
			>
				<img src='/assets/images/logo.svg' alt='' />
			</Box>
			<Box
				sx={{
					position: 'absolute',
					right: '18px',
					bottom: '17px',
				}}
			>
				<img src='/assets/images/otp/Shape.svg' alt='' />
			</Box>
			<Box
				sx={{
					position: 'absolute',
					right: '-50px',
					bottom: '-30px',
				}}
			>
				<img src='/assets/images/otp/Shape2.svg' alt='' />
			</Box>
		</Box>
	);
}
