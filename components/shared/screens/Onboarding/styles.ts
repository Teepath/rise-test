import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../theme';

const {width, height} = Dimensions.get('window');

export const Slider = styled.SafeAreaView<{color: string}>`
  width: ${width}px;
  min-height: ${height}px;
  height: auto;
  flex: 1;
`;

export const Slide = styled.View`
  flex: 1;
  margin-top:10px;
  background-color: ${({color}:any) => color};
`;

export const ImageBox = styled.View`
  width: ${width}px;
  height: 273px;
  border-radius: ${width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotsBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width}px;
`;

export const ContentBox = styled.View`
  justify-content:center;
  align-items: flex-start;
  padding: 0px 24px;
  width: ${width}px;
`;

export const ContentTitle = styled.Text<{color: string}>`
  color: ${({color}:any) => color};
  font-family: ${theme.fontTypes.body};
  font-size: ${theme.fontSizes.h1}px;
  line-height ${theme.lineHeight.h1}px;
  text-align: justify;
  font-weight: bold;
`;

export const ContentText = styled.Text`
  color: ${theme.palette.black};
  font-size: ${theme.fontSizes.small}px;
  line-height ${theme.lineHeight.small}px;
  font-family: ${theme.fontTypes.body};
  font-weight: normal;
  text-align: justify;
`;

export const NavigationBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width:${width-40}px;
  align-items: center;
  flex-direction: row;
`;

export const ButtonWrapper = styled.View`
flex-direction:row;
width:${width-40}px;
justify-content: space-between;
align-items: center;

`;

export const NavigationText = styled.Text<{color: string}>`
  color: ${({color}:any) => color};
  font-size: ${theme.fontSizes.body}px;
  line-height ${theme.lineHeight.small}px;
  font-family: ${theme.fontTypes.body};
  font-weight: normal;
  text-align: center;
  margin-top: -2px;
`;
