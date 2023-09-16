import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const More = () => {
	return (
		<Box
			marginTop={{
				xl: 0,
				sm: '5rem',
				xs: '1rem',
			}}
			sx={{
				'@media (max-width: 460px)': {
					marginTop: '5rem',
				},
			}}
			position='relative'
			className='why'
			height={{ md: '694px', xs: '1800px' }}
		>
			<Box
				sx={{
					background:
						'linear-gradient(180deg, rgba(244, 207, 151, 0.2) 73.35%, rgba(244, 207, 151, 0.008) 100%)',
					// borderRadius: '135px 0px 119px',
					padding: '75px 0',
				}}
				className='why__header'
				height={{ md: '499px', xs: '1052px' }}
				borderRadius={{ sm: '135px 0px 119px', xs: '50px 0px 50px' }}
			>
				<h2
					style={{
						fontWeight: '600',
						fontSize: '2.25rem',
						lineHeight: '44px',
						margin: '0 auto',
						width: '80%',
					}}
				>
					More than just a dining space!
				</h2>
				<Box
					sx={{
						fontFamily: 'Open Sans',
						fontStyle: 'normal',
						fontWeight: '300',
						fontSize: '1.125rem',
						lineHeight: '25px',
						margin: '0 auto',
						width: '80%',
					}}
					marginTop={{
						xl: '0.313rem',
						md: '0.313rem',
						sm: '0.625rem',
						xs: '0.625rem',
					}}
					textAlign={{
						xl: 'left',
						md: 'left',
						sm: 'center',
						xs: 'center',
					}}
				>
					Our Beautiful Thinnai spaces are used for many creative works.
				</Box>
			</Box>
			<Box
				position='relative'
				height={{ md: '347px', xs: '900px' }}
				borderRadius={{ sm: '135px 0px 119px', xs: '50px 0px 50px' }}
				sx={{
					background: '#F4CF97',
					bottom: '152px',
					zIndex: '2',
					width: '100%',
				}}
			>
				<Box position='relative' height='100%' width={{ xs: '88%' }} margin='auto'>
					<Grid
						// ref={myRef}
						container
						height='100%'
						position='relative'
						direction={{ xs: 'column', md: 'row' }}
						flexWrap='nowrap'
						top={{ md: '-41.5%', xs: '-74.2%' }}
						gap={{ md: '0', xs: 8 }}
						justifyContent={{ md: 'space-between' }}
					>
						<CssBaseline />
						<Grid
							item
							xl={4}
							display='flex'
							flexDirection='column'
							gap={2}
							alignItems='center'
							justifyContent='space-evenly'
							margin={{ xs: 'auto', md: '' }}
						>
							<Box
								display='flex'
								position='relative'
								justifyContent='center'
								alignItems='center'
								width='288px'
								sx={{
									background: 'linear-gradient(180deg, #faedd8 50%, #eba847 50%)',
									aspectRatio: '1',
									borderRadius: '50%',
								}}
								component={motion.div}
								initial={{ translateY: '-1.25rem', opacity: '0' }}
								whileInView={{ translateY: '0px', opacity: '1' }}
								viewport={{ once: true }}
								transition={{
									delay: 0.2,
									x: { duration: 0.5 },
								}}
							>
								<img style={{ zIndex: '1' }} src='/assets/images/page/more1.svg' alt='' />
								<img
									style={{ position: 'absolute', left: '70%', top: '42%' }}
									src='/assets/images/page/tree.svg'
									alt=''
								/>
							</Box>
							<Box className='how__header xs_header'>Meetings & Remote work</Box>
							<Box className='how__p' width={{ xl: '60%' }} textAlign='center'>
								Private & Inspiring work spaces curated for productive work sessions and meetings.
							</Box>
						</Grid>
						<Grid
							item
							xl={4}
							display='flex'
							flexDirection='column'
							gap={2}
							alignItems='center'
							justifyContent='space-evenly'
							margin={{ xs: 'auto', md: '' }}
						>
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'
								width='288px'
								sx={{
									background: 'linear-gradient(180deg, #faedd8 50%, #eba847 50%)',
									aspectRatio: '1',
									borderRadius: '50%',
								}}
								component={motion.div}
								initial={{ translateY: '-1.25rem', opacity: '0' }}
								whileInView={{ translateY: '0px', opacity: '1' }}
								viewport={{ once: true }}
								transition={{
									delay: 0.2,
									x: { duration: 0 },
								}}
							>
								<img src='/assets/images/page/more2.svg' alt='' />
							</Box>
							<Box className='how__header xs_header'>Host Workshops</Box>
							<Box className='how__p' width={{ xl: '60%' }} textAlign='center'>
								Beautiful spaces to host workshops which induces creativity and adds more value to
								the entire experience{' '}
							</Box>
						</Grid>
						<Grid
							item
							xl={4}
							display='flex'
							flexDirection='column'
							gap={2}
							alignItems='center'
							justifyContent='space-evenly'
							margin={{ xs: 'auto', md: '' }}
						>
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'
								width='288px'
								sx={{
									background: 'linear-gradient(180deg, #faedd8 50%, #eba847 50%)',
									aspectRatio: '1',
									borderRadius: '50%',
								}}
								component={motion.div}
								initial={{ translateY: '-1.25rem', opacity: '0' }}
								whileInView={{ translateY: '0px', opacity: '1' }}
								viewport={{ once: true }}
								transition={{
									delay: 0.2,
									x: { duration: 0.5 },
								}}
							>
								<motion.img
									whileInView={{ opacity: '1' }}
									initial={{ opacity: '0' }}
									src='/assets/images/page/more3.svg'
									alt=''
								/>
							</Box>
							<Box className='how__header xs_header'>Solo Dates</Box>
							<Box className='how__p' width={{ xl: '60%' }} textAlign='center'>
								Doing anything you like peacefully, while having your favourite food as & when you
								like.
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default More;
