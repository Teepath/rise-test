import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    width={45}
    height={15}
    fill="none"
    {...props}
  >
    <Rect width={12} height={5} x={5.5} y={5} fill="#0898A0" rx={2.5} />
    <Rect
      width={5}
      height={5}
      x={23.5}
      y={5}
      fill="#71879C"
      fillOpacity={0.2}
      rx={2.5}
    />
    <Rect
      width={5}
      height={5}
      x={34.5}
      y={5}
      fill="#71879C"
      fillOpacity={0.2}
      rx={2.5}
    />
  </Svg>
)
export default SvgComponent
