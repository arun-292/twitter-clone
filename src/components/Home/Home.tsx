import React from 'react';
import MainContent from '../MainContent/MainContent';
import { Grid } from '@material-ui/core';
import CustomTypography from '../CustomTypography/CustomTypography';
import Feed from '../Feed/Feed';

const Home: React.FC = () => {
  return (
    <MainContent>
      <Grid item>
        <CustomTypography variant="h5" fontWeight={600} className="p-16">
          Home
        </CustomTypography>
        <Feed />
      </Grid>
      <Grid item>test2</Grid>
    </MainContent>
  );
};

export default Home;
