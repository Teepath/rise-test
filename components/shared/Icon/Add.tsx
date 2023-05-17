import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';
import {ArrowProps} from './Arrow';

const SvgComponent = ({
  size = 24,
  color = '#0E0E2C',
  direction = 'left',
  ...otherProps
}: BaseIconProps & ArrowProps) => (
  <View
    style={{
      transform: [
        {
          rotate: direction === 'left' ? '0deg' : '-45deg',
        },
      ],
    }}>
    <Svg
    width={22}
    height={22}
    fill="none"
    {...otherProps}
  >
    <Path fill="#fff" d="M.5.5h21v21H.5z" />
    <Path
      stroke="#0898A0"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.132 11h13.736M11 17.868V4.132"
    />
  </Svg>
  </View>
);

export default SvgComponent;
