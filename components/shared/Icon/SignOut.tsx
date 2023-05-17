import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const SignOut = ({
  size = 24,
  color = '#DD2C2C',
  ...otherProps
}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SignOut;
