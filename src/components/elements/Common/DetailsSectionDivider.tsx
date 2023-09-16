import { Box, Divider } from '@mui/material';

export default function DetailsSectionDivider() {
	return (
		<Box>
			<Box height={{ sm: 50, xs: 15 }} />
			<Divider />
			<Box height={{ sm: 50, xs: 10 }} />
		</Box>
	);
}
