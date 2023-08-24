import React, { useState } from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import QuickAction from '../QuickAction/QuickAction';
import CustomTypography from '../CustomTypography';
import MainContent from '../MainContent/MainContent';

const about = () => {
  return (
    <CustomTypography variant="h3" color="primary" className="test-initial-style">
      about
    </CustomTypography>
  );
};

const contact = () => {
  return (
    <CustomTypography variant="h3" color="primary" className="test-initial-style">
      contacts
    </CustomTypography>
  );
};

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(true);
  const myTheme = createTheme({
    // Theme settings
    palette: {
      type: isDarkModeEnabled ? 'dark' : 'light',
      background: {
        default: isDarkModeEnabled ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)',
      },
      primary: {
        main: isDarkModeEnabled ? 'rgb(231, 233, 234)' : 'rgba(0,0,0,1)',
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {/* <Grid item>
        <Typography variant="h1" color="primary" className="test-initial-style">
          Twitter/x
        </Typography>
        <img
          src={xLogo}
          style={{ filter: `${!isDarkModeEnabled ? 'invert(1)' : 'none'}` }}
          alt="X"
        />
      </Grid> */}
      <Grid item container justifyContent="center">
        <Grid item>
          <QuickAction />
        </Grid>
        <Grid item>
          <Routes>
            <Route path="/" Component={MainContent} />
            <Route path="/about" Component={about} />
            <Route path="/contact" Component={contact} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
