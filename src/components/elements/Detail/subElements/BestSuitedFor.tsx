import { Box, Grid, Paper, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

const Tagg = styled(Paper)(({ theme }) => ({
	fontSize: '0.85rem',
	minHeight: '41.8px',
	borderRadius: '10px',
	display: 'flex',
	justifyContent: 'left',
	padding: '0.75rem 1rem',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: '0.375rem',
	boxShadow: 'none',
	color: '#383838',
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontWeight: '400',
	textAlign: 'center',
	lineHeight: '27px',
	cursor: 'default',
	'@media (max-width: 600px)': {
		fontSize: '0.8rem',
		gap: '3px',
		minHeight: '43.8px',
	},
}));

export default function BestSuitedFor({ activities }: { activities: string[] }) {
	const activityTypeMap = useSelector<RootState, any>(state => state.appSettings.activityTypeMap);
	const staticAssetPath = useSelector<RootState, string>(
		state => state.appSettings.staticAssetPath
	);

	return (
		<Box>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Box className='aboutPlace__header'>Best Suited For</Box>
			</Box>
			<Box height={20} />
			<Box>
				<Grid container spacing={1.2}>
					{activities?.map((activityType: string) => (
						<Grid item xs={'auto'} key={activityTypeMap[activityType].id}>
							<Tagg style={{ backgroundColor: '#F3F1FF',flexWrap: 'nowrap' }}>
								<img height='15rem' src={`${staticAssetPath}${activityTypeMap[activityType].icon}`} alt='' />
								<div>{activityTypeMap[activityType].title}</div>
							</Tagg>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
