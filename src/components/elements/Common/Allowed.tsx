import { Box, Grid, Paper, useMediaQuery } from '@mui/material';
import styled from '@mui/styles/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const CircleTagg = styled(Paper)(({ theme }) => ({
	fontSize: '0.85rem',
	height: '70.8px',
	borderRadius: '50%',
	aspectRatio: '1',
	display: 'flex',
	border: '0.5px solid #656565',
	justifyContent: 'center',
	alignItems: 'center',
	flexWrap: 'wrap',
	margin: 'auto',
	boxShadow: 'none',
	cursor: 'pointer',
	'@media (max-width: 400px)': {
		height: '55px',
	},
}));

const Allowed = ({ services }: { services: string[] }) => {
	const allowedActivitiesMap = useSelector<RootState, any>(
		state => state.appSettings.allowedActivitiesMap
	);
	const staticAssetPath = useSelector<RootState, string>(
		state => state.appSettings.staticAssetPath
	);
	const xsDevice = useMediaQuery('(max-width:400px)');
	return (
		<Box>
			<Box height={20} />
			<Grid
				rowGap={4}
				columnGap={0}
				container
				sx={{
					'@media (max-width: 1040px)': {
						gap: 2,
					},
				}}
			>
				{services?.map((service: string) => (
					//property.services?.includes(item.text) && (
					<Grid item xs={3} sm={1.8} key={allowedActivitiesMap[service].id}>
						<CircleTagg style={{ backgroundColor: '#EBF8FE' }}>
							<Box>
								<img
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
									src={`${staticAssetPath}${allowedActivitiesMap[service]?.icon}`}
									alt=''
								/>
							</Box>
						</CircleTagg>
						<Box height={5} />
						<div
							style={{
								textAlign: 'center',
								color: '#383838',
								fontFamily: 'Inter',
								fontStyle: 'normal',
								fontWeight: '400',
								lineHeight: '1.2rem',
								fontSize: xsDevice ? '0.8rem' : '1rem',
								marginTop: '0.875rem',
							}}
						>
							{allowedActivitiesMap[service].title}
						</div>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Allowed;
