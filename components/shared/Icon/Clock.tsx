import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const Clock = ({
  size = 16,
  color = '#4F4F4F',
  ...otherProps
}: BaseIconProps) => (
  <Svg viewBox="0 0 48 48" width={size} height={size} {...otherProps}>
    <Path
      fill={color}
      d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm0 3c9.407 0 17 7.593 17 17s-7.593 17-17 17S7 33.407 7 24 14.593 7 24 7zm-1.523 4.979A1.5 1.5 0 0 0 21 13.5v11a1.5 1.5 0 0 0 .44 1.06l5 5a1.5 1.5 0 1 0 2.12-2.12L24 23.878V13.5a1.5 1.5 0 0 0-1.523-1.521z"
    />
  </Svg>
);

export default Clock;
