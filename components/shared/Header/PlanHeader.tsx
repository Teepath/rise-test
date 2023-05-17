import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import {useNavigation} from '@react-navigation/native';
import { HeaderWrapper, TitleWrapper, TitleText } from './style'



type Props ={
    icon?: ReactNode,
    title: String,
    // handleProgress?:(item:any)=> void,
    setPage:(item:any)=> void,
    setCount:(item:any)=> void,
    page:number,
    count:number
}

const PlanHeader = ({icon, title,setCount, setPage, page, count}:Props) => {
    const navigation = useNavigation();


    const checkProgressHandle =()=>{
      if(page=== 1){
        navigation.goBack()
      }
      setCount(()=> count - 33.333)
      setPage(()=> page -1)
    }

    
  return (
    <HeaderWrapper>
     <TouchableOpacity onPress={()=> {
     checkProgressHandle()
      }}>{icon}</TouchableOpacity>
    <TitleWrapper>
        <TitleText>{title}</TitleText>
    </TitleWrapper>
    </HeaderWrapper>
  )
}

export default PlanHeader