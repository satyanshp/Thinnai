import { Box, Grid, Paper, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

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
		gap: '0.188rem',
		minHeight: '43.8px',
	},
}));

const Amenities = ({ amenities }: { amenities: string[] }) => {
	const amenitiesMap = useSelector<RootState, any>(state => state.appSettings.amenitiesMap);
	const staticAssetPath = useSelector<RootState, string>(
		state => state.appSettings.staticAssetPath
	);

	return (
		<Box>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Box className='aboutPlace__header'>Amenities</Box>
			</Box>
			<Box height={20} />
			<Box>
				<Grid container spacing={1.2}>
					{amenities?.map((amenity: string) => (
						<Grid item xs={'auto'} key={amenitiesMap[amenity].id}>
							<Tagg style={{ backgroundColor: '#EEFCEC', flexWrap: 'nowrap' }}>
								<img height='15rem' src={`${staticAssetPath}${amenitiesMap[amenity].icon}`} alt='' />
								<div style={{ whiteSpace: 'nowrap' }}>{amenitiesMap[amenity].title}</div>
							</Tagg>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Amenities;