import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../../styles/Detail/detail.css';

export default function FAQs() {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			<Box className='detail__header'>FAQ’s</Box>
			<Box height={10} />
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				className='faq-container'
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'
					className='faq-sumary-title'
				>
					<Typography className='Accordin__head' sx={{ flexShrink: 0 }}>
						1. FAQ question here?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className='detail__p'>
						Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis convallis diam sit amet
						lacinia. Aliquam in elementum tellus."Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,

					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				className='faq-container'
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2bh-content'
					id='panel2bh-header'
					className='faq-sumary-title'
				>
					<Typography className='Accordin__head'>
						2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className='detail__p'>
						Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis convallis diam sit amet
						lacinia. Aliquam in elementum tellus."Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
				className='faq-container'
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3bh-content'
					id='panel3bh-header'
					className='faq-sumary-title'
				>
					<Typography className='Accordin__head'>
						3. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className='detail__p'>
						Lorem ipsum dolor sit amet, conseibendum lorem. Morbi convallis convallis diam sit amet
						lacinia. Aliquam in elementum tellus."Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut
					</Typography>
				</AccordionDetails>
			</Accordion>
			{/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
		</div>
	);
}
