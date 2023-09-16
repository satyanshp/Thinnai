import { Box } from '@mui/material';
import { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCancelledBookings } from '../../../actions/booking';
import { RootState } from '../../../store';
import CancelledCard from '../../elements/BookingTracking/SummaryCards/CancelledCard';
import Loading from '../../elements/Loading/Loading';

const Cancelled = () => {
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(loadCancelledBookings());
	}, [dispatch]);

	const bookingLoading = useSelector<RootState, any>(state => state.booking.loading);
	const cancelledBookings = useSelector<RootState, any>(state => state.booking.cancelled);

	return (
		<>
			{bookingLoading && (
				<Box
					sx={{
						height: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						width={{
							md: '30%',
							sm: '40%',
							xs: '60%',
						}}
					>
						<Loading />
					</Box>
				</Box>
			)}
			{!bookingLoading && (
				<Box
					display='flex'
					flexDirection='column'
					gap={{
						xl: '4.625rem',
						md: '4.625rem',
						sm: '1.875rem',
						xs: '1.875rem',
					}}
					mt={{
						xl: '4.625rem',
						md: '4.625rem',
						sm: '1.875rem',
						xs: '1.875rem',
					}}
					marginBottom={{
						xl: '1.875rem',
						md: '1.875rem',
						sm: '6.25rem',
						xs: '6.25rem',
					}}
					overflow='hidden'
				>
					{cancelledBookings?.map((item: any, index: number) => (
						<CancelledCard key={index} item={item} />
					))}
				</Box>
			)}
		</>
	);
};

export default Cancelled;
