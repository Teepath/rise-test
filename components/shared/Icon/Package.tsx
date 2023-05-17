import { View, Text } from 'react-native'
import * as React from 'react';
import Svg, {SvgProps, Path, Rect, Defs, Use, Pattern, Image} from 'react-native-svg';

const Package = () => {
  return (
    <Svg
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 50 50"
    >
      <Rect width="50" height="50" fill="url(#pattern0)" rx="4"></Rect>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.01563)" xlinkHref="#image0_2025_10548"></Use>
        </Pattern>
        <Image
          id="image0_2025_10548"
          width="64"
          height="64"
          
        ></Image>
      </Defs>
    </Svg>
  )
}

export default Package