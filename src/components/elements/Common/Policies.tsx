import Box from '@mui/material/Box';
import DetailsSectionDivider from './DetailsSectionDivider';

const Policies = () => {
	const cancellationPolicy =
		'Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis convallis diam sit ametlacinia. Aliquam in elementum tellus."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore e t dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';

	const reschedulePolicy =
		'Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis convallis diam sit ametlacinia. Aliquam in elementum tellus."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore e t dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';

	return (
		<Box>
			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box className='detail__header'>Cancellation Policy</Box>
				<Box height={30} />
				<Box
					className='detail__p'
					display={{
						xs: 'none',
						md: 'block',
					}}
				>
					{cancellationPolicy}
				</Box>
				<Box
					className='detail__p'
					display={{
						xs: 'block',
						md: 'none',
					}}
				>
					{cancellationPolicy.slice(0, 300)} ...
				</Box>
				<Box marginTop='0.5rem'>
					<a
						style={{
							color: '#000000',
							fontWeight: '600',
							fontSize: '0.875rem',
						}}
						href='https://bookmythinnai.com/policy/updation-cancellation-and-reschedule'
					>
						Read More
					</a>
				</Box>
			</Box>
			<DetailsSectionDivider />
			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box className='detail__header'>Reschedule Policy</Box>
				<Box height={30} />
				<Box
					className='detail__p'
					display={{
						xs: 'none',
						md: 'block',
					}}
				>
					{reschedulePolicy}
				</Box>
				<Box
					className='detail__p'
					display={{
						xs: 'block',
						md: 'none',
					}}
				>
					{reschedulePolicy.slice(0, 300)} ...
				</Box>
				<Box marginTop='0.5rem'>
					<a
						style={{
							color: '#000000',
							fontWeight: '600',
							fontSize: '0.875rem',
						}}
						href='https://bookmythinnai.com/policy/updation-cancellation-and-reschedule'
					>
						Read More
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default Policies;
