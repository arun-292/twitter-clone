import React, { useState } from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@material-ui/core';
import TwitterRoutes from '../TwitterRoutes';
import { useMst } from '../../mobx/root';
import QuickAction from '../QuickAction';
import { observer } from 'mobx-react-lite';
//import io from 'socket.io-client';
//const socket = io('http://localhost:5000');

const App = () => {
  const [isDarkModeEnabled] = useState<boolean>(true);
  const {
    auth: { token, user },
  } = useMst();
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

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages((prev) => [...prev, message]);
  //   });
  //   setInterval(() => {
  //     socket.emit('sendMessage', dayjs());
  //   }, 60000);
  // }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {
        <Grid item container justifyContent="center">
          <Grid item className="quick-action-main-root">
            {token && user?._id && <QuickAction />}
          </Grid>
          <Grid item>
            <TwitterRoutes />
          </Grid>
        </Grid>
      }
    </ThemeProvider>
  );
};

export default observer(App);
