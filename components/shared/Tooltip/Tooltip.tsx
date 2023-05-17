import React from 'react';
import {useTheme} from 'styled-components/native';
import _Tooltip from 'react-native-walkthrough-tooltip';
import {
  TooltipContent,
  TooltipContentHeader,
  TooltipContentText,
} from './style';
import {HorizontalWrapper, VerticalWrapper} from '../common/styles';
import Icon, {ICON_NAME} from '../Icon';
import Spacing from '../Spacing';
import Button, {BUTTON_TYPES} from '../Button';

interface TooltipProps {
  children: JSX.Element;
  title: string;
  content: string;
  visible: boolean;
  onRequestClose: () => void;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center' | undefined;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  content,
  visible,
  onRequestClose,
  placement = 'bottom',
}) => {
  const theme = useTheme();
  const contentStyle = {
    padding: 12,
    backgroundColor: theme.palette.tertiary.grey220,
    height: 'auto',
    width: 343,
  };

  return (
    <_Tooltip
      isVisible={visible}
      content={
        <TooltipContent>
          <HorizontalWrapper align="flex-start">
            <Icon name={ICON_NAME.glyph} />
            <Spacing />
            <VerticalWrapper align="flex-start" justify="flex-start">
              <TooltipContentHeader>{title}</TooltipContentHeader>
              <TooltipContentText>{content}</TooltipContentText>
              <Button
                text="Dismiss"
                type={BUTTON_TYPES.primary}
                fill
                onPress={onRequestClose}
              />
            </VerticalWrapper>
          </HorizontalWrapper>
        </TooltipContent>
      }
      disableShadow
      placement={placement}
      allowChildInteraction
      contentStyle={contentStyle}
      arrowSize={{height: 15, width: 28}}
      onClose={onRequestClose}>
      {children}
    </_Tooltip>
  );
};

export default Tooltip;
