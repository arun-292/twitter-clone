import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { Grid } from '@material-ui/core';

const Messages: React.FC = () => {
  return (
    <Grid item container direction="row">
      <Grid item>
        <CustomTypography variant="h3" color="primary" fontWeight={600}>
          Main Content
        </CustomTypography>
      </Grid>
      <Grid item className="subContent">
        <CustomTypography variant="h3" color="primary" fontWeight={600}>
          Messages
        </CustomTypography>
      </Grid>
    </Grid>
  );
};

export default Messages;
