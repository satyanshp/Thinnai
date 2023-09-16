import { AlertPayload } from '../../../reducers/alert';
import { RootState } from '../../../store';
import { REMOVE_ALERT } from '../../../utils/consts';
import Alert from '@mui/material/Alert';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Alerts = () => {
	const alerts = useSelector<RootState, AlertPayload[]>(state => state.alert);
	const dispatch = useDispatch();

	return (
		<div>
			<Fragment>
				{alerts &&
					alerts.length > 0 &&
					alerts.map(alert => (
						<Alert
							className='fade error-alert slide-in-top'
							onClose={() =>
								dispatch({
									type: REMOVE_ALERT,
									payload: alert.alertId,
								})
							}
							style={{ position: 'fixed', zIndex: 199 }}
							severity={alert.alertType ?? 'info'}
							key={alert.alertId}
						>
							{alert.msg}
						</Alert>
					))}
			</Fragment>
		</div>
	);
};

export default Alerts;
