import React from 'react';
import { Button, Grid } from '@material-ui/core';
import xLogo from '../../assets/images/x.png';
import googleLogo from '../../assets/images/google.webp';
import appleLogo from '../../assets/images/apple.png';
import CustomTypography from '../CustomTypography/CustomTypography';
import { ROOT_FOOTER_LIST } from '../../utils/constants';
import { Outlet, useNavigate } from 'react-router-dom';

interface IRoot {}

const Root: React.FC<IRoot> = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid item container className="mainRoot">
        <Grid item xs={12} className="root">
          <Grid item container xs={6} className="xLogo" justifyContent="center">
            <img src={xLogo} alt="X" />
          </Grid>
          <Grid item className="signInContent">
            <CustomTypography variant="h2" fontWeight={600} className="happeningNow">
              Happening now
            </CustomTypography>
            <CustomTypography variant="h4" fontWeight={600} className="joinToday">
              Join today.
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
              <Button className="rootButton newAccButton" onClick={() => navigate('i/flow/signup')}>
                Create account{' '}
              </Button>
              <CustomTypography className="policy">
                By signing up, you agree to the <a href="/">Terms of Service</a> and{' '}
                <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>
              </CustomTypography>
              <Grid item className="signInGrid">
                <CustomTypography fontWeight={600} className="alreadyHaveAnAccount">
                  Already have an account?
                </CustomTypography>
                <Button className="rootButton signin">Sign in</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" className="footer">
          {ROOT_FOOTER_LIST.map((e) => (
            <CustomTypography className="policy" key={e}>
              <a href="/">{e}</a>
            </CustomTypography>
          ))}
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

export default Root;
