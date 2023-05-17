import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../theme';

export const StyledDot = styled(Animated.View)<{bgColor: string}>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin-right: ${theme.margin.small}px;
  background-color: ${({bgColor}:any) => bgColor};
`;

interface DotProps {
  activeIndex: Animated.AnimatedDivision;
  index: number;
  bgColor: string;
}

const Dot: React.FC<DotProps> = ({activeIndex, index, bgColor}) => {
  const opacity = activeIndex.interpolate({
    inputRange: [index - 2, index - 1, index, index + 1, index + 2],
    outputRange: [0.3, 0.3, 1, 0.3, 0.3],
  });

  const scale = activeIndex.interpolate({
    inputRange: [index - 2, index - 1, index, index + 1, index + 2],
    outputRange: [0.5, 0.5, 0.85, 0.5, 0.5],
  });

  return (
    <StyledDot
      bgColor={bgColor}
      style={{
        opacity,
        transform: [
          {
            scale,
          },
        ],
      }}
    />
  );
};

export default Dot;
