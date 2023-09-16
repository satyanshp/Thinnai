import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { S3_BASE } from '../../../utils/consts';
import { ROUTES } from '../../../utils/routing/routes';
import Allowed from '../Common/Allowed';
import Amenities from '../Common/Amenities';
import DetailsListItem from '../Common/DetailsListItem';
import DetailsSectionDivider from '../Common/DetailsSectionDivider';
import FAQs from '../Common/FAQs';
import Policies from '../Common/Policies';
import Rating from '../Common/Rating';
import ReportThinnai from '../Common/ReportThinnai';
import PropertyReviewsCarousel from '../Common/ReviewCarousel';
import Marker from '../Common/subElements/Marker';
import Counter from '../Explore/Counter';
import Loading from '../Loading/Loading';
import BestSuitedFor from './subElements/BestSuitedFor';
import LgbtqBanner from './subElements/LgbtqBanner';
import Price from './subElements/Price';

const AboutPlace = () => {
	const property: any = useSelector<RootState, string>(state => state.details.property);
	const reviewCount = useSelector<RootState, number>(state => state.details.reviewCount);

	const allowedActivitiesMap = useSelector<RootState, any>(
		state => state.appSettings.allowedActivitiesMap
	);

	const [reviewAvatars, setReviewAvatars] = useState<string[]>([]);

	useEffect(() => {
		if (property && property.reviews) {
			const reviews = property.reviews;
			const reviewAvatars: string[] = [];
			reviews.map((review: any, index: number) => {
				if (review.reviewer.profileImage && index < 5) {
					reviewAvatars.push(review.reviewer.profileImage);
				}
			});
			setReviewAvatars(reviewAvatars);
		}
	}, []);

	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	if (!allowedActivitiesMap || !property) {
		return (
			<Box
				width={{
					md: '30%',
					sm: '40%',
					xs: '60%',
				}}
			>
				<Loading />
			</Box>
		);
	}
	const rules = property.houseRules;

	return (
		<Box
			marginTop={{
				xs: 3,
				sm: 0,
			}}
			width={{
				xl: '100%',
			}}
		>
			<Box>
				<Box display='flex' alignItems='center' gap={{ sm: 1, xs: 1 }}>
					<Box
						fontSize={{ md: '1.8rem', sm: '1.6rem', xs: '1.3rem' }}
						className='aboutPlace__header'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '600',
							lineHeight: '1.6em !important',
							color: '#000000',
						}}
					>
						{property.propertyName}
					</Box>
					<Box
						style={{ cursor: 'pointer' }}
						display='flex'
						marginLeft={{
							sm: '3rem',
							xs: '1rem',
						}}
						onClick={() => {
							navigator.share({
								url: `${window.location.origin}${ROUTES.PROPERTY_DETAIL}/${property.slugString}`,
								text: `Check Out ${property.propertyName}`,
							});
						}}
					>
						<ShareOutlinedIcon fontSize='small' />
					</Box>
				</Box>
				<Box display='flex' justifyContent='space-between'>
					<Box>
						<Box display='flex' alignItems='center' gap={{ sm: 1, xs: 0.2 }}>
							<Box display='flex' alignItems='center'>
								<LocationOnIcon
									sx={{
										fontSize: '1.375rem',
										'@media (max-width: 600px)': { fontSize: '1.125rem' },
									}}
								/>
							</Box>
							<Box
								className='aboutPlace__p'
								fontWeight='500'
								fontSize={{ md: '1.1rem', sm: '0.95rem', xs: '0.85rem' }}
								lineHeight='1.8em'
							>
								{`${property.city}, ${property.state}`}
							</Box>
						</Box>
						<Box display='flex' alignItems='center' gap={{ sm: 1, xs: 0.2 }}>
							<Box display='flex' alignItems='center'>
								<EmojiEmotionsIcon
									sx={{
										fontSize: '1.2rem',
										'@media (max-width: 600px)': { fontSize: '1.031rem' },
									}}
								/>
							</Box>
							<Box
								className='aboutPlace__p'
								fontSize={{ md: '1.1rem', sm: '0.95rem', xs: '0.85rem' }}
								lineHeight='1.8em'
							>
								{`${property.happyCustomers} Happy Guests Hosted`}
							</Box>
						</Box>
					</Box>

					{/* <Box display={{ xs: 'flex', md: 'none' }}>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='flex-end'
							gap='2px'
						>
							<Box
								fontSize={{ xs: '0.65rem', sm: '0.75rem' }}
								lineHeight='1.3em'
								sx={{
									fontFamily: 'Inter',
									fontWeight: '300',
									color: '#000000',
								}}
							>
								Price Starting From
							</Box>
							<Box>
								<Button
									variant='outlined'
									style={{
										borderRadius: '14px',
										fontWeight: '500',
										fontSize: '1rem',
										lineHeight: '20px',
										letterSpacing: '0.02em',
										padding: '2px 0.969rem',
										border: '1px solid #2B941C',
										color: '#2B941C',
									}}
								>
									{`₹${property.pricing?.joyHour[0].withoutAlcohol.oneHour}`}
								</Button>
							</Box>
						</Box>
					</Box> */}
				</Box>
				<DetailsSectionDivider />

				<Box>
					<Box className='aboutPlace__header'>This Space Allows</Box>
					<Allowed services={property.services} />
				</Box>
			</Box>
			<DetailsSectionDivider />
			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box display='flex' justifyContent='space-between'>
					<Box className='aboutPlace__header'>Ratings</Box>
					<Box
						display='flex'
						alignItems='center'
						paddingRight='3rem'
						justifyContent={{ sm: 'flex-end', xs: 'space-between' }}
						flexGrow={{ xs: '0.12', sm: '0' }}
						width='40%'
					>
						<Box
							width='40%'
							height='100%'
							display='flex'
							alignItems='center'
							justifyContent='center'
						>
							<Grid container wrap='nowrap' width='100%' height='60%' justifyContent='center'>
								{reviewAvatars.map((item, index) => (
									<Grid item xl={1.6} md={1.6} sm={1.6} xs={2} sx={{}} key={index}>
										<Box
											width={{ sm: '25px', xs: '20px' }}
											height={{ sm: '25px', xs: '20px' }}
											display='flex'
											alignItems='center'
											justifyContent='center'
											sx={{
												border: '0.5px solid white',
												borderRadius: '50%',
												overflow: 'hidden',
											}}
										>
											<img
												style={{
													objectFit: 'cover',
													width: '25px',
													height: '25px',
												}}
												src={S3_BASE + item}
												alt=''
											/>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
						<Box
							ml={0.5}
							flexGrow={{ xs: '1', sm: '0' }}
							fontSize={{ sm: '0.95vw', xs: '0.813rem' }}
							textAlign={{ xs: 'end', sm: 'initial' }}
							fontWeight={{ sm: '600', xs: 'bold' }}
							sx={{
								fontFamily: "'Open Sans', sans-serif",
								fontStyle: 'normal',
								lineHeight: '25px',
							}}
						>
							{`+${reviewCount} Reviews`}
						</Box>
					</Box>
				</Box>
				<Box height={{ sm: 30, xs: 18 }} />
				<Box
					sx={{
						fontFamily: 'Open Sans',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '1rem',
						lineHeight: '27px',
						color: '#383838',
					}}
				>
					Cleanliness
				</Box>
				<Box height={10} />
				<Box>
					<Rating data={property.ratings} height={{ sm: 35, xs: 31.5 }} />
				</Box>
				<Box height={{ sm: 28, xs: 18 }} />
				<Box
					sx={{
						fontFamily: 'Open Sans',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '1rem',
						lineHeight: '27px',
						color: '#383838',
					}}
				>
					Check - in
				</Box>
				<Box height={10} />
				<Box>
					<Rating data={property.ratings} height={{ sm: 35, xs: 31.5 }} />
				</Box>
			</Box>
			<DetailsSectionDivider />

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box className='aboutPlace__header'>About Thinnai Space</Box>
				<Box height={{ sm: 25, xs: 10 }} />
				<Box className='aboutPlace__p'>{property.propertyDescription}</Box>
			</Box>
			<DetailsSectionDivider />
			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Amenities amenities={property.amenities} />
			</Box>

			<DetailsSectionDivider />

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<BestSuitedFor activities={property.activities} />
			</Box>

			<DetailsSectionDivider />

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				{property?.preferredGuests?.includes('lgbtq_friendly') && <LgbtqBanner />}
			</Box>

			{property?.preferredGuests?.includes('lgbtq_friendly') && <DetailsSectionDivider />}

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				{property.reviews && property.reviews.length > 0 && (
					<PropertyReviewsCarousel reviews={property.reviews} />
				)}
			</Box>

			{property.reviews && property.reviews.length > 0 && <DetailsSectionDivider />}

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box display='flex' justifyContent='space-between'>
					<Box className='aboutPlace__header'>Price</Box>
					<Box>
						<Counter guest={true} maxValue={property.maxGuestCount} />
					</Box>
				</Box>
				<Box height={30} />
				<Box>
					<Price />
				</Box>
			</Box>
			<DetailsSectionDivider />
			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box className='aboutPlace__header'>Where you’ll be</Box>
				<Box height={20} />
				<Box height={{ md: '15rem', sm: '350px', xs: '200px' }} borderRadius='10rem'>
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE',
						}}
						center={{ lat: 27.3826, lng: 79.584 }}
						defaultZoom={8}
						// isMarkerShown
						yesIWantToUseGoogleMapApiInternals
					>
						<Marker {...property.geoLocation} />
					</GoogleMapReact>
				</Box>
			</Box>
			<DetailsSectionDivider />

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<Box display='flex' justifyContent='space-between'>
					<Box className='aboutPlace__header'>Hosted By</Box>
					<Box>
						<Button
							variant='contained'
							style={{
								background: '#E9E5FF',
								color: '#000000',
								textTransform: 'none',
								boxShadow: 'none',
								display: 'flex',
								gap: '0.625rem',
							}}
						>
							<ChatIcon sx={{ color: '#8F7EF3' }} />
							<Box
								fontSize={{ sm: '1.1rem', xs: '0.85rem' }}
								lineHeight='1.8em'
								sx={{
									fontFamily: 'Open Sans',
									fontStyle: 'normal',
									fontWeight: '400',
								}}
							>
								Send a msg
							</Box>
						</Button>
					</Box>
				</Box>
				<Box height={{ md: 50, sm: 40, xs: 40 }} />
				<Box display='flex' justifyContent='space-between'>
					<Box
						display='flex'
						width='50%'
						gap={2.5}
						alignItems={{ sm: 'flex-start', xs: 'center' }}
						flexGrow='1'
					>
						<Box
							display='flex'
							width={{ xl: '12%', md: '12%', sm: '15%', xs: '18%' }}
							alignItems={{ xs: 'center' }}
							sx={{ aspectRatio: '1', borderRadius: '50%' }}
						>
							<img
								style={{ objectFit: 'contain', width: '100%', borderRadius: '50%' }}
								src={
									property.userData?.user.profileImage
										? S3_BASE + property.userData?.user.profileImage
										: property.userData?.user.avatar
								}
								alt=''
							/>
						</Box>
						<Box display='flex' flexDirection='column' marginTop={{ xl: 3, sm: 1, xs: 0 }}>
							<Box display='flex' alignItems='center'>
								<Box
									fontSize={{ xl: '1.2rem', sm: '1.2rem', xs: '0.8rem' }}
									lineHeight='1.4em'
									sx={{
										fontWeight: '600',
										color: '#383838',
									}}
								>
									{property.userData?.user.firstName}
								</Box>
								<Box display='flex' alignItems='center' ml='5px'>
									<CheckCircleIcon sx={{ fontSize: '0.938rem', color: '#24BA0E' }} />
								</Box>
							</Box>
							<Box
								fontSize={{ xl: '1rem', xs: '1rem' }}
								sx={{
									fontFamily: 'Open Sans',
									fontStyle: 'normal',
									fontWeight: '400',
									marginTop: '0.3rem',
									lineHeight: '22px',
									color: '#383838',
								}}
							>
								{`${property.userData?.guestsHosted} guests hosted`}
							</Box>
						</Box>
					</Box>
					<Box
						fontSize={{
							xl: '0.9rem',
							md: '0.9rem',
							sm: '0.85rem',
							xs: '0.6rem',
						}}
						lineHeight='1.5em'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '400',
							lineHeight: '27px',
							color: '#595959',
						}}
					>
						{property.userData?.acceptanceRate && (
							<Box height={{ xs: '18px' }}>
								Acceptance Rate : {`${property.userData?.acceptanceRate}%`}
							</Box>
						)}
						{property.userData?.responseTime && (
							<Box height={{ xs: '18px' }}>
								Response Time : &lt;{`${property.userData?.responseTime}hr`}
							</Box>
						)}
						{property.userData?.cancellationRate && (
							<Box height={{ xs: '18px' }}>
								Cancellation Rate : {`${property.userData?.cancellationRate}%`}
							</Box>
						)}
					</Box>
				</Box>
				<Box height={20} />
				<Box>
					<Box
						display='flex'
						justifyContent='space-between'
						sx={{
							fontFamily: 'Open Sans',
							fontStyle: 'normal',
							fontWeight: '600',
							fontSize: '1.05rem',
							lineHeight: '33px',
							color: '#383838',
						}}
					>
						<Box>{`${property.userData?.user.firstName} Ratings`}</Box>
						<Box fontSize='0.9rem' fontWeight='400' color='#8F8F8F'>
							View Reviews
						</Box>
					</Box>
					<Box height={20} />
					<Box>
						<Rating data={property.userData?.ratings} height={{ sm: 35, xs: 31.5 }} />
					</Box>
				</Box>
				<Box height={{ sm: 50, xs: 20 }} />
				<Box className='aboutPlace__p'>
					{isReadMore
						? [property.userData?.aboutYourself].slice(0, 150)
						: property.userData?.aboutYourself}
					&nbsp;
					{/* <span
						onClick={toggleReadMore}
						style={{
							fontWeight: '600',
							textDecoration: 'underline',
							cursor: 'pointer',
						}}
					>
						{isReadMore ? 'Read More' : ' Show Less'}
					</span> */}
				</Box>
			</Box>
			<DetailsSectionDivider />

			{rules[0] == '' ? (
				<div />
			) : (
				<>
					<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
						<DetailsListItem listItems={property.houseRules} header={'House Rules'} />
					</Box>
					<DetailsSectionDivider />
				</>
			)}

			<Box paddingRight={{ md: '5rem', sm: '0rem' }}>
				<FAQs />
			</Box>

			<DetailsSectionDivider />

			<Box>
				<Policies />
			</Box>

			<DetailsSectionDivider />

			<Box>
				<ReportThinnai />
			</Box>
		</Box>
	);
};

export default AboutPlace;
