import { Box, Typography } from '@mui/material';

const SectionTitle = ({ subTitle, title }: any) => {
	return (
		<Box>
			<Typography
				fontFamily='Montserrat'
				lineHeight='1.2em'
				fontSize={{
					xl: '1.5rem',
					md: '1.5rem',
					sm: '1rem',
					xs: '1rem',
				}}
				fontWeight='400'
				color='rgba(0, 0, 0, 0.5)'
			>
				{subTitle}
			</Typography>
			<Typography
				fontFamily='Montserrat'
				lineHeight='1.2em'
				fontSize={{
					xl: '2.688rem',
					md: '2.688rem',
					sm: '1.5rem',
					xs: '1.5rem',
				}}
				fontWeight={600}
				color='black'
			>
				{title}
			</Typography>
		</Box>
	);
};

export default SectionTitle;
