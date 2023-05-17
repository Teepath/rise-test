import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RegisterState } from '../../../redux/reducers/auth';
import { User } from '../../../redux/type';
import { SignUpAction } from '../../../redux/actions/auth';
import axios from 'axios';
import {
  ActivityIndicator,
  Linking,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
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
  VerticalWrapper,
} from '../../../components/shared/common/styles';
import GoBack from '../../../components/shared/GoBack';
import Spacing from '../../../components/shared/Spacing';
import SignupTwo from './signup2';

import {
  AUTHENTICATION_ROUTES,
  AuthStackParamList,
} from '../../../navigation/typing';
import {SignUpFormFooterText,
   ValidationWrapper,
   CheckView,
   ValidView,
   ValidText
 } from './styles';

type NavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AUTHENTICATION_ROUTES.SIGN_UP_FORM
>;

const SignUpForm = () => {
  
  const loading = useSelector((state:RegisterState)=> state.register?.loading);
  const navigation = useNavigation<NavigationProp>();
  const [isUniqueChar, setisUniqueChar] = useState(false);
  const [isUpperCase, setUpperCase] = useState(false)
  const [isEightCase, setEightCase] = useState(false)
  const [signupOne, setSignupOne] = useState(false);
  const [errors, setErrors] = useState<any>({})
  const [user, setUser] = useState<User>({
    first_name:"",
    last_name:"",
    email_address:"",
    password:"",
    username:"",
    date_of_birth:"",
    phone_number:''
    
  })
  const dispatch:any = useDispatch()

  const [hidePassword, setHidePassword] = React.useState<boolean>(true);

  const togglePasswordVisibility = React.useCallback(
    () => setHidePassword(v => !v),
    [],
  );

  // const handleExternalLink = React.useCallback(async () => {
  //   await Linking.openURL('xx');
  // }, []);




  const isValidation=(fieldName:string)=>{
    let errors:any={};
       switch(fieldName){
           case 'email_address':
               if(!user.email_address){
                   errors.email_address= "Email is required"
               }
               if(!user.email_address.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                   errors.email_address = "Please enter your email with proper format"
               }
               break;
            case 'password':
            
                if(user.password.length < 8 ){
                    errors.password= 'Password is too short and must include number and letters'
                    setEightCase(false)
                    
                }
              
              
            break;
            case "first_name":
                if(!user.first_name){
                    errors.first_name = "Field must not be empty"
                }
            
          
                break;
            case "last_name":
                if(!user.last_name){
                    errors.last_name = "Field must not be empty"
                }
                break;
                case "username":
                  if(!user?.username){
                      errors.username = "Field must not be empty"
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


    const handleSubmit =async ()=>{
      const userData:User={
          first_name: user.first_name,
          last_name:user.last_name,
          email_address:user.email_address.toLowerCase(),
          password:user.password,
          phone_number:user.phone_number,
          username:user.username,
          date_of_birth:user.date_of_birth
        
      }
          if(signupOne){
            dispatch(SignUpAction(userData));     
            navigation.navigate(AUTHENTICATION_ROUTES.FORM_MESSAGE)
          }
       

    }


      const handlePassword = (text:string)=>{
        if(text.length >= 8){
            setEightCase(true) 
        }
        const isUpper = /[A-Z]/.test(text);
        const isSpecial = /[!@#$%^&*?]/.test(text);

        if(isUpper){
          console.log(isUpper)
          setUpperCase(true)
        }

        if(isSpecial){
          setisUniqueChar(true)
        }
        if(text.length >= 8){
          setEightCase(true)
        }

        setUser({...user, password:text})
      }


      const isValid = ()=>{
       return !user.first_name || !user.last_name || !user.email_address || !user.password || !user.date_of_birth
      }

      console.log(user,'user')
      console.log(errors, 'errors')
      console.log(isValid(), 'che k')

  return (
    <ScreenWrapper>
      {
        !signupOne?

        <SafeAreaView>
        {/* <GoBack /> */}
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <ScreenTitle>Create an account</ScreenTitle>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <FormFooterText>Start building your dollar-denominated 
investment portfolio</FormFooterText>
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <BaseTextInput
          label="Email"
          placeholder="Email address"
          autoComplete="email"
          onChangeText={(text)=> setUser({...user, email_address:text})} 
          helperText={errors["email_address"] ? errors["email_address"] : null} 
          mode={errors['email_address'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('email_address')}
          returnKeyLabel="next"
          returnKeyType="next"
          keyboardType="email-address"
          fill
        />
       
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <BaseTextInput
          label="Password"
          placeholder="Password"
          onChangeText={(text)=> handlePassword(text) } 
          helperText={errors["password"] ? errors["password"] : null} 
          secureTextEntry={hidePassword}
          mode={errors['password'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('password')}
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
          fill
        />
        <Spacing direction="vertical" size={MARGIN_SIZES.small} />

        <ValidationWrapper>
          <CheckView>
            {
              !isEightCase? 
              <Icon name={ICON_NAME.unchecked} />
              :

              <Icon name={ICON_NAME.checked} />
            }
          
          </CheckView>
          <ValidView>
            <ValidText>Minimum of 8 characters</ValidText>
          </ValidView>

        </ValidationWrapper>

        <ValidationWrapper>
          <CheckView>
            {
              !isUpperCase
              ? 
              <Icon name={ICON_NAME.unchecked} />
              :
              

              <Icon name={ICON_NAME.checked} />
            }
          
          </CheckView>
          <ValidView>
            <ValidText>One UPPERCASE character</ValidText>
          </ValidView>

        </ValidationWrapper>
        <ValidationWrapper>
          <CheckView>
            {
              !isUniqueChar?
              <Icon name={ICON_NAME.unchecked} />

              :
              <Icon name={ICON_NAME.checked} />

            }
        
          </CheckView>
          <ValidView>
            <ValidText>One unique character (e.g: !@#$%^&*?)</ValidText>
          </ValidView>

        </ValidationWrapper>


     
     
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />

        {
          isEightCase && isUniqueChar && isUpperCase && !errors.email_address?
          <Button
          type={BUTTON_TYPES.primary}
          text="Continue"
          fill
          onPress={() =>
            setSignupOne(true)
          
          }
        />

          :

          <Button
          type={BUTTON_TYPES.primaryALT}
          text="Continue"
          disabled={true}
          fill
          // onPress={() =>
          //   navigation.navigate(AUTHENTICATION_ROUTES.VERIFY_OTP_FORM, {
          //     origin: 'new-account',
          //   })
          // }
        />

        }
      
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <VerticalWrapper>
          <HorizontalWrapper>
            <FormFooterText>Already have an account?</FormFooterText>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(AUTHENTICATION_ROUTES.LOGIN_FORM)
              }>
              <Link> Login</Link>
            </TouchableOpacity>
          </HorizontalWrapper>
        </VerticalWrapper>
      </SafeAreaView>


        :
        // user, setUser, errors, isValidation
        <>
      <SignupTwo user={user} setUser={setUser} errors={errors} isValidation={isValidation}/>
        <Button
          type={BUTTON_TYPES.primary}
          text="Continue"
          disabled={isValid()}
          fill
          onPress={() =>
          handleSubmit()
          
          }
        />
        </>


      }
    
    </ScreenWrapper>
  );
};

export default SignUpForm;
