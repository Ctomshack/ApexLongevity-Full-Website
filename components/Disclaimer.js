import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Disclaimer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='sm:px-8 bg-gray-50 mx-auto'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Disclosure">
          <Tab label="Disclosure" {...a11yProps(0)} />
          {/* <Tab label="California" {...a11yProps(1)} /> */}
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='text-gray-500 text-xs'>
      <span className='block mb-4 text-xs'>{`This discount medical plan is NOT insurance, a health insurance policy, Medicare prescription drug plan or qualified health plan under the Affordable Care Act. This plan (The Plan) provides discounts only on chiropractic services offered by providers who have agreed to participate in The Plan. The range of discounts for medical or ancillary services offered under The Plan will vary depending on the type of provider and products or services. The Plan does not make and is prohibited from making members’ payments to providers for products or services received under The Plan. The member is required and obligated to pay for all discounted chiropractic services and equipment received under The Plan, but will receive a discount on certain identified chiropractic services from providers in The Plan.`}</span>
      <span className='block text-xs'>{`The Discount Medical Plan Organization/Discount Plan Organization is Apex Longevity, LLC, 36901 American Way ,Suite #7, Avon, OH 44011. You may call +1 (877) 712-2739 for more information or `}<Link href='/patients/FindAProvider'><a className='cursor-pointer hover:text-apexB hover:underline'>click here</a></Link>{` for a list of providers. The Plan will make available before purchase and upon request, a list of program providers and the providers’ city, state and specialty, located in the member’s service area. The fees for The Plan are specified in the membership agreement. The Plan includes a 30-day cancellation provision. Note to MA consumers: The plan is not insurance coverage and does not meet the minimum creditable coverage requirements under M.G.L. c. 111M and 956 CMR 5.00. Not available for sale in the states of Rhode Island and Washington.`}</span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
