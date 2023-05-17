import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { theme } from '../../../components/shared/theme';
import {View, Text, Image} from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { User } from '../../../redux/type';
import {
  BaseTextInput,
  Button,
  BUTTON_TYPES,
  Icon,
  ICON_NAME,
  INPUT_MODES,
  Dropdown,
  MARGIN_SIZES,
} from '../../../components/shared';

import {
  FormFooterText,
  Link,
  ScreenTitle,
  ExternalLink,
  ScreenWrapper,
  VerticalWrapper,
} from '../../../components/shared/common/styles';
import GoBack from '../../../components/shared/GoBack';
import Spacing from '../../../components/shared/Spacing';
import MyCalendar from "../../../components/shared/Calendars/Calendar"

import {
  AUTHENTICATION_ROUTES,
  AuthStackParamList,
} from '../../../navigation/typing';
import {SignUpFormFooterText,
  
 } from './styles';

type NavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  AUTHENTICATION_ROUTES.SIGN_UP_FORM
>;




const PhoneWrapper = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
`;
const Picker = styled.View`
width:30%;
height: 82%;
border-radius: 5px;
border:1px solid grey
`;
const InputBox = styled.View`
width: 70%;
top:1%;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${theme.palette.primary.green100};
  font-family: ${theme.fontTypes.body};
`;


export const HorizontalWrapper = styled.View`
  flex-direction: row;
  top:30%;
  padding:2%
  align-items: space-around;
  justify-content: center;
  margin-bottom:10%;
  `;

  const PAGE_SIZE = 10;

  interface UserProps{
    user:User;
    errors:any;
    isValidation: (fieldName: string)=> void;
    setUser: (user:User)=> void;
}

const signup2:React.FC<UserProps> = ({user, setUser, errors, isValidation}) => {
const navigation = useNavigation<NavigationProp>();
const [selected, setSelected] = useState<any>({})
// const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendar, setIsCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

const [country, setCountry] = useState([])



const fetchItems = async (pageNumber:number) => {
  setIsLoading(true);
  try {
    const response = await fetch(`https://restcountries.com/v2/all?_page=${pageNumber}&_limit=${PAGE_SIZE}`);
    const newData = await response.json();
    newData.sort((a, b)=>a-b)
    setCountry(newData);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
    setIsRefreshing(false);
  }
};

const handleLoadMore = () => {
  if (!isLoading) {
    setPage((prevPage) => prevPage + 1);
  }
};

const handleRefresh = () => {
  if (!isLoading) {
    setPage(1);
    setIsRefreshing(true);
  }
};

const toggleCalendar = ()=>{
  setIsCalendar(!isCalendar)
  setUser({...user, date_of_birth:selectedDate})
}

useEffect(()=>{
    fetchItems(page)
},[])

console.log(selected?.callingCode, 'sel')

  return (
    <KeyboardAwareScrollView  enableOnAndroid={true} style={{marginBottom:0}}> 
    <SafeAreaView>
    {/* <GoBack /> */}
    <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
    <ScreenTitle>Tell Us More About You</ScreenTitle>
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
    <FormFooterText>Please use your name as it appears on your ID.</FormFooterText>
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <BaseTextInput
          label="First Name"
          placeholder="Firstname"
          autoComplete="name"
          autoFocus
          onChangeText={(text)=> setUser({...user, first_name:text})} 
          helperText={errors["first_name"] ? errors["first_name"] : null} 
          mode={errors['first_name'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('first_name')}
          returnKeyLabel="next"
          returnKeyType="next"
        
          fill
        />
       {/* <Spacing direction="vertical" size={MARGIN_SIZES.small} /> */}
        <BaseTextInput
          label="Last Name"
          placeholder="Lastname"
          autoComplete="name"
          onChangeText={(text)=> setUser({...user, last_name:text})} 
          helperText={errors["last_name"] ? errors["last_name"] : null} 
          mode={errors['last_name'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('last_name')}
          returnKeyLabel="next"
          returnKeyType="next"
          fill
        />
{/* <Spacing direction="vertical" size={MARGIN_SIZES.small} /> */}
        <BaseTextInput
          label="Nickname"
          placeholder="Nickname"
          autoComplete="name"
          onChangeText={(text)=> setUser({...user, username:text})} 
          helperText={errors["username"] ? errors["username"] : null} 
          mode={errors['username'] ?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('username')}
          returnKeyLabel="next"
          returnKeyType="next"
          fill
        />
        {/* <Spacing direction="vertical" size={MARGIN_SIZES.small} /> */}
    <View>
      <Label>Phone</Label>
      <PhoneWrapper>
<Picker>
<Dropdown data={country} onSelect={({flags,callingCodes})=>setSelected({callingCodes:callingCodes[0], flag:flags.png})} 
handleLoadMore={handleLoadMore} handleRefresh={handleRefresh}
isLoading={isLoading}
isRefreshing={isRefreshing}
>
          <HorizontalWrapper>
            <><Image source={{uri:selected.flag?selected.flag:"https://flagcdn.com/w320/ng.png"}} style={{width:20, height:20}}/>
            <Text style={{marginRight:5, marginLeft:5, color:'black', fontWeight:500}}>{selected?.callingCodes?`+${selected?.callingCodes}`:'+234'}</Text>
            </>
               
                <Icon
                  name={ICON_NAME.arrow}
                  direction="down"
                />
              </HorizontalWrapper>
          </Dropdown>
          </Picker>
      {/* </CodePicker> */}
      <InputBox>
           <BaseTextInput
          width={75}
          placeholder=""
          autoComplete="tel"
          onChangeText={(text)=> setUser({...user, phone_number:selected?.callingCodes?`+${selected?.callingCodes}${text}`:`+234${text}`})} 
          mode={INPUT_MODES.default}
          returnKeyLabel="next"
          returnKeyType="next"
          keyboardType="phone-pad"
    />

</InputBox>
      </PhoneWrapper>

    </View>
    {/* <Spacing direction="vertical" size={MARGIN_SIZES.small /> */}
    <BaseTextInput
          label="Date of birth"
          placeholder="Choose a date"
          mode={INPUT_MODES.default}
          fill
          value={selectedDate}
          editable={false}
          rightIcon={()=>(
            <TouchableWithoutFeedback onPress={toggleCalendar}>
          <Icon name={ICON_NAME.calendar} color={theme.palette.primary.green200} />
          </TouchableWithoutFeedback>
  )}
        />

        {
          isCalendar? 
          
    <MyCalendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} isPlan={false} setUser={setUser} user={user}/>

    : null

        }

<Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <VerticalWrapper>
          <SignUpFormFooterText>
            By creating an account, you have agreed to our
          </SignUpFormFooterText>
          <TouchableOpacity onPress={()=>console.log('nothing')}>
            <View style={{flexDirection:'row'}}>
            <ExternalLink>Terms of Service  </ExternalLink><Text>and   </Text><ExternalLink>Privacy Policy  </ExternalLink>
            </View>
           
          </TouchableOpacity>
        </VerticalWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />



        {/* <Button
      type={BUTTON_TYPES.primary}
      text="Continue"
      fill
      onPress={() =>
        navigation.navigate(AUTHENTICATION_ROUTES.FORM_MESSAGE)}
    /> */}


      {/* <Button
      type={BUTTON_TYPES.primary}
      text="Continue"
      fill
      onPress={() =>
        navigation.navigate(AUTHENTICATION_ROUTES.VERIFY_OTP_FORM, {
          origin: 'new-account',
        })
      }
    /> */}



  

      

      {/* <Button
      type={BUTTON_TYPES.primaryALT}
      text="Continue"
      disabled={true}
      fill
      onPress={() =>
        navigation.navigate(AUTHENTICATION_ROUTES.VERIFY_OTP_FORM, {
          origin: 'new-account',
        })
      }
    /> */}

    
  
    <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
    {/* <VerticalWrapper>
      <HorizontalWrapper>
        <FormFooterText>Already have an account?</FormFooterText>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(AUTHENTICATION_ROUTES.LOGIN_FORM)
          }>
          <Link> Login</Link>
        </TouchableOpacity>
      </HorizontalWrapper>
    </VerticalWrapper> */}
  </SafeAreaView>
  </KeyboardAwareScrollView>
  )
}

export default signup2