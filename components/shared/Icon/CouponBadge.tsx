import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const CouponBadge = ({
  size = 20,
  color = '#4A4A68',
  ...otherProps
}: BaseIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...otherProps}>
    <Path
      d="M3.324 12.217 2.057 10.95a1.338 1.338 0 0 1 0-1.883L3.324 7.8c.217-.216.392-.641.392-.941V5.067c0-.733.6-1.333 1.333-1.333h1.792c.3 0 .725-.175.941-.392L9.05 2.075a1.338 1.338 0 0 1 1.883 0L12.2 3.342c.217.217.642.392.942.392h1.791c.734 0 1.334.6 1.334 1.333v1.792c0 .3.175.725.391.941l1.267 1.267a1.338 1.338 0 0 1 0 1.883l-1.267 1.267c-.216.217-.391.642-.391.942v1.791c0 .734-.6 1.334-1.334 1.334h-1.791c-.3 0-.725.175-.942.391l-1.267 1.267a1.338 1.338 0 0 1-1.883 0l-1.267-1.267c-.216-.216-.641-.391-.941-.391H5.049c-.733 0-1.333-.6-1.333-1.334V13.16c0-.309-.175-.734-.392-.942ZM7.5 12.5l5-5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.079 12.083h.007M7.912 7.917h.008"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CouponBadge;
