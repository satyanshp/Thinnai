import { imgPreview } from './imgPreview';
import { useDebounceEffect } from './useDebounceEffect';
import { Box, Button } from '@mui/material';
import Compressor from 'compressorjs';
import React, { useState, useRef } from 'react';
import ReactCrop, { PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface cropCompressProps {
	imgSrc: string | null;
	handleCrop: any;
	aspectRatio: any;
	closePreview: any;
}

const CropCompress = ({ imgSrc, handleCrop, aspectRatio, closePreview }: cropCompressProps) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const [crop, setCrop] = useState<PixelCrop>();
	const [scale, setScale] = useState(1);
	const [rotate, setRotate] = useState(0);

	const [croppedImageFile, setCroppedImageFile] = useState<Blob>();
	const [croppedImageUrl, setCroppedImageUrl] = useState<string>();

	useDebounceEffect(
		async () => {
			if (crop?.width && crop?.height && imgRef.current) {
				const { imageFile, previewUrl }: { imageFile: Blob | null; previewUrl: string } =
					await imgPreview(imgRef.current, crop, scale, rotate);
				if (imageFile) {
					setCroppedImageFile(imageFile);
				}
				if (previewUrl) {
					setCroppedImageUrl(previewUrl);
				}
			}
		},
		100,
		[crop, scale, rotate]
	);

	const handleSave = () => {
		if (croppedImageFile) {
			new Compressor(croppedImageFile as Blob, {
				quality: 0.7,
				success: async file => {
					handleCrop(file, croppedImageUrl);
				},
			});
		} else {
			handleCrop(null, null);
		}
	};

	const handleCancel = () => {
		closePreview();
		setCrop(undefined);
		setScale(1);
		setRotate(0);
	};

	return (
		<Box textAlign={'end'}>
			<Box display={'block'}>
				{imgSrc && (
					<ReactCrop crop={crop} onChange={(crop, _) => setCrop(crop)} aspect={aspectRatio}>
						<img
							ref={imgRef}
							alt='Crop me'
							src={imgSrc}
							style={{ transform: `scale(${scale}) rotate(${rotate}deg)`, maxHeight: '80vh' }}
						/>
					</ReactCrop>
				)}
			</Box>
			<Button
				variant='contained'
				color='primary'
				onClick={handleCancel}
				sx={{ background: '#1A191E' }}
			>
				{' '}
				CANCEL{' '}
			</Button>
			<Button
				variant='contained'
				color='primary'
				onClick={handleSave}
				sx={{ marginLeft: '1rem', background: '#1A191E' }}
			>
				{' '}
				DONE{' '}
			</Button>
		</Box>
	);
};

export default CropCompress;
