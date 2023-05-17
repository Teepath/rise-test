import React,{useCallback, useState} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../../redux/actions/auth';
import { loginProps } from '../../../redux/reducers/signin';
import {useTheme} from 'styled-components';
import {
  BaseTextInput,
  Button,
  BUTTON_TYPES,
  Icon,
  ICON_NAME,
  INPUT_MODES,
  MARGIN_SIZES,
} from '../../../components/shared';
import {
  FormFooterText,
  HorizontalWrapper,
  Link,
  ScreenTitle,
  ScreenWrapper,
} from '../../../components/shared/common/styles';
import GoBack from '../../../components/shared/GoBack';
import Spacing from '../../../components/shared/Spacing';
import {
  AUTHENTICATION_ROUTES,
  AuthStackParamList,
  RootStackParamList,
  ROOT_ROUTES,
} from '../../../navigation/typing';
import { ValidText, ValidView } from '../SignUpForm/styles';

type LoginFormNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, 'LoginForm'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const Login = () => {
  const theme = useTheme();
  const dispatch:any = useDispatch()
  const [token, setToken] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false);
  const error = useSelector((state:loginProps) => state.login?.error)
  const loading =  useSelector((state:loginProps) => state.login?.loading)
  const navigation = useNavigation<LoginFormNavigationProps>();
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const [errors, setErrors] = useState<any>({})
  const [data, setData] = useState<any> ({
    email_address:"",
    password:""
  })

  const togglePasswordVisibility = React.useCallback(
    () => setHidePassword(v => !v),
    [],
  );


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


  const isValidation=(fieldName:string)=>{
    let errors:any={};
   switch(fieldName){
       case 'email_address':
           if(!data.email_address){
               errors.email_address= "Please, enter your email"
           }
           break;
        case 'password':
            if(!data.password){
                errors.password= 'Please, enter your password'
            }
        break;
        default:
            return null
   }

   if(Object.keys(errors).length > 0){
       setErrors(errors)
   }else{
       setErrors({})
   }

}

const handleSubmit = ()=>{
  
    let dataCredential = {
      email_address: data.email_address.toLowerCase(),
      password:data.password
    }

      dispatch(LoginUser(dataCredential));

      navigation.navigate('LoginMessage')
}


const disabledBtn = ()=>{
  return data.email_address ==""||data.password=="" ;
}

console.log(data, 'dt')

  return (
    <ScreenWrapper>
      <SafeAreaView>
        {/* <GoBack /> */}
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <ScreenTitle>Welcome back</ScreenTitle>
        <Spacing direction="vertical" />
        <FormFooterText>Let’s get you logged in to get back to building your dollar-denominated investment portfolio.</FormFooterText>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <BaseTextInput
          placeholder="Email address"
          autoFocus
          onChangeText={(text) => setData({...data, email_address: text})}
          helperText={errors?errors["email_address"]: null} 
          mode={errors['email_address'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('email_address')}
          returnKeyLabel="next"
          returnKeyType="next"
          fill
        />
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <BaseTextInput
          placeholder="Enter Password"
          autoComplete="name"
          autoFocus
          onChangeText={(text) => setData({...data, password: text})}
          helperText={errors?errors["password"]: null} 
          mode={errors['password'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('password')}
          secureTextEntry={hidePassword}
          fill
          rightIcon={() =>
            !hidePassword ? (
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <Icon name={ICON_NAME.eye} />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <Icon name={ICON_NAME.eyeSlash} />
              </TouchableWithoutFeedback>
            )
          }
        />
        <Spacing direction="vertical" />
        <HorizontalWrapper justify="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(AUTHENTICATION_ROUTES.FORGOT_PASSWORD_FORM)
            }>
            <Link>I forgot my password?</Link>
          </TouchableOpacity>
        </HorizontalWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <Button
          type={BUTTON_TYPES.primary}
          text="Login"
          disabled={disabledBtn()}
          loading={loading}
          fill
          onPress={() => handleSubmit()}
        />
        <Spacing direction="vertical" size={MARGIN_SIZES.large} />
       
        <Spacing direction="vertical" size={MARGIN_SIZES.large} />
        <ValidView><ValidText>{error}</ValidText></ValidView>
      
        <Spacing direction="vertical" size={MARGIN_SIZES.large} />
        <HorizontalWrapper justify="center">
          <FormFooterText>Don't have an account?</FormFooterText>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROOT_ROUTES.AUTHENTICATION, {screen:'SignUpForm'})
            }>
            <Link> Sign Up</Link>
          </TouchableOpacity>
        </HorizontalWrapper>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default Login;
