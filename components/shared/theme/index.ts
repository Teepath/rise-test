import {ThemeProps} from 'styled-components';

export const theme = {
  borderRadii: {
    sm: 6,
    md: 8,
    lg: 10,
  },
  padding: {
    tiny: 4,
    small: 8,
    small2: 12,
    medium: 16,
    big: 24,
    large: 32,
  },
  margin: {
    tiny: 4,
    small: 8,
    small2: 12,
    medium: 16,
    big: 24,
    large: 32,
  },
  lineHeight: {
    h1: 31,
    h2: 25,
    body: 22,
    small: 20,
    tiny: 17,
  },
  fontSizes: {
    h1: 24,
    h2: 18,
    body: 16,
    small: 14,
    tiny: 12,
  },
  fontTypes: {
    h1: 'DMSans-Bold',
    body: 'DMSans-Regular',
    small: 'DMSans-Medium',
  },
  palette: {
    white: '#ffffff',
    biege: '#FEFAF7',
    indigo:'#FDF4F9',
    black:'#292F33;',
    mageta:'#F6FFFE',
    error: '#DD2C2C',
    error100: '#FCEAEA',
    success: '#37BB30',
    primary: {
      green:'#F6FFFE',
      green100:'#0898A04D',
      green200:'#0898A0',
      blue: '#3641FC',
    },
    secondary: {
      orange: '#FE7122',
      orange100: '#FFF2E9',
      orange150: '#F2F2F2',
    
    },

   
    tertiary: {
      grey: '#71879C',
      grey100: '#ECECED',
      grey200: '#DADADA',
      grey210: '#BDBDBD',
      grey220: '#F4F2FA',
      grey230: '#D9D9DA',
      grey300: '#B3B2B5',
      grey310: '#8C8CA1',
      grey320: '#4A4A68',
      grey400: '#8D8C90',
      grey410: '#828282',
      grey420: '#333333',
      grey430: '#4F4F4F',
      grey440: '#464646',
      grey500: '#212023',
      grey600: '#1A191C',
      grey700: '#131315',
      grey800: '#0D0D0E',
    },
    offBeige:{
      beige100: '#FEFAF7'
    },

    offPink:{
      pink:'#FDF4F9',
      pink100: '#FDF4F9',
      pink200:'#B80074',
    }
  },
};

export type themeProvider = ThemeProps<typeof theme>;

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
