import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

interface props {
	onClick?: () => void;
}

const What = ({ onClick }: props) => {
	return (
		<Box>
			<Grid container display='flex' justifyContent='space-evenly' position='relative'>
				<CssBaseline />
				<Grid
					item
					sm={6.2}
					xs={12}
					margin={{ lg: '0 0 0 5.938rem' }}
					padding={{ md: '1.875rem 5rem', xs: '0.625rem 1.25rem' }}
				>
					<Box
						fontSize={{ md: '2.35vw' }}
						lineHeight={{xl:"55px", md: '44px', xs: '24.38px' }}
						sx={{
							fontWeight: '700',
						}}
						className='what__header'
						width={{
							md: '100% !important',
							sm: '50% !important',
							xs: '100% !important',
						}}
						textAlign={{
							sm: 'left',
							xs: 'center',
						}}
						left={{
							sm: '2.5rem !important',
							xs: '0 !important',
						}}
						paddingX={{
							sm: '0',
							xs: '1rem',
						}}
					>
						The Joy of experiencing Private Dining is just a click away!
					</Box>
					<Box
						fontSize={{ md: '1.17vw' }}
						lineHeight={{xl:"35px", md: '25px', xs: '16.34px' }}
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '300',
						}}
						paddingTop={{
							md: '1rem',
						}}
						className='what__p'
						textAlign={{
							sm: 'left',
							xs: 'center',
						}}
						width={{
							md: '100% !important',
							sm: '50% !important',
							xs: '100% !important',
						}}
						left={{
							sm: '2.5rem !important',
							xs: '0 !important',
						}}
						marginTop={{
							xs:"2vh",
							sm:"2vh"
						}}
						paddingX={{
							sm: '0',
							xs: '1rem',
						}}
					>
						Book Your Private Dinning Thinnai Experience Today! We assure you an experience like
						never before!
					</Box>
					<Box height={30} />
					<Box display={{ md: 'block', xs: 'none' }}>
						<Button
							variant='contained'
							sx={{
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								background: '#1A191E',
								color: 'white',
								textTransform: 'none',
								fontWeight: '500',
								fontSize: '1.125rem',
								lineHeight: '22px',
								marginTop: '0.625rem',
								padding: '0.75rem 2.5rem',
							}}
							onClick={onClick}
						>
							Book Your Space Now
						</Button>
					</Box>
				</Grid>
				<Grid
					item
					sm={4}
					xs={12}
					width={{
						sm: '100%',
						xs: '100%',
					}}
					className='what__img__cont'
					component={motion.div}
					marginTop='1rem'
					initial={{ translateX: '1.875rem', opacity: 0 }}
					whileInView={{ translateX: '0px', opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						delay: 0.2,
						x: { duration: 0.3 },
					}}
				>
					<Box
						width={{
							sm: '100%',
							xs: '50%',
						}}
						margin='auto'
						paddingTop={{
							sm: '0',
							xs: 7,
						}}
					>
						<img width='100%' src='/assets/images/page/what.svg' alt='' />
					</Box>
				</Grid>
			</Grid>
			<Box display={{ md: 'none', xs: 'flex' }}>
				<Button
					variant='contained'
					sx={{
						fontFamily: 'Montserrat',
						fontStyle: 'normal',
						background: '#1A191E',
						color: 'white',
						textTransform: 'none',
						fontWeight: '500',
						fontSize: '1.125rem',
						lineHeight: '22px',
						padding: '0.75rem 2.5rem',
						margin: '0 auto',
					}}
					onClick={onClick}
				>
					Check Out Spaces
				</Button>
			</Box>
		</Box>
	);
};

export default What;
