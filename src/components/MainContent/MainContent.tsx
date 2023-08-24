import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { Grid } from '@material-ui/core';

const MainContent: React.FC = () => {
  return (
    <Grid item container direction="row">
      <Grid item>
        <CustomTypography variant="h3" color="primary" fontWeight={600}>
          Main Content
        </CustomTypography>
      </Grid>
      <Grid item className="extras">
        <CustomTypography variant="h3" color="primary" fontWeight={600}>
          Home2
        </CustomTypography>
      </Grid>
    </Grid>
  );
};

export default MainContent;
