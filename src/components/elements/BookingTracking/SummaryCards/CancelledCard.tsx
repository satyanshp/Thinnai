import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	Typography,
} from '@mui/material';
import { useState } from 'react';

const CancelledCard = ({ item }: any) => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box
			display='flex'
			bgcolor={item.refundStatus === 'Refunded' ? '#F2F0DF' : '#EEFCEC'}
			borderRadius='10px'
			flexDirection={{
				xl: 'row',
				md: 'row',
				sm: 'column',
				xs: 'column',
			}}
			paddingX={{
				xl: '4.313rem',
				md: '4.313rem',
				sm: '1.25rem',
				xs: '1.25rem',
			}}
			paddingY={{
				xl: '3.125rem',
				md: '3.125rem',
				sm: '1.125rem',
				xs: '1.125rem',
			}}
			gap={{
				xl: '5rem',
				md: '3.125rem',
				sm: '0.75rem',
				xs: '0.75rem',
			}}
		>
			<Box
				display={{
					xl: 'block',
					md: 'block',
					sm: 'none',
					xs: 'none',
				}}
				width={{
					xl: '40%',
					md: '40%',
					sm: '100%',
					xs: '100%',
				}}
				height={{
					xl: '425px',
					md: '400px',
					sm: '199px',
					xs: '199px',
				}}
				overflow='hidden'
				borderRadius='4px'
			>
				<img
					style={{
						objectFit: 'cover',
					}}
					width='100%'
					height='100%'
					src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${item.property.propertyPictures[0]}`}
					alt=''
				/>
			</Box>
			<Box
				width={{
					xl: '60%',
					md: '60%',
					sm: '100%',
					xs: '100%',
				}}
			>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Box display='flex' alignItems='center' gap='0.75rem'>
						<Box
							display={{
								xl: 'none',
								md: 'none',
								sm: 'block',
								xs: 'block',
							}}
							height='36px'
							overflow='hidden'
							borderRadius='4px'
						>
							<img
								style={{
									objectFit: 'cover',
								}}
								width='40px'
								src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${item.property.propertyPictures[0]}`}
								alt=''
							/>
						</Box>
						<Box>
							<Typography
								marginTop={{
									xl: '1.25rem',
									md: '1.25rem',
									sm: '0.938rem',
									xs: '0.938rem',
								}}
								marginBottom='0.313rem'
								textAlign='left'
								fontSize={{
									xl: '2.188rem',
									md: '2.188rem',
									sm: '1rem',
									xs: '1rem',
								}}
								fontWeight='600'
								color='#383838'
								fontFamily='Open Sans'
								lineHeight={{
									xl: '47.66px',
									md: '47.66px',
									sm: '21.79px',
									xs: '21.79px',
								}}
							>
								{item.property.propertyName}
							</Typography>
							<Box
								marginBottom={{
									xl: '2.438rem',
									md: '2.438rem',
									sm: '0.625rem',
									xs: '0.625rem',
								}}
							>
								<Typography
									fontFamily='Open Sans'
									fontWeight='400'
									fontSize={{
										xl: '1.75rem',
										md: '1.75rem',
										sm: '0.75rem',
										xs: '0.75rem',
									}}
									lineHeight={{
										xl: '38px',
										md: '38px',
										sm: '16.34px',
										xs: '16.34px',
									}}
									color='#000000'
								>
									Cancelled By :{' '}
									<span
										style={{
											fontWeight: '800',
										}}
									>
										{item.cancelledBy.host ? 'Host' : 'You'}
									</span>
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box>
						<Typography
							marginTop={{
								xl: '1.25rem',
								md: '1.25rem',
								sm: '0.938rem',
								xs: '0.938rem',
							}}
							marginBottom={{
								xl: '1.25rem',
								md: '1.25rem',
								sm: '0.25rem',
								xs: '0.25rem',
							}}
							textAlign='right'
							fontSize={{
								xl: '1.563rem',
								md: '1.563rem',
								sm: '0.625rem',
								xs: '0.625rem',
							}}
							fontWeight='300'
							color='#383838'
							fontFamily='Inter'
							lineHeight={{
								xl: '30px',
								md: '30px',
								sm: '12px',
								xs: '12px',
							}}
						>
							{item.refundStatus === 'Refunded' ? 'Refunded Amount' : 'Refund in Process'}
						</Typography>
						<Box
							marginBottom={{
								xl: '2.438rem',
								md: '2.438rem',
								sm: '0.625rem',
								xs: '0.625rem',
							}}
						>
							<Typography
								fontFamily='Inter'
								letterSpacing='0.02em'
								fontWeight='600'
								fontSize={{
									xl: '2.5rem',
									md: '2.5rem',
									sm: '1rem',
									xs: '1rem',
								}}
								lineHeight={{
									xl: '38px',
									md: '38px',
									sm: '20px',
									xs: '20px',
								}}
								color='#24BA0E'
								textAlign='right'
							>
								₹ {item.inquiry.amount}
							</Typography>
						</Box>
					</Box>
				</Box>

				<Box
					display='flex'
					justifyContent={{
						xl: 'space-between',
						md: 'space-between',
						sm: 'flex-start',
						xs: 'space-between',
					}}
					gap={{
						xl: '0',
						md: '0',
						sm: '2.5rem',
						xs: '1.25rem',
					}}
					marginTop={{
						xl: '2.813rem',
						md: '2.813rem',
						sm: '0.688rem',
						xs: '0.688rem',
					}}
					marginBottom={{
						xl: '1.25rem',
						md: '1.25rem',
						sm: '0.688rem',
						xs: '0.688rem',
					}}
				>
					<Box>
						<Typography
							marginBottom={{
								xl: '0.625rem',
								md: '0.625rem',
								sm: '0',
								xs: '0',
							}}
							fontSize={{
								xl: '1rem',
								md: '1rem',
								sm: '0.75rem',
								xs: '0.75rem',
							}}
							fontFamily='Open Sans'
							fontWeight='400'
							lineHeight={{
								xl: '34px',
								md: '34px',
								sm: '16px',
								xs: '16px',
							}}
							color='#383838'
						>
							No. of guests :{' '}
							<span style={{ color: item.refundStatus === 'Refunded' ? '#AD6800' : '#228514' }}>
								{item?.inquiry.guestCount}
							</span>
						</Typography>
						<Typography
							fontSize={{
								xl: '1rem',
								md: '1rem',
								sm: '0.75rem',
								xs: '0.75rem',
							}}
							fontFamily='Open Sans'
							fontWeight='400'
							lineHeight={{
								xl: '34px',
								md: '34px',
								sm: '16px',
								xs: '16px',
							}}
							color='#383838'
						>
							Guest type :{' '}
							<span style={{ color: item.refundStatus === 'Refunded' ? '#AD6800' : '#228514' }}>
								{item?.inquiry.groupType}
							</span>
						</Typography>
					</Box>
					<Box>
						<Typography
							marginBottom={{
								xl: '0.625rem',
								md: '0.625rem',
								sm: '0',
								xs: '0',
							}}
							fontSize={{
								xl: '1rem',
								md: '1rem',
								sm: '0.75rem',
								xs: '0.75rem',
							}}
							fontFamily='Open Sans'
							fontWeight='400'
							lineHeight={{
								xl: '34px',
								md: '34px',
								sm: '16px',
								xs: '16px',
							}}
							color='#383838'
						>
							Time :{' '}
							<span style={{ color: item.refundStatus === 'Refunded' ? '#AD6800' : '#228514' }}>
								{new Date(item.bookingFrom).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}{' '}
								-{' '}
								{new Date(item.bookingTo).toLocaleTimeString('default', {
									hour: 'numeric',
									minute: 'numeric',
									hour12: true,
								})}
							</span>
						</Typography>
						<Typography
							fontSize={{
								xl: '1rem',
								md: '1rem',
								sm: '0.75rem',
								xs: '0.75rem',
							}}
							lineHeight={{
								xl: '34px',
								md: '34px',
								sm: '16px',
								xs: '16px',
							}}
							fontFamily='Open Sans'
							fontWeight='400'
							color='#383838'
						>
							Date :{' '}
							<span style={{ color: item.refundStatus === 'Refunded' ? '#AD6800' : '#228514' }}>
								{new Date(item.bookingFrom)
									.toLocaleDateString('default', {
										year: 'numeric',
										month: 'numeric',
										day: 'numeric',
									})
									.split('/')
									.join('.')}
							</span>
						</Typography>
					</Box>
				</Box>

				<Box
					marginTop={{
						xl: '1.25rem',
						md: '1.25rem',
						sm: '0.688rem',
						xs: '0.688rem',
					}}
				>
					<Divider
						sx={{
							borderColor: '#EECBBC',
							'@media (min-width: 900px)': {
								display: 'none',
							},
						}}
					/>
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}
						sx={{
							background: 'transparent',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						<AccordionSummary
							sx={{
								margin: 0,
								padding: '0px',
							}}
							expandIcon={
								<ExpandMoreIcon
									sx={{
										color: item.refundStatus === 'Refunded' ? '#AD6800' : '#228514',
									}}
								/>
							}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
						>
							<Typography
								color={item.refundStatus === 'Refunded' ? '#AD6800' : '#228514'}
								fontSize={{
									xl: '1rem',
									md: '1rem',
									sm: '0.75rem',
									xs: '0.75rem',
								}}
								fontFamily='Open Sans'
								fontWeight='400'
								lineHeight={{
									xl: '34px',
									md: '34px',
									sm: '16px',
									xs: '16px',
								}}
							>
								Why did my booking got cancelled?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								fontSize={{
									xl: '1rem',
									md: '1rem',
									sm: '0.75rem',
									xs: '0.75rem',
								}}
								fontFamily='Open Sans'
								fontWeight='400'
								lineHeight={{
									xl: '34px',
									md: '34px',
									sm: '16px',
									xs: '16px',
								}}
							>
								{item.cancellationReason}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Box>
		</Box>
	);
};

export default CancelledCard;
