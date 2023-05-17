import styled from 'styled-components/native';

export const SignUpFormFooterText = styled.Text`
  font-size: ${({theme}:any) => `${theme.fontSizes.tiny}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.tiny}px`};
  color: ${({theme}:any) => theme.palette.tertiary.grey440};
  font-family: ${({theme}:any) => theme.fontTypes.body};
  font-weight: 400;
`;


export const ValidationWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
margin:2%;
`;

export const CheckView = styled.View`
width: 2%;
justify-content: center;
align-items: center;
`;

export const ValidView = styled.View`
width:95%;
flex-direction:row;
align-items:center;
`;

export const ValidText = styled.Text`
font-family: ${({theme}:any) => theme.fontTypes.body};
color: ${({theme}:any) => theme.palette.black};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;

`;
