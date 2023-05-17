import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import {Backdrop} from '../common/styles';
import {MODAL_ANIMATION_STYLES} from '../common/typings';
import {theme} from '../theme';

export enum BOTTOM_MODAL_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface BottomModalProps {
  children: React.ReactElement<{onRequestClose: () => void}>;
  visible: boolean;
  onRequestClose: () => void;
  borderSize?: number;
  size: BOTTOM_MODAL_SIZE;
}

const BottomModalWrapper = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
`;

const BottomModalScrollView = styled.ScrollView<{borderSize: number}>`
  border-radius: ${({borderSize}) => `${borderSize}px`};
`;

const BottomModalContentBox = styled.View<{
  borderSize: number;
  size: BOTTOM_MODAL_SIZE;
}>`
  background-color: ${theme.palette.white};
  width: 100%;
  border-radius: ${({borderSize}) => `${borderSize}px`};
  height: ${({size}) =>
    size === BOTTOM_MODAL_SIZE.small
      ? '24%'
      : size === BOTTOM_MODAL_SIZE.medium
      ? '66%'
      : '71.6%'};
  z-index: 2;
`;

const styles = StyleSheet.create({
  keyboardBox: {
    flex: 1,
  },
});

export const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  onRequestClose,
  borderSize = theme.borderRadii.lg,
  children,
  size,
}) => {
  return (
    <Modal
      animationType={MODAL_ANIMATION_STYLES.slide}
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <BottomModalWrapper>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Backdrop />
        </TouchableWithoutFeedback>
        <BottomModalContentBox borderSize={borderSize} size={size}>
          <BottomModalScrollView
            borderSize={borderSize}
            showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardBox}>
              {React.cloneElement(children, {onRequestClose})}
            </KeyboardAvoidingView>
          </BottomModalScrollView>
        </BottomModalContentBox>
      </BottomModalWrapper>
    </Modal>
  );
};
