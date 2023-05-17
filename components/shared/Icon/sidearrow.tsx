import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const Image = ({size = 8, ...otherProps}: BaseIconProps) => (
  <Svg
  width={size}
  height={size}
  fill="none"
  {...otherProps}
>
  <Path
    stroke="#27BF41"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M.5 1h6m0 0v6m0-6-6 6"
  />
</Svg>
);

export default Image;
