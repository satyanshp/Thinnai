import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../../Common/subElements/Marker';
import Box from '@mui/material/Box';

const Location = ({property}:any) => {
  return (
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
  )
}

export default Location