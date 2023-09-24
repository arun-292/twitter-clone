import React from 'react';
import CustomTypography from '../CustomTypography';
import { QuickActionConfig } from './QuickAction.config';
import { Button, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import xLogo from '../../assets/images/x.png';

const QuickAction: React.FC = () => {
  const {
    location: { pathname },
  } = window;
  const navigate = useNavigate();
  console.log('pathname == ', pathname);
  return (
    <Grid item container direction="column">
      <Button
        variant="text"
        color="default"
        className="quickActionButton x-home-icon"
        onClick={() => navigate('/home')}
      >
        <img src={xLogo} width={50.4} alt="home" />
      </Button>
      {QuickActionConfig.map((elem) => {
        return (
          <Button
            key={elem.key}
            variant="text"
            color="default"
            className="quickActionButton"
            onClick={() => navigate(elem.path)}
          >
            <Grid item container>
              <elem.Icon className="textColor svgHeight svgWidth" />
              <CustomTypography
                variant="h6"
                color="primary"
                fontWeight={pathname === elem.path ? 600 : 400}
                className="quickActionButtonText mr-16 ml-20 textColor"
              >
                {elem.name}
              </CustomTypography>
            </Grid>
          </Button>
        );
      })}
    </Grid>
  );
};

export default QuickAction;
