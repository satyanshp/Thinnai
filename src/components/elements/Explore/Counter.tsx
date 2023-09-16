import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setGuestCount } from '../../../actions/search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface counterProps {
	guest?: boolean;
	maxValue: number;
}

const Counter = ({ guest, maxValue }: counterProps) => {
	const dispatch: Dispatch<any> = useDispatch();

	const guestCount = useSelector<RootState, number>(state => state.search.guestCount);

	const handleIncrement = () => {
		if (guestCount < maxValue) {
			dispatch(setGuestCount({ guestCount: guestCount + 1 }));
		}
	};

	const handleDecrement = () => {
		if (guestCount > 1) {
			dispatch(setGuestCount({ guestCount: guestCount - 1 }));
		}
	};

	return (
		<ButtonGroup
			size='small'
			style={{ border: '1px solid #868686', height: '33px', width: '100%' }}
			aria-label='small button group'
		>
			<Button onClick={handleDecrement} style={{ border: 'none' }} disabled={guestCount === 0}>
				-
			</Button>
			<Button style={{ border: 'none', flex: '1', textTransform: 'capitalize' }}>
				{guestCount} {guest && `Guest${guestCount > 1 ? 's' : ''}`}
			</Button>
			<Button onClick={handleIncrement} style={{ border: 'none' }}>
				+
			</Button>
		</ButtonGroup>
	);
};

export default Counter;
