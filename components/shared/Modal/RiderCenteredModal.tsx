import React from 'react';
import {Modal, TouchableWithoutFeedback, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Button, BUTTON_TYPES, Icon, ICON_NAME} from '..';
import {theme} from '../theme';
import {MARGIN_SIZES, MODAL_ANIMATION_STYLES} from '../common/typings';
import {Backdrop} from '../common/styles';
import Spacing from '../Spacing';
import { BUTTON_SIZE } from '../Button/BaseButton';
import { useNavigation } from '@react-navigation/native';

interface SuccessContentProps {
  btnActionName?: string;
  msg?: string;
  title?: string;
  type?:any;
  icon?: ICON_NAME;
}

export interface CenteredModalProps {
  children?: React.ReactNode | React.ReactNode[];
  visible: boolean;
  onRequestClose: () => void;
  content?: SuccessContentProps;
  handlePress?:()=>void;
  onMainBtnPress?: () => void;
}


const {width} = Dimensions.get('window')
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
  text-align: justify;
  max-width: 280px;
  flex-wrap: wrap;
  color: ${theme.palette.tertiary.grey310};
`;


const ButtonWrapper = styled.View`
width: ${width-100}px;
flex-direction:row;
align-items:center;
justify-content: space-between;
`;

interface SuccessPromptProps extends SuccessContentProps {
  onRequestClose: () => void;
  onMainBtnPress?: () => void;
  handlePress?:()=>void;
}

const SuccessPrompt: React.FC<SuccessPromptProps> = ({
  title,
  icon,
  type,
  msg,
  btnActionName,
  handlePress,
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
      <ButtonWrapper>
      <Button
        type={BUTTON_TYPES.secondaryALT}
        text="Back"
        size={BUTTON_SIZE.small}
        onPress={() => {
          onRequestClose();
          onMainBtnPress && onMainBtnPress();
        }}
     
      />

    <Button
        type={BUTTON_TYPES.secondary}
        text="continue"
        size={BUTTON_SIZE.small}
        onPress={() => {
          onRequestClose();
          handlePress && handlePress();
        }}
     
      />
      </ButtonWrapper>
    
    </SuccessModalContent>
  );
};

export const CenteredRiderModal: React.FC<CenteredModalProps> = ({
  visible,
  onRequestClose,
  content,
  children,
  handlePress,
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
              handlePress={handlePress}
            />
          ) : (
            children
          )}
        </ModalContentBox>
      </ModalWrapper>
    </Modal>
  );
};
