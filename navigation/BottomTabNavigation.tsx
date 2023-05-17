import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/home.screens';
import {MainTabStackParamList, MAIN_TAB} from './typing';
import {Icon, ICON_NAME} from '../components/shared';
import {useTheme} from 'styled-components';
import {SCREEN_HEIGHT} from '../components/shared/common/constants';
import {boxShadowStyles} from '../components/shared/common/styles';
import Plan from '../screens/Home/Plan/Plans';
import Wallet from '../screens/Home/Wallet/wallet';
import Feed from '../screens/Home/Feed/feed';
import Account from '../screens/Home/Account/account';

const Tab = createBottomTabNavigator<MainTabStackParamList>();

const MainTab = () => {
  const theme = useTheme();

  const tabBarOptions = (name: ICON_NAME) => ({
    tabBarIcon: (props: {focused: boolean; color: string; size: number}) => (
    
      <Icon
        name={name}
        color={
          props.focused
            ? theme.palette.primary.green200
            : theme.palette.tertiary.grey430
        }
      />
      
    
    ),
    tabBarLabelStyle: {
      fontFamily: theme.fontTypes.body,
      fontSize: theme.fontSizes.tiny,
    },
    tabBarActiveTintColor: theme.palette.primary.green200,
    tabBarInactiveTintColor: theme.palette.tertiary.grey430,
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: {
          height: SCREEN_HEIGHT * 0.101,
          paddingTop: theme.padding.small,
          ...boxShadowStyles,
        },
      }}>
      <Tab.Screen
        name={MAIN_TAB.HOME}
        component={Home}
        options={{
          ...tabBarOptions(ICON_NAME.home),
        }}
      />
       <Tab.Screen
        name={MAIN_TAB.PLANS}
        component={Plan}
        options={{
          ...tabBarOptions(ICON_NAME.plan),
        }}
      />
         <Tab.Screen
        name={MAIN_TAB.WALLET}
        component={Wallet}
        options={{
          ...tabBarOptions(ICON_NAME.wallet),
        }}
      />
        <Tab.Screen
        name={MAIN_TAB.FEED}
        component={Feed}
        options={{
          ...tabBarOptions(ICON_NAME.feed),
        }}
      />
         <Tab.Screen
        name={MAIN_TAB.ACCOUNT}
        component={Account}
        options={{
          // ...tabBarOptions(),
         tabBarIcon:()=>(
          <Image source={require('../assets/images/ewa.png')} style={{width:30, height:30}}/>
         ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default MainTab;
