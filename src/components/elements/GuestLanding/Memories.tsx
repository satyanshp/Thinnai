import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Memories = () => {
	const [onScreenMem, setOnScreenMem] = useState(0);

	const dataMemories = [
		{
			img: '/assets/images/page/gt1.png',
			name: 'Joe Doe',
			memories:
				"Frank this is the best time I spent with my guy and we both felt very special and this is a moment to cherish. In Fact I was very much stressed due to WFH, 24hrs staying in home but now I feel really lit and happy and should tell about the host, she is such a good lady very friendly felt we are safe there and we felt we are staying in our dearest ones house that's the beauty of the place and host, the place was very cute cozy place to hangout with your loved ones and friends, this all experience I got because of team Thinnai. Thank you soo much for giving us this good memorable time!",
		},
		{
			img: '/assets/images/page/gt2.png',
			name: 'Joe D',
			memories:
				"As soon as I'd come across your page on Instagram, I knew this is where I'd have my birthday dinner. I was very excited and I had decided on surprising my friends, nobody knew where we were going. I was sure that everyone was going to love the place and they did. The place had this very rustic and vintage vibe which was cherry on top. The dinner place looked so cozy and beautiful that two hours seemed too less to enjoy. The in-house help was very considerate and well mannered. Totally loved the experience.Thank you so much!",
		},
		{
			img: '/assets/images/page/gt3.png',
			name: 'J Doe',
			memories:
				'It was amazing!Host was very welcoming, helpful and resourceful (caSurprise party went on really well n we had great time.Thanks a lot for the quality of service provided by you.We sincerely appreciate your efficient, gracious customer service, the level of detail and accountability you have demonstrated and the way you conduct business as a whole. Thanks a ton!',
		},
		{
			img: '/assets/images/page/gt4.png',
			name: 'J Doe',
			memories:
				"The experience me and my fiancé had was truly spellbound. 6s as 1 planned a surprise romantic dinner date for his birthday, and guess what didn't think that it would come out as the best decision ever to take him to Nestle by Thinnai instead of fancy restaurant dates. The vibes, the ambience, the host and the list goes on was so perfect and amazing. This was the most loved and memorable moment of our lives!!",
		},
		{
			img: '/assets/images/page/gt5.png',
			name: 'J Doe',
			memories:
				'Heyyyy!!!! Just noo wordsss it was really amazing we never expected such a amazing ambiance...... Each seconds in Thinnai was going soo fast we was not willing to leave such a fantastic place ... Really felt happy and the host was really soo sweet it was really unique concept ... We spend a quality time together, had fun... Thinnai your team made my boyfriend birthday more special memorable thank you for the wonderful experience we always love to come again to Thinnai!',
		},
		{
			img: '/assets/images/page/gt6.png',
			name: 'J Doe',
			memories:
				"This was unique and great experience, I wish we could stay there longer. Cos we didn't realise how time flies when we stayed there. Such peaceful and happy time we had . and celebrated my friend's btb so nicely. Place looks so beautiful with all lights lit up. Also the place is perfect to celebrate occasion or just to be there and gossip with your people without anyone's intervention.We got mini resort kind experience with all greenery around. We would definitely want to try this place again. Also willing to try more thinnai places in Bangalore for private dining and chit chat experience..",
		},
		{
			img: '/assets/images/page/gt7.png',
			name: 'J Doe',
			memories:
				"Amazing & which i Felt like staying there only don't wanna come back from the spot I really enjoyed that place in just a few moments. And it felt like home! Such a beautiful place which I have never seen! Really felt happy to be part of thinnai and it's my first place visit to thinnai and Really loved it. Actually i was looking something like this in life to find peace around It was a great lovely and beautiful picture. I loved it and want to revisit again. And I'm planning to visit rest of all of the.THINNAI places too soon!",
		},
		{
			img: '/assets/images/page/gt8.png',
			name: 'J Doe',
			memories:
				'Thinnai experience was extremely good and ambience was so satisfying It was really an awesome experience we had in your thinnai space, we planned visiting here just by seeing the reviews and the places you have and after visiting the place I realised that the reviews was absolutely true and If someone ask me about visiting thinnai then I would suggest them to visit without even thinking. Very neat and clean place+ beautiful nature+romantic songs with our loved ones was truly a great and peace full experience. (Ashwita) The host was so co-operative and professional. We will surely visit the other thinnai locations!',
		},
		{
			img: '/assets/images/page/gt9.png',
			name: 'J Doe',
			memories: `Honestly, had a great time at thinnai! Had been going to parties, clubs and stuff but going to a thinnai was an absolutely different experience. We went to the property where we were their first ever customer and must say, the host were so amazingly welcoming and they took care of everything so nicely! Everything was top notch and we had our own space and all our needs were taken care of! Had a quality time! :") Looking forward to visit another thinnai's very very soon!`,
		},
		{
			img: '/assets/images/page/gt10.png',
			name: 'J Doe',
			memories: `Hello, It Was Just Awesome!!! We had visited this thinnai place for the very first time and we just loved it. Place, Nature and Environment was totally awesome & Will definitely refer to my friends and my family members to visit THINNAI PLACES, NO WORDS TO SAY, I CAN JUST SAY AWESOME AWESOME AND AWESOME!!! Thank You Thinnai for this wonderful and beautiful place and experience sleWe will definitely visit other Thinnai places as well... Again I want to say it's Just AWESOME!!`,
		},
	];

	const leftScroll = () => {
		if (onScreenMem > 0) {
			setOnScreenMem(onScreenMem - 1);
		} else if (onScreenMem === 0) {
			setOnScreenMem(dataMemories.length - 1);
		}
	};
	const rightScroll = () => {
		if (onScreenMem < dataMemories.length - 1) {
			setOnScreenMem(onScreenMem + 1);
		} else if (onScreenMem === dataMemories.length - 1) {
			setOnScreenMem(0);
		}
	};

	useEffect(() => {
		var textChange = setInterval(() => {
			rightScroll();
		}, 150000);
		return () => clearInterval(textChange);
	});

	return (
		<Box>
			<CssBaseline />
			<Box
				width={{ md: '87%', xs: '90%' }}
				margin='auto'
				paddingBottom={{
					xl: '0',
					md: '0',
					sm: '0',
					xs: '4rem',
				}}
				fontSize={{ md: '2.25rem', xs: '2.25rem' }}
				textAlign={{
					sm: 'left',
					xs: 'center',
				}}
				lineHeight={{ md: '44px', sm: '32px', xs: '40.82px' }}
				sx={{
					fontWeight: '600',
				}}
			>
				Memories created in Thinnai
			</Box>
			<Box height='5vh' />
			<Box
				position='relative'
				padding={{ md: '10vw 0vh' }}
				display='flex'
				width='100%'
				justifyContent='center'
				marginTop={{
					md: '0rem',
					sm: '5rem',
					xs: '0rem',
				}}
			>
				<Box position='absolute' width='100%'>
					<Box height={10} />
					<Box>
						<img
							style={{ width: '100%' }}
							src='/assets/images/page/memories_illustration.svg'
							alt=''
						/>
					</Box>
					{/* <Box display={{sm:'none',xs:'block'}}>
                  <Box height={50}/>
                  <img style={{width:'100%'}} src="/assets/images/page/memories_illustration.svg" alt="" />
                </Box> */}
				</Box>
				<Box
					//  marginTop={{xs:'32px'}}
					//  width={{md:'83%',xs:'90%'}}
					width='100%'
					display='flex'
					flexDirection='column'
					gap={0.8}
					//  borderRadius= {{md:'0px 0px 0px 120px',xs:'0px 0px 0px 34px'}}
					//  sx={{
					//       background: '#F4CF97',
					//     }}
				>
					<Box height='120px'></Box>
					<Box
						height={{ md: '150px', xs: '96px' }}
						width='100%'
						sx={{
							background: '#F4CF97',
						}}
					></Box>
					<Box
						width='100%'
						height='11px'
						sx={{
							background: '#F4CF97',
						}}
					></Box>
					<Box
						width='100%'
						height='5px'
						sx={{
							background: '#F4CF97',
						}}
					></Box>
				</Box>
				{dataMemories.map((dataMemory, index) => (
					<Box style={{ display: onScreenMem === index ? 'block' : 'none' }}>
						<Box
							width={{ md: '58%', xs: '78%' }}
							height={{ xs: 'auto' }}
							padding={{ md: '1.875rem', xs: '2.5rem 0.5rem' }}
							sx={{
								background: '#FFFCF8',
								boxShadow: '0px 4px 20px rgba(205, 205, 205, 0.25)',
								backdropFilter: 'blur(10px)',
								borderRadius: '30px',
								position: 'absolute',
								top: '11%',
								left: '13.5%',
								float: 'right',
							}}
						>
							<Box
								width={{ xs: '145px' }}
								height={{ xs: '70px' }}
								display={{ md: 'none', xs: 'block' }}
								sx={{
									float: 'right',
									'@media (max-width: 900px)': {
										float: 'none',
										margin: 'auto',
									},
								}}
								component={motion.div}
								initial={{ translateX: '1.75rem', opacity: '0' }}
								whileInView={{ translateX: '0px', opacity: '1' }}
								transition={{
									delay: 0.2,
									x: { duration: 0.3 },
								}}
							>
								<Box
									width={{ md: '432px', sm: '290px', xs: '290px' }}
									height={{ md: '288px', xs: '8.688rem' }}
									display={{ md: 'none', xs: 'block' }}
									sx={{
										position: 'relative',
										right: '13%',
										top: '-120%',
										'@media (max-width: 900px)': {
											right: '48%',
											top: '-190%',
										},
										'@media (max-width: 317px)': {
											width: '90vw',
										},
									}}
								>
									<img
										style={{
											width: '100%',
											borderRadius: '20px',
										}}
										src={dataMemory.img}
										alt=''
									/>
								</Box>
							</Box>
							{/* <Box
								fontSize={{ md: '28px', xs: '14px' }}
								lineHeight={{ md: '38px', xs: '25.07px' }}
								style={{
									fontFamily: 'Open Sans',
									fontStyle: 'normal',
									fontWeight: '600',
								}}
								component={motion.div}
								initial={{ translateX: '0px', opacity: '0.2' }}
								whileInView={{ translateX: '1.75rem', opacity: '1' }}
								transition={{
									delay: 0.2,
									x: { duration: 0.3 },
								}}
							>
								<h2>{dataMemory.name}</h2>
							</Box> */}
							<Box
								fontSize={{ md: '1.1vw', xs: '0.75rem' }}
								lineHeight={{ md: '25px', xs: '16.34px' }}
								style={{
									fontFamily: 'Open Sans',
									fontStyle: 'normal',
									fontWeight: '400',
								}}
								paddingBottom={{
									xl: '3rem',
									md: '3rem',
									sm: '2rem',
									xs: '2rem',
								}}
								paddingTop={{
									md: '0.625rem',
								}}
								width={{
									xl: '73%',
									md: '65%',
									sm: '100%',
									xs: '100%',
								}}
								component={motion.div}
								initial={{ translateX: '0px', opacity: '0.2' }}
								whileInView={{ translateX: '1.75rem', opacity: '1' }}
								transition={{
									delay: 0.2,
									x: { duration: 0.3 },
								}}
								sx={{
									'@media (max-width: 900px)': {
										textAlign: 'left',
										marginTop: '1.875rem',
										paddingRight: '3.75rem',
									},
								}}
							>
								<Typography lineHeight='1.6em'>{dataMemory.memories}</Typography>
							</Box>
							<Box
								gap={2}
								display='flex'
								position='absolute'
								left={{
									xl: '7%',
									md: '7%',
									sm: '7%',
									xs: '13%',
								}}
								bottom={{
									xl: '10%',
									md: '6%',
									sm: '5%',
									xs: '3%',
								}}
							>
								<Box
									onClick={leftScroll}
									display='flex'
									alignItems='center'
									justifyContent='center'
									color='white'
									sx={{
										background: '#1A191E',
										aspectRatio: '1',
										cursor: 'pointer',
										width: '35px',
										boxShadow: '0px 2px 20px rgba(61, 58, 53, 0.12)',
										borderRadius: '50%',
									}}
								>
									<ArrowBackIcon style={{ fontSize: '1.125rem' }} />
								</Box>
								<Box
									onClick={rightScroll}
									display='flex'
									alignItems='center'
									justifyContent='center'
									color='#1A191E'
									sx={{
										background: 'white',
										aspectRatio: '1',
										cursor: 'pointer',
										width: '35px',
										boxShadow: '0px 2px 20px rgba(61, 58, 53, 0.12)',
										borderRadius: '50%',
									}}
								>
									<ArrowForwardIcon style={{ fontSize: '1.125rem' }} />
								</Box>
							</Box>
						</Box>
						<Box
							width={{ xl: '432px', md: '402px', sm: '392px', xs: '209px' }}
							height={{ md: '318px', xs: '139px' }}
							display={{ md: 'block', xs: 'none' }}
							right={{ xl: '12.5%', md: '2%' }}
							sx={{
								position: 'absolute',
								borderRadius: '30px',
								top: '6%',
								overflow: 'hidden',
							}}
							component={motion.div}
							initial={{ translateX: '1.875rem', opacity: '0.2' }}
							whileInView={{ translateX: '0px', opacity: '1' }}
							transition={{
								delay: 0.2,
								x: { duration: 0.3 },
							}}
						>
							<img style={{ height: '100%' }} src={dataMemory.img} alt='' />
						</Box>
					</Box>
				))}
				{/* <Box
					// className='memories__controls'
					// display='flex'
					// position='absolute'
					// bottom={{
					// 	xl: '60px',
					// 	md: '20px',
					// 	small: '20px',
					// 	xs: '-65px',
					// }}
					gap={2}
					display='flex'

					// margin={{
					// 	xl: 'auto',
					// 	md: '4rem auto',
					// 	sm: 'auto',
					// 	xs: 'auto',
					// }}
				>
					<Box
						onClick={leftScroll}
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='white'
						sx={{
							background: '#1A191E',
							aspectRatio: '1',
							cursor: 'pointer',
							width: '35px',
							boxShadow: '0px 2px 20px rgba(61, 58, 53, 0.12)',
							borderRadius: '50%',
						}}
					>
						<ArrowBackIcon style={{ fontSize: '18px' }} />
					</Box>
					<Box
						onClick={rightScroll}
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='#1A191E'
						sx={{
							background: 'white',
							aspectRatio: '1',
							cursor: 'pointer',
							width: '35px',
							borderRadius: '50%',
						}}
					>
						<ArrowForwardIcon style={{ fontSize: '18px' }} />
					</Box>
				</Box> */}

				{/* <Box
               position='absolute'
               width={{xs:'17%'}}
               height={{sm:'22%',xs:'25%'}}
               bottom={{md:'19%',xs:'36%'}}
               right={{md:'16%',xs:'5%'}}
               zIndex='-1'
               sx={{
                    background: 'rgba(244, 207, 151, 0.2)',
                    borderRadius: '8px',
                 }}
            /> */}
			</Box>
		</Box>
	);
};

export default Memories;
