import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Polygon = (props: SvgProps) => (
  <Svg width={37} height={31} fill="none" {...props}>
    <Path d="m18.5 0 17.754 30.75H.745L18.5 0Z" fill="#F4F2FA" />
  </Svg>
);

export default Polygon;
