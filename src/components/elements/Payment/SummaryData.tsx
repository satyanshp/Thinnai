import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store';

const SummaryData = () => {
	const location = useLocation();
	const congratulations = location.pathname;

	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);
	const index = enquiries.reduce(
		(iMax: any, x: any, i: any, arr: any) => (x.amount > arr[iMax].amount ? i : iMax),
		0
	);
	const amount = useSelector<RootState, any>(state => state.enquiry.enquiries[index]?.amount) ?? 0;

	const [convenienceFee, setConvenienceFee] = useState<number>(0);
	useEffect(() => {
		setConvenienceFee(Number((amount * 0.09).toFixed(2)));
	}, [amount]);
	const [cancellationFee, setCancellationFee] = useState<number>(0);
	const [GST, setGST] = useState<number>(0);
	useEffect(() => {
		setGST(Number((convenienceFee * 0.18 + amount * 0.085).toFixed(2)));
	}, [amount, convenienceFee]);

	return (
		<Box
			padding={congratulations ? '1.25rem 0px 0px 0px' : '2.5rem 3.125rem 0.938rem 3.125rem'}
			marginX={{
				xl: congratulations ? '0px' : '1.875rem',
				md: congratulations ? '0px' : '1.875rem',
				sm: congratulations ? '0px' : '1.875rem',
				xs: '0',
			}}
		>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={congratulations ? '5px' : '1.5rem'}
			>
				<Typography fontSize='1rem' fontWeight='300' color='#383838'>
					Services & Add Ons
				</Typography>
				<Typography fontFamily='Open Sans' fontSize='1rem' fontWeight='300' color='#24BA0E'>
					₹ {amount}
				</Typography>
			</Box>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={congratulations ? '5px' : '1.5rem'}
			>
				<Typography fontSize='1rem' fontWeight='300' color='#383838'>
					Convenience Fee
				</Typography>
				<Typography fontFamily='Open Sans' fontSize='1rem' fontWeight='300' color='#24BA0E'>
					₹ {convenienceFee}
				</Typography>
			</Box>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={congratulations ? '5px' : '1.5rem'}
			>
				<Typography fontSize='1rem' fontWeight='300' color='#383838'>
					Cancellation Charges
				</Typography>
				<Typography fontFamily='Open Sans' fontSize='1rem' fontWeight='300' color='#24BA0E'>
					₹ {cancellationFee}
				</Typography>
			</Box>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={congratulations ? '5px' : '1.5rem'}
			>
				<Typography fontSize='1rem' fontWeight='300' color='#383838'>
					GST (18%)
				</Typography>
				<Typography fontFamily='Open Sans' fontSize='1rem' fontWeight='300' color='#24BA0E'>
					₹ {GST}
				</Typography>
			</Box>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				marginBottom={congratulations ? '5px' : '1.5rem'}
			>
				<Typography fontSize='1rem' fontWeight='300' color='#24BA0E'>
					Wallet Money
				</Typography>
				<Typography fontFamily='Open Sans' fontSize='1rem' fontWeight='300' color='#24BA0E'>
					₹ {GST}
				</Typography>
			</Box>
		</Box>
	);
};

export default SummaryData;
