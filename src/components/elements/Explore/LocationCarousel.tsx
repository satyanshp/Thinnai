import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { setCity, setLandmark } from '../../../actions/search';
import { ICitySettings } from '../../../reducers/appSettings';
import { RootState } from '../../../store';
import '../../styles/Main/locationCarousel.scss';

const Item = styled(Paper)(() => ({
	fontSize: '0.85rem',
	minHeight: '32px',
	border: 'none',
	borderRadius: '7px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	paddingLeft: '1.5rem',
	paddingRight: '1.5rem',
	boxShadow: 'none',
	fontFamily: 'Open Sans',
	fontStyle: 'normal',
	fontWeight: '400',
	textAlign: 'center',
	lineHeight: '16px',
	cursor: 'pointer',
}));

interface locationProp {
	onClick: () => void;
}

const LocationCarousel = ({ onClick }: locationProp) => {
	const cities = useSelector<RootState, ICitySettings[]>(state => state.appSettings.cities);
	const staticAssetPath = useSelector<RootState, string>(
		state => state.appSettings.staticAssetPath
	);
	const [selectLandmark, setSelectLandmark] = useState<any>([]);

	const dispatch: Dispatch<any> = useDispatch();

	//NearMe Selection
	const [selected, setSelected] = useState(true);

	const [cityData, setCityData] = useState<ICitySettings>();

	//City Selection
	var slide = document.getElementsByClassName('slick-slide');

	const removeLocation = () => {
		for (var i = 0; i < slide.length; i++) {
			slide[i].classList.remove('slick-select');
		}
	};

	const selectLocation = (index: number) => {
		slide[index].classList.add('slick-select');
	};

	const locationSelect = (index: number) => {
		for (var i = 0; i < slide.length; i++) {
			slide[i].classList.remove('slick-select');
		}
		setSelected(false);
		selectLocation(index);
		setCityData(cities[index]);
	};

	const landmarkSelect = (landmark: string, index: number) => {
		dispatch(setLandmark({ landmark }));
		if (selectLandmark.includes(cityData?.landmarks[index])) {
			setSelectLandmark([
				...selectLandmark.filter((item: string) => item !== cityData?.landmarks[index]),
			]);
		} else {
			setSelectLandmark([...selectLandmark, cityData?.landmarks[index]]);
		}
	};

	useEffect(() => {
		dispatch(setCity({ city: cityData?.name }));
	}, [cityData, dispatch]);

	const Selection = () => {
		setSelected(true);
		removeLocation();
	};

	const customSlider = useRef<Slider | null>(null);

	function next() {
		customSlider.current?.slickNext();
	}
	function prev() {
		customSlider.current?.slickPrev();
	}

	const settings = {
		dots: false,
		infinite: false,
		speed: 300,
		swipeToSlide: true,
		slidesToShow: 9,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};

	return (
		<Box
			sx={{
				'@media (min-width: 2400px)': {
					maxWidth: '90%',
					margin: 'auto',
				},
				'@media (min-width: 2600px)': {
					maxWidth: '80%',
					margin: 'auto',
				},
			}}
			className='locationCarousel'
			margin={{ xs: '0px 0.313rem', sm: '0' }}
		>
			<Grid
				container
				height={{ xl: '100px', xs: '80px' }}
				alignItems='center'
				className='locationContainer'
				// borderBottom={{sm:'none',xs:'1px solid #E1E1E1'}}
			>
				<CssBaseline />
				<Grid item xl={1.5} md={1.5} sm={1.5} xs={2.3}>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						marginTop={{
							xl: '0px',
							md: '0px',
							sm: '0px',
							xs: '-2rem',
						}}
					>
						{cities?.length > 9 && (
							<Box
								width={{ sm: '32px', xs: '20px' }}
								height={{ sm: '32px', xs: '20px' }}
								borderRadius='50%'
								border='1px solid black'
								display={{ xl: 'flex', md: 'flex', sm: 'none', xs: 'flex' }}
								justifyContent='center'
								alignItems='center'
								sx={{ cursor: 'pointer', background: '#FFFFFF' }}
								onClick={prev}
							>
								<NavigateBeforeIcon
									sx={{ '@media (max-width: 600px)': { fontSize: '0.775rem' } }}
								/>
							</Box>
						)}

						<Box
							marginLeft='1.875rem'
							height={{ xl: '100%', md: '100%', sm: '100%', xs: '100%' }}
							display={{ xl: 'flex', md: 'flex', sm: 'none', xs: 'none' }}
							flexDirection='column'
							justifyContent={{ sm: 'center', xs: 'flex-start' }}
							alignItems='center'
							gap={1}
							position='relative'
							onClick={() => Selection()}
							className={selected ? 'nearme selected' : 'nearme'}
							paddingBottom='10px'
						>
							<Box
								height={{ xl: '100%', md: '100%', sm: '100%', xs: '61%' }}
								sx={{
									aspectRatio: '1',
									background: '#8F7EF3',
									borderRadius: '50%',
								}}
								padding='0.5rem'
								display='flex'
								justifyContent='center'
								alignItems='center'
							>
								<NearMeIcon
									sx={{
										color: 'white',
										fontSize: '2rem',
										'@media (max-width: 600px)': { fontSize: '1.125rem' },
									}}
								/>
							</Box>
							<Box
								fontSize={{ sm: '0.8vw', xs: '0.625rem' }}
								position='relative'
								top='0rem'
								sx={{ cursor: 'default' }}
							>
								Near Me
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xl={8}
					md={8}
					sm={9.5}
					xs={8.5}
					height={{ xl: '100%', md: '100%', sm: '100%', xs: '100%' }}
					alignItems='start'
					overflow='hidden'
				>
					<Box height='100%'>
						<Slider {...settings} ref={customSlider}>
							{cities?.map((item, index) => (
								<div style={{ height: '100%' }} onClick={() => locationSelect(index)} key={index}>
									<Grid
										height={{
											xl: '100%',
											md: '100%',
											sm: '100% !important',
											xs: '95% !important',
										}}
										display='flex'
										flexDirection='column'
										justifyContent='center'
										alignItems='center'
										gap={{ xl: 1, md: 1, sm: 1, xs: 1 }}
										paddingBottom='10px'
									>
										<Box
											height={{ xl: '90%', md: '90%', sm: '100%', xs: '100%' }}
											sx={{
												aspectRatio: '1',
												borderRadius: '50%',
												overflow: 'hidden',
											}}
											display='flex'
											justifyContent='center'
											alignItems='center'
										>
											<img
												style={{ objectFit: 'contain', height: '100%' }}
												src={staticAssetPath + item.thumbnail}
												alt=''
											/>
										</Box>
										<Box
											fontSize={{ sm: '0.8vw', xs: '0.625rem' }}
											position='relative'
											top='0.1rem'
											height='auto !important'
										>
											{item.name}
										</Box>
									</Grid>
								</div>
							))}
						</Slider>
					</Box>
				</Grid>
				<Grid
					item
					xl={2.5}
					md={2.5}
					sm={false}
					xs={1}
					display={{ xl: 'flex', md: 'flex', sm: 'none', xs: 'flex' }}
					justifyContent='space-evenly'
					alignItems='center'
					position='relative'
					top={{ xs: '-15px', sm: '0px' }}
				>
					{cities?.length > 9 && (
						<Box
							width={{ sm: '32px', xs: '20px' }}
							height={{ sm: '32px', xs: '20px' }}
							borderRadius='50%'
							border='1px solid black'
							display='flex'
							justifyContent='center'
							alignItems='center'
							sx={{ cursor: 'pointer', background: '#FFFFFF' }}
							onClick={next}
						>
							<NavigateNextIcon sx={{ '@media (max-width: 600px)': { fontSize: '0.875rem' } }} />
						</Box>
					)}
					<Box
						width={{ xl: '50%', md: '40%', sm: '70%', xs: '80%' }}
						display={{ sm: 'none', md: 'block', xs: 'none' }}
					>
						<Button
							variant='outlined'
							onClick={onClick}
							style={{
								borderColor: 'black',
								color: 'black',
								height: '2.5rem',
								width: '100%',
								minWidth: 'max-content',
								borderWidth: '0.5px',
							}}
						>
							<img
								style={{ marginRight: '0.813rem', height: '1rem' }}
								src='/assets/images/main/setting.svg'
								alt=''
							/>
							<Box
								fontSize={{ xl: '0.875rem', md: '0.813rem', sm: '0.688rem' }}
								sx={{
									textTransform: 'capitalize',
									fontWeight: '600',
									lineHeight: '17px',
								}}
							>
								Filter By
							</Box>
						</Button>
					</Box>
				</Grid>
			</Grid>
			<Box marginTop='0.5rem'>
				<Divider />
			</Box>

			{!selected && (
				<Box display='flex' gap={1} margin='0.625rem 1.25rem'>
					{cityData?.landmarks.map((landmark, landmarkIndex) => (
						<Item
							style={{
								cursor: 'pointer',
								border: selectLandmark.includes(cityData?.landmarks[landmarkIndex])
									? '1px solid ' + ['#8F7EF3', '#AD6800', '#2B941C'][landmarkIndex % 3]
									: '',
							}}
							sx={{
								color: ['#6053AE', '#AD6800', '#2B941C'][landmarkIndex % 3],
								background: ['#F0EDFF', '#F2F0DF', '#ECFFEA'][landmarkIndex % 3],
								'&:hover': {
									border: '1px solid ' + ['#8F7EF3', '#AD6800', '#2B941C'][landmarkIndex % 3],
								},
							}}
							key={landmarkIndex}
							onClick={() => landmarkSelect(landmark as string, landmarkIndex)}
						>
							{landmark}
						</Item>
					))}
				</Box>
			)}
			<Box display={{ md: 'none', xs: 'flex' }} justifyContent='flex-end'>
				<Box
					width={{ sm: '70%', xs: '30%' }}
					display={{ sm: 'none', md: 'none', xs: 'flex' }}
					height='30px'
				>
					<Button
						onClick={onClick}
						variant='outlined'
						style={{
							borderColor: 'black',
							color: 'black',
							height: '2rem',
							width: '60%',
							minWidth: 'max-content',
							paddingLeft: '2.7rem',
							paddingRight: '2.7rem',
							marginTop: '1rem',
							borderRadius: '6px',
						}}
					>
						<Box
							height='30px'
							width='fit-content'
							display='flex'
							justifyContent='center'
							alignItems='center'
						>
							<img
								style={{ marginRight: '0.625rem', height: '40%' }}
								src='/assets/images/main/setting.svg'
								alt=''
							/>
						</Box>
						<Box
							fontSize={{ xs: '0.831rem', sm: '0.688rem' }}
							sx={{
								textTransform: 'capitalize',
								lineHeight: '9.75px',
							}}
						>
							Filter By
						</Box>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default LocationCarousel;
