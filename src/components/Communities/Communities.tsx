import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { Grid } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';

const Communities: React.FC = () => {
  return (
    <MainContent>
      <CustomTypography variant="h3" color="primary" fontWeight={600}>
        Main Content
      </CustomTypography>
      <CustomTypography variant="h3" color="primary" fontWeight={600}>
        Communities
      </CustomTypography>
    </MainContent>
  );
};

export default Communities;
