import { Button, Dialog, Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Close } from '@material-ui/icons';

interface CustomDialogProps {
  headerContent: ReactNode;
  mainContent: ReactNode;
  footerContent: ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  headerContent,
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
          {headerContent}
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
