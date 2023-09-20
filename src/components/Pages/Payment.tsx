import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Divider,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { ROUTES } from '../../utils/routing/routes';
import NavBar from '../elements/Explore/NavBar';
import Search from '../elements/Explore/Search';
import BookingDetails from '../elements/Payment/BookingDetails';
import DetailPicture from '../elements/Payment/DetailPicture';
import Note from '../elements/Payment/Note';
import OtherPayment from '../elements/Payment/OtherPayment';
// import PaymentSummary from '../elements/Payment/PaymentSummary';
import ProceedButton from '../elements/Payment/ProceedButton';
import SummaryData from '../elements/Payment/SummaryData';
// import TotalAmount from '../elements/Payment/TotalAmount';

const Payment = () => {
	// const navigate = useNavigate();

	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);

	//To Open Search Options
	const [searchState, setSearchState] = useState(false);
	const [bookingDetails, setBookingDetails] = useState(true);

	const openSearch = () => {
		setSearchState(true);
	};

	//To change SearchBar to Searched Details
	const [stateSearched, setStateSearched] = useState(false);
	const searched = () => {
		setSearchState(false);
		setStateSearched(true);
	};

	//Responsive Booking Menu FullScreen
	const [viewBook, setViewBook] = useState(false);

	const data = [
		{
			title: 'Canara Bank Debit Card',
			img: 'assets/images/payment/visa.svg',
			exp: '05/26',
			accountNumber: '**** **** **** 5026',
			id: '1',
		},
		{
			title: 'ICICI Bank Debit Card',
			img: 'assets/images/payment/mastercard.svg',
			exp: '05/26',
			accountNumber: '**** **** **** 5026',
			id: '2',
		},
	];

	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		if (enquiries.length === 0) {
			// navigate(ROUTES.EXPLORE);
		}
	}, []);

	return (
		<Box
			paddingBottom={7}
			marginTop={{
				md: '0',
				xs: '2rem',
			}}
		>
			{!viewBook && (
				<Box height={70} display={{ xs: 'flex', sm: 'none' }} justifyContent='center'>
					<Box width='100%' fontWeight='700' fontSize='1.25rem' display='flex' alignItems='center'>
						<Button>
							<img src='assets/images/detail/arrowBack.svg' alt='' />
						</Button>
					</Box>
				</Box>
			)}
			<Box position='relative' display={{ xl: 'block', md: 'block', sm: 'block', xs: 'none' }}>
				{!viewBook && (
					<NavBar
						stateSearched={stateSearched}
						setStateSearched={setStateSearched}
						searchTabOpen={openSearch}
						state={searchState}
						searchTabClose={() => setSearchState(false)}
					/>
				)}
				{searchState && (
					<Box position='absolute' width='590px' top='81px' left='29.5%' zIndex='5'>
						<Search onClick={searched} />
					</Box>
				)}
			</Box>
			<Box
			// margin={{
			// 	xl: '0px 3.75rem',
			// 	md: '0px 3.75rem',
			// 	sm: '0px 1.875rem',
			// 	xs: '0px 1.875rem',
			// }}
			>
				{!bookingDetails && (
					<Box
						margin={{
							xl: '0px 3.75rem',
							md: '0px 3.75rem',
							sm: '0px 1.875rem',
							xs: '0px 1.875rem',
						}}
					>
						<Typography marginTop='3.75rem' marginBottom='6.25rem' fontSize='2.25rem'>
							Payment
						</Typography>
					</Box>
				)}
				<Box
					display='flex'
					justifyContent='space-between'
					flexDirection={{
						xl: 'row',
						md: 'row',
						sm: 'column',
						xs: 'column',
					}}
				>
					<Box
						width={{
							xl: bookingDetails ? '60%' : '40%',
							md: bookingDetails ? '60%' : '40%',
							sm: '100%',
							xs: '100%',
						}}
						position='relative'
					>
						{bookingDetails && (
							<Box
								margin={{
									xl: '0px 3.75rem',
									md: '0px 3.75rem',
									sm: '0px 1.875rem',
									xs: '0px 1.875rem',
								}}
							>
								<Typography marginTop='3.75rem' marginBottom='3.75rem' fontSize='2.25rem'>
									Payment
								</Typography>
							</Box>
						)}
						<Box
							margin={{
								xl: '0px 3.75rem',
								md: '0px 3.75rem',
								sm: '0px 1.875rem',
								xs: '0px 1.875rem',
							}}
						>
							<Typography
								marginBottom='2.5rem'
								fontSize={{
									xl: '2.25rem',
									md: '2rem',
									sm: '1.75rem',
									xs: '1.5rem',
								}}
							>
								Select Payment Method
							</Typography>

							<Typography marginBottom='2.5rem' fontWeight='300' fontSize='1.5rem' variant='body2'>
								Suggested for you
							</Typography>
							<RadioGroup
								aria-labelledby='demo-radio-buttons-group-label'
								defaultValue='1'
								name='radio-buttons-group'
							>
								{data?.map((card, index) => (
									<>
										{bookingDetails ? (
											<Box marginBottom={6} key={index}>
												<Box
													display='flex'
													justifyContent='space-between'
													alignItems={{
														xl: 'space-between',
														md: 'space-between',
														sm: 'center',
														xs: 'center',
													}}
													flexDirection={{
														xl: 'row',
														md: 'row',
														sm: 'column',
														xs: 'column',
													}}
												>
													<Box
														display='flex'
														alignItems='center'
														gap='1rem'
														flexDirection={{
															xs: 'column',
															md: 'row',
														}}
													>
														<Box>
															<img src={card.img} alt='' />
														</Box>
														<Box>
															<Typography
																textAlign={{
																	xs: 'center',
																	md: 'left',
																}}
															>
																{card.title}
															</Typography>
															<Typography
																textAlign={{
																	xs: 'center',
																	md: 'left',
																}}
																color='#A0A0A0'
															>
																{card.accountNumber}
															</Typography>
															<Box mb={1}>
																<span style={{ color: '#A0A0A0' }}>Secure this card as per</span>{' '}
																RBI Guidelines
															</Box>
														</Box>
													</Box>
													<Box color='#A0A0A0'>Exp - {card.exp}</Box>
													<Box
														color='#A0A0A0'
														display='flex'
														justifyContent='flex-end'
														alignItems='center'
													>
														<FormControlLabel value={card.id} control={<Radio />} label='' />
													</Box>
												</Box>
												<Divider />
											</Box>
										) : (
											<Box>
												<Box
													display='flex'
													justifyContent={{
														xl: 'space-between',
														md: 'space-between',
														sm: 'space-between',
														xs: 'center',
													}}
													alignItems={{
														xl: 'flex-start',
														md: 'flex-start',
														sm: 'center',
														xs: 'center',
													}}
													flexDirection={{
														xl: 'row',
														md: 'row',
														sm: 'column',
														xs: 'column',
													}}
												>
													<Box>
														<img src={card.img} alt='' />
													</Box>
													<Box>
														<Typography>{card.title}</Typography>
														<Typography color='#A0A0A0'>{card.accountNumber}</Typography>
													</Box>
													<Box color='#A0A0A0'>Exp - {card.exp}</Box>
												</Box>
												<Box>
													<Accordion
														expanded={expanded === 'panel1'}
														onChange={handleChange('panel1')}
													>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon />}
															aria-controls='panel1bh-content'
															id='panel1bh-header'
														>
															<p style={{ margin: 'auto' }}>
																<span style={{ color: '#A0A0A0' }}>Secure this card as per</span>{' '}
																RBI Guidelines
															</p>
														</AccordionSummary>
														<AccordionDetails>
															<Typography className='detail__p'>
																Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis
																convallis diam sit amet lacinia. Aliquam in elementum tellus."Lorem
																ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
																tempor.
															</Typography>
														</AccordionDetails>
													</Accordion>
												</Box>
												<Divider />
												<Box height={{ sm: 50, xs: 30 }} />
											</Box>
										)}
									</>
								))}
							</RadioGroup>
						</Box>
						<OtherPayment bookingDetails={bookingDetails} />
					</Box>
					{bookingDetails ? (
						<Box
							width={{
								xl: '40%',
								md: '40%',
								sm: '80%',
								xs: '80%',
							}}
							zIndex='6'
							margin={{
								md: '0 3rem 0 0',
								xs: 'auto',
							}}
						>
							<Box
								marginBottom='1.625rem'
								marginTop='5rem'
								display={{
									md: 'block',
									xs: 'none',
								}}
							>
								<Note />
							</Box>
							<Box
								bgcolor='#FFFFFF'
								border='1px solid #C5C5C5'
								boxShadow='2px 4px 8px 7px rgba(0, 0, 0, 0.04)'
								borderRadius='20px'
								height='fit-content'
								paddingBottom='30px'
								marginTop={{
									md: 0,
									xs: 6,
								}}
							>
								<Box
									display={{
										md: 'block',
										xs: 'none',
									}}
								>
									<DetailPicture />
								</Box>
								<Box
									marginBottom='1.25rem'
									display={{
										md: 'block',
										xs: 'none',
									}}
								>
									<BookingDetails />
								</Box>
								<Divider
									sx={{
										display: { xs: 'none', md: 'block' },
									}}
								/>
								<Typography
									fontFamily='Montserrat'
									paddingY={2}
									fontWeight={600}
									marginX='1.25rem'
									fontSize={{
										md: '1.3rem',
										sm: '1.25rem',
										xs: '1.25rem',
									}}
								>
									Payment Summary
								</Typography>
								<Divider />
								<Box marginX='1.25rem'>
									<SummaryData />
								</Box>
								<Box marginTop='1.25rem'>
									<Divider />
								</Box>
								<Box
									margin={{
										xl: '0px',
										md: '0px 0px',
										sm: '0px 1.25rem',
										xs: '0px 1.25rem',
									}}
								>
									{/* <TotalAmount /> */}
								</Box>
								<Box
									display={{
										md: 'flex',
										xs: 'none',
									}}
									justifyContent='center'
									marginTop='4.813rem'
								>
									<ProceedButton />
								</Box>
							</Box>
							<Box
								display={{
									md: 'none',
									xs: 'flex',
								}}
								justifyContent='center'
								marginTop='4.813rem'
							>
								<ProceedButton />
							</Box>
						</Box>
					) : (
						<Box
							width={{
								xl: '50%',
								md: '50%',
								sm: '100%',
								xs: '100%',
							}}
						>
							<Box
								border='1px solid #C5C5C5'
								boxShadow='2px 4px 8px 7px rgba(0, 0, 0, 0.04)'
								borderRadius='20px'
								height='fit-content'
								paddingBottom='30px'
							>
								<DetailPicture />
								<BookingDetails />
								{/* Total amount */}
								<Box
									margin={{
										xl: '0px',
										md: '0px 0px',
										sm: '0px 1.25rem',
										xs: '0px 1.25rem',
									}}
								>
									{/* <TotalAmount /> */}
								</Box>
							</Box>
							<Box marginTop='1.625rem'>
								<Note />
							</Box>
						</Box>
					)}
					{/* End */}
				</Box>
				{!bookingDetails && (
					<Box
						paddingY={7}
						width={{
							xl: '60%',
							md: '80%',
							sm: '100%',
							xs: '100%',
						}}
						margin='auto'
					>
						{/* <PaymentSummary /> */}
					</Box>
				)}
				{bookingDetails && (
					<Box
						position='fixed'
						left='0'
						width={{
							md: '60%',
							xs: '100%',
						}}
						right='0'
						fontSize={{
							sm: '1.5rem',
							xs: '1rem',
						}}
						color='white'
						top={{
							md: 'unset',
							xs: '0rem',
						}}
						sx={{
							'@media (min-width: 900px)': {
								bottom: 0,
							},
						}}
						textAlign='center'
						bgcolor='#24BA0E'
						paddingY='4px'
						zIndex='999'
						marginBottom={0.0}
					>
						100% Secure Payments
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Payment;
