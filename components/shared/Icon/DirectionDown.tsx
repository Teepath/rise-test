import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    width={36}
    height={37}
    fill="none"
    {...props}
  >
    <Rect
      width={36}
      height={36}
      y={0.941}
      fill="#4CD964"
      fillOpacity={0.15}
      rx={18}
    />
    <Path
      stroke="#27BF41"
      strokeWidth={1.5}
      d="m22.642 14.3-9.284 9.283m0 0h8.2m-8.2 0v-8.2"
    />
  </Svg>
)
export default SvgComponent
