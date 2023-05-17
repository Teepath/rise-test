import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../theme';
import BaseButton, {BaseButtonProps} from './BaseButton';

interface GhostErrorButtonProps
  extends Omit<BaseButtonProps, 'bgColor' | 'textColor'> {}

const GhostErrorButton: React.FC<GhostErrorButtonProps> = props => {
  const styles = [
    props.disabled ? ghostStyles.disabled : ghostStyles.opaque,
    props.fill ? ghostStyles.fill : {},
  ];
  return (
    <View style={styles}>
      <BaseButton
        bgColor={theme.palette.white}
        textColor={theme.palette.error}
        borderColor={theme.palette.error}
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

export default GhostErrorButton;
