import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { resetStore } from '../../actions/root';
import { ROUTES } from '../../utils/routing/routes';
import Carousel from '../elements/GuestLanding/Carousel';
import Community from '../elements/GuestLanding/Community';
import CommunityRes from '../elements/GuestLanding/CommunityRes';
import How from '../elements/GuestLanding/How';
import Memories from '../elements/GuestLanding/Memories';
import Try from '../elements/GuestLanding/Try';
import VideoHeader from '../elements/HostLanding/VideoHeader';
import What from '../elements/GuestLanding/What';
import HostFeatured from '../elements/HostLanding/HostFeatured';
import SectionTitle from '../elements/HostLanding/SectionTitle';
import '../styles/Landing/Landing.css';
import Faqs from './Faqs';
import Feature from '../elements/GuestLanding/Feature';
import HostFooter from '../elements/HostLanding/HostFooter';
import GuestNav from '../elements/GuestLanding/GuestNav';
import Video from '../elements/GuestLanding/Video';

const GuestLanding = () => {
	const navigate = useNavigate();

	
	const textLoop = ['Dining!', 'Theatre!', 'Workspace!', 'Moments!', 'Memories!', 'Time!'];

	const onClick = () => {
		navigate(ROUTES.EXPLORE);
		resetStore('RESET_LANDING');
	};

	const moreArray = [
		{
			img:'/assets/images/page/more1.svg',
			header:'Meetings & Remote work',
			caption:'Private & Inspiring work spaces curated for productive work sessions and meetings.'
		},
		{
			img:'/assets/images/page/more2.svg',
			header:'Host Workshops',
			caption:'Beautiful spaces to host workshops which induces creativity and adds more value to the entire experience'
		},
		{
			img:'/assets/images/page/more3.svg',
			header:'Solo Dates',
			caption:'Doing anything you like peacefully, while having your favourite food as & when you like.'
		}
	];

	const whyArray = [
		{
			img:'/assets/images/page/why1.svg',
			header:'Affordable private dining',
			caption:'A space for 2 is more affordable than the coffee for 2 at a Cafe.'
		},
		{
			img:'/assets/images/page/why2.svg',
			header:'Freedom of Choice',
			caption:'Order your favourite food & Drinks from any Outlet in the area.'
		},
		{
			img:'/assets/images/page/why3.svg',
			header:'Personalised Experience',
			caption:'Your Choice of Ambience, Food, Drinks and music only at Thinnai.'
		}
	]

	return (
		<Box fontFamily="'Montserrat', sans-serif" className='page'>
			<VideoHeader textLoop={textLoop} Nav={GuestNav} loopPrefix='Private' text='Experience the Joy of'/>
			<Box height={{ md: 160, xs: 0 }} />
			<Box>
				<Carousel onClick={onClick} />
			</Box>
			<Box>
				<How />
			</Box>
			<Box height={100} />
			<Box>
				<Feature
					header='Why Thinnai?'
					caption='Of many things, here’s the what you’d love the most.'
					contentArray={whyArray}
				/>
			</Box>
			<Box height={{ md: 150, sm: 50, xs: 50 }} />
			<Box>
				<Video />
			</Box>
			<Box height={{ md: 100, sm: 50, xs: 50 }} />
			<Box>
				<Try />
			</Box>
			{/* <Box>
        <EmptySpace/>
      </Box>
       */}
			<Box
				height={{ md: 'auto', xs: 300 }}
				sx={{
					'@media (max-width: 381px)': {
						height: 500,
					},
					'@media (max-width: 331px)': {
						height: 700,
					},
					'@media (max-width: 283px)': {
						height: 900,
					},
				}}
			>
				<Memories />
			</Box>
			<Box
				height={{ md: 0, sm: 100, xs: 300 }}
				sx={{
					'@media (max-width: 900px)': {
						marginTop: '6.25rem',
					},
					'@media (max-width: 601px)': {
						marginTop: '0px',
					},
				}}
			/>
			<Box height={{ md: 100, sm: 100, xs: 250 }} />
			<Box
			>
				<Feature
					header='More than just a dining space!'
					caption='Our Beautiful Thinnai spaces are used for many creative works.'
					contentArray={moreArray}
				/>
			</Box>
			<Box height={{ md: 100, sm: 100, xs: 100 }} />
			<Box>
				<What onClick={onClick} />
			</Box>
			<Box>
				<HostFeatured />
			</Box>
			{/* frequently asked question */}
			<Box
				marginX={{
					xl: '4.375rem',
					md: '4.375rem',
					sm: '2.5rem',
					xs: '1rem',
				}}
				marginTop={{
					xl: '8.125rem',
					md: '8.125rem',
					sm: '3.875rem',
					xs: '3.875rem',
				}}
			>
				<SectionTitle subTitle='' title='Frequently asked questions' />
				<Box
					marginTop={{
						xl: '7.5rem',
						md: '7.5rem',
						sm: '2rem',
						xs: '2rem',
					}}
				>
					<Faqs />
				</Box>
			</Box>
			<Box height={{ md: 100, sm: 50, xs: 100 }} />
			<Box display={{ md: 'block', xs: 'none' }} pb={'8rem'} overflow='hidden'>
				<Community />
			</Box>
			<Box display={{ md: 'none', xs: 'block' }}>
				<CommunityRes />
			</Box>
			<Box>
				<HostFooter caller='Guest' />
			</Box>
		</Box>
	);
};

export default GuestLanding;
