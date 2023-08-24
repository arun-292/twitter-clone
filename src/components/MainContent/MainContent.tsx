import React from 'react';
import { Grid } from '@material-ui/core';

interface IMainContentProps {
  children: React.ReactNode[];
}

const MainContent: React.FC<IMainContentProps> = ({ children }) => {
  console.log(children);
  return (
    <Grid item justifyContent="space-between" container direction="row" className="rootContent">
      <Grid item className="mainContent bl br contentBorder">
        {children[0]}
      </Grid>
      <Grid item className="subContent">
        {children[1]}
      </Grid>
    </Grid>
  );
};

export default MainContent;
