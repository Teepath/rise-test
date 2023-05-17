import React from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {Button, BUTTON_TYPES, Icon, ICON_NAME} from '..';
import {theme} from '../theme';
import {MARGIN_SIZES, MODAL_ANIMATION_STYLES} from '../common/typings';
import {Backdrop} from '../common/styles';
import Spacing from '../Spacing';

interface SuccessContentProps {
  btnActionName: string;
  msg: string;
  title: string;
  type:any;
  icon?: ICON_NAME;
}

export interface CenteredModalProps {
  children?: React.ReactNode | React.ReactNode[];
  visible: boolean;
  onRequestClose: () => void;
  content?: SuccessContentProps;
  onMainBtnPress?: () => void;
}

const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ModalContentBox = styled.View`
  width: 328px;
  height: auto;
  min-height: 236px;
  border-radius: ${theme.borderRadii.md}px;
  background-color: ${theme.palette.white};
  padding: ${theme.padding.big}px;
  z-index: 2;
  justify-content: center;
`;

const SuccessModalContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessTitle = styled.Text`
  font-size: ${theme.fontSizes.h2}px;
  line-height: ${theme.lineHeight.h2}px;
  font-weight: bold;
  font-family: ${theme.fontTypes.h1};
`;

const SuccessMessage = styled.Text`
  font-size: ${theme.fontSizes.small}px;
  line-height: ${theme.lineHeight.small}px;
  font-weight: normal;
  font-family: ${theme.fontTypes.body};
  text-align: center;
  max-width: 280px;
  flex-wrap: wrap;
  color: ${theme.palette.tertiary.grey320};
`;

interface SuccessPromptProps extends SuccessContentProps {
  onRequestClose: () => void;
  onMainBtnPress?: () => void;
}

const SuccessPrompt: React.FC<SuccessPromptProps> = ({
  title,
  icon,
  type,
  msg,
  btnActionName,
  onRequestClose,
  onMainBtnPress,
}) => {
  return (
    <SuccessModalContent>
      <Icon size={48} name={icon ?? ICON_NAME.tickCircle} />
      <Spacing size={MARGIN_SIZES.small} direction="vertical" />
      <SuccessTitle>{title}</SuccessTitle>
      <Spacing size={MARGIN_SIZES.small} direction="vertical" />
      <SuccessMessage>{msg}</SuccessMessage>
      <Spacing size={MARGIN_SIZES.medium} direction="vertical" />
      <Button
        type={type?type:BUTTON_TYPES.primary}
        text={btnActionName}
        onPress={() => {
          onRequestClose();
          onMainBtnPress && onMainBtnPress();
        }}
        fill
      />
    </SuccessModalContent>
  );
};

export const CenteredModal: React.FC<CenteredModalProps> = ({
  visible,
  onRequestClose,
  content,
  children,
  onMainBtnPress,
}) => {
  return (
    <Modal
      animationType={MODAL_ANIMATION_STYLES.slide}
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <ModalWrapper>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Backdrop />
        </TouchableWithoutFeedback>
        <ModalContentBox>
          {content ? (
            <SuccessPrompt
              {...content}
              onRequestClose={onRequestClose}
              onMainBtnPress={onMainBtnPress}
            />
          ) : (
            children
          )}
        </ModalContentBox>
      </ModalWrapper>
    </Modal>
  );
};
