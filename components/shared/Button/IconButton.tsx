import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import Icon, {ICON_NAME} from '../Icon';
import {theme} from '../theme';

export enum ICON_BUTTON_SIZE {
  small = 'small',
  medium = 'medium',
  big = 'big',
  large = 'large',
}

const _buttonSize = {
  small: 40,
  medium: 44,
  big: 48,
  large: 50,
};

export enum ICON_BUTTON_TYPE {
  primary = 'primary',
  secondary = 'secondary',
}

type IconButtonSize = ICON_BUTTON_SIZE | number;

interface IconButtonProps extends TouchableOpacityProps {
  size: IconButtonSize;
  type?: ICON_BUTTON_TYPE;
  icon: ICON_NAME | React.ReactNode;
  bgColor?: string;
  iconColor?: string;
  borderSize?: number;
}

const parseSize = (size: IconButtonSize) =>
  typeof size === 'number' ? `${size}px` : `${_buttonSize[size]}px`;

const CircleBox = styled(TouchableOpacity)<Omit<IconButtonProps, 'icon'>>`
  width: ${({size}) => parseSize(size)};
  height: ${({size}) => parseSize(size)};
  border-radius: ${({borderSize, size}) =>
    borderSize ? parseSize(borderSize) : parseSize(size)};
  background-color: ${({type, bgColor}) =>
    bgColor
      ? bgColor
      : type === ICON_BUTTON_TYPE.primary
      ? theme.palette.primary.blue100
      : theme.palette.secondary.orange100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton: React.FC<IconButtonProps> = ({
  size,
  type,
  icon,
  borderSize,
  bgColor,
  iconColor,
  ...props
}) => {
  return (
    <CircleBox
      size={size}
      type={type}
      bgColor={bgColor}
      borderSize={borderSize}
      {...props}>
      {typeof icon === 'string' ? (
        <Icon
          name={icon as ICON_NAME}
          color={
            iconColor
              ? iconColor
              : type === ICON_BUTTON_TYPE.primary
              ? theme.palette.primary.blue
              : theme.palette.secondary.orange
          }
        />
      ) : (
        icon
      )}
    </CircleBox>
  );
};
