import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './components/shared/theme';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from './constants';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import store from './redux/store';
// import { useDispatch, useSelector } from 'react-redux';
import AuthNavigation from './navigation/AuthNavigation';
import MainNav from './navigation/MainNav';
import { loginProps } from './redux/reducers/signin';
// import SplashScreen from './screens/Home/SplashScreen';

export const AppContext = React.createContext<{
  showOnBoarding: boolean | undefined;
}>({
  showOnBoarding: false,
});

const App = () => {
  const [showOnBoarding, setShowOnBoarding] = React.useState<
    boolean | undefined
  >(false);
  const [token, setToken] = React.useState('')
  // const data = useSelector((state:loginProps) => state.login?.user)

  /**
   * Initial steps before app launch
   * 1. check if user is a visitor
   */

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
    }, [token])
  const setup = async () => {
    try {
      /**check store to verify is user is a visitor */
      const hasVisited = await AsyncStorage.getItem(
        STORAGE_KEYS.userHasVisitedApp,
      );
      setShowOnBoarding(() => (hasVisited === 'True' ? false : true));
    } catch (err) {
    } finally {
      //no matter what don't keep user in splash screen
      SplashScreen.hide();
    }
  };

  console.log(showOnBoarding)

  React.useEffect(() => {
    (async () => await setup())();
  
  }, [token]);

  const showOnBoardingNotUndefined = showOnBoarding !== undefined;
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{showOnBoarding}}>
        <SafeAreaProvider>
          <NavigationContainer>
              {/* {showOnBoardingNotUndefined ? <Navigation/> : null} */}
        {showOnBoardingNotUndefined ? token?<MainNav />:<Navigation/> : null}
        </NavigationContainer>
        </SafeAreaProvider>
      </AppContext.Provider>
    </ThemeProvider>
    </Provider>
  );
};

export default App;
