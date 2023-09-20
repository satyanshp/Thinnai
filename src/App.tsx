import { loadAppSettings } from './actions/appSettings';
import { loadUser, logout } from './actions/guestAuth';
import { loadLandingProperty } from './actions/landing';
import { loadProfile } from './actions/profile';
import CofnirmInvitedToBooking from './components/Pages/ConfirmInvitedToBooking';
import Policy from './components/elements/HostLanding/Policy';
import Loading from './components/elements/Loading/Loading';
import NotFound from './components/elements/NotFound/NotFound';
import './components/styles/main.css';
import store from './store';
import { TOKEN_KEY } from './utils/consts';
import PrivateRoute from './utils/routing/PrivateRoute';
import { BOOKING_VIEW_TYPE, ROUTES } from './utils/routing/routes';
import setAuthToken from './utils/setAuthToken';
import { Box } from '@mui/material';
import { createBrowserHistory } from 'history';
import { Fragment, lazy, Suspense, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Notification from './components/elements/Notification/Notification';

const GuestLogin = lazy(() => import('./components/AuthPages/GuestLogin'));

const GuestDataIdManager = lazy(() => import('./components/Pages/GuestDataIdManager'));

const Cancelled = lazy(() => import('./components/Pages/BookingTrackingPages/Cancelled'));
const Confirmed = lazy(() => import('./components/Pages/BookingTrackingPages/Confirmed'));
const Invited = lazy(() => import('./components/Pages/BookingTrackingPages/Invited'));
const Enquiry = lazy(() => import('./components/Pages/BookingTrackingPages/Enquiry'));
const EnquiryStatus = lazy(() => import('./components/Pages/BookingTrackingPages/EnquiryStatus'));
const Ongoing = lazy(() => import('./components/Pages/BookingTrackingPages/Ongoing'));
const Requests = lazy(() => import('./components/Pages/BookingTrackingPages/Requests'));

const Data = lazy(() => import('./components/elements/Profile/Data'));
const MyFriendList = lazy(() => import('./components/elements/Profile/MyFriendList'));
const MyReviews = lazy(() => import('./components/elements/Profile/MyReviews'));
const PaymentsReturns = lazy(() => import('./components/elements/Profile/PaymentsReturns'));
const PersonalInfo = lazy(() => import('./components/elements/Profile/PersonalInfo'));
const PrivacySharing = lazy(() => import('./components/elements/Profile/PrivacySharing'));
const Services = lazy(() => import('./components/elements/Profile/Services'));
const Sharing = lazy(() => import('./components/elements/Profile/Sharing'));
const HostLanding = lazy(() => import('./components/Pages/HostLanding'));
const Chat = lazy(() => import('./components/Pages/Chat'));
const Congratulations = lazy(() => import('./components/Pages/Congratulations'));
const Detail = lazy(() => import('./components/Pages/Detail'));
const EnquiryToSending = lazy(() => import('./components/Pages/EnquiryToSending'));
const Explore = lazy(() => import('./components/Pages/Explore'));
const BookingTrackingContainer = lazy(() => import('./components/Pages/BookingTrackingContainer'));
const GuestLanding = lazy(() => import('./components/Pages/GuestLanding'));
const Payment = lazy(() => import('./components/Pages/Payment'));
const Profile = lazy(() => import('./components/Pages/Profile'));
const Alerts = lazy(() => import('./components/elements/Common/Alerts'));

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
let history: any = createBrowserHistory();

const App = () => {
	const isAuthenticated = store.getState().register.isAuthenticated;

	useEffect(() => {
		store.dispatch(loadAppSettings());
		store.dispatch(loadLandingProperty());
		store.dispatch(
			loadUser({
				redirectToRegister: () => history.replace(ROUTES.GUEST_REGISTRATION),
				redirectToInvited: (bookingId: string) =>
					history.replace(`${ROUTES.INVITED_TO}/${bookingId}`),
			})
		);
		store.dispatch(loadProfile());
		const handleTokenChange = (e: StorageEvent) => {
			if (e.key === TOKEN_KEY && e.oldValue && !e.newValue) {
				store.dispatch(logout());
			}
		};
		window.addEventListener('storage', handleTokenChange);
		return function cleanup() {
			window.removeEventListener('storage', handleTokenChange);
		};
	}, []);

	return (
		<SkeletonTheme baseColor='#cacaca' highlightColor='#a3a3a3'>
			<Provider store={store}>
				<HistoryRouter history={history}>
					<Suspense
						fallback={
							<Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
								<Box
									width={{
										xl: '55%',
										md: '50%',
										sm: '40%',
										xs: '60%',
									}}
								>
									<Loading />
								</Box>
							</Box>
						}
					>
						<Fragment>
							<section>
								{isAuthenticated && <Notification />}
								<Alerts />
								<Routes>
									<Route path={ROUTES.LOGIN} element={<GuestLogin />} />

									<Route path={`${ROUTES.ONBOARD}/:bookingId`} element={<GuestLogin />} />

									<Route
										path={ROUTES.GUEST_REGISTRATION}
										element={
											<PrivateRoute>
												<GuestDataIdManager />{' '}
											</PrivateRoute>
										}
									/>

									<Route
										path={ROUTES.GUEST_MANAGE_PROFILE}
										element={
											<PrivateRoute>
												<GuestDataIdManager />{' '}
											</PrivateRoute>
										}
									/>

									<Route path={ROUTES.EXPLORE} element={<Explore />} />
									<Route path={`${ROUTES.PROPERTY_DETAIL}/:propertySlug`} element={<Detail />} />
									<Route path={ROUTES.PROPERTY_DETAIL} element={<Detail />} />

									<Route
										path={`${ROUTES.CONFIRM_INVITATION}/:bookingId`}
										element={<CofnirmInvitedToBooking />}
									/>

									<Route
										path={ROUTES.BOOKING_TRACKER}
										element={
											<PrivateRoute>
												<BookingTrackingContainer />
											</PrivateRoute>
										}
									>
										<Route path={ROUTES.ONGOING} element={<Ongoing />} />
										<Route path={ROUTES.ENQUIRY} element={<Enquiry />} />
										<Route path={ROUTES.ENQUIRY_STATUS} element={<EnquiryStatus />} />
										<Route path={ROUTES.REQUESTS} element={<Requests />} />
										<Route path={ROUTES.CONFIRMED} element={<Confirmed />} />
										<Route path={`${ROUTES.CONFIRMED}/:viewType`} element={<Confirmed />} />
										<Route path={ROUTES.INVITED_TO} element={<Invited />} />
										<Route path={`${ROUTES.INVITED_TO}/:bookingId`} element={<Invited />} />
										<Route path={ROUTES.CANCELLED} element={<Cancelled />} />
									</Route>

									{/* Payments and Returns */}
									<Route path={ROUTES.PAYMENTS_REQUESTS} element={<PaymentsReturns />} />

									{/* Privacy and Sharing */}
									<Route path={ROUTES.PRIVACY_SHARING} element={<PrivacySharing />}>
										<Route index element={<Data />} />
										<Route path={ROUTES.SHARING} element={<Sharing />} />
										<Route path={ROUTES.SERVICES} element={<Services />} />
									</Route>

									<Route path={ROUTES.PAYMENT} element={<Payment />} />
									<Route path={ROUTES.CONGRATULATIONS} element={<Congratulations />} />
									<Route path={ROUTES.CHAT} element={<Chat />} />

									<Route path={ROUTES.PROFILE} element={<Profile />} />
									<Route path={ROUTES.FRIEND_LIST} element={<MyFriendList />} />
									<Route path={ROUTES.MY_REVIEWS} element={<MyReviews />} />
									<Route path={ROUTES.HOST_LANDING} element={<HostLanding />} />
									<Route path={ROUTES.POLICY_BASE + '/:policyId'} element={<Policy />} />
									<Route path={ROUTES.ENQUIRY_SUMMARY} element={<EnquiryToSending />} />

									<Route path={ROUTES.PERSONAL_INFO} element={<PersonalInfo />} />
									<Route path={ROUTES.ROOT} element={<GuestLanding />} />

									{/* <Route path='*' element={<Navigate to={ROUTES.ROOT} />} /> */}
									<Route path='*' element={<NotFound />} />
								</Routes>
							</section>
						</Fragment>
					</Suspense>
				</HistoryRouter>
			</Provider>
		</SkeletonTheme>
	);
};

export default App;
