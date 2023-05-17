import { View, Text, FlatList } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { ScreenWrapper } from '../../../components/shared/common/styles';
import Header from '../../../components/shared/Header/CreatePlanHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spacing} from '../../../components/shared';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {  Icon,
  ICON_NAME,
  MARGIN_SIZES,
  BaseTextInput,
  INPUT_MODES,
  BUTTON_TYPES,
  Button } from '../../../components/shared';
  import {
    MainTabStackParamList,
    RootStackParamList,
    ROOT_ROUTES,
    StackParamList,
    STACK_TAB
  } from '../../../navigation/typing';

import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { SmallText } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {getAllPlanActions} from "../../../redux/actions/plans"
import { planProps } from '../../../redux/reducers/plans';
import {PlansCard, Plantext,  PlanShowView} from "./style"
import { useNavigation } from '@react-navigation/native';


type NavigationProps = CompositeNavigationProp<
NativeStackNavigationProp<MainTabStackParamList, 'Plans'>,
NativeStackNavigationProp<RootStackParamList>
>

const RenderItem =(item:any)=>{
  console.log(item.item.id)
const navigation = useNavigation()
return  (<PlansCard onPress={()=> navigation.navigate(ROOT_ROUTES.STACK_TAB, {screen:STACK_TAB.SINGLE_PLAN, params:{params:item.item.id}})}>
  <Plantext>${item?.item.plan_name}</Plantext>
  < PlanShowView><Plantext>${item?.item.target_amount}</Plantext>
  <Icon name={ICON_NAME.arrowpoint} direction='right' color='#FFFFFF' />
  </PlanShowView>
 
  </PlansCard>
  
)

}


const Plan = () => {
  const [token, setToken] = useState();
  const plans = useSelector((state:planProps)=> state?.investment.plans)
  const dispatch:any = useDispatch()

  const bootsrap = async ()=>{
    try{
      const loginUser:any = await AsyncStorage.getItem('token');
      const hasAuth = JSON.parse(loginUser)
        console.log(hasAuth)
        setToken(hasAuth)
      
    }catch(err){
  console.log(err)
    }
  }


console.log(plans, 'it')
  useEffect(()=>{
    bootsrap()
    if(token){
      dispatch(getAllPlanActions(token))
    }
  
  },[token])


  return (
   
    <ScreenWrapper>
 

       <Spacing direction="vertical" size={MARGIN_SIZES.small} />
       <Header title={'Choose from your plans'} icon={<Icon name={ICON_NAME.backbutton}/>}/>
       
        <SmallText>Tap on any of the plans to select</SmallText>
        {
          plans? 
          
          <FlatList 
          data={plans}    
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <RenderItem item={item}/>}
          numColumns={2}
            />
          
          :null
        }
   
  
 </ScreenWrapper>
    
  
  )
}

export default Plan