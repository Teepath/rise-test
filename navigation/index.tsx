import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import MainTab from './BottomTabNavigation';
import {MODES, OnBoarding} from '../components/shared';
import {AppContext} from '../App';
import {STORAGE_KEYS} from '../constants';
import {RootStackParamList, ROOT_ROUTES} from './typing';
import StackScreen from './StackNav';




const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  const {showOnBoarding} = React.useContext(AppContext);
  const[token, setToken] = React.useState(null)

  const handleGoToMainStack = React.useCallback(async (navigation: any) => {
    await AsyncStorage.setItem(STORAGE_KEYS.userHasVisitedApp, JSON.stringify('True'));
    navigation.navigate('Authentication');
  }, []);


  const bootsrap = async ()=>{
    try{
      const loginUser:any = await AsyncStorage.getItem('token');
      const hasAuth = JSON.parse(loginUser)
        console.log(hasAuth)
        setToken(hasAuth)    
    }catch(err){
  
    }
  }

console.log(token, 'tok')
    React.useEffect(()=>{
      bootsrap()
    }, [])

  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          !showOnBoarding ? 'OnBoarding' : ROOT_ROUTES.AUTHENTICATION
        }
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROOT_ROUTES.ONBOARDING}>
          {({navigation}:any) => (
            <OnBoarding
              mode={MODES.primary}
              goToNextScreen={() => handleGoToMainStack(navigation)}
            />
          )}
        </Stack.Screen>
        {/* <Stack.Group screenOptions={{headerShown: false}}> */}
       
        
        
            <Stack.Screen
            name={ROOT_ROUTES.AUTHENTICATION}
            component={AuthNavigation}
          /> 
<Stack.Screen name={ROOT_ROUTES.MAIN_TAB} component={MainTab} />
            <Stack.Screen name={ROOT_ROUTES.STACK_TAB} component={StackScreen} />



       
      </Stack.Navigator>
    
  
  );
};

export default Navigation;
