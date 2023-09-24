import React, { useMemo, useState } from 'react';
import CustomDialog from '../CustomDialog';
import { Button, Grid, Snackbar, TextField } from '@material-ui/core';
import CustomTypography from '../CustomTypography';
import googleLogo from '../../assets/images/google.webp';
import appleLogo from '../../assets/images/apple.png';
import CustomDivider from '../CustomDivider';
import xLogo from '../../assets/images/x.png';
import { NODE_API } from '../../config/config';
import { useNavigate } from 'react-router-dom';
import { useMst } from '../../mobx/root';

type UserDetails = {
  validationField: string;
  password: string;
};

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { auth } = useMst();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    validationField: '',
    password: '',
  });
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [iseUserValidated, setIsUserValidated] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickNext = () => {
    if (userDetails.validationField.length) {
      fetch(`${NODE_API}/auth/validate/${userDetails.validationField}`)
        .then(() => {
          setIsUserValidated(true);
        })
        .catch(() => {
          setSnackbarMessage('Sorry, we could not find your account.');
          setIsOpenSnackbar(true);
        });
    } else {
      setSnackbarMessage('Sorry, we could not find your account.');
      setIsOpenSnackbar(true);
    }
  };

  const handleSubmit = () => {
    fetch(`${NODE_API}/auth/signin`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          auth.setUser({ token: data.token, user: data.user });
          navigate('/home');
        }
        if (data.error) {
          setSnackbarMessage(data.error);
          setIsOpenSnackbar(true);
        }
      })
      .catch((error) => {
        setSnackbarMessage(error);
        setIsOpenSnackbar(true);
      });
  };

  const mainContent = useMemo(() => {
    return (
      <Grid className="signinContentOuterGrid">
        <CustomTypography variant="h5" className="contentHeader" fontWeight={600}>
          Sign in to X
        </CustomTypography>
        <Grid item container className="signInButtonGrid">
          <Button className="signinbutton ssoButton ssoGoogle">
            <img src={googleLogo} alt="google" width={16} />
            Sign in with Google{' '}
          </Button>
          <Button className="signinbutton ssoButton ssoApple">
            <img src={appleLogo} alt="apple" width={16} />
            Sign in with Apple{' '}
          </Button>
          <CustomDivider title="or" extraClassName="signinDivider" />
          <TextField
            name="validationField"
            label="Phone, email, or username"
            variant="outlined"
            type="text"
            className="inputField"
            fullWidth
            value={userDetails.validationField}
            onChange={handleChange}
          />
          <Button
            onClick={onClickNext}
            className="signinbutton ssoButton nextPhase"
            disabled={!userDetails.validationField.length}
          >
            Next
          </Button>
          <Button className="signinbutton ssoButton forgotPassword">Forgot password?</Button>
        </Grid>
        <CustomTypography className="dontHave"></CustomTypography>
        <Grid className="dontHaveAnAccount">
          Don&apos;t have an account? <a href="signup">Sign up</a>
        </Grid>
      </Grid>
    );
  }, [userDetails]);

  const mainContent2 = useMemo(() => {
    return (
      <Grid className="signinContentOuterGrid validated">
        <CustomTypography variant="h5" className="contentHeader" fontWeight={600}>
          Enter your password
        </CustomTypography>
        <Grid item container className="signInButtonGrid">
          <TextField
            name="validationField"
            label="Phone, email, or username"
            variant="outlined"
            type="text"
            className="inputField"
            fullWidth
            value={userDetails.validationField}
            onChange={handleChange}
            disabled
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            className="inputField"
            type="password"
            fullWidth
            value={userDetails.password}
            onChange={handleChange}
            helperText={
              <a href="forgotPassword" className="validatedForgotPassword">
                Forgot password?
              </a>
            }
          />
        </Grid>
        <CustomTypography className="dontHave"></CustomTypography>
      </Grid>
    );
  }, [userDetails, iseUserValidated]);

  const footerContent = useMemo(() => {
    return (
      <>
        <Button
          className="createButton"
          fullWidth
          disabled={!userDetails.password.length}
          onClick={handleSubmit}
        >
          Log in
        </Button>
        <Grid className="dontHaveAnAccount">
          Don&apos;t have an account? <a href="signup">Sign up</a>
        </Grid>
      </>
    );
  }, [userDetails, iseUserValidated]);

  return (
    <>
      <CustomDialog
        headerContent={<img src={xLogo} alt="X" className="signInXLogo" height={40} />}
        mainContent={!iseUserValidated ? mainContent : mainContent2}
        footerContent={!iseUserValidated ? <Grid /> : footerContent}
      />

      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={6000}
        onClose={(e) => {
          setIsOpenSnackbar(false);
          e.stopPropagation();
        }}
        message={snackbarMessage}
      />
    </>
  );
};

export default SignIn;
