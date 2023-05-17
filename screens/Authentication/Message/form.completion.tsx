
import React from 'react'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { ScreenWrapper } from '../../../components/shared/common/styles'
import { TopBox, SuccessMsgView, SuccessMsgText, SubMessageView, SubMessageText, BottomBox} from './style'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RegisterState } from '../../../redux/reducers/auth';
import { useSelector } from 'react-redux';
import { User } from '../../../redux/type';
import { SignUpAction } from '../../../redux/actions/auth';
import {
    RootStackParamList,
    ROOT_ROUTES,
    AuthStackParamList,
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
  NativeStackNavigationProp<AuthStackParamList, 'FormMessage'>,
  NativeStackNavigationProp<RootStackParamList>

>;

const FormMessage = () => {
  const data = useSelector((state:RegisterState) => state.register?.user)
  const error = useSelector((state:RegisterState) => state.register?.error)
    const navigation = useNavigation<NavigationProps>();

    console.log(data, 'data')
  return (
    <ScreenWrapper>
     
        {
          data?
          <TopBox>
          <Icon name={ICON_NAME.successicon}/>
          <SuccessMsgView><SuccessMsgText>You just created your Rise account</SuccessMsgText></SuccessMsgView>
        <SubMessageView><SubMessageText>Welcome to Rise, let’s take you home</SubMessageText></SubMessageView>
    </TopBox>  
    :error?
    <SuccessMsgView><SuccessMsgText>{error}</SuccessMsgText>
    </SuccessMsgView>
    : 
    null
        }
   
    <BottomBox>
      {
        data?
        <Button
        type={BUTTON_TYPES.primary}
        text="Okay"
        fill
        onPress={() =>
          navigation.navigate(ROOT_ROUTES.AUTHENTICATION, {screen:'LoginForm'})}
        
          />
          :

          <Button
          type={BUTTON_TYPES.primaryALT}
          text="Okay"
          fill
          onPress={() => console.log(null)}
          
            />

      }
    {/* <Button
      type={BUTTON_TYPES.primary}
      text="Okay"
      fill
      onPress={() =>
        navigation.navigate(ROOT_ROUTES.MAIN_TAB, {screen:'Home'})}
      
        /> */}
    </BottomBox>
    </ScreenWrapper>
  
  )
}

export default FormMessage