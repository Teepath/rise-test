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
      x={36}
      y={36.941}
      fill="#EB5757"
      fillOpacity={0.15}
      rx={18}
      transform="rotate(180 36 36.941)"
    />
    <Path
      stroke="#EB5757"
      strokeWidth={1.5}
      d="m13.358 23.583 9.284-9.283m0 0h-8.2m8.2 0v8.2"
    />
  </Svg>
)
export default SvgComponent
