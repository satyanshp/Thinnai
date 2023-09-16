import { Dispatch } from 'react';
import {
	SET_AMENITIES_FILTERS,
	SET_BOOKING_DATE,
	SET_CITY,
	SET_DIRECT_BOOKING,
	SET_GROUP_TYPE,
	SET_GUEST_COUNT,
	SET_LANDMARK,
	SET_SERVICES_FILTERS,
	SET_SORT,
} from '../utils/consts';

export const setCity = (city: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_CITY,
		payload: city,
	});
};

export const setLandmark = (landmark: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_LANDMARK,
		payload: landmark,
	});
};

export const setBookingDate = (date: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_BOOKING_DATE,
		payload: date,
	});
};

export const setGuestCount = (guestCount: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_GUEST_COUNT,
		payload: guestCount,
	});
};

export const setGroupType = (groupType: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_GROUP_TYPE,
		payload: groupType,
	});
};

export const setDirectBooking = (directBooking: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_DIRECT_BOOKING,
		payload: directBooking,
	});
};

export const setAmenitiesFilter = (amenities: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_AMENITIES_FILTERS,
		payload: amenities,
	});
};

export const setServicesFilter = (services: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_SERVICES_FILTERS,
		payload: services,
	});
};

export const setSort = (sortBy: object) => async (dispatch: Dispatch<any>) => {
	dispatch({
		type: SET_SORT,
		payload: sortBy,
	});
};
