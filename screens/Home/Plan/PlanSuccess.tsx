
import React from 'react'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { ScreenWrapper } from '../../../components/shared/common/styles'
import { TopBox, SuccessMsgView, SuccessMsgText, SubMessageView, SubMessageText, BottomBox} from '../../Authentication/Message/style'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
    RootStackParamList,
    ROOT_ROUTES,
    AuthStackParamList,
    StackParamList,
    STACK_TAB,
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


  type NavigationProps = 
  NativeStackNavigationProp<StackParamList, 'PlanSuccess'>;

const FormMessage = () => {

    const navigation = useNavigation<NavigationProps>();
  return (
    <ScreenWrapper>
      <TopBox>
        <Icon name={ICON_NAME.successicon}/>
        <SuccessMsgView><SuccessMsgText>You just created your Plan</SuccessMsgText></SuccessMsgView>
        <SubMessageView><SubMessageText>Welcome done, Deborah</SubMessageText></SubMessageView>
    </TopBox>  
    <BottomBox>
    <Button
      type={BUTTON_TYPES.primary}
      text="View Plan"
      fill
      onPress={() =>
        navigation.navigate(STACK_TAB.VIEW_PLANS)}
      
        />
    </BottomBox>
    </ScreenWrapper>
  
  )
}

export default FormMessage