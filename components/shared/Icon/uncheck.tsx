import * as React from 'react';
import Svg, {Path, Rect, Defs, Pattern, Image, Use} from 'react-native-svg';
import {BaseIconProps} from '.';

const Uncheck = ({size = 300, color, ...props}: BaseIconProps) => {
return(
    <Svg
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Rect width={15} height={15} x={0.5} y={1} stroke="#0898A0" rx={7.5} />
  </Svg>
  )}

  export default Uncheck