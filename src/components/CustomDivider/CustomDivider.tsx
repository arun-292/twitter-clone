import React from 'react';
import { Grid } from '@material-ui/core';

interface CustomDividerProps {
  title?: string;
  extraClassName?: string;
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  title = 'or',
  extraClassName = '',
}: CustomDividerProps) => {
  return <Grid className={`dividerGrid ${extraClassName}`}>{title}</Grid>;
};

export default CustomDivider;
