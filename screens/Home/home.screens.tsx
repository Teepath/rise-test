import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../components/shared/Header/Header';
import { ScreenWrapper } from '../../components/shared/common/styles';
import { SCREEN_WIDTH } from '../../components/shared/common/constants';
import { Spacing } from '../../components/shared';
import { useSelector, useDispatch } from 'react-redux';
import { loginProps } from '../../redux/reducers/signin';
import{planProps}from "../../redux/reducers/plans"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MainTabStackParamList,
  RootStackParamList,
  ROOT_ROUTES,
} from '../../navigation/typing';
import {
  BaseTextInput,
  Button,
  BUTTON_TYPES,
  Icon,
  ICON_NAME,
  INPUT_MODES,
  MARGIN_SIZES,
} from '../../components/shared';
import { theme } from '../../components/shared/theme';
import { getSeCtion } from '../../redux/actions/auth';
import {getQuoteAction,  getRate} from '../../redux/actions/plans'
import {  configureAxiosHeaders} from '../../utilities'


type NavigationProps = CompositeNavigationProp<
NativeStackNavigationProp<MainTabStackParamList, 'Home'>,
NativeStackNavigationProp<RootStackParamList>
>

const Home = () => {

  const navigation = useNavigation<NavigationProps>();
  const data = useSelector((state:loginProps) => state.login?.user)
  const plans = useSelector((state:planProps)=> state?.investment.plans)
  const quote = useSelector((state:planProps)=> state?.investment.quote)
  const rate = useSelector((state:planProps)=> state?.investment.rates)
  const [showBalance, setShowBalance] = useState(true)
  const[token, setToken] = useState(null)

  const dispatch:any = useDispatch()

  const bootsrap = async ()=>{
    try{
      const loginUser:any = await AsyncStorage.getItem('token');
      const hasAuth = JSON.parse(loginUser)
        console.log(hasAuth)
        dispatch(getQuoteAction(hasAuth)) 
        setToken(hasAuth)
        if(hasAuth && !data.first_name){
          dispatch(getSeCtion(hasAuth))
        
        }
        
    }catch(err){
  console.log(err)
    }
  }

console.log(quote, 'tok')
console.log(rate, 'rt')
    React.useEffect(()=>{
      bootsrap()
    
 
    }, [data, token ])

    React.useEffect(()=>{

      if(token && !rate && !quote){
        
        dispatch(getQuoteAction(token))
        configureAxiosHeaders(token)
      }
    },[rate, quote])

 
  return (
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    <ScreenWrapper>
      <Header />
      <Spacing direction="vertical" size={MARGIN_SIZES.small} />
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity style={styles.wrapper} onPress={()=> setShowBalance(!showBalance)}>
          <Text style={styles.title}>Total Balance </Text>
          {
            showBalance?  <Icon name={ICON_NAME.eye} size={22}/>:  <Icon name={ICON_NAME.eyeSlash} size={22}/>
          }
         
        </TouchableOpacity>
        {
          showBalance?   <Text style={styles.currency}>${data?.total_balance}</Text> :null
        }
     
        <View style={styles.totalWrapper}>
        <Text style={styles.total}>Total Gains </Text>
        <Icon name={ICON_NAME.sidearrow}/>
        <Text style={styles.textgreen}>0.00%</Text>
        <Icon name={ICON_NAME.directionarrow} direction='right'/>
        </View>
        <Icon name={ICON_NAME.indicator} />
        </View>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <TouchableOpacity style={styles.addmoneyBtn} onPress={()=>navigation.navigate(ROOT_ROUTES.STACK_TAB, {screen:'FundWallet'})}><Icon name={ICON_NAME.add}/><Text style={styles.addMoneyText}>Add money</Text></TouchableOpacity>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <View style={styles.createplanwrapper}>
        <View style={styles.createBox}><Text style={styles.createText}>{!plans?'Create a plan':'Your plans'}</Text>
        <TouchableOpacity style={styles.moreView} onPress={()=>navigation.navigate("Plans")}><Text style={[styles.viewText, {color: !plans?'#94A1AD':theme.palette.primary.green200}]}>View all plans</Text><View style={{height:12, alignItems:'center'}}><Icon name={ICON_NAME.directionarrow} direction='right' color={!plans?theme.palette.tertiary.grey300: theme.palette.primary.green200} width={15} height={25}/></View>
        </TouchableOpacity>
        </View>
        {
          !plans?
          <View style={styles.boxDown}><Text style={styles.boxDownText}>Start your investment journey by creating a plan</Text></View>
          : null
        }
     
        </View>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <View style={styles.planWrapper}>
        <TouchableOpacity style={styles.addPlanBox} onPress={()=>navigation.navigate(ROOT_ROUTES.STACK_TAB, {screen:'CreatePlan'})}>
        <Icon name={ICON_NAME.addwithback} />
        <Text style={styles.addPlanText}>Create an investment plan</Text>
        </TouchableOpacity>
        <View style={styles.planBox}>
          {
            plans? <Icon name={ICON_NAME.plancardone} />:null
          }
       
        </View>
        </View>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <View style={[styles.helpWrapper, styles.elevation]}>
          <TouchableOpacity style={styles.helpBox}><Icon name={ICON_NAME.help} /><Text style={styles.helpBoxText}>Need help?</Text></TouchableOpacity>
          <TouchableOpacity style={styles.contactWrapper}><Text>Contact Us</Text></TouchableOpacity>
        </View>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
          <View style={[styles.quoteQrapper, styles.quoteElevation]}>
          <Text style={styles.quoteTitle}>TODAY’S QUOTE</Text>
          <View style={styles.dash}></View>
          <Text style={styles.quoteText}>{quote?quote['quote']:'We have no intention of rotating capital out of strong multi-year investments because they’ve recently done well or because ‘growth’ has out performed ‘value’.'}</Text>
          <View style={styles.shareWrapper}><Text style={styles.quoteAuthor}>{quote?quote['author']:'Carl Singer'}</Text><TouchableOpacity><Icon name={ICON_NAME.share}/></TouchableOpacity></View>
          </View>
          <Spacing direction="vertical" size={MARGIN_SIZES.small} />
          <View style={styles.logoWrapper}><Icon name={ICON_NAME.logo}/></View>
     </ScreenWrapper>
     </KeyboardAwareScrollView>
  )
}



const styles = StyleSheet.create({

  elevation:{
      backgroundColor: '#ffffff',
      shadowColor: '#000000',
      elevation: 20,
      shadowOpacity: 0.07,
      shadowRadius: 24,
      shadowOffset: {
        height: 6,
        width: 6,
      },
  },
  card:{
      marginTop:20,
      width:SCREEN_WIDTH-45,
      height: 175,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
      padding:20
  
  },

  wrapper:{
    height:22,
    flexDirection:'row',
    width:115,
    justifyContent:'center',
    alignItems:'center'

  },

  title:{
    fontFamily:theme.fontTypes.body,
    fontSize:16,
    textAlign:'center',
    color:'black',
    lineHeight:22
  },
  currency:{
  fontFamily:theme.fontTypes.h1,
  color:'black',
  fontSize:theme.fontSizes.h1
  },

  totalWrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:6,
    width:142,
    height:22
  },

  total:{
    fontFamily:theme.fontTypes.body,
    color: '#71879C',
    fontSize: 12,
  },

  textgreen:{
    color: '#27BF41',
    fontSize:13
  },

  addmoneyBtn:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:56,
    borderRadius:10,
    backgroundColor:'#FFFFFF',
   borderStyle:'solid',
   borderColor:'#d5d5d5',
   borderWidth:1,

    width:'100%'
  },
  createplanwrapper:{
    height:66,
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center'
  },

  createBox:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',

  },
  createText:{
    fontFamily: theme.fontTypes.h1,
    fontWeight: '600',
    fontSize:18,
    lineHeight:22,
    color:'#000000'

  },

  viewText:{
    fontFamily: theme.fontTypes.body,
    fontWeight:'700',
    lineHeight:18
  },

  moreView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'35%',
  },
  boxDown:{
    fontFamily: theme.fontTypes.body,
    width:'100%',
  },

  boxDownText:{
    color:'#71879C',
  },
  planWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'110%',
  },
  addPlanBox:{
    height:243,
    backgroundColor:theme.palette.tertiary.grey100,
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },

  addPlanText:{
    color: '#333333',
    marginTop:20,
    fontFamily: theme.fontTypes.h1,
    fontWeight:'700',
    width:'70%',
    textAlign:'center',
    fontSize:14,
    lineHeight:18


  },

  planBox:{
  height:243,
  },

  helpWrapper:{
    width:'100%',
    height:66,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    borderRadius:12,

  },
  helpBox:{
    flexDirection:'row',
    width: '30%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  helpBoxText:{
    color:'#171C22',
    fontSize:15,
    fontWeight:'700',
    fontFamily:theme.fontTypes.body
  },
  contactWrapper:{
    backgroundColor:'#0898A0',
    width:'40%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    height:42,
    borderRadius:6
  },
  quoteQrapper:{
    backgroundColor:'#0898A0',
    height:261,
    justifyContent:'space-around',
    padding: 20,
    borderRadius:15
  },
  quoteTitle:{
    fontFamily: theme.fontTypes.h1,
    fontWeight:'800',
    fontSize:15,
    lineHeight:18,
    color: '#FFFFFF',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  dash:{
    width:40,
    height:4,
    backgroundColor:'#FFFFFF',
    marginTop:10
  },
  quoteElevation:{
    shadowColor: '#0898A0',
    elevation: 20,
    shadowOpacity: 0.07,
    shadowRadius: 24,
    shadowOffset: {
      height: 6,
      width: 6,
    },
  },
  quoteText:{
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'400',
    fontFamily:theme.fontTypes.body,
    lineHeight:22
  },
  shareWrapper:{
    height:44,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  quoteAuthor:{
    color:'#FFFFFF',
    fontFamily: theme.fontTypes.h1,
    fontSize:15,
    fontWeight:'400'
  },
  logoWrapper:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },

  addMoneyText:{
    color:theme.palette.primary.green200,
    fontSize:15,
    padding:10,
    fontFamily: theme.fontTypes.h1,
    fontWeight:'800'
  }

  })

export default Home