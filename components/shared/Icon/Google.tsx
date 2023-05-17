import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {BaseIconProps} from '.';

const GoogleIcon = (props: BaseIconProps) => (
  <Svg width={24} height={24} {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M20.737 10.73c0-.68-.055-1.363-.172-2.032h-9.433v3.851h5.402a4.63 4.63 0 0 1-2 3.039v2.499h3.223c1.893-1.742 2.98-4.314 2.98-7.357Z"
        fill="#4285F4"
      />
      <Path
        d="M11.132 20.5c2.697 0 4.972-.885 6.629-2.413l-3.223-2.5c-.896.61-2.054.956-3.402.956-2.61 0-4.821-1.76-5.615-4.126H2.196v2.576a10.001 10.001 0 0 0 8.936 5.508Z"
        fill="#34A853"
      />
      <Path
        d="M5.518 12.417a5.99 5.99 0 0 1 0-3.829V6.012H2.196a10.009 10.009 0 0 0 0 8.98l3.322-2.575Z"
        fill="#FBBC04"
      />
      <Path
        d="M11.132 4.458a5.434 5.434 0 0 1 3.836 1.5l2.855-2.856a9.61 9.61 0 0 0-6.69-2.601 9.998 9.998 0 0 0-8.937 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.932 .5)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GoogleIcon;
