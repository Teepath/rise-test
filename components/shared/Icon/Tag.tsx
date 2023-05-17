import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const Tag = ({size = 18, color = '#828282', ...otherProps}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M3.304 11.645 6.7 15.042a3.585 3.585 0 0 0 5.063 0l3.292-3.292a3.585 3.585 0 0 0 0-5.063l-3.405-3.39a3.563 3.563 0 0 0-2.7-1.042l-3.75.18a2.898 2.898 0 0 0-2.767 2.752l-.18 3.75a3.603 3.603 0 0 0 1.05 2.708Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.301 9.17a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="m9.926 12.92 3-3"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Tag;
