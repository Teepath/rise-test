import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface GhostButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const GhostButton: React.FC<GhostButtonProps> = props => {
  const styles = [
    props.disabled ? ghostStyles.disabled : ghostStyles.opaque,
    props.fill ? ghostStyles.fill : {},
  ];
  return (
    <View style={styles}>
      <BaseButton
        bgColor={theme.palette.white}
        textColor={theme.palette.primary.blue}
        borderColor={theme.palette.primary.blue}
        {...props}
      />
    </View>
  );
};

const ghostStyles = StyleSheet.create({
  fill: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  opaque: {
    opacity: 1,
  },
});

export default GhostButton;
