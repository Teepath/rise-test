import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import {BaseIconProps} from '.';
const SvgComponent = (props:BaseIconProps) => (
  <Svg
  width={16}
  height={17}
  fill="none"
  {...props}
>
  <Rect width={15} height={15} x={0.5} y={1} fill="#0898A0" rx={7.5} />
  <Path
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m5 8.5 2 2 4-4"
  />
  <Rect width={15} height={15} x={0.5} y={1} stroke="#0898A0" rx={7.5} />
</Svg>
)
export default SvgComponent