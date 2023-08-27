import React from 'react';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

interface ICustomTypographyProps {
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
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const CustomTypography: React.FC<ICustomTypographyProps> = ({
  children,
  variant = undefined,
  color = undefined,
  className,
  fontWeight,
  onClick = undefined,
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      className={className}
      style={{ fontWeight: fontWeight || 400 }}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
