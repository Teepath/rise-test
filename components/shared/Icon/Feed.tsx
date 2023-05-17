import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const RiderMore = ({size = 24, color = '#94A1AD', ...otherProps}: BaseIconProps) => (

  <Svg
    width={23}
    height={22}
    fill="none"
    {...otherProps}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M.1 1.5A1.5 1.5 0 0 1 1.6 0h19a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20.6 7h-19A1.5 1.5 0 0 1 .1 5.5v-4Zm0 10A1.5 1.5 0 0 1 1.6 10h10a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-10a1.5 1.5 0 0 1-1.5-1.5v-9ZM16.6 10a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-4Z"
      clipRule="evenodd"
    />
  </Svg>



)

export default RiderMore;