import axios from 'axios';
import { Dispatch } from 'react';
import {
	ADD_ENQUIRY,
	UPDATE_ENQUIRY,
	DELETE_ENQUIRY,
	SET_ENQUIRY_INDEX,
	SET_LOAD_ENQUIRY_DATA,
	SET_ADD_MORE_ENQUIRY,
	ENQUIRY_PLACES_LOAD_SUCCESS,
	SEND_ENQUIRY_SUCCESS,
	SEND_ENQUIRY_FAIL,
	ALERT_TYPE,
} from '../utils/consts';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import store from '../store';
import { resetStore } from './root';

export const addEnquiry =
	(enquiry: object, navigate: Function) => async (dispatch: Dispatch<any>) => {
		let enquiries = store.getState().enquiry.enquiries;
		enquiries = enquiries.concat(enquiry);
		dispatch({
			type: ADD_ENQUIRY,
			payload: { enquiries },
		});
		navigate && navigate();
	};

export const updateEnquiry =
	(enquiryId: number, updatedEnquiry: any, navigate: Function) =>
	async (dispatch: Dispatch<any>) => {
		let oldEnquiries = store.getState().enquiry.enquiries;
		const enquiries = oldEnquiries.map((enquiry: any) => {
			if (enquiry.id === enquiryId) {
				return { ...updatedEnquiry };
			}
			return enquiry;
		});
		dispatch({
			type: UPDATE_ENQUIRY,
			payload: { enquiries },
		});
		navigate && navigate();
	};

export const deleteEnquiry = (enquiries: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: DELETE_ENQUIRY,
		payload: enquiries,
	});
};

export const setEnquiryIndex = (enquiryId: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_ENQUIRY_INDEX,
		payload: enquiryId,
	});
};

export const setLoadEnquiryData = (loadEnquiryData: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_LOAD_ENQUIRY_DATA,
		payload: loadEnquiryData,
	});
};

export const setAddMoreEnquiry = (addMoreEnquiry: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_ADD_MORE_ENQUIRY,
		payload: addMoreEnquiry,
	});
};

export const loadEnquiryPlaces = () => async (dispatch: Dispatch<any>) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const searchParams = { directBooking: true };
		const res = await axios.post(
			`/api/property/guest/properties`,
			{ ...searchParams },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch({
			type: ENQUIRY_PLACES_LOAD_SUCCESS,
			payload: { properties: res.data },
		});
	} catch (err: any) {
		if (!err.response.data.errors) {
			dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
		} else {
			if (err.response.status === 401) return;
			dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
		}
	}
};

export const sendEnquiries = (navigate: Function) => async (dispatch: Dispatch<any>) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const enquiries = store.getState().enquiry.enquiries;
		let enquiry: any;
		let multipleInquiriesMade = enquiries.length > 1;
		for (enquiry of enquiries) {
			const convenienceFee = Number((enquiry.amount * 0.09).toFixed(2));
			const gst = Number((convenienceFee * 0.18 + enquiry.amount * 0.085).toFixed(2));
			const totalAmount = enquiry.amount + convenienceFee + gst;
			const details = {
				originalAmount: enquiry.amount,
				totalAmount: totalAmount,
				amount: totalAmount,
				guestCount: enquiry.guestCount,
				bookingFrom: enquiry.startTime,
				bookingTo: enquiry.endTime,
				groupType: enquiry.groupType,
				servicesRequested: enquiry.additions1,
				addOnServicesRequested: enquiry.addOnServicesRequested,
				plateGlassCutlery: enquiry.cutlery,
				decorPermits: enquiry.additions2,
				additionalNotes: enquiry.hostMsg,
				multipleInquiriesMade: multipleInquiriesMade,
			};
			navigate && navigate();
			dispatch(resetStore('RESET_ENQUIRY'));
			await axios.post(
				`api/inquiry/addInquiry/${enquiry.propertyId}`,
				{ ...details },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
		}

		dispatch({
			type: SEND_ENQUIRY_SUCCESS,
			payload: {},
		});
	} catch (err: any) {
		if (!err.response.data.errors) {
			dispatch(setAlert('Server Not Running', ALERT_TYPE.DANGER));
		} else {
			if (err.response.status === 401) return;
			dispatch(setAlert(err.response.data.errors.message, ALERT_TYPE.DANGER));
		}
	}
};
