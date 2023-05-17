import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const CardAdd = ({
  size = 25,
  color = '#4A4A68',
  ...otherProps
}: BaseIconProps) => (
  <Svg width={size} height={size} fill="none" {...otherProps}>
    <Path
      d="M14 9.25H2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H14c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 17.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill=""
    />
    <Path
      d="M18.06 21.25H6.94c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14H14c.41 0 .75.34.75.75s-.34.75-.75.75H6.94c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c.01 3.95-1.2 5.15-5.18 5.15Z"
      fill={color}
    />
    <Path
      d="M22.5 7H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    />
    <Path
      d="M19.75 9.75c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75s.75.34.75.75V9c0 .41-.34.75-.75.75Z"
      fill={color}
    />
  </Svg>
);

export default CardAdd;