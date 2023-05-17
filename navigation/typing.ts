import { NavigatorScreenParams } from '@react-navigation/native';


/** Root Routes */
export enum ROOT_ROUTES {
  ONBOARDING = 'OnBoarding',
  AUTHENTICATION = 'Authentication',
  MAIN_TAB = 'MainTab',
  STACK_TAB='StakTab', 
}

/** Auth Routes */
export enum AUTHENTICATION_ROUTES {
  CREATE_ACCOUNT_OPTIONS = 'CreateAccountOptions',
  SIGN_UP_FORM = 'SignUpForm',
  LOGIN_FORM = 'LoginForm',
  VERIFY_OTP_FORM = 'VerifyOTPForm',
  FORM_MESSAGE="FormMessage",
  FORGOT_PASSWORD_FORM = 'ForgotPasswordForm',
  RESET_PASSWORD_FORM = 'ResetPasswordForm',
  LOGIN_MESSAGE="LoginMessage"
}

/** Bottom Tab navigation routes */
export enum MAIN_TAB {
  HOME = 'Home',
  PLANS='Plans',
  WALLET='Wallet',
  FEED='Feed',
  ACCOUNT='Account'
  // ORDER = 'Order',
  // NOTIFICATION = 'Notification',
  // ACCOUNT = 'Account',
}





/** MainTab route param list  */
export type MainTabStackParamList = {
  Home: undefined;
  Plans:undefined;
  Wallet: undefined;
  Feed:undefined;
  Account:undefined;
  
};

/** Authentication route param list  */
export type AuthStackParamList = {
  SignUpForm: undefined;
  LoginForm: undefined;
  LoginMessage:undefined;
  FormMessage: undefined;
  VerifyOTPForm: {origin: 'reset-account' | 'new-account'} | undefined;
  ForgotPasswordForm: undefined;
  ResetPasswordForm: undefined;

};


export enum STACK_TAB {
  CREATE_PLAN= 'CreatePlan',
  PLAN_FORM='PlanForm',
  REVIEW_PLAN='ReviewPlan',
  PLAN_SUCCESS= 'PlanSuccess',
  VIEW_PLANS='ViewPlans',
  FUND_WALLET='FundWallet',
  OTP='Otp',
  OTP_Confirm='OtpConfirm',
  SINGLE_PLAN='SinglePlan'
}
export type StackParamList = {
  CreatePlan: undefined;
  PlanForm:undefined
  ReviewPlan:undefined;
  PlanSuccess:undefined;
  ViewPlans:undefined;
  FundWallet:undefined;
  Otp:undefined;
  OtpConfirm:undefined;
  SinglePlan:undefined;
}

export  type OnBoardingParamLists ={
  OnBoarding:undefined
}

interface OnBoardingParams extends OnBoardingParamLists{}
interface AuthenticationParams extends AuthStackParamList{}
interface MainTabParams extends MainTabStackParamList{}
interface StackParams extends StackParamList{}



/** Root route param list  */
export type RootStackParamList = {
  OnBoarding: NavigatorScreenParams<OnBoardingParams>
  Authentication: NavigatorScreenParams<AuthenticationParams>
  MainTab: NavigatorScreenParams<MainTabParams>
  StakTab: NavigatorScreenParams<StackParams>

};


declare global {
  namespace ReactNavigation {
    interface ROOT_ROUTES extends RootStackParamList{}
  }
}
