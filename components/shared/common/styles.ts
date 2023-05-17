import styled from 'styled-components/native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SCREEN_WIDTH} from './constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaView} from 'react-native-safe-area-context';
export const generalHorizontalPadding = Math.round((SCREEN_WIDTH * 0.1) / 2);
export const statusBarHeight = getStatusBarHeight();

export type sharedType = 'primary' | 'secondary';

/** Layout */
export type flexAlignTypes =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

interface MarginTypes {
  marginBottom: number;
  marginTop: number;
  marginRight: number;
  marginLeft: number;
}
interface FlexBoxType extends Partial<MarginTypes> {
  justify: flexAlignTypes;
  align: flexAlignTypes;
  direction: 'row' | 'column';
  fill: boolean;
}

export const HorizontalWrapper = styled.View<Partial<FlexBoxType>>`
  display: flex;
  flex-direction: row;
  align-items: ${({align}:any) => align ?? 'center'};
  justify-content: ${({justify}:any) => justify ?? 'flex-start'};
  width: ${({fill}:any) => (fill ? '100%' : 'auto')};
  ${({marginBottom}:any) => marginBottom && `margin-bottom: ${marginBottom}px`};
  ${({marginTop}:any) => marginTop && `margin-top: ${marginTop}px`};
  ${({marginRight}:any) => marginRight && `margin-right: ${marginRight}px`};
  ${({marginLeft}:any) => marginLeft && `margin-left: ${marginLeft}px`};
`;

export const VerticalWrapper = styled.View<Partial<FlexBoxType>>`
  display: flex;
  align-items: ${({align}:any) => align ?? 'center'};
  justify-content: ${({justify}:any) => justify ?? 'center'};
  width: ${({fill}:any) => (fill ? '100%' : 'auto')};
  ${({marginBottom}:any) => marginBottom && `margin-bottom: ${marginBottom}px`};
  ${({marginTop}:any) => marginTop && `margin-top: ${marginTop}px`};
  ${({marginRight}:any) => marginRight && `margin-right: ${marginRight}px`};
  ${({marginLeft}:any) => marginLeft && `margin-left: ${marginLeft}px`};
`;

export const FlexItemView = styled.View<{flex?: number}>`
  flex: ${({flex}:any) => flex ?? 1};
`;

export const PushToEnd = styled.View<{
  pos: 'left' | 'right' | 'top' | 'bottom';
}>`
  ${({pos}:any) => `margin-${pos}: auto`}
`;

/** modal accessory */
export const Backdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
`;

/** screen layout */
export const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${({theme}:any) => theme.palette.white};
  padding: ${() => `10px ${generalHorizontalPadding}px`};
`;

export const StyledScrollView = styled.ScrollView`
  background-color: #ffffff;
`;



const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
top:20px;
`;

export const ScreenSafeArea = Platform.OS ==='android'? Container:SafeAreaView

interface BaseStyleTextProps extends Partial<MarginTypes> {
  fontSize: number;
  fontWeight: string | number;
  color: string;
  fontFamily?: string;
  lineHeight?: number;
  width?: number;
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledText = styled.Text<BaseStyleTextProps>`
  font-size: ${({fontSize}:any) => `${fontSize}px`};
  line-height: ${({lineHeight, fontSize}:any) =>
    lineHeight ? `${lineHeight}px` : `${fontSize * 1.4}px`};
  color: ${({color}:any) => color};
  font-family: ${({fontFamily, theme}:any) => fontFamily ?? theme.fontTypes.body};
  font-weight: ${({fontWeight}:any) => `${fontWeight}`};
  text-align: ${({textAlign}:any) => textAlign ?? 'left'};
  ${({marginBottom}:any) => marginBottom && `margin-bottom: ${marginBottom}px`};
  ${({marginTop}:any) => marginTop && `margin-top: ${marginTop}px`};
  ${({marginRight}:any) => marginRight && `margin-right: ${marginRight}px`};
  ${({marginLeft}:any) => marginLeft && `margin-left: ${marginLeft}px`};
  ${({width}:any) => width && `width: ${width}px`};
  flex-shrink: 1;
`;

// Todo use StyledText
export const ScreenTitle = styled.Text`
  font-size: ${({theme}:any) => `${theme.fontSizes.h1}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.h1}px`};
  color: ${({theme}:any) => theme.palette.primary.blue900};
  font-family: ${({theme}:any) => theme.fontTypes.h1};
  font-weight: 700;
`;

// Todo use StyledText
export const CenteredTitle = styled.Text<{
  color?: string;
  moveTextLeftBy?: number;
}>`
  font-size: ${({theme}:any) => `${theme.fontSizes.body}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.body}px`};
  color: ${({theme, color}:any) => color ?? theme.palette.primary.blue900};
  font-family: ${({theme}:any) => theme.fontTypes.h1};
  font-weight: 700;
  text-align: center;
  ${({moveTextLeftBy}:any) => moveTextLeftBy && `margin-left:-${moveTextLeftBy}px`};
`;

export const SubScreenTitle = styled(ScreenTitle)`
  font-size: ${({theme}:any) => `${theme.fontSizes.h2}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.h2}px`};
`;

// Todo use StyledText
export const FormFooterText = styled.Text`
  margiin-top: 20px;
  font-size: ${({theme}:any) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.body}px`};
  color: ${({theme}:any) => theme.palette.tertiary.grey440};
  font-family: ${({theme}:any) => theme.fontTypes.body};
  font-weight: 400;
`;

export const Link = styled(FormFooterText)<{mode?: sharedType}>`
  color: ${({theme, mode}:any) =>
    (!mode && theme.palette.primary.green100) ||
    (mode === 'primary'
      ? theme.palette.primary.blue
      : null)};
  font-weight: 700;
`;


export const ExternalLink = styled(Link)`
  font-weight: 400;
`;



export const Touchable =
  Platform.OS === 'ios' ? TouchableNativeFeedback : TouchableOpacity;



export const IconBox = styled.View<{bgColor: string}>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bgColor}:any) => bgColor};
`;

export const boxShadowStyles = {
  borderTopWidth: 0,
  backgroundColor: '#ffffff',
  shadowColor: '#000000',
  elevation: 8,
  shadowOpacity: 0.05,
  shadowRadius: 24,
  shadowOffset: {
    height: 4,
    width: 4,
  },
};
