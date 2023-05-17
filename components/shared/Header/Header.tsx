import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { loginProps } from '../../../redux/reducers/signin';

import {HeaderWrapper, 
    GreatingWrapper,
     GreetingText,
      UserNameText,
      InfoTabWrapper, InfoEarnTab,
      InfoEarnTabText, NotificationView,
       NotifyCount, CountText } from './style';
import { Icon, ICON_NAME } from '../';
import { theme } from '../theme';

const Header = () => {
  const data = useSelector((state:loginProps) => state.login?.user)

  console.log(data)
  return (
    <HeaderWrapper>
      <GreatingWrapper><GreetingText>Good morning ☀</GreetingText><UserNameText>{data?.first_name}</UserNameText></GreatingWrapper>
        <InfoTabWrapper><InfoEarnTab><InfoEarnTabText>Earn 3% bonus</InfoEarnTabText></InfoEarnTab> 
        <NotificationView><NotifyCount><CountText>9+</CountText></NotifyCount><Icon name={ICON_NAME.notification} color={theme.palette.primary.green200}/></NotificationView>
        </InfoTabWrapper>
    </HeaderWrapper>
  )
}

export default Header