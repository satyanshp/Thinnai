import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store';

const DetailPicture = ({ selected, handleSelected }: any) => {
	const location = useLocation();
	const pathName = location.pathname;

	const enquiries = useSelector<RootState, any>(state => state.enquiry.enquiries);
	const enquiryStatus = useSelector<RootState, any>(state => state.booking.enquiryStatus);

	const [enquiry, setEnquiry] = useState<any>([]);
	useEffect(() => {
		if (pathName === '/inquiry') {
			setEnquiry(enquiryStatus);
		} else {
			setEnquiry(enquiries);
		}
	}, [enquiries, enquiryStatus]);

	return (
		<Box
			display={{
				xl: 'block',
				md: 'block',
				sm: 'none',
				xs: 'block',
			}}
			padding={
				pathName === '/inquiry' ? '1.875rem 0px 0px 0px' : '2.5rem 3.125rem 0.938rem 3.125rem'
			}
		>
			<Box
				display='flex'
				gap={3}
				marginBottom={pathName === '/inquiry' ? '5px' : '2.5rem'}
				justifyContent='center'
			>
				{enquiry.map((enq: any, index: any) => (
					<img
						key={index}
						width='130px'
						height={145}
						src={`https://simplem-static.s3.ap-south-1.amazonaws.com/${
							pathName === '/inquiry' ? enq.property.propertyPictures[0] : enq.propertyPictures[0]
						}`}
						alt=''
						style={{
							borderRadius: '10px',
							border: selected === index ? '3px solid #FF5A5F' : 'none',
							cursor: 'pointer',
						}}
						onClick={() => handleSelected(index)}
					/>
				))}
			</Box>
		</Box>
	);
};

export default DetailPicture;
