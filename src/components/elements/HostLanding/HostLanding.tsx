import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../../styles/Landing/Landing.scss';
import HostAccordion from './HostAccordion';
import HostCommunity from './HostCommunity';
import HostFeatured from './HostFeatured';
import HostFooter from './HostFooter';
import HostNav from './HostNav';
import SectionTitle from './SectionTitle';

const useStyles: any = makeStyles({
	topBanner: {
		background: 'linear-gradient(146.48deg, rgba(26, 25, 30, 0.6) 0%, rgba(0, 0, 0, 0) 97.84%)',
		display: 'flex',
		alignItems: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
});

const HostLanding = () => {
	const classes = useStyles();
	const breakPoint = useMediaQuery('(max-width:600px)');
	const mdBreakPoint = useMediaQuery('(max-width:900px)');

	const textLoop = [
		'Hosting!',
		'Experience!',
		'Memories!',
		'Moments!',
		'Friends!',
		'Community!',
		'Income!',
	];

	const data = [
		{
			title: 'Good income',
			desc: 'We all maintain our home as beautiful and clean as possible, but We never get the appreciation or make money out of it. Thinnai is here to turn the tables with just a Table.',
			img: '/assets/images/host_landing/passive-girl.svg',
			number: '/assets/images/host_landing/passive-1.svg',
			id: 1,
		},
		{
			title: 'Meet unique people',
			desc: 'In our monotonous Life, we don’t have energy or time to socialise as we like to. Upon Hosting with Thinnai, you get to meet Unique set of people for a short duration who would spend a quality time at the space you have created.',
			img: '/assets/images/host_landing/passive-girl-2.svg',
			number: '/assets/images/host_landing/passive-2.svg',
			id: 2,
		},
		{
			title: 'Effortless hosting',
			desc: 'We are known for traditionally hosting lunch and Dinners, but today’s modern lifestyle requires Modern Hosting. With Thinnai, you will now have to provide only the Dining space as the Guests will order their favourite food through delivery Apps.',
			img: '/assets/images/host_landing/passive-girl-3.svg',
			number: '/assets/images/host_landing/passive-3.svg',
			id: 3,
		},
	];

	const blogs = [
		{
			category: 'Blogs',
			img: '/assets/images/host_landing/blog-1.svg',
			title: 'Follow the lay',
			des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
			id: 1,
		},
		{
			category: 'Blogs',
			img: '/assets/images/host_landing/blog-2.svg',
			title: 'Follow the lay',
			des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
			id: 2,
		},
	];

	const articles = [
		{
			category: 'Articles',
			img: '/assets/images/host_landing/article-1.svg',
			title: 'Follow the lay',
			des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
			id: 1,
		},
		{
			category: 'Articles',
			img: '/assets/images/host_landing/article-2.svg',
			title: 'Follow the lay',
			des: " It's better than kicking the puppy dog around and all that so. Let's make a happy little mountain now.",
			id: 2,
		},
	];

	return (
		<Box>
			<Box
				height={{
					xl: '100vh',
					md: '100vh',
					sm: '60vh',
					xs: '50vh',
				}}
				position='relative'
				overflow='hidden !important'
				className={classes.topBanner}
			>
				<Box width='100%'>
					<video
						style={{
							filter: 'brightness(0.7)',
							position: 'absolute',
							top: 0,
							left: 0,
							minWidth: '100%',
							objectFit: 'cover',
							width: '100%',
							height: '100%',
						}}
						loop
						playsInline
						onCanPlay={e => (e.currentTarget.muted = true)}
						autoPlay
						muted
						className='video'
					>
						<source src='/assets/videos/host_landing.mp4' type='video/mp4' />
					</video>
				</Box>
				<Box
					position='absolute'
					height='100%'
					width='100%'
					sx={{
						boxShadow: 'none',
						top: '0',
						left: '0',
					}}
				>
					<HostNav />
					<Box
						className='open__text'
						color='white'
						width={{ md: '90%', sm: '95%', xs: '100%' }}
						margin={{
							xl: '40vh 6.25rem',
							md: '40vh 3.75rem',
							sm: '7.5rem auto',
							xs: '4.688rem auto',
						}}
					>
						<Box textAlign='center'>
							<Box
								fontStyle='normal'
								fontWeight='500'
								fontSize={{ md: '2.375rem', sm: '2.188rem', xs: '1.5rem' }}
								lineHeight={{ sm: '55px', xs: '38px' }}
							>
								{/* Open Doors to Thinnai */}
								You need a big space in your heart and small space at your home to be a Host on
								Thinnai
							</Box>
							<Box
								fontStyle='normal'
								fontWeight='700'
								fontSize={{ md: '3.7rem', sm: '2.188rem', xs: '1.5rem' }}
								lineHeight={{ sm: '55px', xs: '38px' }}
								marginTop='0.75rem'
								textAlign={{ xs: 'center', md: 'center' }}
								// fontSize= {{md:'54px',sm:'2.5rem',xs:'1.5rem'}}
								// lineHeight= {{sm:'67.5px',xs:'43px'}}
								// sx={{'@media (max-width: 900px)':{textAlign:'center'}}}
								minWidth={{ md: '420px', sm: '350px', xs: '250px' }}
							>
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
							fontSize={{ md: '1.563rem', sm: '1.5rem', xs: '1.688rem' }}
							lineHeight={{ sm: '34px', xs: '27px' }}
							sx={{ textAlign: 'center' }}
							display='none'
						>
							The Thinnai Experience is here.
						</Box>
						<Box height={{ sm: 22, xs: 40, md: 28 }} />
						<Box display='flex' component={motion.div} whileHover={{ scale: 1.1 }}>
							<a
								style={{
									textDecoration: 'none',
									margin: '0 auto',
								}}
								target='_blank'
								href='https://docs.google.com/forms/d/e/1FAIpQLSd62sxWJH4394_4RcIUa0XFWcL9AFvKwa6TXdL04IdtsRVwzw/viewform'
								rel='noreferrer'
							>
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
										padding: '5px 3.75rem',
										borderRadius: '15px',
										'&:hover': {
											background: '#D8A355',
										},
										'@media (max-width: 600px)': {
											fontSize: '1.125rem',
										},
									}}
									// onClick={onClick}
								>
									JOIN NOW
								</Button>
							</a>
						</Box>
						{/* <Box top= {{sm:'95%',xs:'70%'}} width= {{sm:'80%',xs:'88%'}} sx={{position:'absolute',}}>
          <MenuTabs/>
        </Box> */}
					</Box>
				</Box>
			</Box>
			{/* Community */}
			<Box bgcolor='#F4CF97'>
				<Box
					margin={{
						xl: '0px 4.375rem',
						md: '0px 4.375rem',
						sm: '0px 2.5rem',
						xs: '0px 0.938rem',
					}}
				>
					<Typography
						fontFamily='Montserrat'
						lineHeight='1.2em'
						fontSize={{
							xl: '1.5rem',
							md: '1.5rem',
							sm: '1rem',
							xs: '1rem',
						}}
						fontWeight='400'
						color='rgba(0, 0, 0, 0.5)'
						pt={{
							xl: '7.25rem',
							md: '7.25rem',
							sm: '1.938rem',
							xs: '1.938rem',
						}}
					>
						Welcome To Thinnai{' '}
					</Typography>
					<Typography
						fontFamily='Montserrat'
						lineHeight='1.2em'
						fontSize={{
							xl: '2.688rem',
							md: '2.688rem',
							sm: '2.5rem',
							xs: '2.5rem',
						}}
						pb={{
							xl: '5.938rem',
							md: '5.938rem',
							sm: '1.438rem',
							xs: '1.438rem',
						}}
						fontWeight={600}
						color='black'
						mb='0.688rem'
					>
						Community
					</Typography>
					<Box>
						<Box display='flex' justifyContent='center' alignItems='center' position='relative'>
							<img width='100%' src='/assets/images/host_landing/community.jpg' alt='' />
							<Box
								sx={{
									fontSize: '4.563rem',
									paddingY: breakPoint ? '0.938rem' : '1.875rem',
									backdropFilter: 'blur(9.5)',
									width: '100%',
									background:
										'linear-gradient(164.87deg, rgba(26, 25, 30, 0.6) 1%, rgba(0, 0, 0, 0) 109.07%)',
								}}
								position='absolute'
								left={0}
								bottom={{
									xl: '-110px',
									md: '-110px',
									sm: '-110px',
									xs: '-106px',
								}}
							>
								<Box display='flex' justifyContent='space-between'>
									<Box display='flex' justifyContent='center' alignItems='center' margin='auto'>
										<Typography
											paddingLeft={{
												xl: 3,
												md: 3,
												sm: 2,
												xs: 1,
											}}
											fontSize={{
												xl: '1.5rem',
												md: '1.5rem',
												sm: '0.875rem',
												xs: '0.875rem',
											}}
											fontWeight={300}
											color='white'
											textAlign='center'
											fontFamily='Montserrat'
											width={{
												md: '100%',
												sm: '200px',
												xs: '100px',
											}}
											// paddingRight={{
											// 	xl: 3,
											// 	md: 3,
											// 	sm: 2,
											// 	xs: 1,
											// }}
										>
											Explore more about Thinnai
										</Typography>
									</Box>
									<Box
										sx={{
											overflowX: 'auto',
											display: 'flex',
											justifyContent: 'flex-start',
											alignItems: 'center',
											gap: '0.438rem',
										}}
									>
										<Box width='300px'>
											<img
												style={{
													display: 'block',
													height: breakPoint ? '76px' : '14.5rem',
												}}
												width='100%'
												src='/assets/images/host_landing/community-1.svg'
												alt=''
											/>
										</Box>
										<Box
											width='300px'
											marginLeft={{
												xl: '0',
												md: '0',
												sm: '0px',
												xs: '0.313rem',
											}}
										>
											<img
												style={{
													display: 'block',
													height: breakPoint ? '76px' : '14.5rem',
												}}
												width='100%'
												src='/assets/images/host_landing/community-2.svg'
												alt=''
											/>
										</Box>
										<Box
											width='300px'
											display={{
												xl: 'block',
												md: 'block',
												sm: 'none',
												xs: 'none',
											}}
										>
											<img
												style={{
													display: 'block',
													height: breakPoint ? '76px' : '172px',
												}}
												width='100%'
												src='/assets/images/host_landing/community-1.svg'
												alt=''
											/>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* Why hosting */}
			<Box>
				<Box
					margin={{
						xl: '0px 4.375rem',
						md: '0px 4.375rem',
						sm: '0px 2.5rem',
						xs: '0px 0.938rem',
					}}
				>
					<Typography
						mt={{
							xl: '5rem',
							md: '5rem',
							sm: '2.813rem',
							xs: '2.813rem',
						}}
						fontFamily='Montserrat'
						lineHeight={{
							xl: '29px',
							md: '29px',
							sm: '20px',
							xs: '20px',
						}}
						fontSize={{
							xl: '1.5rem',
							md: '1.5rem',
							sm: '1rem',
							xs: '1rem',
						}}
						fontWeight='400'
						color='rgba(0, 0, 0, 0.5)'
						pt='7.25rem'
					>
						Benefits
					</Typography>
					<Typography
						fontFamily='Montserrat'
						lineHeight={{
							xl: '52px',
							md: '52px',
							sm: '29px',
							xs: '29px',
						}}
						fontSize={{
							xl: '2.688rem',
							md: '2.688rem',
							sm: '1.5rem',
							xs: '1.5rem',
						}}
						fontWeight={600}
						color='black'
						mb={{
							xl: '4rem',
							md: '4rem',
							sm: '1.75rem',
							xs: '1.75rem',
						}}
					>
						Why hosting
					</Typography>
				</Box>
				<Box>
					<Box
						display='flex'
						sx={{
							overflowX: 'auto',
						}}
						flexDirection={{
							xl: 'row',
							md: 'row',
							sm: 'column',
							xs: 'column',
						}}
						gap={{
							xl: '1.5rem',
							md: '1.5rem',
							sm: '2rem',
							xs: '2rem',
						}}
						margin={{
							xl: '0px 4.375rem',
							md: '0px 4.375rem',
							sm: '0px 2.5rem',
							xs: '0px 0.938rem',
						}}
					>
						{data.map(card => (
							<Box
								marginBottom={{
									xl: '0px',
									md: '0px',
									sm: '2rem',
									xs: '2rem',
								}}
								key={card.id}
								bgcolor='#FFFFFF'
								zIndex='1050'
								boxShadow='0px 4px 15px rgba(0, 0, 0, 0.1)'
								borderRadius='8px'
								paddingX='1.5rem'
								display='flex'
								flexDirection={{
									xl: 'column',
									md: 'column',
									sm: 'row',
									xs: 'column',
								}}
								gap={{
									xl: '0px',
									md: '0px',
									sm: '0px',
									xs: '0px',
								}}
							>
								<Box
									display='flex'
									justifyContent={{
										xl: 'space-between',
										md: 'space-between',
										sm: 'flex-start',
										xs: 'center',
									}}
									alignItems={{
										xl: 'center',
										md: 'center',
										sm: 'flex-start',
										xs: 'center',
									}}
								>
									<Box
										height={{
											xl: '281.3px',
											md: '281.3px',
											sm: '59px',
											xs: 'auto',
										}}
										width={{
											md: '4vw',
											sm: '36px',
											xs: 'auto',
										}}
										marginRight={{
											xl: '0px',
											md: '0px',
											sm: '1.938rem',
											xs: '0px',
										}}
									>
										<img
											style={{
												display: 'block',
												marginTop: mdBreakPoint ? '3.125rem' : '0',
												height: '100%',
												width: '100%',
											}}
											src={card.number}
											alt=''
										/>
									</Box>
									<Box>
										<img
											style={{
												display: mdBreakPoint ? 'none' : 'block',
												width: '15vw',
												height: '30vh',
												transform: card.title === 'Good income' ? 'scale(1.5)' : 'scale(1)',
											}}
											src={card.img}
											alt=''
										/>
									</Box>
								</Box>
								<Box
									pb={{
										xl: '6.25rem',
										md: '3.125rem',
										sm: '1.5rem',
										xs: '1.5rem',
									}}
								>
									<Typography
										mt='2.563rem'
										mb='1rem'
										fontSize='1.5rem'
										fontWeight='600'
										fontFamily='Montserrat'
										textAlign={{
											xl: 'left',
											md: 'left',
											sm: 'left',
											xs: 'center',
										}}
									>
										{card.title}
									</Typography>
									<Typography
										textAlign={{
											xl: 'left',
											md: 'left',
											sm: 'left',
											xs: 'center',
										}}
										fontSize='1rem'
										fontFamily='Montserrat'
										color='rgba(0, 0, 0, 0.5)'
									>
										{card.desc}
									</Typography>
									<Box
										display='flex'
										justifyContent={{ xs: 'center', sm: 'center', md: 'flex-end' }}
										paddingTop={{ xs: '2rem', sm: '2rem', md: 0 }}
									>
										<img
											style={{
												display: mdBreakPoint ? 'block' : 'none',
												width: mdBreakPoint ? '' : '50%',
											}}
											src={card.img}
											alt=''
										/>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
					<Box width={'100%'} height='240px' bgcolor='#F4CF97' mt='-7.5rem'></Box>
				</Box>
			</Box>
			{/* Start Hosting */}
			<Box>
				<Box>
					<Box
						margin={{
							xl: '0px 4.375rem',
							md: '0px 4.375rem',
							sm: '0px 2.5rem',
							xs: '0px 0.938rem',
						}}
						pt={{
							xl: '7.25rem',
							md: '7.25rem',
							sm: '3.25rem',
							xs: '3.25rem',
						}}
						mb={{
							xl: '4rem',
							md: '4rem',
							sm: '2.563rem',
							xs: '2.563rem',
						}}
					>
						<SectionTitle subTitle='Start hosting' title='How to be our host' />
					</Box>
					<Box>
						{/* Set up an empty space */}
						<Box
							sx={{
								background: mdBreakPoint
									? "url('/assets/images/host_landing/start-mobile-hosting-bg.svg')"
									: "url('/assets/images/host_landing/start-hosting-bg.svg')",
								backgroundRepeat: 'no-repeat',
								backgroundPosition: '0px 100px',
							}}
						>
							<Box
								marginX={{
									xl: '4.375rem',
									md: '4.375rem',
									sm: '2.5rem',
									xs: '0.938rem',
								}}
								display='flex'
								flexDirection={{
									xl: 'row',
									md: 'row',
									sm: 'column',
									xs: 'column',
								}}
								justifyContent='space-between'
								alignItems='center'
								gap={10}
								marginBottom={{
									xl: '4.313rem',
									md: '9.375rem',
									sm: '5.25rem',
									xs: '5.25rem',
								}}
							>
								<Box
									order={{
										xl: '1',
										md: '1',
										sm: '2',
										xs: '2',
									}}
									display='flex'
									alignItems='flex-start'
									gap={{
										xl: '0.438rem',
										md: '0.438rem',
									}}
									marginTop={{
										xl: '0px',
										md: '0px',
										sm: '3.125rem',
										xs: '3.125rem',
									}}
								>
									<Box
										marginRight={{
											md: '0.438rem',
											sm: '1.5rem',
											xs: '1.5rem',
										}}
									>
										<img
											style={{
												display: 'block',
												marginTop: '0.75rem',
												width: breakPoint ? '24px' : '',
											}}
											src='/assets/images/host_landing/one-hosting.svg'
											alt=''
										/>
									</Box>
									<Box>
										<Typography
											letterSpacing='0.015em'
											fontWeight={600}
											fontFamily='Montserrat'
											fontSize={{
												xl: '2.25rem',
												md: '2.25rem',
												sm: '1.5rem',
												xs: '1.5rem',
											}}
										>
											Find a Empty Corner
										</Typography>
										<Typography
											fontSize={{
												xl: '1rem',
												md: '1rem',
												sm: '0.875rem',
												xs: '0.875rem',
											}}
											fontFamily='Montserrat'
											color='rgba(0, 0, 0, 0.5)'
										>
											Create a comfortable seating by placing a Dining Table and chairs in any Empty
											yet secluded space in your home or commercial establishment.
										</Typography>
									</Box>
								</Box>
								<Box
									order={{
										xl: '2',
										md: '2',
										sm: '1',
										xs: '1',
									}}
									width={mdBreakPoint ? '90%' : 'auto'}
								>
									<img
										style={{
											width: mdBreakPoint ? '100%' : '',
											borderRadius: '20px',
										}}
										src='/assets/images/host_landing/setup-1.png'
										alt=''
									/>
								</Box>
							</Box>
							{/* Register Yourself */}
							<Box
								marginX={{
									xl: '4.375rem',
									md: '4.375rem',
									sm: '2.5rem',
									xs: '0.938rem',
								}}
								display='flex'
								flexDirection={{
									xl: 'row',
									md: 'row',
									sm: 'column',
									xs: 'column',
								}}
								justifyContent='space-between'
								alignItems='center'
								gap={10}
								marginBottom={{
									xl: '4.313rem',
									md: '9.375rem',
									sm: '5.25rem',
									xs: '5.25rem',
								}}
							>
								<Box width={mdBreakPoint ? '90%' : 'auto'}>
									<img
										style={{
											width: mdBreakPoint ? '100%' : '',
											borderRadius: '20px',
										}}
										src='/assets/images/host_landing/setup-2.png'
										alt=''
									/>
								</Box>
								<Box
									display='flex'
									alignItems='flex-start'
									gap={{
										xl: '0.438rem',
										md: '0.438rem',
									}}
									marginTop={{
										xl: '0px',
										md: '0px',
										sm: '3.125rem',
										xs: '3.125rem',
									}}
								>
									<Box
										marginRight={{
											md: '0.438rem',
											sm: '1.5rem',
											xs: '1.5rem',
										}}
									>
										<img
											style={{
												display: 'block',
												marginTop: '0.75rem',
												width: breakPoint ? '24px' : '',
											}}
											src='/assets/images/host_landing/two-hosting.svg'
											alt=''
										/>
									</Box>
									<Box>
										<Typography
											letterSpacing='0.015em'
											fontWeight={600}
											fontFamily='Montserrat'
											fontSize={{
												xl: '2.25rem',
												md: '2.25rem',
												sm: '1.5rem',
												xs: '1.5rem',
											}}
										>
											Beautify it
										</Typography>
										<Typography
											fontSize={{
												xl: '1rem',
												md: '1rem',
												sm: '0.875rem',
												xs: '0.875rem',
											}}
											fontFamily='Montserrat'
											color='rgba(0, 0, 0, 0.5)'
										>
											Decorate the space to create a unique and beautiful Dining Ambience. For
											example: Lights, art, candles, wall hangings, plants etc. Let your creativity
											flow.
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
						{/* Starting hosting Guests */}
						<Box
							sx={{
								background: mdBreakPoint
									? "url('/assets/images/host_landing/start-mobile-hosting-bg.svg')"
									: "url('/assets/images/host_landing/start-hosting-bg.svg')",
								backgroundRepeat: 'no-repeat',
								backgroundPosition: '0px 100px',
							}}
						>
							<Box
								marginX={{
									xl: '4.375rem',
									md: '4.375rem',
									sm: '2.5rem',
									xs: '0.938rem',
								}}
								display='flex'
								flexDirection={{
									xl: 'row',
									md: 'row',
									sm: 'column',
									xs: 'column',
								}}
								justifyContent='space-between'
								alignItems='center'
								gap={10}
								marginBottom={{
									xl: '4.313rem',
									md: '9.375rem',
									sm: '5.25rem',
									xs: '5.25rem',
								}}
							>
								<Box
									order={{
										xl: '1',
										md: '1',
										sm: '2',
										xs: '2',
									}}
									display='flex'
									alignItems='flex-start'
									gap={{
										xl: '0.438rem',
										md: '0.438rem',
									}}
									marginTop={{
										xl: '0px',
										md: '0px',
										sm: '3.125rem',
										xs: '3.125rem',
									}}
								>
									<Box
										marginRight={{
											md: '0.438rem',
											sm: '1.5rem',
											xs: '1.5rem',
										}}
									>
										<img
											style={{
												display: 'block',
												marginTop: '0.75rem',
												width: breakPoint ? '24px' : '',
											}}
											src='/assets/images/host_landing/three-hosting.svg'
											alt=''
										/>
									</Box>
									<Box>
										<Typography
											letterSpacing='0.015em'
											fontWeight={600}
											fontFamily='Montserrat'
											fontSize={{
												xl: '2.25rem',
												md: '2.25rem',
												sm: '1.5rem',
												xs: '1.5rem',
											}}
										>
											Register as a Host
										</Typography>
										<Typography
											fontSize={{
												xl: '1rem',
												md: '1rem',
												sm: '0.875rem',
												xs: '0.875rem',
											}}
											fontFamily='Montserrat'
											color='rgba(0, 0, 0, 0.5)'
										>
											Download our Mobile App for Hosts from your Appstore/ Playstore, tell us about
											your space and yourself and get registered as a Host.
										</Typography>
									</Box>
								</Box>
								<Box
									order={{
										xl: '2',
										md: '2',
										sm: '1',
										xs: '1',
									}}
									width={mdBreakPoint ? '90%' : 'auto'}
								>
									<img
										style={{
											width: mdBreakPoint ? '100%' : '',
											borderRadius: '20px',
										}}
										src='/assets/images/host_landing/setup-3.png'
										alt=''
									/>
								</Box>
							</Box>
							{/* Make memories of a lifetime */}
							<Box
								margin={{
									xl: '0px 4.375rem',
									md: '0px 4.375rem',
									sm: '0px 2.5rem',
									xs: '0px 0.938rem',
								}}
								display='flex'
								flexDirection={{
									xl: 'row',
									md: 'row',
									sm: 'column',
									xs: 'column',
								}}
								justifyContent='space-between'
								alignItems='center'
								gap={10}
								marginBottom={{
									xl: '4.313rem',
									md: '9.375rem',
									sm: '5.25rem',
									xs: '5.25rem',
								}}
							>
								<Box width={mdBreakPoint ? '90%' : 'auto'}>
									<img
										style={{
											borderRadius: '20px',
											width: mdBreakPoint ? '100%' : '',
										}}
										src='/assets/images/host_landing/setup-4.png'
										alt=''
									/>
								</Box>
								<Box
									display='flex'
									alignItems='flex-start'
									gap={{
										xl: '0.438rem',
										md: '0.438rem',
									}}
									marginTop={{
										xl: '0px',
										md: '0px',
										sm: '3.125rem',
										xs: '3.125rem',
									}}
								>
									<Box
										marginRight={{
											md: '0.438rem',
											sm: '1.5rem',
											xs: '1.5rem',
										}}
									>
										<img
											style={{
												display: 'block',
												marginTop: '0.75rem',
												width: breakPoint ? '24px' : '',
											}}
											src='/assets/images/host_landing/four-hosting.svg'
											alt=''
										/>
									</Box>
									<Box>
										<Typography
											letterSpacing='0.015em'
											fontWeight={600}
											fontFamily='Montserrat'
											fontSize={{
												xl: '2.25rem',
												md: '2.25rem',
												sm: '1.5rem',
												xs: '1.5rem',
											}}
										>
											Get paid for making memories
										</Typography>
										<Typography
											fontSize={{
												xl: '1rem',
												md: '1rem',
												sm: '0.875rem',
												xs: '0.875rem',
											}}
											fontFamily='Montserrat'
											color='rgba(0, 0, 0, 0.5)'
										>
											Start Hosting Guests from Thinnai to experience the joy of effortless hosting,
											Good Income and meeting New people. Let’s get you started today!
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				mt={{
					xl: '15.625rem',
					md: '15.625rem',
					sm: '5.625rem',
					xs: '5.625rem',
				}}
				display='flex'
				alignItems='center'
				height={{
					xl: '565px',
					md: '565px',
					sm: '320px',
					xs: '320px',
				}}
				style={{
					backgroundImage: "url('/assets/images/host_landing/CTA.jpg')",
				}}
			>
				<Box
					margin={{
						xl: '0px 4.375rem',
						md: '0px 4.375rem',
						sm: '0px 2.5rem',
						xs: '0px 0.938rem',
					}}
					width={{
						xl: '50%',
						md: '50%',
						sm: '100%',
						xs: '100%',
					}}
				>
					<Typography
						letterSpacing='0.015em'
						fontWeight={700}
						fontFamily='Montserrat'
						color='#FFFFFF'
						mb={{
							xl: '1.313rem',
							md: '1.313rem',
							sm: '0.938rem',
							xs: '0.938rem',
						}}
						lineHeight='1.2em'
						fontSize={{
							xl: '2.25rem',
							md: '2.25rem',
							sm: '1.25rem',
							xs: '1.25rem',
						}}
					>
						WHAT ARE YOU WAITING FOR?
					</Typography>
					<Typography
						fontSize={{
							xl: '1.188rem',
							md: '1.188rem',
							sm: '1rem',
							xs: '1.188rem',
						}}
						lineHeight='1.35em'
						fontFamily='Montserrat'
						color='rgba(255, 255, 255, 0.85)'
						fontWeight={300}
						mb={{
							xl: '2.75rem',
							md: '2.75rem',
							sm: '1.813rem',
							xs: '1.813rem',
						}}
					>
						Now then, let's play. We don't want to set these clouds on fire. You don't want to kill all your dark areas they are very important.
					</Typography>
					<Box
						display='flex'
						justifyContent={{
							xl: 'flex-start',
							md: 'flex-start',
							sm: 'center',
							xs: 'center',
						}}
					>
						<Button
							variant='contained'
							sx={{
								background: '#EBA847',
								borderRadius: '8px',
								fontSize: breakPoint ? '0.875rem' : '1.563rem',
								textTransform: 'none',
								color: '#FFFFFF',
								paddingX: breakPoint ? '1.875rem' : '2.5rem',
								paddingY: '0.625rem',
								boxShadow: 'none',
								fontWeight: '500',
								lineHeight: '36.57px',
								'@media (max-width: 600px)': {
									lineHeight: '17.07px',
								},
							}}
						>
							Check Out Spaces
						</Button>
					</Box>
				</Box>
			</Box>
			<Box>
				<Box>
					<Box
						marginX={{
							xl: '4.375rem',
							md: '4.375rem',
							sm: '2.5rem',
							xs: '0.938rem',
						}}
						marginTop={{
							xl: '12.563rem',
							md: '12.563rem',
							sm: '5.063rem',
							xs: '5.063rem',
						}}
						marginBottom={{
							xl: '7.188rem',
							md: '7.188rem',
							sm: '6.25rem',
							xs: '6.25rem',
						}}
					>
						<SectionTitle subTitle='Testimonial' title='What our lovely client say about us' />
					</Box>
					{/* Testimonial Desktop  */}
					<Box
						display={{
							xl: 'block',
							md: 'block',
							sm: 'none',
							xs: 'none',
						}}
					>
						<Box
							display='flex'
							flexDirection={{
								xl: 'row',
								md: 'row',
								sm: 'column',
								xs: 'column',
							}}
						>
							<Box
								width={{
									xl: '40%',
									md: '40%',
									sm: '100%',
									xs: '100%',
								}}
								height='400px'
								paddingBottom={12}
								sx={{
									boxShadow: '8px 4px 16px rgba(0, 0, 0, 0.08)',
									backgroundImage: "url('/assets/images/host_landing/testimonial-bg.svg')",
									position: 'relative',
								}}
							>
								<Box position='absolute' bottom='-95px' right='0'>
									<img height='300px' src='/assets/images/host_landing/client-1.svg' alt='' />
								</Box>
							</Box>
							<Box
								width={{
									xl: '60%',
									md: '60%',
									sm: '100%',
									xs: '100%',
								}}
								bgcolor='#F4CF97'
								mt={10}
								paddingX={{
									xl: '2.75rem',
									md: '2.75rem',
									sm: '1.5rem',
									xs: '1.5rem',
								}}
							>
								<Typography
									pt='6.25rem'
									fontSize='1.75rem'
									fontWeight={600}
									fontFamily='Inter'
									mb='1.313rem'
								>
									Alina gosh
								</Typography>
								<Typography
									color='rgba(0, 0, 0, 0.5)'
									fontSize='1rem'
									fontWeight={400}
									fontFamily='Inter'
									mb='1.813rem'
								>
									Exercising the imagination, experimenting with talents, being creative; these
									things, to me, are truly the windows to your soul. This is where you take out all
									your hostilities and frustrations. It's better than kicking the puppy dog around
									and all that so. Let's make a happy little mountain now. Isn't it great to do
									something you can't fail at? Let's give him a friend too. Everybody needs a
									friend.
								</Typography>
								<Typography pb={10} fontSize='1.25rem' fontWeight={500} fontFamily='Inter'>
									Hosted : 1500+ Happy Guests
								</Typography>

								<Box
									display={{
										xl: 'block',
										md: 'block',
										sm: 'none',
										xs: 'none',
									}}
								>
									<Box display='flex' justifyContent='flex-end'>
										<Button
											sx={{
												borderRadius: '40px',
											}}
										>
											<img src='/assets/images/host_landing/next.svg' alt='' />
										</Button>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					{/* Testimonial Mobile Responsive */}
					<Box
						display={{
							xl: 'none',
							md: 'none',
							sm: 'block',
							xs: 'block',
						}}
					>
						<Box>
							<Box
								height='400px'
								zIndex={100}
								paddingBottom={12}
								sx={{
									boxShadow: '8px 4px 16px rgba(0, 0, 0, 0.08)',
									backgroundImage: "url('/assets/images/host_landing/testimonial-bg.svg')",
									position: 'relative',
								}}
							></Box>
							<Box zIndex={1000} bgcolor='#F4CF97' mt={-40} position='relative'>
								<Box
									position='absolute'
									top='-3.125rem'
									right={{
										sm: '45%',
										xs: '30%',
									}}
								>
									<img
										style={{
											zIndex: '100000',
										}}
										height='110px'
										width='142px'
										src='/assets/images/host_landing/client-1.svg'
										alt=''
									/>
								</Box>
								<Box
									display={{
										xl: 'none',
										md: 'none',
										sm: 'block',
										xs: 'block',
									}}
								>
									<Box
										display='flex'
										justifyContent='flex-end'
										marginRight={{
											sm: '6.25rem',
											xs: '1.5rem',
										}}
									>
										<Button
											sx={{
												borderRadius: '40px',
												width: '23px',
												height: '22.96px',
											}}
										>
											<img width='100%' src='/assets/images/host_landing/next.svg' alt='' />
										</Button>
									</Box>
								</Box>
								<Box
									padding={{
										xl: '2.75rem',
										md: '2.75rem',
										sm: '2.5rem',
										xs: '2.5rem',
									}}
								>
									<Typography
										pt='6.25rem'
										fontSize='1.75rem'
										fontWeight={600}
										fontFamily='Inter'
										mb='1.313rem'
									>
										Alina gosh
									</Typography>
									<Typography
										color='rgba(0, 0, 0, 0.5)'
										fontSize='1rem'
										fontWeight={400}
										fontFamily='Inter'
										mb='1.813rem'
									>
										Exercising the imagination, experimenting with talents, being creative; these
										things, to me, are truly the windows to your soul. This is where you take out
										all your hostilities and frustrations. It's better than kicking the puppy dog
										around and all that so. Let's make a happy little mountain now. Isn't it great
										to do something you can't fail at? Let's give him a friend too. Everybody needs
										a friend.
									</Typography>
									<Typography pb={10} fontSize='1.25rem' fontWeight={500} fontFamily='Inter'>
										Hosted : 1500+ Happy Guests
									</Typography>
								</Box>
								<Box
									display={{
										xl: 'block',
										md: 'block',
										sm: 'none',
										xs: 'none',
									}}
								>
									<Box display='flex' justifyContent='flex-end'>
										<Button
											sx={{
												borderRadius: '40px',
											}}
										>
											<img src='/assets/images/host_landing/next.svg' alt='' />
										</Button>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* Featured Blogs and article */}
			<Box
				marginX={{
					xl: '4.375rem',
					md: '4.375rem',
					sm: '2.5rem',
					xs: '15px',
				}}
			>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Box
						marginTop={{
							xl: '10.25rem',
							md: '10.25rem',
							sm: '2.063rem',
							xs: '2.063rem',
						}}
						marginBottom={{
							xl: '7.188rem',
							md: '7.188rem',
							sm: '5.563rem',
							xs: '5.563rem',
						}}
					>
						<SectionTitle subTitle='Featured' title='Featured Blogs and article' />
					</Box>
					<Box
						display={{
							xl: 'block',
							md: 'block',
							sm: 'block',
							xs: 'none',
						}}
					>
						<Button
							sx={{
								fontSize: '1.25rem',
								fontWeight: '500',
								lineHeight: '162%',
								color: '#000000',
								marginTop: '5rem',
								textTransform: 'none',
							}}
						>
							See all
						</Button>
					</Box>
				</Box>
				<Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
					<Box
						gridColumn={{
							xl: 'span 5',
							md: 'span 5',
							sm: 'span 12',
							xs: 'span 12',
						}}
						height={{
							xl: '377.06px',
							md: '377.06px',
							sm: '340px',
							xs: '340px',
						}}
						sx={{
							backgroundImage: 'url(/assets/images/host_landing/blog-1.png)',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							backgroundSize: 'cover',
							borderRadius: '8px',
							overflow: 'hidden',
						}}
					>
						<Box marginTop='1.313rem' marginRight='1.75rem'>
							<Typography
								fontWeight={500}
								fontSize='1.25rem'
								fontFamily='Montserrat'
								lineHeight='1.2em'
								color='rgba(255, 255, 255, 0.5)'
								textAlign='right'
							>
								Blogs
							</Typography>
						</Box>
						<Box
							position='absolute'
							left={0}
							bottom={8}
							sx={{
								background:
									'linear-gradient(164.87deg, rgba(26, 25, 30, 0.6) 1%, rgba(0, 0, 0, 0) 109.07%)',
								width: '100%',
								height: '140px',
								backdropFilter: 'blur(5px)',
							}}
						>
							<Box paddingX='1.5rem' paddingTop={2} color='white'>
								<Typography fontWeight={600} fontSize='1.25rem' fontFamily='Inter'>
									Follow the lay{' '}
								</Typography>
								<Typography fontWeight={300} fontSize='0.875rem' fontFamily='Inter'>
									It's better than kicking the puppy dog around and all that so. Let's make a happy
									little mountain now.
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box
						gridColumn={{
							xl: 'span 7',
							md: 'span 7',
							sm: 'span 12',
							xs: 'span 12',
						}}
						height={{
							xl: '377.06px',
							md: '377.06px',
							sm: '340px',
							xs: '340px',
						}}
						sx={{
							backgroundImage: 'url(/assets/images/host_landing/blog-2.png)',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							backgroundSize: 'cover',
							borderRadius: '8px',
							overflow: 'hidden',
						}}
					>
						<Box marginTop='1.313rem' marginRight='1.75rem'>
							<Typography
								fontWeight={500}
								fontSize='1.25rem'
								fontFamily='Montserrat'
								lineHeight='1.2em'
								color='rgba(255, 255, 255, 0.5)'
								textAlign='right'
							>
								Blogs
							</Typography>
						</Box>
						<Box
							position='absolute'
							left={0}
							bottom={8}
							sx={{
								background: '#1A191E99',
								width: '100%',
								height: '140px',
								backdropFilter: 'blur(5px)',
							}}
						>
							<Box paddingX='1.25rem' paddingTop={2} color='white'>
								<Typography fontWeight={600} fontSize='1.25rem' fontFamily='Inter'>
									Follow the lay{' '}
								</Typography>
								<Typography fontWeight={300} fontSize='0.875rem' fontFamily='Inter'>
									It's better than kicking the puppy dog around and all that so. Let's make a happy
									little mountain now.
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box
						gridColumn={{
							xl: 'span 7',
							md: 'span 7',
							sm: 'span 12',
							xs: 'span 12',
						}}
						height={{
							xl: '377.06px',
							md: '377.06px',
							sm: '340px',
							xs: '340px',
						}}
						sx={{
							backgroundImage: 'url(/assets/images/host_landing/article-1.png)',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							backgroundSize: 'cover',
							borderRadius: '8px',
							overflow: 'hidden',
						}}
					>
						<Box marginTop='1.313rem' marginRight='1.75rem'>
							<Typography
								fontWeight={500}
								fontSize='1.25rem'
								fontFamily='Montserrat'
								lineHeight='1.2em'
								color='rgba(255, 255, 255, 0.5)'
								textAlign='right'
							>
								Article
							</Typography>
						</Box>
						<Box
							position='absolute'
							left={0}
							bottom={8}
							sx={{
								background: '#1A191E99',
								width: '100%',
								height: '140px',
								backdropFilter: 'blur(5px)',
							}}
						>
							<Box paddingX='1.25rem' paddingTop={2} color='white'>
								<Typography fontWeight={600} fontSize='1.25rem' fontFamily='Inter'>
									Follow the lay{' '}
								</Typography>
								<Typography fontWeight={300} fontSize='0.875rem' fontFamily='Inter'>
									It's better than kicking the puppy dog around and all that so. Let's make a happy
									little mountain now.
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box
						gridColumn={{
							xl: 'span 5',
							md: 'span 5',
							sm: 'span 12',
							xs: 'span 12',
						}}
						height={{
							xl: '377.06px',
							md: '377.06px',
							sm: '340px',
							xs: '340px',
						}}
						sx={{
							backgroundImage: 'url(/assets/images/host_landing/article-2.png)',
							backgroundRepeat: 'no-repeat',
							position: 'relative',
							backgroundSize: 'cover',
							borderRadius: '8px',
							overflow: 'hidden',
						}}
					>
						<Box marginTop='1.313rem' marginRight='1.75rem'>
							<Typography
								fontWeight={500}
								fontSize='1.25rem'
								fontFamily='Montserrat'
								lineHeight='1.2em'
								color='rgba(255, 255, 255, 0.5)'
								textAlign='right'
							>
								Article
							</Typography>
						</Box>
						<Box
							position='absolute'
							left={0}
							bottom={8}
							sx={{
								background: '#1A191E99',
								width: '100%',
								height: '140px',
								backdropFilter: 'blur(5px)',
							}}
						>
							<Box paddingX='1.25rem' paddingTop={2} color='white'>
								<Typography fontWeight={600} fontSize='1.25rem' fontFamily='Inter'>
									Follow the lay{' '}
								</Typography>
								<Typography fontWeight={300} fontSize='0.875rem' fontFamily='Inter'>
									It's better than kicking the puppy dog around and all that so. Let's make a happy
									little mountain now.
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
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
					<HostAccordion />
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
