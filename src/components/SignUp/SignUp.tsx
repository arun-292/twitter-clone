import React, { useMemo, useState } from 'react';
import CustomDialog from '../CustomDialog';
import { Button, TextField } from '@material-ui/core';
import CustomTypography from '../CustomTypography';
import { NODE_API } from '../../config/config';

interface SignUpProps {}

type UserDetails = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const SignUp: React.FC<SignUpProps> = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [isEmailSelected, setIsEmailSelected] = useState<boolean>(false);

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

  const updateSignUpType = () => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [isEmailSelected ? 'email' : 'phone']: '',
      };
    });
    setIsEmailSelected((prev) => !prev);
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
          Create your account
        </CustomTypography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          className="inputField"
          fullWidth
          value={userDetails.name}
          onChange={handleChange}
        />
        <TextField
          name={isEmailSelected ? 'email' : 'phone'}
          label={isEmailSelected ? 'Email' : 'Phone'}
          type={isEmailSelected ? 'text' : 'number'}
          inputMode={isEmailSelected ? 'email' : 'numeric'}
          variant="outlined"
          className="inputField"
          fullWidth
          value={isEmailSelected ? userDetails.email : userDetails.phone}
          onChange={handleChange}
        />
        <CustomTypography variant="body1" className="useEmail" onClick={updateSignUpType}>
          Use email instead
        </CustomTypography>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          className="inputField"
          type="password"
          fullWidth
          value={userDetails.password}
          onChange={handleChange}
        />
      </>
    );
  }, [userDetails, isEmailSelected]);

  return (
    <CustomDialog
      headerContent={
        <CustomTypography fontWeight={600} variant="h6">
          Sign Up
        </CustomTypography>
      }
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
};

export default SignUp;
