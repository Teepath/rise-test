import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const CloseCircle = ({size = 24, color, ...otherProps}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseCircle;
