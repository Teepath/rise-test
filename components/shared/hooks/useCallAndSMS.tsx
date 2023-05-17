import React from 'react';
import {useTheme} from 'styled-components/native';
import {ROOT_ROUTES} from '../../../navigation/typing';
import Button, {BUTTON_TYPES} from '../Button';
import {
  ScreenWrapper,
  sharedType,
  StyledText,
  VerticalWrapper,
} from '../common/styles';
import {MARGIN_SIZES} from '../common/typings';
import utils from '../common/utils';
import {BottomModal, BOTTOM_MODAL_SIZE} from '../Modal/BottomModal';
import Spacing from '../Spacing';

export type ModalType = 'call' | 'sms' | undefined;

const useCallAndSMS = (
  navigation: any,
  promptModal: ModalType,
  setPromptModal: (feature: ModalType) => void,
  phone: string,
  type: sharedType = 'primary',
) => {
  const theme = useTheme();

  /** navigate to chat screen */
  const goToChatScreen = React.useCallback(() => {
    setPromptModal(undefined);
    utils
      .wait(400)
      .then(() => navigation.navigate(ROOT_ROUTES.USER_RIDER_CHAT));
  }, [navigation, setPromptModal]);

  /** prompt phone messaging app to send sms with charges */
  const nativelySendSMSWithPhone = React.useCallback(() => {
    return () => {
      utils.sendMessage(phone);
    };
  }, [phone]);

  const nativelyCallWithPhone = React.useCallback(() => {
    return () => {
      utils.callNumber(phone);
    };
  }, [phone]);

  const ModalPrompt = React.memo(() => {
    return (
      <BottomModal
        visible={!!promptModal}
        onRequestClose={() => setPromptModal(undefined)}
        size={BOTTOM_MODAL_SIZE.small}>
        {promptModal === 'call' ? (
          <ScreenWrapper>
            <VerticalWrapper fill>
              <Spacing direction="vertical" size={MARGIN_SIZES.small} />
              <StyledText
                fontWeight={400}
                fontSize={theme.fontSizes.body}
                color={theme.palette.tertiary.grey320}>
                Call Emmanuel?
              </StyledText>
              <Spacing direction="vertical" size={MARGIN_SIZES.small2} />
              <Button
                type={BUTTON_TYPES.primary}
                text="Call +2349874736..."
                onPress={nativelyCallWithPhone()}
                fill
              />
              <Spacing direction="vertical" size={MARGIN_SIZES.small} />
              <StyledText
                fontWeight={500}
                fontSize={theme.fontSizes.body}
                color={theme.palette.tertiary.grey320}>
                Call on Kolony (coming soon)
              </StyledText>
            </VerticalWrapper>
          </ScreenWrapper>
        ) : (
          <ScreenWrapper>
            <VerticalWrapper fill>
              <Spacing direction="vertical" size={MARGIN_SIZES.small} />
              <StyledText
                fontWeight={400}
                fontSize={theme.fontSizes.body}
                color={theme.palette.tertiary.grey320}>
                Chat with Emmanuel?
              </StyledText>
              <Spacing direction="vertical" size={MARGIN_SIZES.small2} />
              <Button
                type={
                  type === 'primary'
                    ? BUTTON_TYPES.primary
                    : BUTTON_TYPES.secondary
                }
                onPress={goToChatScreen}
                text="Send Message on Kolony"
                fill
              />
              <Spacing direction="vertical" size={MARGIN_SIZES.small} />
              <Button
                type={
                  type === 'primary'
                    ? BUTTON_TYPES.primaryALT
                    : BUTTON_TYPES.secondaryALT
                }
                text="Send SMS"
                onPress={nativelySendSMSWithPhone()}
                fill
              />
            </VerticalWrapper>
          </ScreenWrapper>
        )}
      </BottomModal>
    );
  });

  return ModalPrompt;
};

export default useCallAndSMS;
