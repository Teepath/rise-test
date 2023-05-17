import * as React from "react"
import {View} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {BaseIconProps} from '.';
const SvgComponent = ({size = 22, width=36, height=37, color = '#71879C"', ...otherProps}: BaseIconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...otherProps}
  >
    <Rect
      width={36}
      height={36}
      y={0.5}
      fill="#71879C"
      fillOpacity={0.1}
      rx={18}
    />
    <Path
      stroke="#0898A0"
      strokeWidth={2}
      d="M24.664 18.5H11.336m0 0L18 11.836M11.336 18.5 18 25.164"
    />
  </Svg>
)
export default SvgComponent
