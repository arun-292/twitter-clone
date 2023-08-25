import React, { useState } from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import QuickAction from '../QuickAction';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Lists from '../Lists';
import Bookmarks from '../Bookmarks';
import Communities from '../Communities';
import Verified from '../Verified';
import Profile from '../Profile';
import Loader from '../Loader';
import Home from '../Home';

const App = () => {
  const [isDarkModeEnabled] = useState<boolean>(true);
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
            <Route path="/" Component={Loader} />
            <Route path="/home" Component={Home} />
            <Route path="/explore" Component={Explore} />
            <Route path="/notifications" Component={Notifications} />
            <Route path="/messages" Component={Messages} />
            <Route path="/akashsolanki292/lists" Component={Lists} />
            <Route path="/i/bookmarks" Component={Bookmarks} />
            <Route path="/akashsolanki292/communities" Component={Communities} />
            <Route path="/i/verified-choose" Component={Verified} />
            <Route path="/akashsolanki292" Component={Profile} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
