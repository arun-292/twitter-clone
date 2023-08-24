import React from 'react';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

interface ICustomTypography {
  children?: React.ReactNode;
  variant?: Variant;
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  className?: string;
  fontWeight?: number;
}

const CustomTypography: React.FC<ICustomTypography> = ({
  children,
  variant,
  color,
  className,
  fontWeight,
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      className={className}
      style={{ fontWeight: fontWeight || 400 }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
