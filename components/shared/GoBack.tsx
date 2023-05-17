import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {HorizontalWrapper} from './common/styles';
import Icon, {ICON_NAME} from './Icon';
import Spacing from './Spacing';

const GoBackText = styled.Text<{color: string}>`
  font-size: ${({theme}:any) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.small}px`};
  color: ${({theme}:any) => theme.palette.tertiary.grey420};
  font-weight: 500;
`;

interface IProps {
  mode?: 'primary' | 'secondary' | 'default' | 'overlay';
  showText?: boolean;
  iconName?: ICON_NAME;
}

const GoBack: React.FC<IProps> = ({
  mode = 'default',
  showText = true,
  iconName,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const color = {
    primary: theme.palette.primary.blue,
    default: theme.palette.tertiary.grey420,
    secondary: theme.palette.secondary.orange,
    overlay: theme.palette.white,
  };
  const extraIconProps = () => !iconName && {direction: 'left'};

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <HorizontalWrapper>
        <Icon
          name={iconName || ICON_NAME.arrow}
          color={color[mode]}
          {...extraIconProps}
        />
        {!!showText && (
          <>
            <Spacing />
            <GoBackText color={color[mode]}>Back</GoBackText>
          </>
        )}
      </HorizontalWrapper>
    </TouchableOpacity>
  );
};

export default GoBack;
