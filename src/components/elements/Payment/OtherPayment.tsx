import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	OutlinedInput,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const OtherPayment = ({ bookingDetails }: any) => {
	const paymentMethods = useSelector((state: RootState) => state.profile.userData.paymentMethods);
	const [date, setDate] = useState<Dayjs | null>(null);
	const [CVV, setCVV] = useState<Dayjs | null>(null);

	const [expanded2, setExpanded2] = React.useState<string | false>(false);

	const handleChange2 = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded2(isExpanded ? panel : false);
	};
	return (
		<Box>
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
					Other Payment Methods
				</Typography>
				<Box>
					<FormControl>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'
						>
							<Accordion
								expanded={expanded2 === 'panel11'}
								onChange={handleChange2('panel11')}
								sx={{
									boxShadow: 'none',
								}}
							>
								<AccordionSummary
									aria-controls='panel1bh-content'
									id='panel1bh-header'
									expandIcon={<ExpandMoreIcon />}
								>
									<FormControlLabel value='upi' control={<Radio />} label='' />
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											marginLeft: '-0.625rem',
										}}
									>
										UPI
									</Box>
								</AccordionSummary>
								<AccordionDetails>
									<Typography
										style={{
											marginTop: '-2.5rem',
											marginBottom: '2.5rem',
											marginLeft: '2.375rem',
										}}
										fontSize='0.688rem'
										variant='subtitle2'
									>
										What is <span style={{ color: '#24BA0E' }}>UPI?</span>
									</Typography>
									<FormControl style={{ width: '100%' }} variant='outlined'>
										<Typography
											color='#272F3D'
											fontSize='0.875rem'
											fontFamily='Open Sans'
											fontWeight={600}
											marginBottom='0.4rem'
										>
											Please enter existing UPI ID
										</Typography>
										<Box display='flex'>
											<OutlinedInput
												style={{
													borderTopRightRadius: 0,
													borderBottomRightRadius: 0,
													width: '50%',
													border: '1px solid #656565',
												}}
												id='outlined-adornment-weight'
												aria-describedby='outlined-weight-helper-text'
											/>
											<Button
												style={{
													background: '#000000',
													textTransform: 'capitalize',
													borderTopLeftRadius: 0,
													borderBottomLeftRadius: 0,
													padding: '0px 1.25rem',
												}}
												variant='contained'
											>
												Verify
											</Button>
										</Box>
										<FormHelperText
											style={{ marginLeft: '0', color: '#A1A1A1' }}
											id='outlined-weight-helper-text'
										>
											Please press proceed to complete the booking
										</FormHelperText>
										<FormGroup sx={{ marginTop: '1rem' }}>
											<FormControlLabel
												control={<Checkbox />}
												label='Save this card for future use'
											/>
										</FormGroup>
									</FormControl>
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded2 === 'panel12'}
								onChange={handleChange2('panel12')}
								sx={{
									boxShadow: 'none',
								}}
							>
								<AccordionSummary
									aria-controls='panel2bh-content'
									id='panel2bh-header'
									expandIcon={<ExpandMoreIcon />}
								>
									<FormControlLabel value='credit' control={<Radio />} label='' />
									<label
										style={{
											display: 'flex',
											alignItems: 'center',
											marginLeft: '-0.625rem',
										}}
									>
										Credit / Debit Card
									</label>
								</AccordionSummary>
								<AccordionDetails>
									{!bookingDetails ? (
										<RadioGroup
											aria-labelledby='demo-radio-buttons-group-label'
											defaultValue='1'
											name='radio-buttons-group'
										>
											<Box
												marginBottom={4}
												border='1px solid #A5A5A5'
												padding={2}
												borderRadius='10px'
											>
												<Box display='flex' justifyContent='space-between'>
													<Box>
														<img src='assets/images/payment/visa.svg' alt='' />
													</Box>
													<Box>
														<Typography variant='subtitle2'>Canara Bank Debit Card</Typography>
														<Typography color='#A0A0A0'>**** **** **** 5026</Typography>
													</Box>
													<Typography color='#A0A0A0' variant='subtitle2'>
														Exp - 15/23
													</Typography>
													<Box
														color='#A0A0A0'
														display='flex'
														justifyContent='flex-end'
														alignItems='center'
													>
														<FormControlLabel value='canara' control={<Radio />} label='' />
													</Box>
												</Box>
												<Typography
													variant='subtitle2'
													style={{ textAlign: 'center', marginTop: '0.625rem' }}
												>
													<span style={{ color: '#A0A0A0' }}>Secure this card as per</span> RBI
													Guidelines
												</Typography>
											</Box>
											<Box
												marginBottom={4}
												border='1px solid #A5A5A5'
												padding={2}
												borderRadius='10px'
											>
												<Box display='flex' justifyContent='space-between'>
													<Box>
														<img src='assets/images/payment/mastercard.svg' alt='' />
													</Box>
													<Box>
														<Typography variant='subtitle2'>ICICI Bank Debit Card</Typography>
														<Typography color='#A0A0A0'>**** **** **** 5026</Typography>
													</Box>
													<Typography color='#A0A0A0' variant='subtitle2'>
														Exp - 15/23
													</Typography>
													<Box
														color='#A0A0A0'
														display='flex'
														justifyContent='flex-end'
														alignItems='center'
													>
														<FormControlLabel value='icici' control={<Radio />} label='' />
													</Box>
												</Box>
												<Typography
													variant='subtitle2'
													style={{ textAlign: 'center', marginTop: '0.625rem' }}
												>
													<span style={{ color: '#A0A0A0' }}>Secure this card as per</span> RBI
													Guidelines
												</Typography>
											</Box>
											<Box
												marginBottom={4}
												border='1px solid #A5A5A5'
												padding={2}
												borderRadius='10px'
											>
												<Box display='flex' justifyContent='space-between'>
													<Box>
														<img src='assets/images/payment/debit-credit.svg' alt='' />
													</Box>
													<Box>
														<Typography variant='subtitle2'>Add Debit / Credit Card</Typography>
														<Typography color='#A0A0A0'>**** **** **** 5026</Typography>
													</Box>
													<Typography color='#A0A0A0' variant='subtitle2'>
														Exp - 15/23
													</Typography>
													<Box
														color='#A0A0A0'
														display='flex'
														justifyContent='flex-end'
														alignItems='center'
													>
														<FormControlLabel value='debitCredit' control={<Radio />} label='' />
													</Box>
												</Box>
												<Typography
													variant='subtitle2'
													style={{ textAlign: 'center', marginTop: '0.625rem' }}
												>
													<span style={{ color: '#A0A0A0' }}>Secure this card as per</span> RBI
													Guidelines
												</Typography>
											</Box>
										</RadioGroup>
									) : (
										<Box component='form' noValidate autoComplete='off'>
											<Box
												sx={{
													maxWidth: '100%',
												}}
											>
												<TextField
													fullWidth
													placeholder='Card Holder'
													id='fullWidth'
													sx={{
														marginBottom: '1.5rem',
														border: '1px solid #656565',
														borderRadius: '4px',
													}}
												/>
												<TextField
													fullWidth
													placeholder='Card Number'
													id='fullWidth'
													sx={{ border: '1px solid #656565', borderRadius: '4px' }}
												/>
											</Box>
											<Box
												sx={{
													marginTop: '1.5rem',
													display: 'flex',
													gap: 5,
												}}
											>
												<LocalizationProvider dateAdapter={AdapterDayjs}>
													<MobileDatePicker
														views={['year', 'month']}
														// label='Expiry Date'
														value={date}
														onChange={newValue => {
															setDate(newValue);
														}}
														renderInput={params => (
															<TextField
																placeholder='Expiry Date'
																fullWidth
																{...params}
																sx={{
																	border: '1px solid #656565',
																	borderRadius: '4px',
																}}
															/>
														)}
													/>
												</LocalizationProvider>
												<TextField
													fullWidth
													placeholder='CVV'
													id='fullWidth'
													sx={{ border: '1px solid #656565', borderRadius: '4px' }}
												/>
											</Box>
											<FormGroup sx={{ marginTop: '1rem' }}>
												<FormControlLabel
													control={<Checkbox />}
													label='Save this card for future use'
												/>
											</FormGroup>
										</Box>
									)}
								</AccordionDetails>
							</Accordion>
							<Accordion
								expanded={expanded2 === 'panel13'}
								onChange={handleChange2('panel13')}
								sx={{
									boxShadow: 'none',
								}}
							>
								<AccordionSummary
									aria-controls='panel2bh-content'
									id='panel2bh-header'
									expandIcon={<ExpandMoreIcon />}
								>
									<FormControlLabel value='account' control={<Radio />} label='' />
									<label
										style={{
											display: 'flex',
											alignItems: 'center',
											marginLeft: '-0.625rem',
										}}
									>
										Account
									</label>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius
										pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</RadioGroup>
					</FormControl>
				</Box>
			</Box>
		</Box>
	);
};

export default OtherPayment;
