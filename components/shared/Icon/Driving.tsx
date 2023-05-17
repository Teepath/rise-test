import * as React from 'react';
import Svg, {
  Circle,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {BaseIconProps} from '.';

const Driving = ({  width = 32,
    height = 32,
    ...otherProps}) => {
  return (
    <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 32 32"
  >
    <Path
      fill="#FF7927"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      d="M19.4 2.667h-6.8c-2.4 0-2.933 1.2-3.24 2.68l-1.093 5.226h15.466L22.64 5.347c-.307-1.48-.84-2.68-3.24-2.68z"
    ></Path>
    <Path
      fill="#fff"
      fillOpacity="0.6"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      d="M25.654 19.093c.106 1.133-.8 2.107-1.96 2.107H21.88c-1.04 0-1.186-.44-1.373-1l-.2-.574c-.267-.786-.44-1.32-1.84-1.32H13.52c-1.386 0-1.6.6-1.84 1.32l-.2.574c-.186.546-.333 1-1.373 1H8.294c-1.16 0-2.067-.974-1.96-2.107L6.88 13.2c.134-1.454.414-2.64 2.947-2.64H22.16c2.534 0 2.814 1.186 2.947 2.64l.547 5.893z"
    ></Path>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      d="M8.267 7.667h-.973M24.707 7.667h-.974"
    ></Path>
    <Path
      stroke="#FF7927"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.2 14.44h2.894M18.907 14.44h2.894"
    ></Path>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      d="M16 22.666V24M16 28v1.333M4 24l-1.333 5.333M28 24l1.333 5.333"
    ></Path>
  </Svg>
  )
}

export default Driving;