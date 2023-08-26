import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

const Loader: React.FC = () => {
  // const navigation = useNavigate();
  // const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  // useEffect(() => {
  //   fetch(`${NODE_API}/home`)
  //     .then(async (e: Response) => {
  //       if (e.status !== ApiStatus.SUCCESS) {
  //         setIsAuthenticating(false);
  //         return;
  //       }
  //       const data = await e.json();
  //       if (data.valid) navigation('/home');
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }, []);

  // if (isAuthenticating)
  //   return (
  //     <Grid item container alignItems="center">
  //       <CircularProgress />
  //     </Grid>
  //   );

  return (
    <Grid item container alignItems="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
