import {
	SEND_OTP_SUCCESS,
	SEND_OTP_FAIL,
	VERIFY_OTP_SUCCESS,
	VERIFY_OTP_FAIL,
	LOGOUT,
	USER_LOADED,
	USER_LOAD_FAIL,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
	ALERT_TYPE,
} from '../utils/consts';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import { loadProfile } from './profile';
import axios from 'axios';
import { Dispatch } from 'react';

interface Action {
	type?: string;
	payload?: any;
}

export const sendOTP = (phone: object) => async (dispatch: Dispatch<any>) => {
	try {
		const res = await axios.post(
			'/api/auth/guest/login',
			{ ...phone },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = Object.fromEntries(
			Object.entries(res.data).filter(([key]) => ['user'].includes(key))
		);
		dispatch({
			type: SEND_OTP_SUCCESS,
			payload: { ...data, wrongOTP: false },
		});
	} catch (err: any) {
		if (!err.response.data.errors) {
			dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
		} else {
			dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
		}
	}
};

export const verifyOTP =
	(otpData: object, navigate: Function) => async (dispatch: Dispatch<any>) => {
		try {
			const res = await axios.post(
				`/api/auth/guest/verifyOTP`,
				{ ...otpData },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = Object.fromEntries(
				Object.entries(res.data).filter(([key]) => ['token'].includes(key))
			);
			dispatch({
				type: VERIFY_OTP_SUCCESS,
				payload: data,
			});
			dispatch(loadUser({}));
			dispatch(loadProfile());
			navigate && navigate();
		} catch (err: any) {
			if (!err.response.data.errors) {
				dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
			} else {
				if (err.response.data.errors.message === 'Invalid OTP') {
					dispatch({
						type: VERIFY_OTP_FAIL,
						payload: { wrongOTP: true },
					});
				}
				dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
			}
		}
	};

export const loadUser =
	({
		redirectToRegister,
		redirectToInvited,
	}: {
		redirectToRegister?: Function;
		redirectToInvited?: Function;
	}) =>
	async (dispatch: Dispatch<any>) => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get('/api/auth/user/');
			if (!res.data.user.registered) {
				if (res.data.userData.bookingsInvitedTo.length === 0) {
					redirectToRegister && redirectToRegister();
				} else {
					redirectToInvited && redirectToInvited(res.data.userData.bookingsInvitedTo[0]);
				}
			}
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: USER_LOAD_FAIL,
			});
			if (!err.response.data.errors) {
				dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
			} else {
				if (err.response.status === 401) return;
				dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
			}
		}
	};

export const updateUser = (updateData: object) => async (dispatch: Dispatch<any>) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.patch(
			'/api/auth/user/update',
			{ ...updateData },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = Object.fromEntries(
			Object.entries(res.data).filter(([key]) => ['user'].includes(key))
		);
		dispatch({
			type: UPDATE_USER_SUCCESS,
			payload: data,
		});
	} catch (err: any) {
		if (!err.response.data.errors) {
			dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
		} else {
			dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
		}
	}
};

export const logout = () => (dispatch: Dispatch<Action>) => {
	dispatch({ type: LOGOUT, payload: null });
};
