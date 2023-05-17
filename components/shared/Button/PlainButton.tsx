import React from 'react';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface PlainButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const PlainButton: React.FC<PlainButtonProps> = props => {
  return (
    <BaseButton
      {...props}
      bgColor={theme.palette.white}
      textColor={theme.palette.tertiary.grey430}
      borderColor={theme.palette.tertiary.grey430}
    />
  );
};

export default PlainButton;
