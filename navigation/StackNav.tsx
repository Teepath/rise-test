import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {STACK_TAB, StackParamList} from './typing';
import Plan from '../screens/Home/Plan/CreatePlan';
import Planform from '../screens/Home/Plan/Planform';
import ReviewPlan from '../screens/Home/Plan/ReviewPlan';
import PlanSuccessMessage from "../screens/Home/Plan/PlanSuccess"
import ViewPlans from '../screens/Home/Plan/ViewPlans';
import FundWallet from '../screens/Home/Wallet/FundWallet';
import OTPScreen from "../screens/Authentication/VerifyOTP/verify-otp.screens"
import OTPConfirmation from "../screens/Authentication/VerifyOTP/OTPConfirmation"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SinglePlan from "../screens/Home/Plan/SinglePlan"

import React from 'react'
import { ICON_NAME, Icon } from '../components/shared';
const Stack = createNativeStackNavigator<StackParamList>();



// options={{
//   headerShown:true,



const StachNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={STACK_TAB.CREATE_PLAN} component={Plan}/>
    <Stack.Screen name={STACK_TAB.PLAN_FORM} component={Planform}/>
    <Stack.Screen name={STACK_TAB.REVIEW_PLAN} component={ReviewPlan}/>
    <Stack.Screen name={STACK_TAB.PLAN_SUCCESS} component={PlanSuccessMessage}/>
    <Stack.Screen name={STACK_TAB.VIEW_PLANS} component={ViewPlans} />
    <Stack.Screen name={STACK_TAB.FUND_WALLET} component={FundWallet} />
    <Stack.Screen name={STACK_TAB.OTP} component={OTPScreen} />
    <Stack.Screen name={STACK_TAB.OTP_Confirm} component={OTPConfirmation} />
    <Stack.Screen name={STACK_TAB.SINGLE_PLAN} component={SinglePlan} />

    
    </Stack.Navigator>
   
  )
}

export default StachNavigation