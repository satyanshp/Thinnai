import React from 'react'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import HostNav from '../HostLanding/HostNav';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';


const useStyles: any = makeStyles({
	topBanner: {
		background: 'linear-gradient(146.48deg, rgba(26, 25, 30, 0.6) 0%, rgba(0, 0, 0, 0) 97.84%)',
		display: 'flex',
		alignItems: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
});

const Video = () => {

    const classes = useStyles();

	const textLoop = [
		'Hosting!',
		'Experience!',
		'Memories!',
		'Moments!',
		'Friends!',
		'Community!',
		'Income!',
	];
  return (
    
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
                </Box>
            </Box>
        </Box>
  )
}

export default Video