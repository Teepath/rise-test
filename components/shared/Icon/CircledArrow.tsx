import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const CircledArrow = ({
  size = 18,
  color = '#1B217E',
  ...otherProps
}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M9 17.063C4.553 17.063.937 13.447.937 9 .938 4.553 4.553.937 9 .937c4.447 0 8.063 3.615 8.063 8.063 0 4.447-3.615 8.063-8.063 8.063Zm0-15A6.946 6.946 0 0 0 2.062 9 6.946 6.946 0 0 0 9 15.938 6.946 6.946 0 0 0 15.938 9 6.946 6.946 0 0 0 9 2.062Z"
      fill={color}
    />
    <Path
      d="M9 11.257a.556.556 0 0 1-.397-.165L5.955 8.445a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0L9 9.9l2.25-2.25a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795l-2.647 2.647a.556.556 0 0 1-.398.165Z"
      fill={color}
    />
  </Svg>
);

export default CircledArrow;
