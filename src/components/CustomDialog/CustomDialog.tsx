import { Button, Dialog, Grid } from '@material-ui/core';
import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { useNavigate } from 'react-router-dom';
import { Close } from '@material-ui/icons';

interface CustomDialogProps {
  headerName: string;
  mainContent: React.ReactNode;
  footerContent: React.ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  headerName,
  footerContent,
  mainContent,
}: CustomDialogProps) => {
  const navigate = useNavigate();
  return (
    <Dialog open className="signUpDialog">
      <Grid item container className="customDialogRoot">
        <Grid item container alignItems="center" className="header">
          <Button onClick={() => navigate('/')} className="bblr bbrr btlr btrr button">
            <Close />
          </Button>
          <CustomTypography fontWeight={600} variant="h6">
            {headerName}
          </CustomTypography>
        </Grid>
        <Grid item container alignContent="center" className="content">
          {mainContent}
        </Grid>
        <Grid item className="footer">
          {footerContent}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CustomDialog;
