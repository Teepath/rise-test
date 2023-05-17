import React from 'react';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface PrimaryAltButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const PrimaryAltButton: React.FC<PrimaryAltButtonProps> = props => {
  const bgColor = props.disabled
    ?theme.palette.primary.green100
    : theme.palette.primary.green100;
  return (
    <BaseButton
      {...props}
      bgColor={bgColor}
      textColor={theme.palette.white}
    />
  );
};

export default PrimaryAltButton;
