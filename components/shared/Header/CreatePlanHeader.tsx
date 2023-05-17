import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import {useNavigation} from '@react-navigation/native';
import { HeaderWrapper, TitleWrapper, TitleText } from './style'



type Props ={
    icon?: ReactNode,
    title: String,
}

const PlanHeader = ({icon, title}:Props) => {
    const navigation = useNavigation();



    
  return (
  <HeaderWrapper><TouchableOpacity onPress={()=> {navigation.goBack() }}>{icon}</TouchableOpacity><TitleWrapper><TitleText>{title}</TitleText></TitleWrapper>
    </HeaderWrapper>
  )
}

export default PlanHeader