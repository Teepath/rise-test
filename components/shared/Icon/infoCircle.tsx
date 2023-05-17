import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const InfoCircle = ({
  size = 24,
  color = '#4F4F4F',
  ...otherProps
}: BaseIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...otherProps}>
    <Path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.995 16h.009"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default InfoCircle;
