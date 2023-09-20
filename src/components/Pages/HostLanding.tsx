import  Box from '@mui/material/Box';
import '../styles/Landing/Landing.scss';
import HostCommunity from '../elements/HostLanding/HostCommunity';
import HostFeatured from '../elements/HostLanding/HostFeatured';
import HostFooter from '../elements/HostLanding/HostFooter';
import SectionTitle from '../elements/HostLanding/SectionTitle';
import Video from '../elements/HostLanding/Video';
import Community from '../elements/HostLanding/Community';
import WhyHosting from '../elements/HostLanding/WhyHosting';
import StartHosting from '../elements/HostLanding/StartHosting';
import What from '../elements/HostLanding/What';
import Testimonial from '../elements/HostLanding/Testimonial';
import FeaturedBlogs from '../elements/HostLanding/FeaturedBlogs';
import Faqs from './Faqs';


const HostLanding = () => {

	// const blogs = [
	// 	{
	// 		category: 'Blogs',
	// 		img: '/assets/images/host_landing/blog-1.svg',
	// 		title: 'Follow the lay',
	// 		des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
	// 		id: 1,
	// 	},
	// 	{
	// 		category: 'Blogs',
	// 		img: '/assets/images/host_landing/blog-2.svg',
	// 		title: 'Follow the lay',
	// 		des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
	// 		id: 2,
	// 	},
	// ];

	// const articles = [
	// 	{
	// 		category: 'Articles',
	// 		img: '/assets/images/host_landing/article-1.svg',
	// 		title: 'Follow the lay',
	// 		des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
	// 		id: 1,
	// 	},
	// 	{
	// 		category: 'Articles',
	// 		img: '/assets/images/host_landing/article-2.svg',
	// 		title: 'Follow the lay',
	// 		des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
	// 		id: 2,
	// 	},
	// ];

	return (
		<Box>
			<Video/>
			{/* Community */}
			<Community/>
			{/* Why hosting */}
			<WhyHosting/>
			{/* Start Hosting */}
			<StartHosting/>
			{/* What */}
			<What/>
			{/* Testimonial */}
			<Testimonial/>
			{/* Featured Blogs and article */}
			<FeaturedBlogs/>
			{/* Featured on */}
			<HostFeatured />
			{/* frequently asked question */}
			<Box
				marginX={{
					xl: '4.375rem',
					md: '4.375rem',
					sm: '2.5rem',
					xs: '0.938rem',
				}}
				marginTop={{
					xl: '8.125rem',
					md: '8.125rem',
					sm: '3.875rem',
					xs: '3.875rem',
				}}
			>
				<SectionTitle subTitle='' title='Frequently Asked Questions' />
				<Box
					marginTop={{
						xl: '11.188rem',
						md: '11.188rem',
						sm: '2rem',
						xs: '2rem',
					}}
				>
					<Faqs />
				</Box>
			</Box>
			<Box
				height={{
					xl: '215px',
					md: '215x',
					sm: '81px',
					xs: '81px',
				}}
			/>
			<Box
				overflow='hidden'
				paddingBottom={{
					xl: '15.563rem',
					md: '15.563rem',
					sm: '4.5rem',
					xs: '4.5rem',
				}}
				sx={{
					'@media (min-width: 900px)': {
						backgroundImage: 'url(assets/images/host_landing/bg-community.jpg)',
					},
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'left bottom',
				}}
			>
				<HostCommunity />
			</Box>
			<Box
				marginTop={{
					xl: '0px',
					md: '0px',
					sm: '4.5rem',
					xs: '4.5rem',
				}}
			>
				<HostFooter caller='Host' />
			</Box>
		</Box>
	);
};

export default HostLanding;
