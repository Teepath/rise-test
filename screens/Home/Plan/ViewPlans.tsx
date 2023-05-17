import { View, Text } from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/shared/Header/PlanViewHeader';
import {Spacing} from '../../../components/shared';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Chart from "../../../components/shared/Charts/Chart2"
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';


import {
    StackParamList,
    STACK_TAB,
    RootStackParamList,
    ROOT_ROUTES
  } from '../../../navigation/typing';
  import { ScreenWrapper } from '../../../components/shared/common/styles';
  import {PlanProjection, SmallText, 
    QuestionText, DateText,
    ValueText, TargetWrapper, 
    TargetView,ProgressBar,
    ResultView,AddFundWrapper,
    AddFundText,ChartWrapper,
    CountProgressBar, ResultWrapper,
    ListWrapper,ListRight, Listleft ,
    TransactionTitle, TransactionView, TrasanctionText,
    WalletWraper, WalletDetail, WalletDetailText,
    WalletDetailsSubText, ViewIcon, ViewAllBtn
    } from './style'
  import {  Icon,
    ICON_NAME,
    MARGIN_SIZES,
    BaseTextInput,
    INPUT_MODES,
    BUTTON_TYPES,
    Button } from '../../../components/shared';

  //   type NavigationProp = NativeStackNavigationProp<
  //   StackParamList,
  //   STACK_TAB.VIEW_PLANS
  // >;

  type NavigationProps = CompositeNavigationProp<
NativeStackNavigationProp<StackParamList, STACK_TAB.VIEW_PLANS>,
NativeStackNavigationProp<RootStackParamList>
>
// import PlanViewHeader from '../../../components/shared/Header/PlanViewHeader'

const ViewPlans = () => {

  const navigation = useNavigation<NavigationProps>();
  return (
    <>
       <Header/>
    <ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    
    <PlanProjection><SmallText>Plan Balance</SmallText>
        <QuestionText>$0.00</QuestionText>
        <SmallText>~N0.00 <Icon name={ICON_NAME.option}/></SmallText>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <DateText>Gains</DateText>
        <ValueText>+$5,000.43 • +12.4%</ValueText>
        </PlanProjection>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <TargetWrapper><TargetView><SmallText>0.01 achieved</SmallText><SmallText>Target: $20,053.90</SmallText></TargetView>
        <ProgressBar><CountProgressBar></CountProgressBar></ProgressBar>
        </TargetWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <ResultWrapper><ResultView><SmallText>Results are updated monthly</SmallText></ResultView></ResultWrapper> 
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <AddFundWrapper onPress={()=> navigation.navigate(STACK_TAB.FUND_WALLET)}><Icon name={ICON_NAME.add}/><AddFundText>Add fund</AddFundText></AddFundWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <ChartWrapper><Chart/></ChartWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
       <ListWrapper><Listleft>Total earnings</Listleft><ListRight>$12,000.09</ListRight></ListWrapper>
       <ListWrapper><Listleft>Current earnings</Listleft><ListRight>$12,000.09</ListRight></ListWrapper>
       <ListWrapper><Listleft>Deposit value</Listleft><ListRight>$50,543.05</ListRight></ListWrapper>
       <ListWrapper><Listleft>Balance in Naira (*₦505)</Listleft><ListRight>₦31,918,837.5</ListRight></ListWrapper>
       <ListWrapper><Listleft>Plan created on</Listleft><ListRight>23rd July, 2019</ListRight></ListWrapper>
       <ListWrapper><Listleft>Maturity date</Listleft><ListRight>24th July 2022</ListRight></ListWrapper>
       <Spacing direction="vertical" size={MARGIN_SIZES.small} />
       <ListWrapper><TransactionTitle>Recent transactions</TransactionTitle><TransactionView onPress={()=>navigation.navigate(ROOT_ROUTES.MAIN_TAB, {screen:'Plans'})}><TrasanctionText>View all</TrasanctionText><ViewAllBtn><Icon name={ICON_NAME.directionarrow} direction='right'/></ViewAllBtn></TransactionView></ListWrapper>
       <Spacing direction="vertical" size={MARGIN_SIZES.small} />
       <WalletWraper>
        <ViewIcon><Icon name={ICON_NAME.directiondown}/></ViewIcon>
        <WalletDetail><WalletDetailText>Received from Bank Account (BOSUN TONY ADEMOSU)</WalletDetailText><WalletDetailsSubText>Jul 6, 2021</WalletDetailsSubText></WalletDetail>
        <TransactionTitle>+$320.90</TransactionTitle>
       </WalletWraper>
       <WalletWraper>
        <ViewIcon><Icon name={ICON_NAME.directionup}/></ViewIcon>
        <WalletDetail><WalletDetailText>Sent to Bank Account (ADEBAYO MUSILIU JAGUN)</WalletDetailText><WalletDetailsSubText>Jul 6, 2021</WalletDetailsSubText></WalletDetail>
        <TransactionTitle>-$2,942.55</TransactionTitle>
       </WalletWraper>
       <WalletWraper>
        <ViewIcon><Icon name={ICON_NAME.directionup}/></ViewIcon>
        <WalletDetail><WalletDetailText>Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)</WalletDetailText><WalletDetailsSubText>Jul 6, 2021</WalletDetailsSubText></WalletDetail>
        <TransactionTitle>-$500.12</TransactionTitle>
       </WalletWraper>
       <WalletWraper>
        <ViewIcon><Icon name={ICON_NAME.directiondown}/></ViewIcon>
        <WalletDetail><WalletDetailText>Received from Bank Account (TITUS CLEOPATRA MEDINA)</WalletDetailText><WalletDetailsSubText>Jul 6, 2021</WalletDetailsSubText></WalletDetail>
        <TransactionTitle>+$1,840.69</TransactionTitle>
       </WalletWraper>
       <WalletWraper>
        <ViewIcon><Icon name={ICON_NAME.directiondown}/></ViewIcon>
        <WalletDetail><WalletDetailText>Received from Rise Plan (SAVE FOR SCHOOL)</WalletDetailText><WalletDetailsSubText>Jun 19, 2021</WalletDetailsSubText></WalletDetail>
        <TransactionTitle>+$528.04</TransactionTitle>
       </WalletWraper>
        </KeyboardAwareScrollView>
        
        </ScreenWrapper>
        </>
  )
}


export default ViewPlans