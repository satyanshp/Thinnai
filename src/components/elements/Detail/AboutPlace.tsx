import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
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
import Counter from '../Explore/Counter';
import Loading from '../Loading/Loading';
import BestSuitedFor from './subElements/BestSuitedFor';
import LgbtqBanner from './subElements/LgbtqBanner';
import Price from './subElements/Price';
import Location from './subElements/Location';
import HostDetails from './subElements/HostDetails';

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
				<Location property={property}/>
			<DetailsSectionDivider />
				<HostDetails/>
			<DetailsSectionDivider />

			{rules[0] === '' ? (
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
