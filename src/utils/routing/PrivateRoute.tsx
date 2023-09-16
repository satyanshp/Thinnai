import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/elements/Loading/Loading';
import { RootState } from '../../store';
import { ROUTES } from './routes';

const PrivateRoute: React.FC = ({ children }: any) => {
	const isLoading = useSelector<RootState, boolean>(state => state.guestAuth.loading);
	const isAuthenticated = useSelector<RootState, boolean>(state => state.guestAuth.isAuthenticated);
	if (isLoading) {
		return (
			<Container
				sx={{
					height: '40vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					width={{
						md: '30%',
						sm: '40%',
						xs: '60%',
					}}
				>
					<Loading />
				</Box>
			</Container>
		);
	}
	return isAuthenticated && isLoading === false ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
