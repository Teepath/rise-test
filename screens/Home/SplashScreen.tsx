import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {SplashScreenWraper} from "../Home//Plan/style"
import { theme } from '../../components/shared/theme'
import { ICON_NAME, Icon } from '../../components/shared'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
const navigation = useNavigation()

  React.useEffect(() => {
    
    setTimeout(() => {
   navigation.navigate('SignUpForm')
    }, 2000); // 2000ms (2 seconds)
  }, []);
  return (
    <>
      <StatusBar backgroundColor={theme.palette.primary.green200} barStyle="light-content" />
  
    <SplashScreenWraper>
     <Icon name={ICON_NAME.logo} />
      <Text>Dollar investments that help you grow </Text>
      <Text>All rights reserved  (c) 2021</Text>
    </SplashScreenWraper>
    </>
  )
}

export default SplashScreen