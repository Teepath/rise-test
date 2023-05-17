
import React from 'react'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { ScreenWrapper } from '../../../components/shared/common/styles'
import { TopBox, SuccessMsgView, SuccessMsgText, SubMessageView, SubMessageText, BottomBox} from '../Message/style'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RegisterState } from '../../../redux/reducers/auth';
import { useSelector } from 'react-redux';
import {View, Text} from 'react-native';
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
    Spacing,
  } from '../../../components/shared';
import GoBack from '../../../components/shared/GoBack';
import { loginProps } from '../../../redux/reducers/signin';


  type NavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, 'FormMessage'>,
  NativeStackNavigationProp<RootStackParamList>

>;

const FormMessage = () => {
  const data = useSelector((state:loginProps) => state.login?.user)
  const error = useSelector((state:loginProps) => state.login?.error)
  const loading= useSelector((state:loginProps) => state.login?.loading)
    const navigation = useNavigation<NavigationProps>();

    console.log(data, 'data')
  return (
    <ScreenWrapper>
     <GoBack/>
        {
          loading?
          <View style={{justifyContent:'center', alignItems:'center'}}>
         <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <Text>Loading........</Text>
     </View>
     : data.token?
          <TopBox>
          <Icon name={ICON_NAME.successicon}/>
          <SuccessMsgView><SuccessMsgText>Hi, {data?.first_name}</SuccessMsgText></SuccessMsgView>
        <SubMessageView><SubMessageText>Welcome to Rise, let’s take you home</SubMessageText></SubMessageView>
    </TopBox>  
    :error?
    <SuccessMsgView><SuccessMsgText>{error}</SuccessMsgText>
    </SuccessMsgView>
    : 
   
     <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
         <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <Text>Something Went Wrong,kindly ensure you have entered correct credentials</Text>
     </View>
        }
   
    <BottomBox>
      {
        data.token ?
        <Button
        type={BUTTON_TYPES.primary}
        text="Okay"
        fill
        onPress={() =>
          navigation.navigate(ROOT_ROUTES.MAIN_TAB, {screen:'Home'})}
        
          />
          :

       null

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