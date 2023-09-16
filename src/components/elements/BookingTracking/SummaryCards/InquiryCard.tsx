import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Typography,
} from '@mui/material';
import { S3_BASE } from '../../../../utils/consts';

const InquiryCard = ({ card }: any) => {
	return (
		<Box mb='3rem'>
			<Box display='flex' alignItems='flex-start' gap='1.25rem'>
				<Box>
					<Box width='65px' height='65px' borderRadius='10px' overflow='hidden' mt={1.8}>
						<img src={`${S3_BASE}${card.property.propertyPictures[0]}`} alt='' />
					</Box>
				</Box>
				<Box>
					<Typography marginTop="1.6rem" fontFamily='Open Sans' fontSize='1.5rem' fontWeight={600}>
						{card.property.propertyName}
					</Typography>
					{/* <Box marginBottom='1.875rem' display='flex' alignItems='center' gap='0.625rem'>
						<PlaceIcon heig='1.2rem' />
						<Typography fontFamily='Open Sans' fontSize='1.2rem' fontWeight={400}>
							{card.property.city}, {card.property.state}
						</Typography>
					</Box> */}
				</Box>
			</Box>
			<Box
				marginLeft='1.875rem'
				paddingLeft={'1.25rem'}
				borderLeft='1px solid #D9D9D9'
				paddingTop={2}
			>
				<Box marginBottom='1.375rem' display='flex' alignItems='center' gap='0.625rem'>
					<CheckCircleIcon />
					<Typography
						fontFamily='Open Sans'
						fontSize='0.875rem'
						fontWeight={400}
						lineHeight='1.4em'
						color='#383838'
					>
						Booking requested{' '}
						<span
							style={{
								color: '#B0B0B0',
							}}
						>
							on
						</span>{' '}
						<span
							style={{
								color: '#8F7EF3',
							}}
						>
							{new Date(card.createdAt).toLocaleDateString('default', {
								month: 'long',
								day: 'numeric',
								weekday: 'long',
							})}
						</span>
					</Typography>
				</Box>
				{card.inquiryStatus === 'Pending' ? (
					<Box
						height='37px'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						bgcolor='#F3F1FF'
						borderRadius='4px'
						paddingX='0.938rem'
					>
						<Box>
							<Typography
								fontSize='0.75rem'
								fontFamily='Montserrat'
								lineHeight='1.4em'
								fontWeight={600}
							>
								Inquiry Status
							</Typography>
						</Box>

						<Box display='flex' alignItems='center' gap='0.313rem'>
							<WatchLaterIcon
								sx={{
									fontSize: '1rem',
									color: '#F79E1B',
								}}
							/>
							<Typography
								fontSize='0.75rem'
								fontFamily='Open Sans'
								lineHeight='1.4em'
								fontWeight={400}
							>
								{card.inquiryStatus}
							</Typography>
						</Box>
					</Box>
				) : card.status === 'cancelled' ? (
					<Box>
						<Box
							height='37px'
							display='flex'
							alignItems='center'
							justifyContent='space-between'
							bgcolor='#FFE1DF'
							borderRadius='4px'
							paddingX='0.938rem'
						>
							<Box>
								<Typography
									variant='h5'
								>
									Enquiry Status
								</Typography>
							</Box>

							<Box display='flex' alignItems='center' gap='0.313rem'>
								<CancelIcon
									sx={{
										fontSize: '1rem',
										color: '#C1583C',
									}}
								/>
								<Typography
									fontSize='0.75rem'
									fontFamily='Open Sans'
									lineHeight='1.4em'
									fontWeight={400}
								>
									{card.inquiryStatus}
								</Typography>
							</Box>
						</Box>
						<Accordion
							sx={{
								bgColor: 'white',
								boxShadow: 'none',
								border: '0',
							}}
						>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon
										sx={{
											fontSize: '1.25rem',
										}}
									/>
								}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography
									color='#272F3D'
									fontSize='0.688rem'
									fontWeight='400'
									fontFamily='Open Sans'
								>
									Why did my inqiry got cancelled?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									color='#686E7D'
									fontSize='0.625rem'
									fontWeight='400'
									fontFamily='Open Sans'
								>
									{card.statusUpdateReason}
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Box>
				) : (
					<Box
						height='37px'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						bgcolor='#F3F1FF'
						borderRadius='4px'
						paddingX='0.938rem'
					>
						<Box>
							<Typography
								fontSize='0.75rem'
								fontFamily='Montserrat'
								lineHeight='1.2em'
								fontWeight={600}
							>
								Inquiry Status
							</Typography>
						</Box>
						<Box display='flex' alignItems='center' gap='0.313rem'>
							<Box
								sx={{
									width: '0.8rem',
									height: '0.8rem',
									background: '#FFC107',
									borderRadius: '50%',
								}}
							/>
							<Typography
								fontSize='0.75rem'
								fontFamily='Open Sans'
								lineHeight='1.4em'
								fontWeight={400}
							>
								{card.inquiryStatus}
							</Typography>
						</Box>
					</Box>
				)}
				<Box marginTop='1.25rem' display='flex' gap='0.625rem' justifyContent='flex-end'>
					<Button
						sx={{
							border: '1px solid #50555C',
							background: 'transparent',
							outline: 'none',
							borderRadius: '6px',
							textTransform: 'none',
							fontSize: '1rem',
							cursor: 'pointer',
							color: '#303F52',
							fontWeight: '600',
							fontFamily: 'Open Sans',
						}}
					>
						Reschedule
					</Button>
					<Button
						sx={{
							border: '1px solid #50555C',
							background: '#383838',
							outline: 'none',
							borderRadius: '6px',
							textTransform: 'none',
							fontSize: '1rem',
							cursor: 'pointer',
							color: 'white',
							fontWeight: '600',
							fontFamily: 'Open Sans',
						}}
					>
						Edit
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default InquiryCard;
