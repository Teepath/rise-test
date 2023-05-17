import { View, Text,   TouchableWithoutFeedback, } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import PlanHeader from '../../../components/shared/Header/PlanHeader';
import { ScreenWrapper } from '../../../components/shared/common/styles';
import {Spacing} from '../../../components/shared';
import { theme } from '../../../components/shared/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyCalendar from "../../../components/shared/Calendars/Calendar"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import {planActions} from "../../../redux/actions/plans"
import { PageCount, PageCountText, 
    ProgressBar, CountProgressBar, QuestionWrapper, QuestionText, ErrorText, ErrorView} from './style';
import React, {useEffect, useState} from 'react'
import {  Icon,
    ICON_NAME,
    MARGIN_SIZES,
    BaseTextInput,
    INPUT_MODES,
    BUTTON_TYPES,
    Button } from '../../../components/shared';

    import {
        StackParamList,
        STACK_TAB,
      } from '../../../navigation/typing';
import { planProps } from '../../../redux/reducers/plans';
  
    type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  STACK_TAB.PLAN_FORM
>;

const Planform = () => {
    const navigation = useNavigation<NavigationProp>();
    const dispatch:any =useDispatch()
    const error = useSelector((state:planProps)=> state.investment?.error)
    const loading = useSelector((state:planProps)=> state.investment?.loading)
    const plan = useSelector((state:planProps)=> state.investment.plan)
    const [count, setCount] = useState(33.333)
    const [page, setPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState<any>('');
    const [isCalendar, setIsCalendar] = useState(false);
    const[token, setToken] = useState(null)
    const[errors, setErrors] = useState<any>({});
    const [plansData, setPlansData] = useState({
      plan_name:'',
      target_amount:0,
      maturity_date:''
    })

    const handleProgress = ()=>{
      if(page ===1 && plansData?.plan_name){
        setCount((count)=> count + 33.3333);
        setPage((page)=> page+ 1)
      }
      if(page ===2 && plansData.target_amount){
        setCount((count)=> count + 33.3333);
        setPage((page)=> page+ 1)
      }

      if(page ===3 && plansData.maturity_date){
        setCount((count)=> count + 33.3333);
        // setPage((page)=> page+ 1)
      }
      
    }

    const toggleCalendar = ()=>{
        setIsCalendar(!isCalendar)
        setPlansData({...plansData, maturity_date:selectedDate})
      }


      const bootsrap = async ()=>{
        try{
          const loginUser:any = await AsyncStorage.getItem('token');
          const hasAuth = JSON.parse(loginUser)
            console.log(hasAuth)
            setToken(hasAuth)  
        }catch(err){
      console.log(err)
        }
      }

      useEffect(()=>{
        bootsrap()
      },[])


     const  handlePlanAction =()=>{
      const dataTosend ={
        plan_name:plansData.plan_name,
        target_amount:plansData.target_amount,
        maturity_date:plansData.maturity_date
      }

      if(token && dataTosend){
        dispatch(planActions(dataTosend, token))
        // navigation.navigate(STACK_TAB.REVIEW_PLAN)
      }
      

      }

console.log(loading, 'planstosend')
console.log(plan, 'plan state')
  const isValidation=(fieldName:string)=>{
    let errors:any={};
       switch(fieldName){
           case 'plan_name':
               if(!plansData.plan_name){
                   errors.plan_name= "plan name is required"
               }
               break;
               case 'target_amount':
               if(!plansData.target_amount){
                   errors.target_amount = "Target amount is required"
               }
               break;
            case 'maturity_date':
            
                if(!plansData.maturity_date ){
                    errors.maturity_date= 'Maturity date is brequired'
                       
                }
              
              
            break;
           
            default:
                return null
       }

       

       if(Object.keys(errors).length > 0){
           setErrors(errors)
       }else{
           setErrors(null)
       }

    }
      
  return (
    <ScreenWrapper>
    <KeyboardAwareScrollView  enableOnAndroid={true}>
    <Spacing direction="vertical" size={MARGIN_SIZES.small} />
        <PlanHeader title={page==1?'Goal name': page==2?'Target amount':'Target date'} 
        icon={<Icon name={ICON_NAME.backbutton}/>}
        setPage={setPage}
        setCount={setCount}
        page={page}
        count={count}
        />
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />        
      <PageCount><PageCountText>Question {page} of 3</PageCountText></PageCount>
      <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        <ProgressBar><CountProgressBar count={count}></CountProgressBar></ProgressBar>
        <Spacing direction="vertical" size={MARGIN_SIZES.large} />
        <QuestionWrapper><QuestionText>{page==1?'What are you saving for':page==2?'How much do need?':'When do you want to withdraw?'}</QuestionText></QuestionWrapper>
        <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
        {
            page === 1?
            <BaseTextInput
            placeholder="Investment"
            returnKeyLabel="next"
            returnKeyType="next"
            onChangeText={(text)=> setPlansData({...plansData, plan_name:text})} 
            helperText={errors? errors['plan_name'] : null} 
            mode={errors?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('plan_name')}
          
            fill
          />
            :page === 2?
            <BaseTextInput
          placeholder="800,000"
          returnKeyLabel="next"
          returnKeyType="next"
          onChangeText={(text)=> setPlansData({...plansData, target_amount:Number(text)})} 
          helperText={errors? errors["target_amount"] : null} 
          mode={errors?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('target_amount')}
          keyboardType='numeric'
          fill
        
        />
        :
        <BaseTextInput
        placeholder="Choose a date"
     
        fill
        // value={selectedDate?selectedDate:''}
        onChangeText={(text)=> setPlansData({...plansData, maturity_date:text})} 
        helperText={errors? errors["maturity_date"] : null} 
        mode={errors?INPUT_MODES.error :INPUT_MODES.focus} onBlur={()=> isValidation('maturity_date')}
        editable={false}
        value={selectedDate}
        rightIcon={()=>(
          <TouchableWithoutFeedback onPress={toggleCalendar}>
        <Icon name={ICON_NAME.calendar} color={theme.palette.primary.green200} />
        </TouchableWithoutFeedback>
)}
      />
        }

{
          isCalendar? 
          
    <MyCalendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} isPlan={true}/>

    : null

        }
       
 <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
 {
  token && plansData.plan_name && plansData.maturity_date && plansData.target_amount && page===3?
  
<Button
      type={BUTTON_TYPES.primary}
      text="Continue"
      fill
      loading={loading}
      onPress={() =>{!plan?handlePlanAction(): navigation.navigate('ReviewPlan')}}
    />

  :

<Button
      type={BUTTON_TYPES.primary}
      text="Continue"
      fill
      onPress={() =>handleProgress()}
    />
 }

{
  plan?  
  <ErrorView><ErrorText color={plan?.id?theme.palette.primary.green200:theme.palette.error100}> Plan created successfully</ErrorText></ErrorView>
  
  :

  <ErrorView><ErrorText color={plan?.id?theme.palette.primary.green200:theme.palette.error100}>{error}</ErrorText></ErrorView>
}



      </KeyboardAwareScrollView>
    </ScreenWrapper>
  )
}

export default Planform