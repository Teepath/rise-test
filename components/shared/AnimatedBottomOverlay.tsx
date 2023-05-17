import {Animated, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './common/constants';

const bottomBoxHeight = (270 / SCREEN_HEIGHT) * SCREEN_HEIGHT;

const BottomBox = styled(Animated.View)`
  position: absolute;
  z-index: 2;
  left: 0px;
  top: ${`${SCREEN_HEIGHT - bottomBoxHeight}px`};
  background-color: #ffffff;
  width: ${`${SCREEN_WIDTH}px`};
  height: ${`${bottomBoxHeight}px`};
  border-top-right-radius: ${({theme}) => `${theme.borderRadii.lg}px`};
  border-top-left-radius: ${({theme}) => `${theme.borderRadii.lg}px`};
  padding: 25px 24.5px;
`;

const AnimatedBottomOverlay: React.FC<{
  children: JSX.Element | JSX.Element[];
  show: boolean;
}> = ({children, show}) => {
  const bottomBoxAnimatedValue = React.useRef(new Animated.Value(0)).current;
  let bottomBoxTimeoutId = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(
    function AnimateRiderBox() {
      if (show) {
        bottomBoxTimeoutId.current = setTimeout(() => {
          Animated.spring(bottomBoxAnimatedValue, {
            toValue: 1,
            friction: 10,
            useNativeDriver: true,
          }).start();
        }, 1200);
      } else {
        Animated.spring(bottomBoxAnimatedValue, {
          toValue: 0,
          friction: 10,
          useNativeDriver: true,
        }).start();
      }
      return () => {
        if (bottomBoxTimeoutId.current) {
          clearTimeout(bottomBoxTimeoutId.current);
        }
      };
    },
    [bottomBoxAnimatedValue, show],
  );

  const transformYValue = bottomBoxAnimatedValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [bottomBoxHeight, -50, 0],
  });

  const bottomBoxStyles = {
    transform: [
      {
        translateY: transformYValue,
      },
    ],
  };

  return (
    <BottomBox style={bottomBoxStyles}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </BottomBox>
  );
};

export default AnimatedBottomOverlay;
