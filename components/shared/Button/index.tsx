import React from 'react';

import {BaseButtonProps} from './BaseButton';
import PrimaryButton from './PrimaryButton';
import PrimaryAltButton from './PrimaryAltButton';
import GhostButton from './GhostButton';
import TextButton from './TextButton';
import ErrorButton from './ErrorButton';
import PlainButton from './PlainButton';
import GhostErrorButton from './GhostErrorButton';

export enum BUTTON_TYPES {
  primary = 'primary',
  primaryALT = 'primaryALT',
  ghost = 'ghost',
  text = 'text',
  error = 'error',
  plain = 'plain',
  ghostError = 'ghostError',
}

interface ButtonProps extends Omit<BaseButtonProps, 'bgColor'> {
  type: BUTTON_TYPES;
}

type ButtonSelectionObject = {[key in BUTTON_TYPES]: React.ReactNode};

const Buttons: ButtonSelectionObject = {
  primary: PrimaryButton,
  primaryALT: PrimaryAltButton,
  ghost: GhostButton,
  text: TextButton,
  error: ErrorButton,
  plain: PlainButton,
  ghostError: GhostErrorButton,
};
const Button: React.FC<ButtonProps> = ({type, ...buttonProps}) => {
  const SelectedButton = Buttons[type] as React.ElementType;
  return <SelectedButton {...buttonProps} />;
};

export * from './IconButton';
export default Button;
