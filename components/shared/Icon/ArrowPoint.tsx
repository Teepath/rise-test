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
         stroke={color}
         strokeWidth="2"
         d="M5.867 1L11 6m0 0l-5.133 5M11 6H0"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ArrowPoint;