import { RootState } from '../../../../store';
import { styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { useSelector } from 'react-redux';

const marksWithoutAlcohol = [
	{
		value: 0,
		label: '1 Hr',
	},
	{
		value: 34,
		label: '1.5 Hr',
	},
	{
		value: 68,
		label: '2.5 Hr',
	},
	{
		value: 100,
		label: '3.5 Hr',
	},
];

const marksWithAlcohol = [
	{
		value: 0,
		label: '1.5 Hr',
	},
	{
		value: 34,
		label: '2.5 Hr',
	},
	{
		value: 68,
		label: '3.5 Hr',
	},
	{
		value: 100,
		label: '4 Hr',
	},
];

const offers = [
	{
		offerName: 'For Gala Hours',
		offerId: 'galaHours',
		offerDescription: 'Most HAPPENING HOURS of the Day',
		offerImg: '/assets/images/detail/fire.svg',
		startTimeMtoF: '2022-12-20T12:01:00.000Z',
		endTimeMtoF: '2022-12-20T23:59:00.000Z',
		startTimeStoS: '2022-12-20T00:01:00.000Z',
		endTimeStoS: '2022-12-20T23:11:00.000Z',
	},
	{
		offerName: 'For Joy Hours',
		offerId: 'joyHours',
		offerDescription: 'Exclusive DISCOUNTS and OFFERS',
		offerImg: '/assets/images/detail/sale.svg',
		startTimeMtoF: '2022-12-20T00:00:00.000Z',
		endTimeMtoF: '2022-12-20T12:00:00.000Z',
		startTimeStoS: '2022-12-20T12:00:00.000Z',
		endTimeStoS: '2022-12-20T00:00:00.000Z',
	},
];

const PriceSlider = styled(Slider)({
	color: '#52af77',
	fontSize: '2.5rem',
	'& .MuiSlider-markLabel': {
		fontSize: '1rem',
		color:'#3D3D3D',
		'@media screen and (max-width: 600px)': {
			fontSize: '0.85rem',
		},
	},
	'& .MuiSlider-rail': {
		color: '#000',
		height: '0.1rem',
	},
	'& .MuiSlider-track': {
		border: 'none',
		color: '#000',
	},
	'& .MuiSlider-slider': {
		color: '#8f7ef3',
	},
	'& .MuiSlider-thumb': {
		height: 12,
		width: 12,
		// backgroundColor: '#8F7EF3',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit',
		},
		'&:before': {
			display: 'none',
		},
	},
	'& .MuiSlider-valueLabel': {
		top: '80px',
		fontFamily: 'Open Sans',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '0.65rem',
		lineHeight: '1rem',
		color: '#000000',
		padding: '0.438rem 0.938rem',
		'@media screen and (max-width: 600px)': {
			padding: '0.25rem 0.5rem',
			fontSize: '0.5rem',
		},
		'&:before': { display: 'none' },
		'&.MuiSlider-valueLabelOpen': {
			transform: 'translateY(-100%) scale(1.5) !important',
			marginTop: '1rem',
			marginBottom: '1rem',
			'@media screen and (max-width: 600px)': {},
		},
		'& > *': {
			fontFamily: 'Open Sans',
			'@media screen and (max-width: 600px)': {
				fontSize: '0.6rem',
				fontWeight: 500,
			},
		},
	},
});

export default function Price() {
	const guestCount: string = useSelector<RootState, string>(state => state.search.guestCount);
	const pricing: any = useSelector<RootState, any>(state => state.details.property.pricing);

	const [checked, setChecked] = React.useState(false);
	const [checked2, setChecked2] = React.useState(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked2(event.target.checked);
	};

	function valuetext(value: number, offerType: string) {
		if (!pricing) return '₹0';
		let timeCategory: string = '';
		switch (value) {
			case 0:
				timeCategory = checked || checked2 ? 'oneAndHalfHour' : 'oneHour';
				break;
			case 34:
				timeCategory = checked || checked2 ? 'twoAndHalfHour' : 'oneAndHalfHour';
				break;
			case 68:
				timeCategory = checked || checked2 ? 'threeAndHalfHour' : 'twoAndHalfHour';
				break;
			case 100:
				timeCategory = checked || checked2 ? 'four' : 'threeAndHalfHour';
				break;
		}

		let price = 0;
		const alcoholStatus = checked || checked2 ? 'withAlcohol' : 'withoutAlcohol';

		let guestCountCategory = Math.ceil(Number(guestCount) / 2) - 1;

		if (offerType === 'joyHours') {
			price = pricing.joyHour[guestCountCategory][alcoholStatus][timeCategory];
		} else if (offerType === 'galaHours') {
			price = pricing?.galaHour[guestCountCategory][alcoholStatus][timeCategory];
		}

		return `₹ ${price}`;
	}

	function formatTime(time: string) {
		const date = new Date(time);
		const hours = date.getUTCHours();
		const ampm = hours >= 12 ? 'pm' : 'am';
		const hours12 = hours % 12 || 12;
		return `${hours12} ${ampm}`;
	}

	return (
		<Box
			mt={{
				xl: '1.2rem',
				md: '1.2rem',
				sm: '1rem',
				xs: '1rem',
			}}
		>
			<Box
				display={{ md: 'block', xs: 'block' }}
				width={{ sm: '100%', xs: '100%' }}
				fontSize={{ sm: 'initial', xs: '0.625rem' }}
			>
				<Box
					display='grid'
					gridTemplateColumns={{
						xl: 'repeat(2, 1fr)',
						md: 'repeat(2, 1fr)',
						sm: 'repeat(1, 1fr)',
						xs: 'repeat(1, 1fr)',
					}}
					gap={3}
				>
					<Box
						sx={{
							border: '0.5px solid #868686',
							paddingX: '1.875rem',
							paddingY: '0.313rem',
							borderRadius: '5px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<FormControlLabel
							sx={{
								margin: '0',
							}}
							control={<Checkbox checked={checked} onChange={handleChange} />}
							label={
								<Typography sx={{ paddingLeft: '0.625rem', fontSize: '1.125rem' }}>
									Alcohol Permit
								</Typography>
							}
						/>
						<Box>
							<img
								width='45px'
								style={{
									maxHeight: '2.3rem',
								}}
								src='/assets/images/detail/alcohol.svg'
								alt=''
							/>
						</Box>
					</Box>
					<Box
						sx={{
							border: '0.5px solid #868686',
							paddingX: '1.875rem',
							paddingY: '0.313rem',
							borderRadius: '5px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<FormControlLabel
							sx={{
								margin: '0',
							}}
							control={
								<Checkbox
									sx={{
										paddingY: '0.625rem',
									}}
									checked={checked2}
									onChange={handleChange2}
								/>
							}
							label={
								<Typography sx={{ paddingLeft: '0.625rem', fontSize: '1.125rem' }}>
									Hookah Permit
								</Typography>
							}
						/>
						<Box>
							<img
								width='45px'
								style={{
									maxHeight: '2.3rem',
								}}
								src='/assets/images/detail/hooka.svg'
								alt=''
							/>
						</Box>
					</Box>
				</Box>
				<Box height={20} />
				{offers.map((item, index) => (
					<Box
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							overflow: 'hidden',
							marginBottom: '1.875rem',
							borderRadius: '14px',
							paddingBottom: '1.4rem',
						}}
						bgcolor={item.offerName === 'For Gala Hours' ? '#FEFCEF' : '#F7F5FF '}
						position='relative'
						className={
							item.offerName === 'For Gala Hours'
								? 'gala_hours pricing-container'
								: 'pricing-container'
						}
						key={index}
					>
						<Box
							sx={{
								bgcolor: item.offerName === 'For Joy Hours' ? '#F7F5FF' : '#FEFCEF',
							}}
							className='pricing-hour-container'
							mt={5}
						>
							<Box
								className='aboutPlace__header'
								sx={{
									fontWeight: '600',
									fontSize: '1.2rem',
									lineHeight: '19px',
									textAlign: 'center',
								}}
								mt={{
									xl: item.offerName === 'For Joy Hours' ? 0 : 3,
									md: item.offerName === 'For Joy Hours' ? 0 : 9,
									sm: item.offerName === 'For Joy Hours' ? 0 : 5,
									xs: item.offerName === 'For Joy Hours' ? 0 : 9,
								}}
							>
								{item.offerName}
							</Box>
							<Box height={15} />

							<Box className='price-time-container'>
								<Box
									display='flex'
									flexDirection='row'
									justifyContent='space-evenly'
									sx={{
										fontWeight: '400',
										fontSize: '0.625rem',
										lineHeight: '14px',
									}}
								>
									<Box>
										<Box
											textAlign='center'
											fontFamily='Open Sans'
											fontWeight='400'
											fontSize='0.9rem'
										>
											Mon-Fri
										</Box>
										<Box
											textAlign='center'
											mt='0.625rem'
											fontSize='0.9rem'
											fontWeight='600'
											fontFamily='Open Sans'
											textTransform='uppercase'
										>
											{formatTime(item.startTimeMtoF)} - {formatTime(item.endTimeMtoF)}
										</Box>
									</Box>
									<Box>
										<Box
											textAlign='center'
											fontFamily='Open Sans'
											fontWeight='400'
											fontSize='0.9rem'
										>
											Sat-Sun
										</Box>
										<Box
											textAlign='center'
											mt='0.625rem'
											fontSize='0.9rem'
											fontWeight='600'
											fontFamily='Open Sans'
											textTransform='uppercase'
										>
											{formatTime(item.startTimeStoS)} - {formatTime(item.endTimeStoS)}
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box height={5} />
						<Box className='pricing-slider-container'>
							<PriceSlider
								disabled
								getAriaLabel={val => val.toString()}
								sx={{
									'& .MuiSlider-thumb': {
										background: item.offerId === 'joyHours' ? '#8F7EF3' : '#D0B629',
									},
									'& .MuiSlider-valueLabel': {
										background: item.offerId === 'joyHours' ? '#EBE9F8' : '#F5EDD1',
									},
								}}
								track={false}
								defaultValue={[0, 34, 68, 100]}
								getAriaValueText={val => valuetext(val, item.offerId)}
								valueLabelFormat={val => valuetext(val, item.offerId)}
								step={34}
								marks={checked ? marksWithAlcohol : marksWithoutAlcohol}
								valueLabelDisplay='on'
							/>
						</Box>
						<Box height={50} />
					</Box>
				))}
			</Box>
		</Box>
	);
}
