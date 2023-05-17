import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const SvgComponent = ({props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={300}
    height={300}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h300v300H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00059 0 0 .00059 0 0)" />
      </Pattern>
      <Image
        id="b"
        width={1702}
        height={1704}
      />
    </Defs>
  </Svg>
)
export default SvgComponent