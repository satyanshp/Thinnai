import { Button } from '@mui/material';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendEnquiries } from '../../../actions/enquiry';
import { recordPayment } from '../../../actions/payment';
import { startLoading } from '../../../actions/root';
import { RootState } from '../../../store';
import { ROUTES } from '../../../utils/routing/routes';

const ProceedButton = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const navigate = useNavigate();

	const enquiryLoading = useSelector<RootState, boolean>(state => state.enquiry.loading);
	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);
	const index = enquiries.reduce(
		(iMax: any, x: any, i: any, arr: any) => (x.amount > arr[iMax].amount ? i : iMax),
		0
	);
	const amount = useSelector<RootState, any>(state => state.enquiry.enquiries[index]?.amount) ?? 0;

	const onClick = () => {
		dispatch(startLoading('LOADING_DETAILS'));
		dispatch(recordPayment({ host: enquiries[index].host, paymentAmount: amount }));
		dispatch(sendEnquiries(() => navigate(ROUTES.CONGRATULATIONS)));
	};

	return (
		<Button
			style={{
				background: '#000000',
				// padding: '0.425rem 6.25rem',
				textTransform: 'capitalize',
				display: 'block',
				width: '75%',
			}}
			sx={{
				fontSize: '1.5rem',
				fontWeight: '500',
			}}
			variant='contained'
			onClick={onClick}
		>
			{enquiryLoading ? 'Loading...' : 'Proceed'}
		</Button>
	);
};

export default ProceedButton;
