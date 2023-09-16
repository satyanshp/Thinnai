import {
	SEND_OTP_SUCCESS,
	USER_LOADED,
	VERIFY_OTP_SUCCESS,
	VERIFY_OTP_FAIL,
	UPDATE_USER_SUCCESS,
	LOGOUT,
	RESET_USER,
	LOADING_USER,
	Action,
	TOKEN_KEY,
	USER_LOAD_FAIL,
} from '../utils/consts';

const initialState = {
	token: localStorage.getItem(TOKEN_KEY),
	isAuthenticated: false,
	wrongOTP: false,
	user: {},
	loading: true,
};

const otpAuthReducer = (state = initialState, action: Action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
		case UPDATE_USER_SUCCESS:
		case VERIFY_OTP_SUCCESS:
			if (type === VERIFY_OTP_SUCCESS) localStorage.setItem(TOKEN_KEY, payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case LOGOUT:
		case SEND_OTP_SUCCESS:
		case VERIFY_OTP_FAIL:
		case USER_LOAD_FAIL:
			if (type === LOGOUT) localStorage.removeItem(TOKEN_KEY);
			return {
				...state,
				...payload,
				loading: false,
			};
		case RESET_USER:
			return { ...initialState };
		case LOADING_USER:
			return { ...state, loading: true };
		default:
			return state;
	}
};

export default otpAuthReducer;
