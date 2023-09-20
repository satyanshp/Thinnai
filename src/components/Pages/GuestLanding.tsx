// import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { resetStore } from '../../actions/root';
import { RootState } from '../../store';
import { ROUTES } from '../../utils/routing/routes';
import Carousel from '../elements/GuestLanding/Carousel';
import Community from '../elements/GuestLanding/Community';
import CommunityRes from '../elements/GuestLanding/CommunityRes';
import Footer from '../elements/GuestLanding/Footer';
import How from '../elements/GuestLanding/How';
import Memories from '../elements/GuestLanding/Memories';
import Try from '../elements/GuestLanding/Try';
import Video from '../elements/GuestLanding/Video';
import What from '../elements/GuestLanding/What';
import HostFeatured from '../elements/HostLanding/HostFeatured';
import SectionTitle from '../elements/HostLanding/SectionTitle';
import '../styles/Landing/Landing.css';
import Faqs from './Faqs';
// import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Feature from '../elements/GuestLanding/Feature';

const GuestLanding = () => {
	const navigate = useNavigate();

	const isAuthenticated = useSelector<RootState, boolean>(state => state.guestAuth.isAuthenticated);
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
			<Box
				padding={{ sm: '3rem', xs: '1.5rem' }}
				height={{ xl: '100vh', md: '100vh', sm: '545px', xs: '450px' }}
				overflow='hidden'
				sx={{ background: '', margin: '0', position: 'relative' }}
			>
				<Box width='100%'>
					<video loop autoPlay muted className='video'>
						<source src='/assets/videos/this_is_thinnai.mp4' type='video/mp4' />
					</video>
				</Box>
				<Box height={60} />
				<AppBar
					position='absolute'
					sx={{
						background: 'rgba(0, 0, 0, 0.55)',
						boxShadow: 'none',
						top: '0',
						left: '0',
						padding: '0.5rem 6rem',
						'@media (max-width: 600px)': { padding: '0.625rem 1.5rem' },
					}}
				>
					<Container maxWidth='xl'>
						<Toolbar
							disableGutters
							variant='dense'
							sx={{
								minHeight: '3.5rem',
							}}
						>
							<Box style={{ flexGrow: '2' }}>
								<img
									style={{
										height: '2.5rem',
									}}
									src='/assets/images/guest-logo.png'
									alt=''
								/>
							</Box>
							<Box display='flex' flexGrow='0.2' gap={2.8} justifyContent='flex-end'>
								<Box
									display={{ sm: 'flex', xs: 'none' }}
									alignItems='center'
									fontSize='1.125rem'
									fontWeight='400'
									color='#FFFFFF'
									sx={{ cursor: 'pointer' }}
									onClick={() => navigate(ROUTES.HOST_LANDING)}
								>
									Host Your Space
								</Box>
								<Button
									variant='contained'
									sx={{
										boxShadow: 'none',
										'@media (max-width: 600px)': { display: 'none' },
									}}
									style={{
										fontFamily: 'Montserrat',
										flexGrow: '0.4',
										fontSize: '1.125rem',
										fontWeight: '400',
										background: 'transparent',
										color: '#FFFFFF',
										textTransform: 'capitalize',
									}}
									onClick={() => navigate(!isAuthenticated ? ROUTES.LOGIN : ROUTES.EXPLORE)}
								>
									{!isAuthenticated ? 'Sign In' : 'Book Now'}
								</Button>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
				<Box
					className='open__text'
					color='white'
					width={{ md: '90%', sm: '95%', xs: '100%' }}
					margin={{
						xl: '40vh 6.25rem',
						md: '30vh 3.75rem',
						sm: '7.5rem auto',
						xs: '4.688rem auto',
					}}
				>
					<Box textAlign='center'>
						<Box
							fontStyle='normal'
							fontWeight='500'
							fontSize={{ md: '2.375rem', sm: '2.188rem', xs: '1.25rem' }}
							lineHeight={{ sm: '55px', xs: '38px' }}
						>
							Experience the Joy of
						</Box>
						<Box
							fontStyle='normal'
							fontWeight='700'
							fontSize={{ md: '3.7rem', sm: '2.188rem', xs: '1.25rem' }}
							lineHeight={{ sm: '55px', xs: '38px' }}
							marginTop='0.75rem'
							display={'flex'}
							justifyContent={{ xs: 'center', md: 'center' }}
							// fontSize= {{md:'54px',sm:'40px',xs:'24px'}}
							// lineHeight= {{sm:'67.5px',xs:'43px'}}
							// sx={{'@media (max-width: 900px)':{textAlign:'center'}}}
							minWidth={{ md: '420px', sm: '350px', xs: '250px' }}
						>
							Private <Box width={'0.5rem'} />
							<Typewriter
								options={{
									strings: textLoop,
									autoStart: true,
									loop: true,
								}}
							/>
						</Box>
					</Box>
					<Box height={{ sm: 10, xs: 0, md: 18 }} />
					<Box
						fontStyle='normal'
						fontWeight='400'
						fontSize={{ md: '1.563rem', sm: '1.25rem', xs: '1.063rem' }}
						lineHeight={{ sm: '34px', xs: '27px' }}
						sx={{ textAlign: 'center' }}
						display='none'
					>
						The Thinnai Experience is here.
					</Box>
					<Box height={{ sm: 22, xs: 40, md: 28 }} />
					<Box display='flex' component={motion.div} whileHover={{ scale: 1.1 }}>
						<Button
							variant='contained'
							sx={{
								margin: '0 auto',
								fontFamily: 'Open Sans',
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: '1.313rem',
								lineHeight: '45px',
								color: '#FFFFFF',
								background: '#D8A356',
								padding: { xs: '5px 2rem', md: '5px 3.75rem' },
								borderRadius: '15px',
								'&:hover': {
									background: '#D8A355',
								},
								'@media (max-width: 600px)': {
									fontSize: '1.125rem',
								},
							}}
							onClick={e => navigate(ROUTES.EXPLORE)}
						>
							BOOK NOW
						</Button>
					</Box>
					{/* <Box top= {{sm:'95%',xs:'70%'}} width= {{sm:'80%',xs:'88%'}} sx={{position:'absolute',}}>
          <MenuTabs/>
        </Box> */}
				</Box>
			</Box>
			<Box height={{ md: 160, xs: 0 }} />
			<Box>
				<Carousel onClick={onClick} />
			</Box>
			{/* <Box height={{md:240,sm:240,xs:170}}/> */}
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
			// sx={{
			// 	'@media (max-width: 381px)': {
			// 		marginBottom: '5rem',
			// 	},
			// 	'@media (max-width: 369px)': {
			// 		marginBottom: '20rem',
			// 	},
			// }}
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
				<Footer />
			</Box>
		</Box>
	);
};

export default GuestLanding;
