import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const Money = ({
  size = 24,
  color = '#4A4A68',
  ...otherProps
}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M17.5 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9.5v5M19 9.5v5"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Money;
