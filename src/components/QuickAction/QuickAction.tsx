import React from 'react';
import CustomTypography from '../CustomTypography';
import QuickActionConfig from './QuickAction.config';
import { Home as HomeIcon } from '@material-ui/icons';
import { Button, Grid, Tooltip } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const QuickAction: React.FC = () => {
  const {
    location: { pathname },
  } = window;
  const navigate = useNavigate();
  console.log('pathname == ', pathname);
  return (
    <Grid item container direction="column">
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
              <HomeIcon className="textColor svgHeight svgWidth" />
              <CustomTypography
                variant="h5"
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
