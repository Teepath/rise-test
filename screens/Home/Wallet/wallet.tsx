import { View, Text, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { ScreenWrapper } from '../../../components/shared/common/styles';
import Header from '../../../components/shared/Header/CreatePlanHeader';
import React, { useEffect } from 'react'
import { BottomModal } from '../../../components/shared';
import {Spacing, BOTTOM_MODAL_SIZE} from '../../../components/shared';
import {  Icon,
  ICON_NAME,
  MARGIN_SIZES,
  BaseTextInput,
  INPUT_MODES,
  BUTTON_TYPES,
  Button } from '../../../components/shared';
  import {TransferInfoWraper,  
    TransferViewDetails, 
    TrasferDetailsTitleText,TransferSubText,
    TransferAmountDetails,
    TransferAmountText,
    AmountSubText, ModalWrapperTitle,ModalTitleView,
    ModalTitleText, DetailsWrapper, DetailsView,
    ExchageText,RateInfoView,RateInfoText
  } from './style'
  import{planProps}from "../../../redux/reducers/plans"
    import {ViewIcon} from '../Plan/style'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {getRate} from "../../../redux/actions/plans"
import AsyncStorage from '@react-native-async-storage/async-storage';




    type CloseProps={
      close:(bool:boolean)=> void;
    
  }
const TransferComponent = ({close}:CloseProps)=>{
  const dispatch :any= useDispatch()
  const[token, setToken] = React.useState(null)
  const rate = useSelector((state:planProps)=> state?.investment.rates)

  const bootsrap = async ()=>{
    try{
      const loginUser:any = await AsyncStorage.getItem('token');
      const hasAuth = JSON.parse(loginUser)
        console.log(hasAuth)
        setToken(hasAuth)
        dispatch(getRate(hasAuth))
        
        
    }catch(err){
  console.log(err)
    }
  }

  useEffect(()=>{
    bootsrap()
  },[])

  console.log(rate, 'rate')
  const navigation = useNavigation()
  return(<>
  <ModalWrapperTitle><TouchableOpacity onPress={()=> close(false)}><Icon name={ICON_NAME.cancel}/></TouchableOpacity>
  <ModalTitleView><ModalTitleText>About Exchange Rates</ModalTitleText></ModalTitleView>
  </ModalWrapperTitle>

  <DetailsWrapper><DetailsView><TrasferDetailsTitleText>USD Buy Rate</TrasferDetailsTitleText><TransferAmountText>We buy US dollars at this rate</TransferAmountText></DetailsView><ExchageText>₦{rate?rate["buy_rate"] : '₦490'}</ExchageText></DetailsWrapper>
  <DetailsWrapper><DetailsView><TrasferDetailsTitleText>USD Sell Rate</TrasferDetailsTitleText><TransferAmountText>The current value of your investments in Naira</TransferAmountText></DetailsView><ExchageText>₦{rate?rate['sell_rate']:'₦490'}</ExchageText></DetailsWrapper>
  <Spacing direction="vertical" size={MARGIN_SIZES.small} />
  <RateInfoView><RateInfoText>These exhange rates are provided by independent third parties who handle fund conversions at the prevailing parallel rates and are not set, or controlled or by Rise. They are subject to change based on market trends.</RateInfoText></RateInfoView>
  <Spacing direction="vertical" size={MARGIN_SIZES.small} />
  <View style={{padding:20}}>
  <Button
      type={BUTTON_TYPES.primary}
      text="Accept and Continue"
      fill
      onPress={() =>close(false)}
    />
  </View>
 
  
  </>

  )
}




const Wallet = () => {

  const[isLoading, setIsLoading] = React.useState(false)
  const [isModalVisible, setIsModalVisible]= React.useState<boolean>(false)

  const changeModalVisibility = (bool:boolean)=>{
    setIsModalVisible(bool)
}

  const handleClick =()=>{
      setIsLoading(true)
      // navigation.navigate("OrderTab", {screen:"Package-Info"})}
      changeModalVisibility(true)
      setIsLoading(false)
     
  }
  return (
    <ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <Header title={'Fund Wallet'} icon={<Icon name={ICON_NAME.cancel}/>}/>
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <TransferInfoWraper onPress={()=> handleClick()}>
      <Icon name={ICON_NAME.home}/>
      <TransferViewDetails><TrasferDetailsTitleText>Naira Bank Transfer</TrasferDetailsTitleText><TransferSubText>Timeline  -15mins</TransferSubText></TransferViewDetails>
      <TransferAmountDetails><TransferAmountText>Rate - $=N500</TransferAmountText><AmountSubText>Fee-15%</AmountSubText></TransferAmountDetails>
    </TransferInfoWraper>
    <TransferInfoWraper onPress={()=> handleClick()}>
      <Icon name={ICON_NAME.fundwheel}/>
      <TransferViewDetails><TrasferDetailsTitleText>Naira Bank Transfer</TrasferDetailsTitleText><TransferSubText>Timeline  -15mins</TransferSubText></TransferViewDetails>
      <TransferAmountDetails><TransferAmountText>Rate - $=N500</TransferAmountText><AmountSubText>Fee-15%</AmountSubText></TransferAmountDetails>
    </TransferInfoWraper>
    <TransferInfoWraper onPress={()=> handleClick()}>
      <Icon name={ICON_NAME.home}/>
      <TransferViewDetails><TrasferDetailsTitleText>Naira Bank Transfer</TrasferDetailsTitleText><TransferSubText>Timeline  -15mins</TransferSubText></TransferViewDetails>
      <TransferAmountDetails><TransferAmountText>Rate - $=N500</TransferAmountText><AmountSubText>Fee-15%</AmountSubText></TransferAmountDetails>
    </TransferInfoWraper>
    <TransferInfoWraper onPress={()=> handleClick()}>
      <Icon name={ICON_NAME.fundwheel}/>
      <TransferViewDetails><TrasferDetailsTitleText>Naira Bank Transfer</TrasferDetailsTitleText><TransferSubText>Timeline  -15mins</TransferSubText></TransferViewDetails>
      <TransferAmountDetails><TransferAmountText>Rate - $=N500</TransferAmountText><AmountSubText>Fee-15%</AmountSubText></TransferAmountDetails>
    </TransferInfoWraper>
    </KeyboardAwareScrollView>
    <BottomModal
      visible={isModalVisible}
      onRequestClose={()=>changeModalVisibility(false)}
      // handlePress={()=>navigation.navigate("MainTab", {screen:"Order"})}
    //   content={content}
    children={<TransferComponent close={changeModalVisibility}/>}
    size={BOTTOM_MODAL_SIZE.large}
     />
    </ScreenWrapper>
  )
}

export default Wallet