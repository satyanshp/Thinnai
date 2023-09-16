import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import '../../../styles/Detail/picCarousel.css';

function PropertyPicturesCarousel() {
	// at least 4 images required
	const propertyPictures: string[] = useSelector(
		(state: RootState) => state.details.property.propertyPictures
	);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		autoplay: true,
		speed: 1000,
		arrows: false,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		pauseOnHover: true,
	};

	return (
		<Grid container spacing={1} alignItems='center'>
			<Grid item xs={6}>
				<Box style={{ borderRadius: '11px', height: '60vh' }}>
					<img
						style={{
							objectFit: 'cover',
							height: '100%',
							width: '100%',
							margin: 'auto',
							borderRadius: '15px',
						}}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${propertyPictures[0]}`}
						alt=''
					/>
				</Box>
			</Grid>
			<Grid container item xs={6} columnSpacing={1} rowGap={1}>
				<Grid item xs={6} sx={{ height: '29vh' }}>
					<img
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							margin: 'auto',
							borderRadius: '15px',
						}}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${propertyPictures[0]}`}
						alt=''
					/>
				</Grid>
				<Grid item xs={6} sx={{ height: '29vh' }}>
					<img
						style={{
							objectFit: 'cover',
							height: '100%',
							width: '100%',
							margin: 'auto',
							borderRadius: '15px',
						}}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${propertyPictures[0]}`}
						alt=''
					/>
				</Grid>
				<Grid item xs={6} sx={{ height: '29vh' }}>
					<img
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							margin: 'auto',
							borderRadius: '15px',
						}}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${propertyPictures[0]}`}
						alt=''
					/>
				</Grid>
				<Grid item xs={6} sx={{ height: '29vh' }}>
					<img
						style={{
							objectFit: 'cover',
							height: '100%',
							width: '100%',
							margin: 'auto',
							borderRadius: '15px',
						}}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${propertyPictures[0]}`}
						alt=''
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default PropertyPicturesCarousel;
