import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface ErrorButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const ErrorButton: React.FC<ErrorButtonProps> = props => (
  <View style={props.disabled ? style.disabled : style.opaque}>
    <BaseButton
      {...props}
      bgColor={theme.palette.error}
      textColor={theme.palette.white}
    />
  </View>
);

const style = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  opaque: {
    opacity: 1,
  },
});

export default ErrorButton;
