
import React from 'react'
import { View, Text } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PlanHeader from '../../../components/shared/Header/CreatePlanHeader';
import { ScreenWrapper } from '../../../components/shared/common/styles';
import {Spacing} from '../../../components/shared';
import { SubHeader, SubHeaderText, PlanDetailWraper,
     PlanDetailIcon, PlanDetailInfoView, PlanDetailTitle, PlanDetailText } from './style';
     import { StackParamList, STACK_TAB} from '../../../navigation/typing';
import {
    Icon,
    ICON_NAME,
    MARGIN_SIZES,
    BUTTON_TYPES,
    Button
  } from '../../../components/shared';
import { useNavigation } from '@react-navigation/native';


  type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  STACK_TAB.PLAN_FORM
>;


const MyPlan = () => {
    const navigation = useNavigation<NavigationProp>()
  return (

        <ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true}>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <PlanHeader title='Create a plan' icon={<Icon name={ICON_NAME.cancel} />}/>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <SubHeader><SubHeaderText>Reach your goals faster</SubHeaderText></SubHeader>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <SubHeader><Icon name={ICON_NAME.planbox}/></SubHeader>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <PlanDetailWraper>
        <PlanDetailIcon>
            <Icon name={ICON_NAME.help}/>
        </PlanDetailIcon>
        <PlanDetailInfoView><PlanDetailTitle>Give us a few details</PlanDetailTitle>
        <PlanDetailText>Tell us what you want to achieve and we will help you get there</PlanDetailText></PlanDetailInfoView>
      </PlanDetailWraper>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <PlanDetailWraper>
        <PlanDetailIcon>
            <Icon name={ICON_NAME.calculator}/>
        </PlanDetailIcon>
        <PlanDetailInfoView><PlanDetailTitle>Turn on auto-invest</PlanDetailTitle>
        <PlanDetailText>The easiest way to get your investment working for you is to fund to periodically. </PlanDetailText></PlanDetailInfoView>
      </PlanDetailWraper>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <PlanDetailWraper>
        <PlanDetailIcon>
            <Icon name={ICON_NAME.fundwheel}/>
        </PlanDetailIcon>
        <PlanDetailInfoView><PlanDetailTitle>Modify as you progresst</PlanDetailTitle>
        <PlanDetailText>You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more. </PlanDetailText></PlanDetailInfoView>
      </PlanDetailWraper>
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />

      <Button
      type={BUTTON_TYPES.primary}
      text="Continue"
      fill
      onPress={() =>
        navigation.navigate(STACK_TAB.PLAN_FORM)}
    />
    </KeyboardAwareScrollView>

    </ScreenWrapper>
    
  
  )
  
}

export default MyPlan;