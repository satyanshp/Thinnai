import { Box, Stack, Typography } from '@mui/material';

const DetailsListItem = ({ listItems, header }: { listItems: string[]; header: string }) => {
	return (
		<Box>
			<Typography
				className='aboutPlace__header'
				fontSize={{
					md: '1.4rem',
					xs: '1rem',
				}}
				fontWeight={600}
				fontFamily='Montserrat'
			>
				{header}
			</Typography>
			<Box height={20} />
			<Box className='aboutPlace__p'>
				{listItems?.map((rule: any, index: any) => (
					<Stack
						alignItems='flex-start'
						direction='row'
						key={index}
						marginBottom='0.5rem'
						spacing={{
							xl: 3,
							md: 3,
							sm: 1.8,
							xs: 1.8,
						}}
					>
						<Box
							marginTop={{
								md: '0.3rem',
								xs: '0.1rem',
							}}
						>
							<Box
								height={'0.7rem'}
								width={'0.7rem'}
								mt={0.5}
								borderRadius='50%'
								bgcolor='#DFDAFF'
							/>
						</Box>
						<Typography
							fontSize={{
								xl: '1.25rem',
								md: '1.1rem',
								sm: '1rem',
								xs: '1rem',
							}}
						>
							{rule}
						</Typography>
					</Stack>
				))}
			</Box>
		</Box>
	);
};

export default DetailsListItem;
