import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

// interface TextButtonProps
//   extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const TextButton = (props:any)=> {
  return (
    <View
      style={props.disabled ? textBtnStyles.disabled : textBtnStyles.opaque}>
      <BaseButton
        {...props}
        bgColor={props.bgColor? props.bgColor:theme.palette.tertiary.grey100}
        textColor={props.textColor? props.textColor:theme.palette.black}
      />
    </View>
  );
};

const textBtnStyles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  
  },
  opaque: {
    opacity: 1,
    
  },
});

export default TextButton;
