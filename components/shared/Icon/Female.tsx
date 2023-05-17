import { View, Text } from 'react-native'
import React from 'react'
import Svg, {Path, Rect, Defs, Pattern, Image, Use} from 'react-native-svg';
import {BaseIconProps} from '.';

const Female = (props:BaseIconProps) => {
  return (
    <Svg
      width="76"
      height="77"
      fill="none"
      viewBox="0 0 76 77"
    >
      <Rect
        width="76"
        height="76"
        y="0.042"
        fill="url(#pattern0)"
        rx="38"
      ></Rect>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use
            transform="matrix(.00313 0 0 .00313 0 -.108)"
            xlinkHref="#image0_6735_1323"
          ></Use>
        </Pattern>
        <Image
          id="image0_6735_1323"
          width="320"
          height="480"
         
        ></Image>
      </Defs>
    </Svg>
  )
}

export default Female