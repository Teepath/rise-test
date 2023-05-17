
import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';

import {MARGIN_SIZES} from '../common/typings';
import Spacing from '../Spacing';
import {theme} from '../theme';

export enum BUTTON_SIZE {
  small = 'small',
  tiny='tiny',
  medium = 'medium',
  large = 'large',
}

const buttonSizes = {
  small: 48,
  tiny:48,
  medium: 48,
  large: 53,
};

interface StyledBaseButtonProps {
  size: BUTTON_SIZE;
  bgColor: string;
  borderColor: string;
  fill: boolean;
}

export const StyledBaseButton = styled(TouchableOpacity)<StyledBaseButtonProps>`
  width: ${({size, fill}:any) =>
    fill ? '100%' : size === BUTTON_SIZE.small ? '105px' : size===BUTTON_SIZE.tiny?'48px' :'220px'};
  height: ${({size}:any) => `${buttonSizes[size]}px`};
  border-radius: ${() => `${theme.borderRadii.sm}px`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin:5px;
  align-items: center;
  background-color: ${({bgColor}:any) => bgColor};
  border: ${({borderColor}:any) => `1px solid ${borderColor}`};
`;

interface BaseButtonTextProps {
  color: string;
  size: BUTTON_SIZE;
}

export const BaseButtonText = styled.Text<BaseButtonTextProps>`
  font-family: ${theme.fontTypes.body};
  font-weight: 500;
  font-size: ${({size}:any) =>
    size === BUTTON_SIZE.small
      ? `${theme.fontSizes.small}px`
      : `${theme.fontSizes.body}px`};
  line-height: ${({size}:any) =>
    size === BUTTON_SIZE.small
      ? `${theme.lineHeight.tiny}px`
      : `${theme.lineHeight.body}px`};
  color: ${({color}:any) => color};
`;

interface ButtonIconProps {
  textColor: string;
}

type ButtonIcon = (iconProps: ButtonIconProps) => React.ReactNode;

export interface BaseButtonProps extends TouchableOpacityProps {
  leftIcon?: ButtonIcon;
  rightIcon?: ButtonIcon;
  text: string;
  size?: BUTTON_SIZE;
  disabled?: boolean;
  loading?: boolean;
  bgColor: string;
  textColor?: string;
  borderColor?: string;
  fill?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  size = BUTTON_SIZE.large,
  leftIcon,
  rightIcon,
  text,
  disabled,
  loading,
  bgColor,
  textColor = theme.palette.tertiary.grey420,
  fill = false,
  borderColor = bgColor,
  ...props
}) => {
  const addIcon = React.useCallback(
    (icon: ButtonIcon | undefined, pos: 'left' | 'right') => {
      if (!icon) {
        return null;
      }
      // TODO fix missing key prop in icon component
      const components = [icon({textColor})];
      pos === 'left'
        ? components.push(
            <Spacing
              key={`left-${2}`}
              size={
                size === BUTTON_SIZE.small
                  ? MARGIN_SIZES.tiny
                  : MARGIN_SIZES.small
              }
            />,
          )
        : components.unshift(
            <Spacing
              key={`right-${2}`}
              size={
                size === BUTTON_SIZE.small
                  ? MARGIN_SIZES.tiny
                  : MARGIN_SIZES.small
              }
            />,
          );

      return <>{components}</>;
    },
    [size, textColor],
  );

  return (
    <StyledBaseButton
      borderColor={borderColor}
      bgColor={bgColor}
      size={size}
      disabled={disabled}
      fill={fill}
      {...props}>
      {loading ? (
        <ActivityIndicator
          size={size === 'medium' ? 'small' : size}
          color={textColor}
        />
      ) : (
        <>
          {addIcon(leftIcon, 'left')}
          <BaseButtonText color={textColor} size={size}>
            {text}
          </BaseButtonText>
          {addIcon(rightIcon, 'right')}
        </>
      )}
    </StyledBaseButton>
  );
};

export default BaseButton;