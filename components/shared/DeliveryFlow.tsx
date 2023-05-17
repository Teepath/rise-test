import React from 'react';
import {TouchableOpacity} from 'react-native';
// import Svg, {SvgProps, Path} from 'react-native-svg';
import styled from 'styled-components/native';
import utils from './common/utils';
import {theme} from './theme';

enum FLOW_STATES {
  precinct,
  highlight,
  active,
}

/** styles for the line between circular boxes */
const DeliveryFlowLink = styled.View<{flowState: FLOW_STATES}>`
  background-color: ${({flowState}) =>
    flowState === FLOW_STATES.active
      ? theme.palette.primary.blue
      : theme.palette.primary.blue100}
  height: 2px;
  flex: 1;
  min-width: 48px;
`;

/** Circular box styles **/
const DeliveryFlowBox = styled(TouchableOpacity)<{flowState: FLOW_STATES}>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({flowState}) =>
    flowState === FLOW_STATES.active
      ? theme.palette.primary.blue
      : theme.palette.primary.blue100};
  border: ${({flowState}) =>
    `1px solid ${
      FLOW_STATES.active === flowState || FLOW_STATES.highlight === flowState
        ? theme.palette.primary.blue
        : theme.palette.primary.blue100
    }`};
`;

/** styles for the text in the circular box */
const FlowText = styled.Text<{flowState: FLOW_STATES}>`
  font-size: ${theme.fontSizes.small}px;
  font-family: ${theme.fontTypes.body};
  color: ${({flowState}) =>
    flowState === FLOW_STATES.active
      ? theme.palette.white
      : flowState === FLOW_STATES.highlight
      ? theme.palette.primary.blue
      : theme.palette.primary.blue200};
`;

/**styles for the title under the box **/
const FlowBoxTitle = styled.Text<{flowState: FLOW_STATES}>`
  font-size: ${theme.fontSizes.tiny}px;
  line-height: ${theme.lineHeight.tiny}px;
  font-family: ${theme.fontTypes.body};
  margin-top: ${theme.margin.small}px;
  color: ${({flowState}) =>
    FLOW_STATES.active === flowState || FLOW_STATES.highlight === flowState
      ? theme.palette.tertiary.grey320
      : theme.palette.primary.blue200};
  text-align: center;
  width: 70.77px;
  flex-wrap: wrap;
`;

const FlowHorizontalWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const FlowContentBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const BoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40px;
`;

interface FlowProps {
  /** number of sections. */
  titles: readonly [
    'Pickup and Delivery',
    'item',
    'Time',
    'Summary',
    'Payment',
  ];
  /** gets called when the flow button is changed */
  onChange?: (index: number) => void;
  /** go to specific sections of the app **/
  goTo?: (index: number) => void;
  /** active index preset from parent component */
  customIndex?: number;
}

const DeliveryFlow: React.FC<FlowProps> = ({
  titles,
  onChange = () => {},
  customIndex,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(
    () => customIndex ?? -1,
  );
  const highlightedBox = activeIndex + 1;
  return (
    <FlowHorizontalWrapper>
      {titles.map((title, i) => {
        const flowState =
          i <= activeIndex
            ? FLOW_STATES.active
            : highlightedBox === i
            ? FLOW_STATES.highlight
            : FLOW_STATES.precinct;
        return (
          <FlowContentBox key={i}>
            <BoxWrapper>
              <DeliveryFlowBox
                flowState={flowState}
                onPress={() => {
                  setActiveIndex(i - 1);
                  onChange(i - 1);
                }}>
                <FlowText flowState={flowState}>{i + 1}</FlowText>
              </DeliveryFlowBox>
              {i < titles.length - 1 ? (
                <DeliveryFlowLink flowState={flowState} />
              ) : null}
            </BoxWrapper>
            <FlowBoxTitle flowState={flowState}>
              {utils.capitalize(title)}
            </FlowBoxTitle>
          </FlowContentBox>
        );
      })}
    </FlowHorizontalWrapper>
  );
};

export default DeliveryFlow;
