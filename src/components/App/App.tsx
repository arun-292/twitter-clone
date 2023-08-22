import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import xLogo from '../../assets/images/x.png';

const App = () => {
  return (
    <Grid item>
      <Typography variant="h1" className="test-initial-style">
        Twitter/x
      </Typography>
      <img src={xLogo} alt="X" />
    </Grid>
  );
};

export default App;
