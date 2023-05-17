import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Header from '../../../components/shared/Header/CreatePlanHeader';
import {getASinglePlanActions} from "../../../redux/actions/plans"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { planProps } from '../../../redux/reducers/plans'
import {SinglePlanWrapper, Plantext }from './style'
import moment from 'moment';
import {  Icon,
  ICON_NAME,
  MARGIN_SIZES,
  BUTTON_TYPES,
  Button } from '../../../components/shared';

const Plans = () => {
  const route = useRoute();
  const dispatch:any = useDispatch();
  const plan = useSelector((state:planProps)=> state?.investment.plan)
  const params:any= route.params;
  const [token, setToken] = useState(null)

const id= params['params'];

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




useEffect(()=>{
  bootsrap()
  if(token){
    dispatch(getASinglePlanActions(id, token))
  }

},[])

console.log(plan,'pl')

  return (<>
    <Header title={'Plan'} icon={<Icon name={ICON_NAME.backbutton}/>}/>

    <SinglePlanWrapper>
    <Plantext>INVESTMENT NAME: {plan?.plan_name} </Plantext>
    <Plantext>MATURITY DATE:{moment(plan?.maturity_date).format('YYYY-MM-DD')}</Plantext>
    <Plantext>TARGET AMOUNT: ${ plan?.target_amount} </Plantext>
    <Plantext>TOTAL RETURN: ${plan?.total_returns} </Plantext>
    </SinglePlanWrapper>
    </>
  )
}

export default Plans