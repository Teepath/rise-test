import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

type directionType = 'left' | 'right' | 'down' | 'up';
export interface ArrowProps extends BaseIconProps {
  direction?: directionType;
}

const arrowDegrees = {
  left: '-180deg',
  right: '0deg',
  down: '90deg',
  up: '-90deg',
};

const Arrow = ({
  size = 20,
  color = '#3641FC',
  direction = 'left',
  ...otherProps
}: ArrowProps) => {
  const directionStyle = ['left', 'right'].includes(direction)
    ? {rotateY: arrowDegrees[direction]}
    : {rotateZ: arrowDegrees[direction]};
  return (
    <View
      style={{
        transform: [directionStyle],
      }}>
      <Svg width={size} height={size} fill="none" {...otherProps}>
        <Path
          d="M7.925 17.225a.618.618 0 0 1-.442-.183.629.629 0 0 1 0-.884l5.434-5.433c.4-.4.4-1.05 0-1.45L7.483 3.842a.629.629 0 0 1 0-.884.629.629 0 0 1 .884 0L13.8 8.392c.425.425.667 1 .667 1.608 0 .608-.234 1.183-.667 1.608l-5.433 5.434a.655.655 0 0 1-.442.183Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Arrow;
