import { Button, Grid } from '@material-ui/core';
import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';

const Feed: React.FC = () => {
  return (
    <>
      <Grid item container xs={12} className="contentBorder bb buttonGroup">
        <Button variant="text">For you</Button>
        <Button variant="text">Following</Button>
      </Grid>
      <Grid item xs={12}>
        <CustomTypography>What is happening?!</CustomTypography>
      </Grid>
    </>
  );
};

export default Feed;
