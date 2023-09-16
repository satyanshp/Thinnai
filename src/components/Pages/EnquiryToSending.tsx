import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	Popover,
	Toolbar,
	Typography,
} from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadProperty } from '../../actions/details';
import {
	deleteEnquiry,
	loadEnquiryPlaces,
	setAddMoreEnquiry,
	setEnquiryIndex,
	setLoadEnquiryData,
} from '../../actions/enquiry';
import { logout as otpStoreLogout } from '../../actions/guestAuth';
import { logout as registerLogout } from '../../actions/register';
import { RootState } from '../../store';
import { menuItems, S3_BASE } from '../../utils/consts';
import { ROUTES } from '../../utils/routing/routes';
import EnquiryCarousel from '../elements/EnquiryToSending/EnquiryCarousel';
import SummaryData from '../elements/Payment/SummaryData';

const EnquiryToSending = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const isAuthenticated = useSelector<RootState, boolean>(state => state.guestAuth.isAuthenticated);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const user = useSelector<RootState, any>(state => state.guestAuth.user);

	//Responsive Booking Menu FullScreen
	const [viewBook, setViewBook] = useState(false);

	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);

	const [amount, setAmount] = useState<number>(0);
	const [totalAmount, setTotalAmount] = useState<number>(0);

	useEffect(() => {
		const convenienceFee = Number((amount * 0.09).toFixed(2));
		const gst = Number((convenienceFee * 0.18 + amount * 0.085).toFixed(2));
		setTotalAmount(amount + convenienceFee + gst);
	}, [amount]);

	const onClickAdd = () => {
		dispatch(setAddMoreEnquiry({ addMoreEnquiry: true }));
		dispatch(setEnquiryIndex({ enquiryId: enquiries[0].id }));
		navigate(ROUTES.EXPLORE);
	};

	const onClickEdit = (propertyId: string, enquiryId: number) => {
		dispatch(loadProperty(propertyId));
		dispatch(setEnquiryIndex({ enquiryId }));
		dispatch(setLoadEnquiryData({ loadEnquiryData: true }));
		navigate(ROUTES.PROPERTY_DETAIL);
	};

	const onClickDelete = (enquiryId: number) => {
		const newEnquiries = enquiries.filter((enquiry: any) => enquiry.id !== enquiryId);
		dispatch(deleteEnquiry({ enquiries: newEnquiries }));
		if (newEnquiries.length === 0) {
			navigate(ROUTES.EXPLORE);
		}
	};

	const onClickProceed = () => {
		navigate(ROUTES.PAYMENT);
	};

	useEffect(() => {
		if (enquiries.length === 0) {
			navigate(ROUTES.EXPLORE);
		} else {
			const index = enquiries.reduce(
				(iMax: any, x: any, i: any, arr: any) => (x.amount > arr[iMax].amount ? i : iMax),
				0
			);
			setAmount(enquiries[index].amount);
			dispatch(loadEnquiryPlaces());
		}
	}, []);

	const logoutUser = () => {
		dispatch(registerLogout());
		dispatch(otpStoreLogout());
		navigate(ROUTES.EXPLORE);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				'@media (max-width: 600px)': {
					backgroundImage: 'url(assets/images/enquiry/enquiry-bg-mobile.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'right 0',
				},
				position: 'relative',
			}}
		>
			{!viewBook && (
				<Box height={70} display={{ xs: 'flex', sm: 'none' }} justifyContent='center'>
					<Box width='100%' fontWeight='700' fontSize='1.25rem' display='flex' alignItems='center'>
						<Button
							sx={{
								textTransform: 'none',
								color: 'black',
								fontWeight: '700',
								fontSize: '1.375rem',
							}}
						>
							<img
								onClick={() => navigate(ROUTES.EXPLORE)}
								style={{
									cursor: 'pointer',
								}}
								src='assets/images/detail/arrowBack.svg'
								alt=''
							/>
							<Typography
								marginLeft={3}
								fontFamily='Open Sans'
								fontSize='1.675rem'
								color='black'
								fontWeight={800}
							>
								Enquiry Sending To
							</Typography>
						</Button>
					</Box>
				</Box>
			)}
			{/* Navbar Enquiry To Sending */}
			<Box position='relative' display={{ xl: 'block', md: 'block', sm: 'block', xs: 'none' }}>
				{!viewBook && (
					<Box
						margin={{
							xl: '1.75rem 2.5rem 0px 2.5rem',
							md: '1.75rem 2.5rem 0px 2.5rem',
							sm: '1.375rem 1.875rem 0px 1.875rem',
							xs: '0',
						}}
						padding={{
							xl: '0.75rem 0 1.25rem 0',
							md: '0.75rem 0 1.25rem 0',
							sm: '0.5rem 0 1rem 0',
							xs: '0',
						}}
						sx={{
							borderBottom: '2px solid #ECECEC',
							'@media (max-width: 600px)': { borderBottom: 'none' },
						}}
					>
						<AppBar position='sticky' sx={{ background: 'white', boxShadow: 'none' }}>
							<Container maxWidth='xl'>
								<Toolbar disableGutters>
									<Box style={{ flexGrow: '1' }} display={{ sm: 'flex', xs: 'none' }}>
										<Box width={{ md: 50, sm: 0 }} />
										<Box display='flex' alignItems='center' gap={4}>
											<img
												onClick={() => navigate(ROUTES.EXPLORE)}
												style={{
													cursor: 'pointer',
												}}
												src='/assets/images/logo.svg'
												width={40}
												alt=''
											/>
											<Typography fontFamily='Open Sans' fontSize='1.875rem' color='black'>
												Enquiry Sending To
											</Typography>
										</Box>
									</Box>

									<Box
										display={{ sm: 'flex', xs: 'none' }}
										justifyContent='flex-end'
										flexGrow='0.5'
										gap={2.8}
										height={{ xl: '42px' }}
									>
										{/* <Box width={{ xl: '30%' }} sx={{}}>
											<Button
												aria-describedby={id}
												onClick={handleClick}
												variant='contained'
												sx={{
													background: '#8F7EF3',
													height: '2.5rem',
													paddingX: '1.563rem',
													width: '100%',
													color: 'white',
													display: 'flex',
													gap: '0.375rem',
													'&:hover,&:focus': {
														background: '#EFEFEF',
														color: 'black',
													},
												}}
											>
												<MenuIcon />
												{user && (
													<Avatar
														sx={{ height: '1.6rem', width: '1.6rem' }}
														alt='Profile Image'
														src={user.profileImage ? S3_BASE + user.profileImage : user.avatar}
													/>
												)}
											</Button>
										</Box> */}
										{isAuthenticated ? (
											<Box>
												<Button
													aria-describedby={id}
													onClick={handleClick}
													variant='contained'
													sx={{
														background: '#8F7EF3',
														height: '2.5rem',
														paddingX: '1.563rem',
														width: '100%',
														color: 'white',
														display: 'flex',
														gap: '0.375rem',
														'&:hover,&:focus': {
															background: '#EFEFEF',
															color: 'black',
														},
													}}
												>
													<MenuIcon />
													{user && (
														<Avatar
															sx={{ height: '1.6rem', width: '1.6rem' }}
															alt='Profile Image'
															src={user.profileImage ? S3_BASE + user.profileImage : user.avatar}
														/>
													)}
												</Button>
												<Popover
													id={id}
													open={open}
													anchorEl={anchorEl}
													onClose={handleClose}
													sx={{
														left: '-48px',
													}}
													anchorOrigin={{
														vertical: 'bottom',
														horizontal: 'left',
													}}
													PaperProps={{
														style: {
															borderRadius: '20px',
														},
													}}
												>
													<Box
														display='flex'
														flexDirection='column'
														alignContent='center'
														padding='2.375rem 2.5rem'
														width='303px'
														sx={{
															boxShadow:
																'0px -4px 4px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.08)',
															borderRadius: '20px',
															background: '#FFFFFF',
															overflow: 'hidden',
														}}
													>
														{menuItems.map((item, index) => (
															<Box key={item.id}>
																<Box
																	display='flex'
																	alignItems='center'
																	justifyContent='space-between'
																	padding='0.313rem'
																	sx={{
																		cursor: 'pointer',
																		borderRadius: '8px',
																		':hover': {
																			background: '#F3F1FF',
																		},
																	}}
																	onClick={() => {
																		navigate(item.path as any);
																	}}
																>
																	<Box display='flex' alignItems='center'>
																		<Box
																			marginRight='0.813rem'
																			display='flex'
																			alignItems='center'
																			justifyContent='space-between'
																		>
																			<img width='24px' src={item.img} alt='' />
																		</Box>
																		<Typography
																			fontSize='0.75rem'
																			fontWeight={500}
																			lineHeight='1.4em'
																			letterSpacing='0.015em'
																			fontFamily='Montserrat'
																		>
																			{item.title}
																		</Typography>
																	</Box>
																	<Box
																		sx={{
																			cursor: 'pointer',
																			paddingX: '0.625rem',
																		}}
																	>
																		<ArrowForwardIosIcon
																			sx={{
																				fontSize: '0.75rem',
																				// '@media (max-width: 900px)': {
																				// 	fontSize: '14px',
																				// },
																				color: '#000000',
																			}}
																		/>
																	</Box>
																</Box>
																<Box paddingY='0.75rem'>
																	<Divider />
																</Box>
															</Box>
														))}
														<Box onClick={logoutUser}>
															<Button
																sx={{
																	textAlign: 'left',
																	textTransform: 'none',
																	color: '#1A191E',
																}}
															>
																<Typography
																	fontSize='0.75rem'
																	fontWeight={500}
																	lineHeight='1.4em'
																	letterSpacing='0.015em'
																	fontFamily='Montserrat'
																>
																	Logout
																</Typography>
															</Button>
														</Box>
													</Box>
												</Popover>
											</Box>
										) : (
											// <Box
											// 	display={{ md: 'flex', sm: 'none' }}
											// 	fontWeight='500'
											// 	alignItems='center'
											// 	color='#000000'
											// 	sx={{
											// 		cursor: 'pointer',
											// 		boxShadow: '1px 2px 4px 1px rgba(0, 0, 0, 0.06)',
											// 		bgcolor: '#FFFFFF',
											// 		paddingX: '1rem',
											// 		height: '3rem',
											// 		borderRadius: '6px',
											// 		border: '1px solid #CBCBCB',
											// 		fontSize: '1.125rem',
											// 		backgroundColor: '',
											// 		transition: '0.2s',
											// 		'&:hover,&:focus': {
											// 			background: '#8F7EF3',
											// 			color: 'white',
											// 		},
											// 	}}
											// 	onClick={() => navigate(ROUTES.OTP)}
											// >
											// 	Sign In
											// </Box>
											<Button
												aria-describedby={id}
												onClick={() => navigate(ROUTES.LOGIN)}
												variant='contained'
												sx={{
													background: '#8F7EF3',
													paddingX: '1.563rem',
													fontWeight: '600',
													height: '2.5rem',
													fontSize: '0.9rem',
													color: 'white',
													display: 'flex',
													gap: '0.375rem',
													'&:hover,&:focus': {
														background: '#EFEFEF',
														color: 'black',
													},
												}}
											>
												Sign In
											</Button>
										)}
									</Box>
								</Toolbar>
							</Container>
						</AppBar>
					</Box>
				)}
			</Box>
			{/* Main Sections */}
			<Box
				marginX={{
					xl: '10rem',
					md: '10rem',
					sm: '2.5rem',
					xs: '1rem',
				}}
				marginTop={{
					xl: '6.438rem',
					md: '6.438rem',
					sm: '1.438rem',
					xs: '1.438rem',
				}}
				display='flex'
				justifyContent='space-between'
				gap={10}
				sx={{
					'@media (max-width: 1090px)': {
						gap: 4,
						marginX: '5rem',
					},
					'@media (max-width: 900px)': {
						gap: 4,
						marginX: '1rem',
					},
				}}
			>
				<Box
					width={{
						xl: '70%',
						md: '70%',
						sm: '100%',
						xs: '100%',
					}}
					sx={{
						'@media (max-width: 1090px)': {
							width: '50%',
						},
						'@media (max-width: 900px)': {
							width: '100%',
						},
					}}
				>
					{enquiries.length < 3 && (
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							bgcolor='#FAFAFF'
							border='1px dashed #8F7EF3'
							paddingY={{
								xl: '1.625rem',
								md: '1.625rem',
								sm: '1.625rem',
								xs: '1rem',
							}}
							sx={{
								cursor: 'default',
							}}
							paddingX={{
								xl: '2.188rem',
								md: '2.188rem',
								sm: '2.188rem',
								xs: '1rem',
							}}
							borderRadius={{
								xl: '15px',
								md: '15px',
								sm: '15px',
								xs: '8px',
							}}
							gap={2}
							mb='2.688rem'
						>
							<Box>
								<Typography
									color='black'
									fontSize={{
										xl: '1.1rem',
										md: '1.1rem',
										sm: '0.75rem',
										xs: '0.75rem',
									}}
									fontWeight={600}
									fontFamily='Open Sans'
								>
									Add {3 - enquiries.length} More Spaces To Get Quicker Confirmation
								</Typography>
								<Typography
									color='#000000'
									fontSize={{
										xl: '0.8rem',
										md: '0.8rem',
										sm: '0.625rem',
										xs: '0.625rem',
									}}
									fontWeight={200}
									fontFamily='Open Sans'
								>
									Now Pay for 1 only! Booking gets confirmed anywhere based on who accepts your
									request first.
								</Typography>
							</Box>
							<Box>
								<Box
									bgcolor='#F3F1FF'
									border='1px dashed #8F7EF3'
									sx={{ cursor: 'pointer' }}
									width={{
										xl: '103px',
										md: '103px',
										sm: '38px',
										xs: '38px',
									}}
									height={{
										xl: '78px',
										md: '78px',
										sm: '38px',
										xs: '48px',
									}}
									display='flex'
									justifyContent='center'
									alignItems='center'
									borderRadius='10px'
									onClick={onClickAdd}
								>
									<Typography
										color='#8F7EF3'
										fontSize={{
											xl: '5rem',
											md: '5rem',
											sm: '2.5rem',
											xs: '2.5rem',
										}}
										fontWeight={400}
										fontFamily='Open Sans'
									>
										+
									</Typography>
								</Box>
							</Box>
						</Box>
					)}
					{enquiries.length > 0 &&
						enquiries.map((enquiry: any, index: number) => (
							<Box
								display='flex'
								marginBottom={{
									xs: 3,
								}}
								sx={{
									'@media (max-width: 457px)': {
										flexDirection: 'row',
										paddingX: '0.938rem',
									},
								}}
								alignItems={{
									xl: 'center',
									md: 'center',
									sm: 'flex-start',
									xs: 'flex-start',
								}}
								bgcolor='#F2F0DF'
								paddingY='1.625rem'
								paddingX={{
									xl: '2.188rem',
									md: '2.188rem',
									sm: '1.563rem',
									xs: '0.938rem',
								}}
								borderRadius='15px'
								gap={{
									xl: 4,
									md: 4,
									sm: 4,
									xs: 1.5,
								}}
							>
								<Box
									width={{
										xl: '35%',
										md: '35%',
										sm: '50%',
										xs: '90%',
									}}
									margin={{
										md: 'unset',
										sm: 'auto',
									}}
									height='100%'
								>
									<img
										width='100%'
										height='100%'
										style={{
											minHeight: '8rem',
											objectFit: 'cover',
											objectPosition: 'center',
											minWidth: '6rem',
											borderRadius: '4px',
										}}
										src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${enquiry.propertyPictures[0]}`}
										alt=''
									/>
								</Box>
								<Box>
									<Typography
										mb={'1rem'}
										fontWeight='600'
										color='#000000'
										fontFamily='Open Sans'
										fontSize={{
											xl: '1.2rem',
											md: '1.2rem',
											sm: '1.25rem',
											xs: '1rem',
										}}
									>
										{enquiry.propertyName}
									</Typography>
									<Box
										display='flex'
										gap={{
											xl: 2,
											md: 2,
											sm: 1.5,
											xs: 1,
										}}
										mb='0.563rem'
										alignItems='center'
									>
										<img src='assets/images/enquiry/location.svg' height='15px' alt='' />
										<Typography
											fontFamily='Open Sans'
											fontWeight='400'
											fontSize={{
												xl: '1.1rem',
												md: '1.1rem',
												sm: '0.75rem',
												xs: '0.75rem',
											}}
										>
											{enquiry.city}, {enquiry.state}
										</Typography>
									</Box>
									<Box
										display='flex'
										gap={{
											xl: 2,
											md: 2,
											sm: 1.5,
											xs: 1,
										}}
										mb='0.563rem'
										alignItems='center'
									>
										<img src='assets/images/enquiry/watch.svg' height='15px' alt='' />
										<Typography
											fontFamily='Open Sans'
											fontWeight='400'
											fontSize={{
												xl: '1.1rem',
												md: '1.1rem',
												sm: '0.75rem',
												xs: '0.75rem',
											}}
										>
											{new Date(enquiry.startTime as Date).toLocaleTimeString('default', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											})}{' '}
											-{' '}
											{new Date(enquiry.endTime as Date).toLocaleTimeString('default', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											})}
										</Typography>
									</Box>
									<Box display='flex'>
										<Button
											sx={{
												color: '#272F3D',
												width: '110px',
												height: '38px',
												background: 'transparent',
												border: '0.5px solid #272F3D',
												fontFamily: 'Open Sans',
												fontSize: '19px',
												fontWeight: '600',
												marginRight: '0.938rem',
												'@media (max-width: 1090px)': {
													width: '50%',
												},
												borderRadius: '6px',
												textTransform: 'none',
												'@media (max-width: 630px)': {
													width: '85px',
													height: '31px',
													fontSize: '0.75rem',
													marginRight: '0.625rem',
												},
											}}
											onClick={() => {
												onClickDelete(enquiry.id);
											}}
										>
											Delete
										</Button>
										<Button
											variant='contained'
											sx={{
												color: '#272F3D',
												width: '110px',
												height: '38px',
												background: '#F4CF97',
												fontFamily: 'Open Sans',
												'@media (max-width: 1090px)': {
													width: '50%',
												},
												fontSize: '1.188rem',
												fontWeight: '600',
												borderRadius: '6px',
												textTransform: 'none',
												'@media (max-width: 630px)': {
													width: '85px',
													height: '31px',
													fontSize: '0.75rem',
												},
											}}
											onClick={() => onClickEdit(enquiry.propertyId, enquiry.id)}
										>
											Edit
										</Button>
									</Box>
								</Box>
							</Box>
						))}
				</Box>
				{/* Payment Summary */}
				<Box
					display={{
						xl: 'block',
						md: 'block',
						sm: 'none',
						xs: 'none',
					}}
					width={'50%'}
					sx={{
						'@media (max-width: 1090px)': {
							width: '50%',
						},
					}}
				>
					<Box
						border='1px solid #C5C5C5'
						boxShadow='2px 4px 8px 7px rgba(0, 0, 0, 0.04)'
						borderRadius='10px'
						height='fit-content'
						padding={{
							xl: '2.5rem 1.875rem 0px 1.875rem',
							md: '2.5rem 1.875rem 0px 1.875rem',
							sm: '1.25rem 0px',
							xs: '1.25rem 0px',
						}}
					>
						<Typography paddingBottom='1.188rem' fontSize='1.4rem'>
							Payment Summary
						</Typography>
						<Divider />
						<Box>
							<FormControlLabel
								sx={{ marginTop: '0.5rem' }}
								control={<Checkbox size='medium' />}
								label={
									<Typography
										sx={{
											paddingLeft: '0rem',
											color: '#383838',
											fontFamily: 'Open Sans',
											fontSize: '0.8vw',
										}}
									>
										Use your{' '}
										<span
											style={{
												fontWeight: 800,
											}}
										>
											Rs.520 Thinnai Wallet balance.
										</span>
									</Typography>
								}
							/>
						</Box>
						<Box paddingBottom='1.423rem'>
							<Box>
								<SummaryData />
							</Box>
						</Box>
						<Divider />
						<Box mt='1.438rem' mb='2.5rem' display='flex' justifyContent='space-between'>
							<Typography fontFamily='Open Sans' fontSize='1.1rem' color='#272F3D' fontWeight={600}>
								Total amount
							</Typography>
							<Typography fontFamily='Inter' fontSize='1.1rem' color='#24BA0E' fontWeight={600}>
								₹ {totalAmount.toFixed(2)}
							</Typography>
						</Box>
						<Button
							style={{
								background: '#8F7EF3',
								display: 'block',
								width: '100%',
								borderRadius: '8px',
								fontSize: '1rem',
								marginBottom: '2.5rem',
								textTransform: 'none',
							}}
							variant='contained'
							onClick={onClickProceed}
						>
							Next
						</Button>
					</Box>
				</Box>
			</Box>
			<Box
				marginX={{
					xl: '4.375rem',
					md: '4.375rem',
					sm: '2.5rem',
					xs: '1rem',
				}}
				display={{
					xs: 'block',
					md: 'none',
				}}
				paddingY={{
					sm: '0.5rem',
					xs: '0.875rem',
				}}
			>
				<Divider
					sx={{
						':before': {
							borderTop: 'thin dashed rgba(0, 0, 0, 0.12)',
						},
						':after': {
							borderTop: 'thin dashed rgba(0, 0, 0, 0.12)',
						},
						span: {
							color: 'rgba(0, 0, 0, 0.50)',
						},
					}}
				>
					OR
				</Divider>
			</Box>
			{/* Try Direct Booking */}
			<Box
				marginTop={{
					xs: 0,
					md: '6.875rem',
				}}
			>
				<Box>
					<Box
						marginX={{
							xl: '4.375rem',
							md: '4.375rem',
							sm: '2.5rem',
							xs: '1.875rem',
						}}
					>
						<Typography
							fontFamily='Montserrat'
							fontSize={{
								xl: '1.875rem',
								md: '1.875rem',
								sm: '1.125rem',
								xs: '1.125rem',
							}}
							fontWeight={600}
							color='black'
						>
							Try Direct Booking
						</Typography>
						<Typography
							fontFamily='Montserrat'
							fontSize={{
								xl: '1.25rem',
								md: '1.25rem',
								sm: '0.625rem',
								xs: '0.625rem',
							}}
							fontWeight='400'
							color='rgba(0, 0, 0, 0.5)'
						>
							Book instantly without waiting for host’s approval
						</Typography>
					</Box>
					<Box height={{ md: 50, xs: 15 }} />
					<Box>
						<EnquiryCarousel />
					</Box>
				</Box>
				<Box height={{ md: 50, xs: 0 }} />
			</Box>
			<Box
				display={{
					md: 'none',
					xs: 'block',
				}}
				width='100%'
				height='149px'
				position='fixed'
				bottom={0}
				left='0'
				bgcolor='#FFFFFF'
				zIndex={10000}
			>
				<Box display='flex' marginTop='-1.375rem' justifyContent='center' alignItems='center'>
					<Button>
						<img src='assets/images/enquiry/expand-btn.svg' alt='' />
					</Button>
				</Box>
				<Typography
					paddingTop='0.688rem'
					fontFamily='Montserrat'
					fontSize='0.688rem'
					textAlign='center'
					paddingBottom='0.5rem'
				>
					Expand to see Payment Summary
				</Typography>
				<Box paddingX='0.938rem' marginBottom='0.813rem'>
					<Divider />
				</Box>
				<Box paddingX='0.938rem' display='flex' justifyContent='space-around'>
					<Box>
						<Typography
							color='#000000'
							fontFamily='Inter'
							fontWeight='600'
							fontSize='1.125rem'
							letterSpacing='0.02em'
							textAlign='right'
						>
							₹ {totalAmount.toFixed(2)}
						</Typography>
						<Typography
							textAlign='right'
							fontFamily='Open Sans'
							fontSize='0.75rem'
							fontWeight='400'
						>
							{/* <s>₹ {property.originalPrice}</s>
							<span style={{ color: '#D23535' }}> ( {property.discount}% off )</span> */}
						</Typography>
					</Box>
					<Button
						sx={{
							width: '133px',
							height: '41.29px',
							background: '#272F3D',
							color: '#FFFFFF',
							fontSize: '1rem',
							fontFamily: 'Montserrat',
							fontWeight: '600',
						}}
						onClick={onClickProceed}
					>
						Next
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default EnquiryToSending;
