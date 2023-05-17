import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const Sms = (props: BaseIconProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M12.75 15.375h-7.5c-2.25 0-3.75-1.125-3.75-3.75v-5.25c0-2.625 1.5-3.75 3.75-3.75h7.5c2.25 0 3.75 1.125 3.75 3.75v5.25c0 2.625-1.5 3.75-3.75 3.75Z"
      stroke="#828282"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12.75 6.75-2.348 1.875c-.772.615-2.04.615-2.812 0L5.25 6.75"
      stroke="#828282"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Sms;
