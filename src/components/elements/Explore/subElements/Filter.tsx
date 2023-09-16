import { Button, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlaces } from '../../../../actions/main';
import {
	setAmenitiesFilter,
	setDirectBooking,
	setServicesFilter,
	setSort,
} from '../../../../actions/search';
import { RootState } from '../../../../store';
import { sortBy } from '../../../../utils/consts';

interface FilterProps {
	showFilter: boolean;
	showSort: boolean;
	filterDataServices: { img: string; text: string }[];
	filterDataAmenities: { img: string; text: string }[];
	filterDataPermits: { img: string; text: string }[];
	filterClose: () => void;
	sortApply: () => void;
}
const Filter = ({
	showFilter,
	showSort,
	filterDataServices,
	filterDataAmenities: filterDataGroupTypes,
	filterDataPermits,
	filterClose,
	sortApply,
}: FilterProps) => {
	const dispatch: Dispatch<any> = useDispatch();

	const [filterSort, setFilterSort] = useState<string>();
	useEffect(() => {
		dispatch(setSort({ sortBy: filterSort as string }));
	}, [filterSort, dispatch]);

	const [filterDirectBooking, setFilterDirectBooking] = useState(false);
	useEffect(() => {
		dispatch(setDirectBooking({ directBooking: filterDirectBooking as boolean }));
	}, [filterDirectBooking, dispatch]);

	const [filterAmenities, setFilterAmenities] = useState<string[]>([]);
	useEffect(() => {
		dispatch(setAmenitiesFilter({ amenities: filterAmenities as string[] }));
	}, [filterAmenities, dispatch]);

	const [filterServices, setFilterServices] = useState<string[]>([]);
	useEffect(() => {
		dispatch(setServicesFilter({ services: filterServices as string[] }));
	}, [filterServices, dispatch]);

	const directBooking = useSelector<RootState, boolean>(state => state.search.directBooking);

	const handleApply = () => {
		sortApply();
		dispatch(loadPlaces());
	};

	return (
		<Box width='80%' zIndex='5' borderRadius='2rem'>
			<Box
				position='fixed'
				display={showFilter ? { xs: 'none', md: 'flex' } : 'none'}
				// display={{xs:'none',md:'flex'}}
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
				minHeight={{ xs: 66 }}
				top='50%'
				left='50%'
				// overflow='auto'
				height={showFilter ? '85%' : 'auto'}
				borderRadius={showSort ? '16px' : '0px'}
				width='50%'
				sx={{
					background: '#FFFFFF',
					boxShadow: '0px -8px 17px rgba(0, 0, 0, 0.16)',
					transform: 'translate(-50%,-50%)',
				}}
				zIndex='7'
			>
				<Box position='absolute' width='100%' zIndex='1' top='0' sx={{ background: '#FFFFFF' }}>
					<Box height={40} />
					<Box className='filter-header' width='90%' margin='0 auto'>
						Filter By
					</Box>
					<Box height={20} />
				</Box>
				{showFilter && (
					<Box
						width='90%'
						height='80%'
						overflow='auto'
						sx={{
							scrollbarColor: 'red',
							overflowY: 'auto',
						}}
						className='filter__list'
					>
						<Box>
							<Box height={40} />
							<Box>
								<Box className='filter-sub-header'>Sort By</Box>
								<Box height={15} />
								<Box>
									<Box margin='4px 0'>
										<FormControl sx={{ width: '100%' }}>
											<RadioGroup
												aria-labelledby='demo-radio-buttons-group-label'
												defaultValue='acceptanceRate'
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
																	fontSize: '0.875rem',
																	lineHeight: '19px',
																	color: '#000000',
																},
															}}
															value={item.value}
															control={<Radio onChange={() => setFilterSort(item.name)} />}
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
															paddingLeft: '10px',
															fontFamily: 'Open Sans',
															fontStyle: 'normal',
															fontWeight: '300',
															fontSize: '0.875rem',
															lineHeight: '19px',
															color: '#000000',
														},
													}}
													value='instantBookings'
													control={
														<Checkbox
															checked={directBooking ? true : false}
															onChange={(e: any) => setFilterDirectBooking(e.target.checked)}
														/>
													}
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
														fontSize: '0.625re,',
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
							<Box height={40} />
							<Box>
								<Box className='filter-sub-header'>Permits</Box>
								<Box height={15} />
								<Box>
									{filterDataPermits.map((item, index) => (
										<Box margin='4px 0' key={index}>
											<FormControlLabel
												sx={{ margin: '0' }}
												control={
													<Checkbox
														onChange={(e: any) =>
															setFilterServices(
																e.target.checked
																	? [...(filterServices as string[]), item.text]
																	: filterServices?.filter(item => item !== e.target.name)
															)
														}
													/>
												}
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
							<Box height={40} />
							<Box>
								<Box className='filter-sub-header'>Services</Box>
								<Box height={15} />
								<Box>
									{filterDataServices.map((item, index) => (
										<Box margin='4px 0' key={index}>
											<FormControlLabel
												sx={{ margin: '0' }}
												control={
													<Checkbox
														onChange={(e: any) =>
															setFilterServices(
																e.target.checked
																	? [...(filterServices as string[]), item.text]
																	: filterServices?.filter(item => item !== e.target.name)
															)
														}
													/>
												}
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
								<Box className='filter-sub-header'>Group Types</Box>
								<Box height={15} />
								<Box padding='4px 0' marginBottom='2.5rem'>
									{filterDataGroupTypes.map((item, index) => (
										<Box key={index}>
											<FormControlLabel
												sx={{ margin: '0' }}
												control={
													<Checkbox
														onChange={(e: any) =>
															setFilterAmenities(
																e.target.checked
																	? [...(filterAmenities as string[]), item.text]
																	: filterAmenities?.filter(item => item !== e.target.name)
															)
														}
													/>
												}
												label={
													<Typography sx={{ paddingLeft: '0.625rem' }}>
														<Box display='flex' gap={1}>
															{/* <Box>
																<img
																	style={{
																		objectFit: 'contain',
																		maxHeight: '13.75px',
																		maxWidth: '11px',
																	}}
																	src={item.img}
																	alt=''
																/>
															</Box> */}
															<Box className='filter-p'>{item.text}</Box>
														</Box>
													</Typography>
												}
											/>
											<Box height={4} />
											{index !== filterDataGroupTypes.length - 1 && <Divider />}
										</Box>
									))}
								</Box>
							</Box>
							<Box></Box>
							<Box></Box>
							<Box marginBottom='2rem'>
								<Button
									variant='outlined'
									sx={{
										textTransform: 'none',
									}}
								>
									Reset
								</Button>
							</Box>
						</Box>
					</Box>
				)}
				{showSort && (
					<Box width='90%'>
						<Box height={35} />
						<Box>
							<Box className='filter-header' textAlign='center'>
								Sort By
							</Box>
							<Box height={30} />
							<Box>
								<Box>
									<Box className='filter-sub-header'>Amenities</Box>
									<Box height={15} />
									<Box>
										{filterDataGroupTypes.map((item, index) => (
											<Box padding='4px 0' key={index}>
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
												{index !== filterDataGroupTypes.length - 1 && <Divider />}
											</Box>
										))}
									</Box>
									<Box height={15} />
								</Box>
							</Box>
						</Box>
					</Box>
				)}

				<Box
					display={showFilter ? 'flex' : 'none'}
					position='absolute'
					bottom='0'
					height={{ xs: 66 }}
					width='100%'
					boxShadow='0px -8px 17px rgba(0, 0, 0, 0.16)'
					justifyContent='center'
					alignItems='center'
					sx={{
						background: 'white',
					}}
				>
					<Box
						width='50%'
						height='100%'
						display='flex'
						justifyContent='flex-end'
						marginRight='0.75rem'
					>
						<Button
							onClick={filterClose}
							style={{
								background: '#000000',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: '0.813rem',
								lineHeight: '16px',
								color: '#FFFFFF',
								textTransform: 'capitalize',
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
								height: '70%',
								width: '50%',
								margin: 'auto 0',
							}}
						>
							{showFilter || showSort ? (
								<Box>Close</Box>
							) : (
								<>
									<Box>Filter</Box>
									<Box>
										<img src='/assets/images/main/filter.svg' alt='' />
									</Box>
								</>
							)}
						</Button>
					</Box>
					<Box
						width='50%'
						height='100%'
						display='flex'
						justifyContent='flex-start'
						marginLeft='0.75rem'
					>
						<Button
							onClick={handleApply}
							style={{
								background: '#8F7EF3',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: '0.813rem',
								lineHeight: '16px',
								color: 'black',
								textTransform: 'capitalize',
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
								height: '70%',
								width: '50%',
								margin: 'auto 0',
							}}
						>
							{showFilter || showSort ? (
								<Box color='#FFFFFF'>Apply</Box>
							) : (
								<>
									<Box>Sort By</Box>
									<Box>
										<img src='/assets/images/main/sort.svg' alt='' />
									</Box>
								</>
							)}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Filter;
