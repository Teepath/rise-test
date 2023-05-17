import React, { useEffect, useState } from 'react';
import {Animated, Dimensions, ScrollView} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button, BUTTON_TYPES, Icon, ICON_NAME, MARGIN_SIZES, BUTTON_SIZE} from '../..';

import {MODES} from '../../common/typings';
import Spacing from '../../Spacing';
import {theme} from '../../theme';
import Dot from './components/Dot';
import {slides} from './data';
import {
  Slider,
  ImageBox,
  DotsBox,
  ContentBox,
  ContentTitle,
  ContentText,
  NavigationBox,
  ButtonWrapper,
  NavigationText,
  Slide,
} from './styles';

import {
  AUTHENTICATION_ROUTES,
  AuthStackParamList,
  RootStackParamList,
  ROOT_ROUTES
} from '../../../../navigation/typing';

const {width} = Dimensions.get('window');

interface OnBoardingProps {
  mode: MODES;
  goToNextScreen: () => void;
}


// type NavigationProp = NativeStackNavigationProp<
//   AuthStackParamList,
//   AUTHENTICATION_ROUTES.SIGN_UP_FORM
// >;

type NavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'OnBoarding'>,
  NativeStackNavigationProp<AuthStackParamList>
>;
const OnBoarding: React.FC<OnBoardingProps> = ({mode, goToNextScreen}) => {
  const xOffset = new Animated.Value(0);
  const scrollRef = React.useRef<ScrollView>(null);
  const [bgColor, setBgColor]= useState('')
  // const screens = slides.user 

  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView>
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    >
    <Slider>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) =>
          xOffset.setValue(nativeEvent.contentOffset.x)
        }>
        {slides.user.map((screen, index) => {
        
          const lastScreen = index === slides.user.length - 1;
          return (
            <Slide key={index} color={screen.background}>
              <ImageBox>
                <Icon name={screen.image as ICON_NAME} />
              </ImageBox>
              <Spacing size={MARGIN_SIZES.medium} direction="vertical" />
              <DotsBox>
                {slides.user.map((_, i) => (
                  <Dot
                    bgColor={screen.color}
                    key={i}
                    index={i}
                    activeIndex={Animated.divide(xOffset, width)}
                  />
                
                ))}
              </DotsBox>
              <Spacing size={MARGIN_SIZES.medium} direction="vertical" />
              <ContentBox>
                <ContentTitle color={screen.color}>{screen.title}</ContentTitle>
                <Spacing direction="vertical" />
                <ContentText>{screen.content}</ContentText>
                <Spacing size={MARGIN_SIZES.large} direction="vertical" />
                {
                  !lastScreen? 
                  <ButtonWrapper>
                  
                  <Button
                    type={BUTTON_TYPES.text}
                  size={BUTTON_SIZE.tiny}
                    text={''}
                    disabled={index ===0?true:false}
                    leftIcon={()=>(<Icon key="arrow" name={ICON_NAME.arrowpoint} direction={'left'} color={index===0?theme.palette.tertiary.grey:screen.color} />)}
                    onPress={async () => {
                      // setBgColor(()=>screen.background)
                      if (lastScreen || index !==0) {
                     
                        scrollRef.current?.scrollTo({
                          x: width * (index - 1),
                          animated: true,
                        });
                      } 
                    }}
                  />
                  <Button
                    type={BUTTON_TYPES.text}
                    size={BUTTON_SIZE.small}
                   
                    textColor={screen.color}
                    text={'Next'}
                    onPress={async () => {
                      // setBgColor(()=>screen.background)
                      if (!lastScreen) {
                     
                        scrollRef.current?.scrollTo({
                          x: width * (index + 1),
                          animated: true,
                        });
                      } else {
                        await goToNextScreen();
                      }
                    }}
                    rightIcon={()=>(<Icon key="arrow" name={ICON_NAME.arrowpoint} direction={'right'} color={screen.color} />)}
                  />
                  </ButtonWrapper>

                  :
                    <>
                  <Button
                  type={BUTTON_TYPES.primary}
                 fill
                  textColor={screen.color}
                  text={'Sign Up'}
                  onPress={async () => {
                    // setBgColor(()=>screen.background)
                    navigation.navigate(ROOT_ROUTES.AUTHENTICATION, {screen:"SignUpForm"})
                  }}
                 
                 
                />
       <Spacing size={MARGIN_SIZES.medium} direction="vertical" />
            

                <Button
                type={BUTTON_TYPES.primaryALT}
               fill
                textColor={screen.color}
                text={'Login'}
                onPress={async () => {
                  // setBgColor(()=>screen.background)
                  navigation.navigate(ROOT_ROUTES.AUTHENTICATION, {screen:'LoginForm'})
                }}
               
              />
</>
                }
             
              </ContentBox>
            </Slide>
          );
        })}
      </Animated.ScrollView>
    </Slider>
    </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoarding;
