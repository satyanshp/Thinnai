import { Button, Divider, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { sortBy } from '../../../../utils/consts';

interface ResponsiveMenuProps {
	showFilter: boolean;
	filterDataServices: { img: string; text: string }[];
	filterDataAmenities: { img: string; text: string }[];
	filterClose: () => void;
	accountClick: () => void;
	homeClick: () => void;
	bookClick: () => void;
	chatClick: () => void;
	homeSelected: boolean;
	bookSelected: boolean;
	chatSelected: boolean;
	accountOpen: boolean;
}
const ResponsiveMenu = ({
	showFilter,
	filterDataServices,
	filterDataAmenities,
	filterClose,
	chatClick,
	bookClick,
	homeClick,
	accountClick,
	homeSelected,
	bookSelected,
	chatSelected,
	accountOpen,
}: ResponsiveMenuProps) => {
	return (
		<Box width='-webkit-fill-available' borderRadius='100px 0 0 100px' zIndex='5'>
			<Box
				position='fixed'
				display={{ xs: 'flex', md: 'none' }}
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
				minHeight={{ xs: 66 }}
				bottom='0px'
				height={showFilter ? '100%' : 'auto'}
				borderRadius={showFilter ? '0px' : '40px 40px 0px 0px'}
				width='-webkit-fill-available'
				sx={{
					background: '#FFFFFF',
					boxShadow: '0px -8px 17px rgba(0, 0, 0, 0.16)',
				}}
				zIndex='7'
			>
				{showFilter && (
					<Box width='90%' height='100%'>
						<Box height='100%'>
							<Box display='flex' justifyContent='flex-end' marginTop={2}>
								<IconButton onClick={filterClose}>
									<CloseIcon />
								</IconButton>
							</Box>
							<Box height={40} />
							<Box textAlign='center' className='filter-header'>
								Apply Filters
							</Box>
							<Box height={40} />
							<Box overflow='auto' height='80%' className='filter__list'>
								<Box>
									<Box className='filter-sub-header'>Sort By</Box>
									<Box height={15} />
									<Box>
										<Box margin='4px 0'>
											<FormControl sx={{ width: '100%' }}>
												<RadioGroup
													aria-labelledby='demo-radio-buttons-group-label'
													defaultValue='acceptancerate'
													name='radio-buttons-group'
												>
													{sortBy.map((item, index) => (
														<>
															<FormControlLabel
																key={index}
																sx={{
																	margin: '0',
																	'>span:nth-child(2)': {
																		paddingLeft: '0.625rem',
																		fontFamily: 'Open Sans',
																		fontStyle: 'normal',
																		fontWeight: '300',
																		fontSize: '0.875',
																		lineHeight: '19px',
																		color: '#000000',
																	},
																}}
																value={item.value}
																control={<Radio />}
																label={item.name}
															/>
															<Box height={4} />
															<Divider />
														</>
													))}
												</RadioGroup>
											</FormControl>
										</Box>
									</Box>
								</Box>
								<Box height={30} />
								<Box>
									<Box className='filter-sub-header'>Booking Type</Box>
									<Box height={15} />
									<Box>
										<Box margin='4px 0'>
											<FormControl sx={{ width: '100%' }}>
												<RadioGroup
													aria-labelledby='demo-radio-buttons-group-label'
													name='radio-buttons-group'
												>
													<FormControlLabel
														sx={{
															margin: '0',
															'>span:nth-child(2)': {
																paddingLeft: '0.625rem',
																fontFamily: 'Open Sans',
																fontStyle: 'normal',
																fontWeight: '300',
																fontSize: '0.875',
																lineHeight: '19px',
																color: '#000000',
															},
														}}
														value='instantbookings'
														control={<Radio />}
														label='Instant Bookings'
													/>
													<Box
														marginLeft='3.25rem'
														position='relative'
														top='-8px'
														sx={{
															fontFamily: 'Open Sans',
															fontStyle: 'normal',
															fontWeight: '400',
															fontSize: '0.625rem',
															lineHeight: '14px',
															color: '#A0A0A0',
														}}
													>
														Book instantly without host’s approval
													</Box>
													<Box height={4} />
													<Divider />
												</RadioGroup>
											</FormControl>
										</Box>
									</Box>
								</Box>
								<Box height={30} />
								<Box>
									<Box className='filter-sub-header'>Services</Box>
									<Box height={15} />
									<Box>
										{filterDataServices.map((item, index) => (
											<Box margin='4px 0' key={index}>
												<FormControlLabel
													sx={{ margin: '0' }}
													control={<Checkbox />}
													label={
														<Typography sx={{ paddingLeft: '0.625rem' }}>
															<Box display='flex' gap={1}>
																<Box>
																	<img
																		style={{
																			objectFit: 'contain',
																			maxHeight: '13.75px',
																			maxWidth: '11px',
																		}}
																		src={item.img}
																		alt=''
																	/>
																</Box>
																<Box className='filter-p'>{item.text}</Box>
															</Box>
														</Typography>
													}
												/>
												<Box height={4} />
												<Divider />
											</Box>
										))}
									</Box>
								</Box>
								<Box height={30} />
								<Box>
									<Box className='filter-sub-header'>Ammenities</Box>
									<Box height={15} />
									<Box padding='4px 0'>
										{filterDataAmenities.map((item, index) => (
											<Box key={index}>
												<FormControlLabel
													sx={{ margin: '0' }}
													control={<Checkbox />}
													label={
														<Typography sx={{ paddingLeft: '0.625rem' }}>
															<Box display='flex' gap={1}>
																<Box>
																	<img
																		style={{
																			objectFit: 'contain',
																			maxHeight: '13.75px',
																			maxWidth: '11px',
																		}}
																		src={item.img}
																		alt=''
																	/>
																</Box>
																<Box className='filter-p'>{item.text}</Box>
															</Box>
														</Typography>
													}
												/>
												<Box height={4} />
												{index !== filterDataAmenities.length - 1 && <Divider />}
											</Box>
										))}
									</Box>
								</Box>
								<Box></Box>
							</Box>
							<Box
								position='absolute'
								display='flex'
								justifyContent='center'
								bottom='-20px'
								height='66px'
								width='100%'
								left='50%'
								sx={{
									transform: 'translate(-50%, -50%)',
									background: '#FFFFFF',
								}}
							>
								<Button
									variant='outlined'
									sx={{
										borderRadius: '8px',
										color: 'black',
										fontFamily: 'Montserrat',
										fontStyle: 'normal',
										fontWeight: '600',
										fontSize: '1rem',
										lineHeight: '20px',
										textTransform: 'capitalize',
										padding: '0.625rem 1.563rem',
										margin: 'auto',
										border: '1px solid black !important',
									}}
									onClick={filterClose}
								>
									Reset
								</Button>
								<Button
									sx={{
										background: '#000000',
										borderRadius: '8px',
										color: '#FFFFFF',
										fontFamily: 'Montserrat',
										fontStyle: 'normal',
										fontWeight: '600',
										fontSize: '1rem',
										lineHeight: '20px',
										textTransform: 'capitalize',
										padding: '0.625rem 1.563rem',
										margin: 'auto',
									}}
									onClick={filterClose}
								>
									Apply Now
								</Button>
							</Box>
						</Box>
					</Box>
				)}
				{!showFilter && (
					<Grid
						container
						display='flex'
						height={{ xs: 66 }}
						width='100%'
						boxShadow='0px -8px 17px rgba(0, 0, 0, 0.16)'
						justifyContent='center'
						alignItems='center'
						sx={{ borderRadius: '40px 40px 0px 0px' }}
					>
						<Grid item xs={3}>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<Button onClick={() => homeClick()}>
									{!homeSelected && (
										<img src='/assets/images/main/responsiveControls/home.svg' alt='' />
									)}
									{homeSelected && (
										<img src='/assets/images/main/responsiveControls/homeSelected.svg' alt='' />
									)}
								</Button>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<Button onClick={() => bookClick()}>
									{!bookSelected && (
										<img src='/assets/images/main/responsiveControls/book.svg' alt='' />
									)}
									{bookSelected && (
										<img src='/assets/images/main/responsiveControls/bookSelected.svg' alt='' />
									)}
								</Button>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<Button onClick={() => chatClick()}>
									{!chatSelected && (
										<img src='/assets/images/main/responsiveControls/chat.svg' alt='' />
									)}
									{chatSelected && (
										<img src='/assets/images/main/responsiveControls/chatSelected.svg' alt='' />
									)}
								</Button>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box display='flex' justifyContent='center' alignItems='center'>
								<Button onClick={() => accountClick()}>
									{!accountOpen && (
										<img src='/assets/images/main/responsiveControls/account.svg' alt='' />
									)}
									{accountOpen && <PersonIcon sx={{ color: '#000000' }} />}
								</Button>
							</Box>
						</Grid>
					</Grid>
				)}
			</Box>
		</Box>
	);
};

export default ResponsiveMenu;
