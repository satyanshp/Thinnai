import Box from '@mui/material/Box';
import Slider from 'react-slick';
import '../../styles/Detail/timeCarousel.scss';

interface timeProps {
	data: { time: string }[];
	onClick: (i: number) => void;
	setTimeOnSlide: (value: number) => void;
	currentIndex: number | null;
}

const TimeCarousel = ({ data, onClick, setTimeOnSlide, currentIndex }: timeProps) => {
	const settings = {
		focusOnSelect: true,
		speed: 500,
		slidesToShow: 10,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0px',
		className: 'centered',
		initialSlide: currentIndex ?? 0,
		swipeToSlide: true,
		swipe: true,
		draggable: true,
		afterChange: function (currentSlide: number) {
			var i = currentSlide ? currentSlide : 0;
			setTimeOnSlide(i);
		},
	};

	return (
		<Box className='timeCarousel' height={{ md: '3rem', xs: '3.5rem' }}>
			<Slider {...settings}>
				{data.map((time, index) => (
					<Box
						display='flex'
						justifyContent='center'
						gap={0.7}
						onClick={() => onClick(index)}
						key={index}
					>
						<Box
							display='flex'
							height={12}
							width='1.2px'
							margin='auto'
							sx={{ background: '#A2E898' }}
						/>
						{index % 2 === 0 && (
							<Box
								height='5px'
								width='5px'
								margin='auto'
								borderRadius='50%'
								sx={{ background: '#24BA0E' }}
							/>
						)}
						{index % 2 === 0 && (
							<Box fontSize='0.27rem' textAlign='center' className='time'>
								{time.time}
							</Box>
						)}
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default TimeCarousel;
