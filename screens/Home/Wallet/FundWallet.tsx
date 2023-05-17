import { View, Text } from 'react-native'
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { ScreenWrapper } from '../../../components/shared/common/styles';
import Header from '../../../components/shared/Header/CreatePlanHeader';
import {Spacing, BOTTOM_MODAL_SIZE} from '../../../components/shared';
import {  Icon,
  ICON_NAME,
  MARGIN_SIZES,
  BaseTextInput,
  INPUT_MODES,
  BUTTON_TYPES,
  Button } from '../../../components/shared';

  import {
    StackParamList,
    STACK_TAB,
  } from '../../../navigation/typing';

  import {BankInfoWrapper, BankDetailsView, BankDetailsText, BankDetailSubText} from './style';
import { useNavigation } from '@react-navigation/native';

  type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  STACK_TAB.PLAN_FORM
>;

const FundWallet = () => {
  const navigation = useNavigation()
  return (
    <ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <Header title={'Select Bank'} icon={<Icon name={ICON_NAME.backbutton}/>}/>
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <BankInfoWrapper onPress={()=>navigation.navigate(STACK_TAB.OTP)}>
        <BankDetailsView><BankDetailsText>0123456789  •  <BankDetailSubText>GTBank PLC</BankDetailSubText></BankDetailsText><BankDetailsText>Bosun Olanrewaju</BankDetailsText></BankDetailsView>
        <Icon name={ICON_NAME.directionarrow} direction="right"/>
      </BankInfoWrapper>
      <BankInfoWrapper>
        <BankDetailsView><BankDetailsText>0123456789  • <BankDetailSubText>Fidelity Bank</BankDetailSubText></BankDetailsText><BankDetailsText>Bosun Olanrewaju</BankDetailsText></BankDetailsView>
        <Icon name={ICON_NAME.directionarrow} direction="right"/>
      </BankInfoWrapper>
    </KeyboardAwareScrollView>
    </ScreenWrapper>
  )
}

export default FundWallet