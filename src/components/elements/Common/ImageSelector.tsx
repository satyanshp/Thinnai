import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Backdrop, FormLabel } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { ALERT_TYPE, S3_BASE } from '../../../utils/consts';
import '../../styles/Info/info.css';
import CropCompress from './uploadImageUtils/CropCompress';

interface UploadImageProps {
	width: string;
	height: string;
	widthPhone?: string;
	heightPhone?: string;
	setExportPic?: (value: string[]) => void;
	name?: string;
	initialImage?: string;
	required: boolean;
	background?: string;
	border?: string;
	iconcolor?: string;
	contWidth?: string;
	borderRadius?: string;
	setCroppedImageFile?: any;
	aspectRatio: number;
	multiple?: boolean;
}

const ImageSelector = ({
	height,
	width,
	widthPhone = '150px',
	heightPhone = '150px',
	name,
	borderRadius,
	required,
	background = '#EEEEEE',
	border = '2px dashed #B8B6B6',
	iconcolor = '#B8B6B6',
	contWidth,
	aspectRatio,
	initialImage,
	setCroppedImageFile,
	multiple = false,
}: UploadImageProps) => {
	const dispatch = useDispatch();
	const inputElementRef = useRef<HTMLInputElement>(null);
	const [imgSrc, setImgSrc] = useState<string | null>(null);
	const [dbImageSrc, setDbImageSrc] = useState<string | null>('');
	const [croppedImageUrl, setCroppedImageUrl] = useState<string>();
	const [showPreview, setShowPreview] = useState(false);

	const onSelectPic = (event: any) => {
		if (event.target.files && event.target.files.length > 0) {
			console.log(event.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
			reader.readAsDataURL(event.target.files[0]);
			setShowPreview(true);
		}
	};

	const handleCrop = (imageFile: any, imageUrl: string) => {
		if (setCroppedImageFile && imageFile) {
			setCroppedImageFile(imageFile);
			setCroppedImageUrl(imageUrl);
			setShowPreview(false);
		} else {
			dispatch(setAlert('Please crop image to required aspect Ratio', ALERT_TYPE.INFO));
		}
	};

	const closePreview = () => {
		setCroppedImageFile();
		setCroppedImageUrl('');
		setShowPreview(false);
		setImgSrc(null);
		if (inputElementRef && inputElementRef.current) {
			inputElementRef.current.value = '';
		}
	};

	useEffect(() => {
		if (initialImage) {
			setDbImageSrc(initialImage);
		}
	}, [initialImage]);

	return (
		<>
			<Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={showPreview}>
				<CropCompress
					aspectRatio={aspectRatio}
					imgSrc={imgSrc}
					handleCrop={handleCrop}
					closePreview={closePreview}
				/>
			</Backdrop>
			<section style={{ width: contWidth }}>
				<FormLabel
					className='input-file'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: height,
						width: width,
						'@media (max-width: 600px)': {
							width: widthPhone,
							height: heightPhone,
						},
						alignItems: 'center',
						border: border,
						cursor: 'pointer',
						fontSize: 'large',
						backgroundColor: background,
						overflow: 'hidden',
						position: 'relative',
						borderRadius: borderRadius,
					}}
				>
					{!croppedImageUrl && !dbImageSrc && (
						<AddPhotoAlternateIcon
							style={{
								color: iconcolor,
								height: '38.25px',
								width: '37.55px',
								zIndex: '1',
							}}
						/>
					)}
					{croppedImageUrl && (
						<div style={{ position: 'absolute' }}>
							<div className='overlay'></div>
							<img
								style={{ height: height, objectFit: 'contain' }}
								src={croppedImageUrl}
								alt='cropped image'
							/>
						</div>
					)}
					{dbImageSrc && !croppedImageUrl && (
						<div style={{ position: 'absolute' }}>
							<div className='overlay'></div>
							<img
								style={{ height: height, objectFit: 'contain' }}
								src={`${S3_BASE}${dbImageSrc}`}
								alt=''
							/>
						</div>
					)}
					<input
						style={{ display: 'none' }}
						ref={inputElementRef}
						type='file'
						name={name}
						multiple={multiple}
						accept='image/png, image/jpeg, image/webp, image/svg'
						onChange={onSelectPic}
					/>
				</FormLabel>
			</section>
			{required && !dbImageSrc ? <span className='error-msg'>*Required</span> : null}
		</>
	);
};

export default ImageSelector;
