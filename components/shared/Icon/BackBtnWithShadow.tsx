import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Rect
      width={36}
      height={36}
      fill="#000"
      fillOpacity={0.4}
      rx={18}
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M24.664 18H11.336m0 0L18 11.336M11.336 18 18 24.664"
    />
  </Svg>
)
export default SvgComponent
