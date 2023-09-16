import { Dispatch } from 'react';
import axios from 'axios';

export const uploadImage = async (
	file: any,
	path: string,
	fileName: string,
	dispatch: Dispatch<any>,
	updateActionType: string
) => {
	try {
		dispatch({
			type: updateActionType,
			payload: 0,
		});

		let response = await axios.get('/s3/sign', {
			params: { objectName: fileName, path },
		});

		var signedRequest = response.data.signedUrl;
		let fileKey = response.data.fileKey;

		var options = {
			headers: {
				'Content-Type': 'image',
			},
			onUploadProgress: function (progressEvent: any) {
				var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
				dispatch({
					type: updateActionType,
					payload: percentCompleted,
				});
			},
		};
		await axios.put(signedRequest, file, options);

		return fileKey;
	} catch (err: any) {}
};
