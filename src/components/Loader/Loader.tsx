import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loader: React.FC = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation('/home');
    }, 2000);
  }, []);

  return (
    <Grid item container alignItems="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
