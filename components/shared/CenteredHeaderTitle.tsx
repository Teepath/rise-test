import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components/native';
import {CenteredTitle, FlexItemView, HorizontalWrapper} from './common/styles';
import GoBack from './GoBack';
import Icon, {ICON_NAME} from './Icon';
import Tooltip from './Tooltip/Tooltip';

interface HeaderTitleProps {
  title: string;
  addBackText: boolean;
  mode?: 'primary' | 'secondary' | 'default' | 'overlay';
  iconName?: ICON_NAME;
  moveTitleLeftBy?: number;
  tooltip?: {
    title: string;
    content: string;
  };
}

const CenteredHeaderTitle: React.FC<HeaderTitleProps> = props => {
  const theme = useTheme();
  const color = {
    primary: theme.palette.primary.blue,
    default: theme.palette.tertiary.grey420,
    secondary: theme.palette.secondary.orange,
    overlay: theme.palette.white,
  };
  const [tooltipVisible, setTooltipVisibility] = React.useState(false);

  return (
    <HorizontalWrapper marginBottom={10}>
      <GoBack
        showText={props.addBackText}
        mode={props.mode ?? 'default'}
        iconName={props.iconName}
      />
      {props.title ? (
        <FlexItemView>
          <HorizontalWrapper justify="center">
            <CenteredTitle
              moveTextLeftBy={props.moveTitleLeftBy}
              color={(props.mode === 'overlay' && '#ffffff') || undefined}>
              {props.title}
            </CenteredTitle>
          </HorizontalWrapper>
        </FlexItemView>
      ) : null}
      {props.tooltip ? (
        <Tooltip
          visible={tooltipVisible}
          onRequestClose={() => setTooltipVisibility(false)}
          placement="bottom"
          {...props.tooltip}>
          <TouchableOpacity onPress={() => setTooltipVisibility(true)}>
            <Icon
              name={ICON_NAME.infoCircle}
              color={color[props.mode || 'default']}
            />
          </TouchableOpacity>
        </Tooltip>
      ) : null}
    </HorizontalWrapper>
  );
};

export default CenteredHeaderTitle;
