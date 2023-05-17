import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/shared/Header/CreatePlanHeader';
import {Spacing} from '../../../components/shared';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AreaChart from '../../../components/shared/Charts/Chart';
import {
    StackParamList,
    STACK_TAB,
  } from '../../../navigation/typing';



  import { ScreenWrapper } from '../../../components/shared/common/styles';
  import {PlanProjection, SmallText, 
    QuestionText, DateText,
     InvestInfoWrapper,
     InvestDetailText,
     CenteredText,
     ChartGraph, 
     CenteredTextWrapper
    } from './style'
  import {  Icon,
    ICON_NAME,
    MARGIN_SIZES,
    BUTTON_TYPES,
    Button } from '../../../components/shared';

    type NavigationProp = NativeStackNavigationProp<
    StackParamList,
    STACK_TAB.PLAN_FORM
  >;

const ReviewPlan = () => {
    const navigation = useNavigation<NavigationProp>();
  return (
<ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <Header title={'Review'} icon={<Icon name={ICON_NAME.backbutton}/>}/>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        
        <PlanProjection><View><SmallText>Kate Ventures</SmallText>
        <QuestionText>$10,930.75</QuestionText>
        <DateText>by 20 June 2021</DateText>
        </View>
        </PlanProjection>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <ChartGraph><AreaChart/></ChartGraph>
        <InvestInfoWrapper><Icon name={ICON_NAME.info}/><InvestDetailText>Returns not guaranteed. Investing involves risk. Read our Disclosures.</InvestDetailText></InvestInfoWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <CenteredTextWrapper><CenteredText>These are your starting settings, they can always be updated.</CenteredText></CenteredTextWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <Button
      type={BUTTON_TYPES.primary}
      text="Agree & Continue"
      fill
      onPress={() =>navigation.navigate('PlanSuccess')}
    />
  <Spacing direction="vertical" size={MARGIN_SIZES.small} />
<Button
      type={BUTTON_TYPES.text}
      text="Start over"
      fill
      onPress={() =>navigation.navigate('PlanSuccess')}
    />
      </KeyboardAwareScrollView>
      </ScreenWrapper>
  )
}

export default ReviewPlan