import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const LocationSelector = ({size = 18, color, ...otherProps}: BaseIconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...otherProps}>
    <Path
      d="M9 14.625a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM9 3V1.5M3 9H1.5M9 15v1.5M15 9h1.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LocationSelector;
