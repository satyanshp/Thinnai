import { Box, Typography } from '@mui/material';

const Note = () => {
	return (
		<Box
			bgcolor='#EEFCEC'
			display='flex'
			flexDirection={{
				xl: 'row',
				md: 'row',
				sm: 'column',
				xs: 'column',
			}}
			gap='0.625rem'
			borderRadius='4px'
			padding='1.25rem'
		>
			<Typography color='#228514' width='18%' fontSize='1.25rem'>
				Note :
			</Typography>
			<Typography fontSize='1.25rem' color='#383838'>
				The balance amount if any, will be refunded back to your account
			</Typography>
		</Box>
	);
};

export default Note;
