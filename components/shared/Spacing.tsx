import React from 'react';
import {View} from 'react-native';
import {MARGIN_SIZES} from './common/typings';
import {theme} from './theme';

interface SpacingProps {
  size?: MARGIN_SIZES;
  direction?: 'vertical' | 'horizontal';
}

const Spacing: React.FC<SpacingProps> = ({
  size = MARGIN_SIZES.tiny,
  direction = 'horizontal',
}) => {
  const marginStyles =
    direction === 'horizontal'
      ? {marginHorizontal: theme.margin[size]}
      : {marginVertical: theme.margin[size]};

  return <View style={marginStyles} />;
};

export default Spacing;
