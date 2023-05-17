import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const More = ({size = 24, color = '#3641FC', ...otherProps}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M19 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
      stroke={color}
      strokeWidth={1.5}
    />
  </Svg>
);

export default More;
