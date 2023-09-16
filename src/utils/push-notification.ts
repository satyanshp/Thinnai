import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { updateProfile } from '../actions/profile';
import store from '../store';

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyD9k8L8VgrFWZ_oSe8KTQZIPoZNY9K52x4',
	authDomain: 'thinnai-dabe5.firebaseapp.com',
	projectId: 'thinnai-dabe5',
	storageBucket: 'thinnai-dabe5.appspot.com',
	messagingSenderId: '719873962444',
	appId: '1:719873962444:web:b4ef934c91521d05a4ed69',
	measurementId: 'G-TE27FBL0L1',
});

const messaging = getMessaging(firebaseApp);

const requestPermission = () => {
	console.log('Requesting permission...');
	Notification.requestPermission().then(permission => {
		if (permission === 'granted') {
			console.log('Notification permission granted.');
		} else {
			console.log('Unable to get permission to notify.');
		}
	});
};

export const requestForToken = () => {
	getToken(messaging, {
		vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
	})
		.then(currentToken => {
			if (currentToken) {
				console.log('current token for client: ', currentToken);
				localStorage.setItem('fcmToken', currentToken);
				store.dispatch(
					updateProfile({
						fcmToken: currentToken,
					})
				);
			} else {
				console.log('No registration token available. Request permission to generate one.');
				requestPermission();
				requestForToken();
			}
		})
		.catch(err => {
			console.log('An error occurred while retrieving token. ', err);
		});
};

export const onMessageListener = () =>
	new Promise(resolve => {
		onMessage(messaging, payload => {
			console.log('ON MESSAGE !!!!');
			console.log('payload', payload);
			resolve(payload);
		});
	});
