import {Dimensions, Platform} from 'react-native';




const dim = Dimensions.get('window');

export const SCREEN_WIDTH = dim.width;
export const SCREEN_HEIGHT = dim.height;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
