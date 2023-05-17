import styled from 'styled-components/native';
import { theme } from '../theme';



export const HeaderWrapper = styled.View`
flex-direction: row;
justify-content:space-between;
align-items: center;
padding: 0px;
width: 100%;
height: 48px;
`;

export const GreatingWrapper = styled.View`
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 50%;
height: 48px;
`;

export const GreetingText=styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #333333;
`;


export const UserNameText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
color: #333333;
`;


export const InfoTabWrapper= styled.View`
flex-direction: row;
align-items: center;
position:relative;
padding: 0px;
gap: 10px;
width: 50%;
height: 42px;
`;

export const InfoEarnTab = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 5px;
width: 60%;
height: 30px;
background: #0898A0;
border-radius: 16px;
`;

export const InfoEarnTabText =styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
`;

export const NotificationView=styled.View`
width: 30%;
height: 42px;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
border-radius: 22.6656px;
`;

export const NotifyCount = styled.View`
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2px;
gap: 10px;
position: absolute;
left: 52.38%;
width:20px;
height:20px;
right: 0%;
z-index:20;
top: 2.38%;
bottom: 50%;
background: #EB5757;
border-radius: 10px;
`;

export const CountText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 14px;
align-items: center;
text-align: center;
color: white;

`;

export const TitleWrapper = styled.View`
width: 70%;
flex-direction:row;
justify-content:flex-start;
align-items:center;
`;

export const TitleText=styled.Text`
font-family: ${theme.fontTypes.h1};
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #000000;
`;


export const PlanViewHeaderWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px;
width: 100%;
height: 146.94px
background-color: #FC9842;
`;


export const PlanViewTitleHeadWrapper = styled.View`
width: 100%;
flex-direction:row;
justify-content:space-around;
align-items: center;
`;

export const PlanViewTitleView = styled.View`
width: 70%;
justify-content: center;
align-items: center;
`;

export const PlanViewTitleText = styled.Text`
font-family: ${theme.fontTypes.h1};
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 26px;
color: #FFFFFF;
`;

export const PlanViewSubTitleText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #FFFFFF;
`;

export const HeaderIconWrapper = styled.TouchableOpacity`
width: 10%;
`;

