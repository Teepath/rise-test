
import React from 'react'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { ScreenWrapper } from '../../../components/shared/common/styles'
import { TopBox, SuccessMsgView, SuccessMsgText, SubMessageView, SubMessageText, BottomBox} from '../Message/style'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
    RootStackParamList,
    ROOT_ROUTES,
    AuthStackParamList,
    STACK_TAB,
    StackParamList
  } from '../../../navigation/typing';

import {
    BaseTextInput,
    Button,
    BUTTON_TYPES,
    Icon,
    ICON_NAME,
    INPUT_MODES,
    Dropdown,
    MARGIN_SIZES,
  } from '../../../components/shared';


  type NavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<StackParamList, 'OtpConfirm'>,
  NativeStackNavigationProp<RootStackParamList>

>;

const FormMessage = () => {

    const navigation = useNavigation<NavigationProps>();
  return (
    <ScreenWrapper>
      <TopBox>
        <Icon name={ICON_NAME.successicon}/>
        <SuccessMsgView><SuccessMsgText>You’ve created your PIN</SuccessMsgText></SuccessMsgView>
        <SubMessageView><SubMessageText>Keep your account safe with your secret PIN. Do not share this PIN with anyone.</SubMessageText></SubMessageView>
    </TopBox>  
    <BottomBox>
    <Button
      type={BUTTON_TYPES.primary}
      text="Okay"
      fill
      onPress={() =>
        navigation.navigate(ROOT_ROUTES.MAIN_TAB, {screen:'Home'})}
      
        />
    </BottomBox>
    </ScreenWrapper>
  
  )
}

export default FormMessage