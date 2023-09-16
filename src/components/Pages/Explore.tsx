import Box from '@mui/material/Box';
import { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPlaces } from '../../actions/main';
import LocationCarousel from '../elements/Explore/LocationCarousel';
import NavBar from '../elements/Explore/NavBar';
import Places from '../elements/Explore/Places';
import Search from '../elements/Explore/Search';
import '../styles/Main/main.css';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routing/routes';
import MobileHeader from '../elements/Common/mobileOnly/MobileHeader';
import Filter from '../elements/Explore/subElements/Filter';
import ResponsiveMenu from '../elements/Explore/subElements/ResponsiveMenu';

const Explore = () => {
	const navigate = useNavigate();
	const dispatch: Dispatch<any> = useDispatch();

	const [searchState, setSearchState] = useState(false);
	const openSearch = () => {
		setSearchState(true);
	};

	const [showFilter, setShowFilter] = useState(false);

	const [showSort, setShowSort] = useState(false);

	const filterClose = () => {
		setShowFilter(true);
		if (showFilter || showSort) {
			setShowFilter(false);
			setShowSort(false);
		}
	};

	const sortApply = () => {
		setShowSort(true);
		if (showFilter || showSort) {
			setShowFilter(false);
			setShowSort(false);
		}
	};

	const filterDataServices = [
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Privet Movie Screening',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Candle Light Experience',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Special Decorations',
		},
	];

	const filterDataGroupTypes = [
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Friends',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Couples',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Kids Friendly',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Family',
		},
	];

	const filterDataPermits = [
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Allow Smoking',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Allow Alcohol',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Allow Non - veg',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Floor Decor Permit',
		},
		{
			img: '/assets/images/detail/amenities/music.svg',
			text: 'Table Decor Permit',
		},
	];

	const [homeSelected, setHomeSelected] = useState(true);
	const homeClick = () => {
		if (!homeSelected) {
			setHomeSelected(true);
			setBookSelected(false);
			setChatSelected(false);
			setAccountOpen(false);
		}
		navigate(ROUTES.EXPLORE);
	};

	const [bookSelected, setBookSelected] = useState(false);
	const bookClick = () => {
		if (!bookSelected) {
			setHomeSelected(false);
			setBookSelected(true);
			setChatSelected(false);
			setAccountOpen(false);
		}
		navigate(ROUTES.CONFIRMED);
	};

	const [chatSelected, setChatSelected] = useState(false);
	const chatClick = () => {
		if (!chatSelected) {
			setHomeSelected(false);
			setBookSelected(false);
			setChatSelected(true);
			setAccountOpen(false);
		}
		navigate(ROUTES.CHAT);
	};

	const [accountOpen, setAccountOpen] = useState(false);
	const accountClick = () => {
		if (!accountOpen) {
			setHomeSelected(false);
			setBookSelected(false);
			setChatSelected(false);
			setAccountOpen(true);
		}
		navigate(ROUTES.PROFILE);
	};

	const [stateSearched, setStateSearched] = useState(false);
	const searched = () => {
		setSearchState(false);
		setStateSearched(true);
		dispatch(loadPlaces());
	};

	const [viewBook, setViewBook] = useState(false);

	return (
		<Box
			fontFamily="'Montserrat', sans-serif"
			position='relative'
			sx={{ overflowX: 'hidden' }}
			minHeight='100vh'
			margin={{
				sm: searchState || showFilter ? '0' : '0 2.5rem',
				xs: '0',
			}}
		>
			{/* Decorative-Circle---------------------------------------- */}
			<Box
				className='circle'
				zIndex='0'
				display={{ sm: 'none' }}
				width={{ xs: '172px', md: '430.23px', sm: '' }}
				top={{ xs: '-82.86px', md: '-245px', sm: '' }}
				right={{ xs: '-82.86px', md: '-179px', sm: '' }}
				border='1px solid #EECBBC'
			/>
			<Box
				className='circle'
				zIndex='0'
				display={{ sm: 'none' }}
				width={{ xs: '203px', md: '507.78px', sm: '' }}
				top={{ xs: '-80px', md: '-273px', sm: '' }}
				right={{ xs: '-80px', md: '-207px', sm: '' }}
				border='1px solid #EECBBC'
			/>
			<Box
				className='circle'
				zIndex='0'
				display={{ sm: 'none' }}
				width={{ xs: '230px', md: '575.31px', sm: '' }}
				top={{ xs: '-82px', md: '-301px', sm: '' }}
				right={{ xs: '-82px', md: '-199px', sm: '' }}
				border='3px solid rgba(238, 203, 188, 0.2)'
			/>
			<Box
				className='circle'
				zIndex='0'
				display={{ sm: 'none' }}
				width={{ xs: '253px', md: '634.84px', sm: '' }}
				top={{ xs: '-80px', md: '-318px', sm: '' }}
				right={{ xs: '-80px', md: '-185px', sm: '' }}
				border='1px solid rgba(238, 203, 188, 0.93)'
			/>
			{/* Decorative-Circle---------------------------------------- */}
			{/* <Box
				height={70}
				display={{ xs: 'flex', sm: 'none' }}
				flexDirection='column'
				justifyContent='center'
			>
				<Box width='100%' fontWeight='700' fontSize='1.25rem' display='flex' alignItems='center'>
					<Button>
						<img src='/assets/images/detail/arrowBack.svg' alt='' />
					</Button>
				</Box>
			</Box> */}

			<Box position='relative' width='100%'>
				{!viewBook && <MobileHeader color='black' urlPath='/' headerText={''} />}
				<NavBar
					stateSearched={stateSearched}
					setStateSearched={setStateSearched}
					searchTabOpen={openSearch}
					state={searchState}
					searchTabClose={() => setSearchState(false)}
				/>
				{searchState && (
					<Box
						display={{ md: 'block', xs: 'none' }}
						position='absolute'
						width={{
							xl: '485px',
							md: '450px',
							sm: '485px',
							xs: '485px',
						}}
						top='315%'
						left={{
							xl: '47.6%',
							md: '44.2%',
							sm: '47.6%',
							xs: '47.6%',
						}}
						sx={{ transform: 'translate(-50%, -50%)' }}
						zIndex='5'
					>
						<Search onClick={searched} />
					</Box>
				)}
			</Box>
			<Box position='relative'>
				{searchState && (
					<Box display={{ sm: 'block', md: 'none' }} width='100%' zIndex='5'>
						<Search setSearchState={setSearchState} onClick={searched} />
					</Box>
				)}
				<Box height={20} />
				<Box>
					<LocationCarousel onClick={() => setShowFilter(true)} />
				</Box>
				<Box>
					<Places />
				</Box>
				<Box height={50} />
				{searchState && (
					<Box
						className='search-overlay'
						position='absolute'
						display={{ md: 'block', xs: 'none' }}
						onClick={() => setSearchState(false)}
						sx={{
							background: 'rgba(0, 0, 0, 0.63)',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
						}}
						zIndex='2'
					/>
				)}
				<Filter
					showFilter={showFilter}
					showSort={showSort}
					sortApply={sortApply}
					filterClose={filterClose}
					filterDataAmenities={filterDataGroupTypes}
					filterDataServices={filterDataServices}
					filterDataPermits={filterDataPermits}
				/>
				<ResponsiveMenu
					showFilter={showFilter}
					filterClose={filterClose}
					filterDataAmenities={filterDataGroupTypes}
					filterDataServices={filterDataServices}
					homeSelected={homeSelected}
					bookSelected={bookSelected}
					chatSelected={chatSelected}
					accountOpen={accountOpen}
					homeClick={homeClick}
					bookClick={bookClick}
					chatClick={chatClick}
					accountClick={accountClick}
				/>
			</Box>
			{showFilter && (
				<Box
					onClick={() => setShowFilter(false)}
					display={{ xs: 'none', md: 'block' }}
					zIndex='6'
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='0'
					sx={{ background: 'rgba(0, 0, 0, 0.63)' }}
				/>
			)}
		</Box>
	);
};

export default Explore;
