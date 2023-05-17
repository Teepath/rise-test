import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {MARGIN_SIZES} from '../common/typings';
import Spacing from '../Spacing';
import {theme} from '../theme';

export enum INPUT_MODES {
  default = 'default',
  disabled = 'disabled',
  focus = 'focus',
  filled = 'filled',
  error = 'error',
  success = 'success',
  outline='outline'
}

interface BaseTextInputProps extends TextInputProps {
  // Input label. will be placed above the input
  label?: string;
  width?: any;

  /** Input message that would be placed below the input,
   *  for success msgs or error texts
   **/
  helperText?: string;

  // input's placeholder text.
  placeholder: string;

  //To add an icon to the left side of the input
  leftIcon?: (props: {textColor: string}) => React.ReactNode;

  //To add an icon to the right side of the input
  rightIcon?: (props: {textColor: string}) => React.ReactNode;

  fill?: boolean;

  mode?: INPUT_MODES;
  //input custom background color, this would overwrite the default input modes
  bgColor?: string;

  //input custom border color, this would overwrite the default input modes
  borderColor?: string;
  disabled?:boolean;

  //customize input margin set at the bottom of input
  marginBottom?: MARGIN_SIZES;
}

const InputBox = styled.View<{fill: boolean}>`
  display: flex;
  position:relative;
  justify-content: center;
  align-items: flex-start;
  width: ${({fill}:any) => (fill ? '100%' : '327px')};
`;

/** TextInput Box */
interface InputWrapperProps {
  borderColor: string;
  color: string;
  width?: any
  bgColor?: string;
  mode?:any;
  numberOfLines?: number;
}

export const InputWrapper = styled.View<InputWrapperProps>`
  width: ${({width}:any)=> width? `${width}%`:'100%' };
  height: ${({numberOfLines = 1}) => `${44 * numberOfLines}px`};
  border-radius: ${theme.borderRadii.sm}px;
  border: ${({borderColor}:any) => `1px solid ${borderColor}`};
  background-color: ${({bgColor}:any) => (bgColor ? bgColor : theme.palette.white)};
  color: ${({color}:any) => color};
`;

/** TextInput styles */
const TextInput = styled.TextInput<{hasLeftIcon: boolean} & any>`
  padding: 12px;
  padding-left: ${({hasLeftIcon}:any) => (hasLeftIcon ? '38px' : '15px')};
  font-family: ${theme.fontTypes.body};
  color: black;
`;

/** Helper Text styles **/
const HelperText = styled.Text<{color: string}>`
  color: ${({color}:any) => color};
  font-size: ${theme.fontSizes.tiny}px;
`;

export const Label = styled.Text`
  font-size: ${theme.fontSizes.tiny}px;
  color: ${theme.palette.primary.green100};
  font-family: ${theme.fontTypes.body};
`;

/** Icon box styles */
const IconBox = styled.View<{position: 'left' | 'right'}>`
  position: absolute;
  ${({position}:any) => (position === 'left' ? 'left: 10px' : 'right: 10px')};
  top: 12px;
  height: 18px;
  width: 18px;
  z-index: 2;
`;

const getModeColor = (mode: INPUT_MODES): string => {
  switch (mode) {
    case INPUT_MODES.disabled:
      return theme.palette.tertiary.grey210;
    case INPUT_MODES.focus:
      return theme.palette.primary.blue;
    case INPUT_MODES.error:
      return theme.palette.error;
    case INPUT_MODES.success:
      return theme.palette.success;
    case INPUT_MODES.filled:
      return theme.palette.tertiary.grey420;
    case INPUT_MODES.outline:
      return theme.palette.white
    default:
      return theme.palette.tertiary.grey410;
  }
};

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  placeholder,
  fill = false,
  label,
  helperText,
  disabled,
  leftIcon,
  rightIcon,
  width,
  bgColor,
  borderColor,
  mode = INPUT_MODES.default,
  marginBottom,
  numberOfLines = 1,
  ...props
}) => {
  const color =
    mode === INPUT_MODES.disabled
      ? theme.palette.tertiary.grey210
      : theme.palette.tertiary.grey310;
  const highlightColor = getModeColor(mode);
  return (
    <InputBox fill={fill}>
      {!!label?.length && <Label>{label}</Label>}
      <InputWrapper
      width={width}
        color={color}
        borderColor={borderColor || highlightColor}
        bgColor={bgColor}
        numberOfLines={numberOfLines}>
        {leftIcon ? (
          <IconBox position="left">
            {leftIcon({textColor: highlightColor})}
          </IconBox>
        ) : null}
        {rightIcon ? (
          <IconBox position="right">
            {rightIcon({textColor: highlightColor})}
          </IconBox>
        ) : null}
        <TextInput
          hasLeftIcon={!!leftIcon}
          placeholder={placeholder}
          placeholderTextColor={'black'}
          disabled={disabled}
          underlineColorAndroid="transparent"
          numberOfLines={numberOfLines}
          {...props}
        />
      </InputWrapper>
      <Spacing size={marginBottom ?? MARGIN_SIZES.tiny} direction="vertical" />
      {!!helperText?.length && (
        <HelperText color={highlightColor}>{helperText}</HelperText>
      )}
    </InputBox>
  );
};

export default BaseTextInput;
