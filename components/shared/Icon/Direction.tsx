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

const ArrowPoint= ({
  size = 12,
  width=6,
  height=12,
  color = '#0898A0',
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
      <Svg width={width} height={height} fill="none" {...otherProps}>
      <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 1.5 5 6l-4 4.5"
    />
      </Svg>
    </View>
  );
};

export default ArrowPoint;