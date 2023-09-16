import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	SwipeableDrawer,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles: any = makeStyles({
	item: {
		fontSize: '1.25rem',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		'&:hover': {
			borderBottom: '2px solid white',
		},
	},
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const HostNav = () => {
	const classes = useStyles();

	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Home', 'Blog', 'Media', 'Register now'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box
				sx={{
					background: 'rgba(0, 0, 0, 0.45)',
				}}
				height='80px'
				flexDirection='column'
				justifyContent='center'
				display={{
					xl: 'flex',
					md: 'flex',
					sm: 'none',
					xs: 'none',
				}}
			>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					color='white'
					margin='0px 4.375rem'
					paddingY='1.875rem'
				>
					<Box
						style={{
							height: 'auto',
							width: '3.5rem',
						}}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<img
							width='100%'
							style={{
								objectFit: 'contain',
								height: 'auto',
							}}
							src='/assets/images/logo-host.png'
							alt=''
						/>
					</Box>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						color='white'
						gap={15}
					>
						<Box display='flex' gap={3}>
							<MenuItem className={classes.item}>Home</MenuItem>
							<MenuItem className={classes.item}>Blog</MenuItem>
							<MenuItem className={classes.item}>Media</MenuItem>
						</Box>
						<Box>
							<Button
								sx={{
									textTransform: 'none',
									color: 'white',
									fontSize: '1.25rem',
									fontFamily: 'Montserrat',
								}}
							>
								Register Now
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					background: 'rgba(0, 0, 0, 0.45)',
				}}
				height='80px'
				display={{
					xl: 'none',
					md: 'none',
					sm: 'block',
					xs: 'block',
				}}
			>
				{(['right'] as const).map(anchor => (
					<React.Fragment key={anchor}>
						<Box
							marginX={{
								sm: '2.5rem',
								xs: '1.875rem',
							}}
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							paddingTop={2}
						>
							<Box
								style={{
									height: 'auto',
									width: '3.3rem',
								}}
								display='flex'
								justifyContent='center'
								alignItems='center'
							>
								<img width='100%' src='/assets/images/logo-host.png' alt='' />
							</Box>
							<Button onClick={toggleDrawer(anchor, true)}>
								<MenuIcon
									sx={{
										color: 'white',
									}}
								/>
							</Button>
						</Box>
						<SwipeableDrawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
							onOpen={toggleDrawer(anchor, true)}
						>
							{list(anchor)}
						</SwipeableDrawer>
					</React.Fragment>
				))}
			</Box>
		</>
	);
};

export default HostNav;
