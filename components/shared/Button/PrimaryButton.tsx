import React from 'react';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface PrimaryButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
  const bgColor = props.disabled
    ? theme.palette.primary.green
    : theme.palette.primary.green200;
  return (
    <BaseButton {...props} bgColor={bgColor} textColor={theme.palette.white} />
  );
};

export default PrimaryButton;
