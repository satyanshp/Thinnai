import { CssBaseline, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HostFeatured = () => {
	const featuredHost = [
		{
			img: '/assets/images/featured-1.png',
			link: 'https://hospitality.economictimes.indiatimes.com/news/operations/food-and-beverages/thinnai-the-airbnb-of-dining-spaces-to-launch-in-november/86864000',
		},
		{
			img: '/assets/images/featured-2.png',
			link: 'https://www.deccanherald.com/metrolife/metrolife-your-bond-with-bengaluru/eat-listen-to-music-read-books-meet-in-others-homes-1065676.html',
		},
		{
			img: '/assets/images/featured-3.png',
			link: 'https://www.newindianexpress.com/cities/bengaluru/2022/may/25/bengaluru-startup-offersprivate-dining-experience-with-favourite-food-2457504.html',
		},
		{
			img: '/assets/images/featured-4.png',
			link: 'https://www.instagram.com/reel/CiSNo8BqJSV/?utm_source=ig_web_copy_link',
		},
		{
			img: '/assets/images/featured-5.png',
			link: 'https://www.whatshot.in/bangalore/thinnai-v-175326',
		},
	];

	return (
		<Box
			mt={{
				xl: '13.75rem',
				md: '13.75rem',
				sm: '3.5rem',
				xs: '3.5rem',
			}}
			minHeight={{
				xl: '387px',
				md: '387px',
				sm: '177px',
				xs: '177px',
			}}
			bgcolor='#FCF5E9'
		>
			<Typography
				pt={{
					xl: '3rem',
					md: '3rem',
					sm: '1rem',
					xs: '1rem',
				}}
				color='#1A191E'
				fontWeight='700'
				fontFamily='Montserrat'
				fontSize={{
					xl: '2.25rem',
					md: '2.25rem',
					sm: '1.5rem',
					xs: '1.5rem',
				}}
				textAlign='center'
				lineHeight={{
					xl: '1.4em',
					md: '1.4em',
					sm: '29.26px',
					xs: '29.26px',
				}}
			>
				Featured on
			</Typography>

			<Box padding={{ xl: '0 0.625rem' }}>
				<Grid
					container
					gap={{ md: 3, xs: 3 }}
					padding={{ sm: '1.875rem 3.125rem', xs: '1.875rem 0px' }}
					wrap='nowrap'
					direction='row'
					className='carousel-cont'
					id='carousel'
					sx={{
						overflowX: 'scroll',
						'&::WebkitScrollbar': { display: 'none' },
						scrollbarWidth: '0px',
					}}
				>
					<CssBaseline />
					{featuredHost.map((item: any, index: number) => (
						<Grid
							item
							key={index}
							xl={4}
							md={4}
							xs={12}
							display='flex'
							flexDirection='column'
							flexGrow='1'
							padding={2}
							width='100%'
							// overflow='hidden'
							sx={{
								borderRadius: '6px',
								zIndex: '1',
							}}
						>
							<a href={item.link} target='_blank' rel='noreferrer'>
								<Box
									margin='auto'
									width={{
										xs: '80px',
										md: '140px',
									}}
									height={{
										xs: '80px',
										md: '140px',
									}}
									sx={{ position: 'relative' }}
								>
									<img
										style={{
											width: '100%',
											height: '100%',
											borderRadius: '6px',
										}}
										src={item.img}
										alt=''
									/>
								</Box>
							</a>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default HostFeatured;
