import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const SuccessCheckIcon = ({
  size = 14,
  color = '#51B74F',
  ...otherProps
}: BaseIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...otherProps}>
    <Path
      d="M7 .334A6.674 6.674 0 0 1 13.667 7 6.674 6.674 0 0 1 7 13.667 6.674 6.674 0 0 1 .333 7 6.674 6.674 0 0 1 7 .334"
      fill={color}
    />
    <Path
      d="m5 7.019 1.52 1.518L9.556 5.5"
      stroke="#fff"
      strokeWidth={1.02}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SuccessCheckIcon;
