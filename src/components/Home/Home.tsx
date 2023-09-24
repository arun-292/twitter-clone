import React, { useState } from 'react';
import MainContent from '../MainContent/MainContent';
import { Grid, Tab, Tabs } from '@material-ui/core';
import CustomTypography from '../CustomTypography/CustomTypography';
import Feed from '../Feed/Feed';
import QuickOptions from '../QuickOptions';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleChange = (_: React.ChangeEvent<object>, value: number) => {
    setSelectedTab(value);
  };
  return (
    <MainContent>
      <Grid item>
        <div className="home-header">
          <CustomTypography variant="h5" fontWeight={600} className="p-16">
            Home
          </CustomTypography>
          <Grid item container xs={12}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              variant="fullWidth"
              textColor="inherit"
              className="tweet-tabs"
            >
              <Tab label="For you" {...a11yProps(0)} />
              <Tab label="Following" {...a11yProps(1)} />
            </Tabs>
          </Grid>
        </div>
        <Feed />
      </Grid>
      <Grid item className="pt-4">
        <QuickOptions />
      </Grid>
    </MainContent>
  );
};

export default Home;
