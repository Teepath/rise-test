import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {BaseIconProps} from '.';

const SearchIcon = (props: BaseIconProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M8.625 16.313c-4.237 0-7.688-3.45-7.688-7.688 0-4.237 3.45-7.688 7.688-7.688 4.238 0 7.688 3.45 7.688 7.688 0 4.238-3.45 7.688-7.688 7.688Zm0-14.25a6.57 6.57 0 0 0-6.563 6.562 6.57 6.57 0 0 0 6.563 6.563 6.57 6.57 0 0 0 6.563-6.563 6.57 6.57 0 0 0-6.563-6.563ZM16.5 17.063a.556.556 0 0 1-.397-.165l-1.5-1.5a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0l1.5 1.5a.566.566 0 0 1 0 .795.556.556 0 0 1-.398.165Z"
      fill="#8C8CA1"
    />
  </Svg>
);

export default SearchIcon;
