import React, { useMemo, useState } from 'react';
import CustomDialog from '../CustomDialog';
import { Button, Grid, TextField } from '@material-ui/core';
import CustomTypography from '../CustomTypography';
import { NODE_API } from '../../config/config';
import googleLogo from '../../assets/images/google.webp';
import appleLogo from '../../assets/images/apple.png';

interface SignUpProps {}

type UserDetails = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const Login: React.FC<SignUpProps> = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [isEmailSelected] = useState<boolean>(false);

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

  const handleSubmit = () => {
    fetch(`${NODE_API}/signup`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
      .then((e) => {
        console.log(e.json());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const footerContent = useMemo(() => {
    const isDisabled =
      !userDetails.name.length ||
      userDetails.password.length < 8 ||
      (isEmailSelected ? !userDetails.email.length : !userDetails.phone.length);
    return (
      <Button className="createButton" fullWidth disabled={isDisabled} onClick={handleSubmit}>
        Create
      </Button>
    );
  }, [userDetails, isEmailSelected]);

  const mainContent = useMemo(() => {
    return (
      <>
        <CustomTypography variant="h5" className="contentHeader" fontWeight={600}>
          Sign in to X
        </CustomTypography>
        <Grid item container className="signInFlows">
          <Button className="rootButton ssoButton ssoGoogle">
            <img src={googleLogo} alt="google" width={16} />
            Sign up with Google{' '}
          </Button>
          <Button className="rootButton ssoButton ssoApple">
            <img src={appleLogo} alt="apple" width={16} />
            Sign up with Apple{' '}
          </Button>
          <hr className="orDivider" title="or" />
        </Grid>
        <TextField
          name="name"
          label="Phone, email, or username"
          variant="outlined"
          type="text"
          className="inputField"
          fullWidth
          value={userDetails.name}
          onChange={handleChange}
          error={true}
        />
      </>
    );
  }, [userDetails, isEmailSelected]);

  return (
    <CustomDialog
      headerContent={
        <CustomTypography fontWeight={600} variant="h6">
          Login
        </CustomTypography>
      }
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
};

export default Login;
