import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from 'date-fns';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { loadSchedule } from '../../../actions/schedule';
import { setBookingDate } from '../../../actions/search';
import { RootState } from '../../../store';
import '../../styles/Main/dateCarousel.scss';

interface datesCarouselProps {
	propertyId?: string;
	passedDate?: Date;
	bg?:string;
}

const DatesCarousel = ({ propertyId, passedDate,bg }: datesCarouselProps) => {
	const Cell = styled(Paper)(({ theme }) => ({
		fontSize: '1.35rem',
		fontWeight: '500',
		height: '37.8px',
		borderRadius: '50%',
		aspectRatio: '1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		margin: 'auto',
		boxShadow: 'none',
		cursor: 'pointer',
	}));

	const dispatch: Dispatch<any> = useDispatch();

	const [currentDate, setCurrentDate] = useState(new Date());

	const daySchedule = useSelector<RootState, any>(state => state.schedule.unavailableDatesByDay);

	useEffect(() => {
		if (propertyId) {
			dispatch(loadSchedule(propertyId, startOfMonth(currentDate), endOfMonth(currentDate)));
		}
		if (passedDate) {
			setCurrentDate(new Date(passedDate));
		}
	}, []);

	const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const value = currentDate;
	const startDate = startOfMonth(value);
	const endDate = endOfMonth(value);
	const numDays = differenceInDays(endDate, startDate) + 1;

	const prevMonth = () => setCurrentDate(sub(value, { months: 1 }));
	const nextMonth = () => setCurrentDate(add(value, { months: 1 }));

	const handleClickDate = (index: number) => {
		const date = setDate(value, index);
		setCurrentDate(date);
	};

	useEffect(() => {
		dispatch(
			setBookingDate({
				bookingDate: new Date(currentDate!.toString()).toJSON(),
			})
		);
	}, [currentDate, dispatch]);

	const myRef = useRef<null | HTMLDivElement>(null);

	var today = new Date().getDate() - 1;
	const inview = today;

	const settings: SliderSettings = {
		infinite: false,
		speed: 500,
		slidesToShow: 7,
		swipe: true,
		draggable: true,
		swipeToSlide: true,
		initialSlide: inview,
	};

	return (
		<Box
			className='dates'
			sx={{
				fontFamily: 'Open Sans',
				fontStyle: 'normal',
			}}
		>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				bgcolor={bg ?? '#EAE7FF'}
				gap={1}
				sx={{
					fontWeight: '600',
					fontSize: '1.1rem',
					lineHeight: '27px',
					paddingTop:"0.5rem",
					paddingBottom:"0.5rem",
					letterSpacing: '-0.065em',
					color: '#1A191E',
				}}
			>
				<Box onClick={prevMonth} sx={{ cursor: 'pointer' }}>
					{'<'}
				</Box>
				<Box>{format(value, 'LLLL')}</Box>
				<Box onClick={nextMonth} sx={{ cursor: 'pointer' }}>
					{'>'}
				</Box>
			</Box>
			<Box height={20} />
			<Box display='flex' id='dates-count' height='auto' className='dates-count'>
				<Slider {...settings}>
					{Array.from({ length: numDays }).map((_, index) => {
						//temp hack for app compatibility
						const checkDateBase = new Date(
							new Date(new Date(value).setDate(1)).setHours(5, 30, 0, 0)
						);
						const checkDate = new Date(
							checkDateBase.setDate(checkDateBase.getDate() + index)
						).toISOString();
						const isUnavailable =
							daySchedule.includes(checkDate) || Date.parse(checkDate) < Date.now() - 86400000;
						const date = index + 1;
						const formatDate = setDate(checkDateBase, date);
						const dayNumber = formatDate.getDay();
						const dayName = weeks[dayNumber];
						const isCurrentDate = date === value.getDate();

						return (
							<Box margin='0 0.5rem 0 0.5rem' key={index}>
								<Cell
									key={date}
									ref={isCurrentDate ? myRef : null}
									className={
										isUnavailable ? 'unDate test' : isCurrentDate ? 'focused test' : 'test'
									}
									sx={{
										background: isCurrentDate ? '#8F7EF3' : 'none',
										color: isCurrentDate ? '#FFFFFF' : isUnavailable ? '#B63232' : '',
										position: 'relative',
										overflow: 'hidden',
										fontWeight: '600',
										fontSize: '1.2rem',
									}}
									onClick={() => {
										if (!isUnavailable) {
											handleClickDate(date);
										}
									}}
								>
									{date}
								</Cell>
								<Box
									sx={{
										fontSize: '0.631rem',
										textAlign: 'center',
										color: isCurrentDate ? '#8F7EF3' : '',
										margin: '8px 0 8px 0',
										
									}}
								>
									{dayName}
								</Box>
							</Box>
						);
					})}
				</Slider>
				<Box height={20} />
			</Box>
		</Box>
	);
};

export default DatesCarousel;
