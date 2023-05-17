import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import React from 'react'
import { ICON_NAME, Icon } from '../index';
import {PlanViewHeaderWrapper, PlanViewTitleHeadWrapper, 
  PlanViewTitleText, PlanViewSubTitleText, PlanViewTitleView, HeaderIconWrapper} from './style';

const PlanView = () => {
  const navigation = useNavigation();
  return (
    <>
     <StatusBar backgroundColor="#FC9842" barStyle="light-content" />
    <PlanViewHeaderWrapper>
      <PlanViewHeaderWrapper>
        <HeaderIconWrapper  onPress={() => navigation.goBack()}>
        <Icon name={ICON_NAME.backbtnshadow}/>
        </HeaderIconWrapper>
        <PlanViewTitleView>
          <PlanViewTitleText>Start a business</PlanViewTitleText>
          <PlanViewSubTitleText>for Kate Ventures</PlanViewSubTitleText>
        </PlanViewTitleView>
        <HeaderIconWrapper>
        <Icon name={ICON_NAME.moresetting}/>
        </HeaderIconWrapper>
      </PlanViewHeaderWrapper>
    </PlanViewHeaderWrapper>
    </>
  )
}

export default PlanView