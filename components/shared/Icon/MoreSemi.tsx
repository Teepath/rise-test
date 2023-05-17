import * as React from "react"
import Svg, { Rect, Circle } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
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
    <Circle cx={18} cy={10.418} r={1.691} fill="#fff" />
    <Circle cx={18} cy={18} r={1.691} fill="#fff" />
    <Circle cx={18} cy={25.582} r={1.691} fill="#fff" />
  </Svg>
)
export default SvgComponent
