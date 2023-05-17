import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {RootStackParamList, ROOT_ROUTES} from './typing';
import StachNavigation from './StackNav';
import MainTab from './BottomTabNavigation';
import StackScreen from './StackNav'
const Stack = createNativeStackNavigator<RootStackParamList>()

const MainNav = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
 

  <Stack.Screen name={ROOT_ROUTES.MAIN_TAB} component={MainTab} />
    <Stack.Screen name={ROOT_ROUTES.STACK_TAB} component={StackScreen} />
 
   
  
</Stack.Navigator>
  )
}

export default MainNav