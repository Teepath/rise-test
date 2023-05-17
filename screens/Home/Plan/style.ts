import styled from "styled-components/native";
import { theme } from "../../../components/shared/theme";



export const SubHeader =styled.View`
width: 100%;
justify-content:center;
align-items:center;
flex-direction:row;
`;


export const SubHeaderText =styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: grey;
`;

export const PlanDetailWraper = styled.View`
width:100%;
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
`;

export const PlanDetailIcon = styled.View`
width:10%;
flex-direction:row;
justify-content:center
`;

export const PlanDetailInfoView=styled.View`
width: 80%;
`;

export const PlanDetailTitle= styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #222222;
`;

export const PlanDetailText= styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color:${theme.palette.tertiary.grey}
`;

export const  PageCount = styled.View`
width:100%;
justify-content:center;
align-items: flex-start;
`;

export const PageCountText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
`;

export const ProgressBar = styled.View`
width:100%;
height:8px;
border-radius:8px
background-color: ${theme.palette.tertiary.grey100}
`;

export const CountProgressBar = styled.View<{count:number}>`
width: ${({count}:any)=> count?`${count}%` : '0%'}
height: 8px;
border: 1px solid green;
border-radius:8px;
background-color: ${theme.palette.primary.green200}
`;

export const QuestionWrapper = styled.View`
width: 100%;
flex-direction:row;
justify-content: flex-start;
align-items:center;
`;

export const QuestionText = styled.Text`
font-family: ${theme.fontTypes.h1};
font-style: normal;
font-weight: 700;
font-size: 19px;
line-height: 22px;
color: #000000;
`;

export const PlanProjection = styled.View`
width: 100%;
height:103px;
justify-content:space-around;
align-items:center;
`;
export const SmallText = styled.Text`
font-family: ${theme.fontTypes.small};
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
text-align: center;
color: ${theme.palette.tertiary.grey400}
`;

export const DateText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 25px;
color: #333333;
`;

export const InvestInfoWrapper = styled.View`
width: 100%;
flex-direction: row;
height:64px;
boder-radius:10px;
justify-content: space-around;
align-items:center;
background:${theme.palette.tertiary.grey100}
`;
export const InvestDetailText = styled.Text`
width: 80%;
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px
color: ${theme.palette.tertiary.grey400}
`;

export const  CenteredTextWrapper=styled.View`
width: 100%;
justify-content:center;
align-items:center;
`;

export const CenteredText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
color: ${theme.palette.tertiary.grey400}
`;



export const ValueText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #27BF41;
`;

export const TargetWrapper = styled.View`
width:100%;
height:44px;
justify-content: space-between;
align-items: flex-start;
`;
export const TargetView =styled.View`
flex-direction:row;
justify-content: space-between;
width:100%
`;

export const ResultWrapper=styled.View`
width:100%;
justify-content:center;
align-items:center;
`;

export const ResultView = styled.View`
flex-direction: row;
align-items: center;
justify-content:center;
width: 204.69px;
background: ${theme.palette.tertiary.grey100}
border-radius: 13px;
height: 27.1px;

`;


export const AddFundWrapper = styled.TouchableOpacity`
flex-direction:row;
justify-content:center;
align-items:center;
height:56px;
border-radius:10px;
background-color:#FFFFFF;
border:1px solid #d5d5d5;
width:100%;
`;

export const AddFundText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #0898A0;
`;

export const ChartWrapper = styled.View`
width: 100%;
height: 424px;
background: #0898A0;
box-shadow: 0px 8px 16px rgba(43, 57, 75, 0.15);
border-radius: 12px;
`;

export const ListWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 30px;
`;

export const Listleft = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 28px;
color: ${theme.palette.tertiary.grey400}
`;

export const ListRight = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 28px;
color: #222222;
`;

export const TransactionTitle = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #000000;
`;
export const TransactionView = styled.TouchableOpacity`
flex-direction:row;
justify-content:space-around;
align-items: center;
width:20%;
`;


export const TrasanctionText=styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 700;
font-size: 14px;
align-items: flex-end;
color: #0898A0;
`;

export const WalletWraper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: 100%;
height: 85px;
`;
export const WalletDetail= styled.View`
flex-direction: column;
align-items: flex-start;
justify-content:flex-start;
width: 60%;
height: 85px;
`;


export const ChartGraph = styled.View`
height: 218px;
width:100%;
box-shadow: 0px 8px 16px rgba(43, 57, 75, 0.15);
border-radius: 12px;
background: #FFFFFF;

`;

export const WalletDetailText=styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #333333;
`;

export const WalletDetailsSubText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: ${theme.palette.tertiary.grey400}
`;

export const ViewIcon = styled.View`
width: 10%;
justify-content: flex-start;
align-items:center;
`;

export const ViewAllBtn = styled.TouchableOpacity`

`;


export const ErrorView = styled.View`
width:100%;
flex-direction:row;
justify-content:center;
align-items:center;
`;
export const ErrorText=styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: ${({color}:any)=> color? color: 'black'}
`;

// export RecentTransactionWrapper = styled.View``;


export const PlansCard = styled.TouchableOpacity`
width: 40%;
height: 164px;
background: #0898A0;
margin:10px;
justify-content:center;
align-items:center;
box-shadow: 0px 8px 16px rgba(43, 57, 75, 0.15);
border-radius: 5px;
`;



export const Plantext=styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
text-align:center;
font-weight: 800;
font-size: 15px;
line-height: 22px;
color: #FFFFFF;
`;


export const PlanShowView=styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center;
`;


export const SinglePlanWrapper = styled.View`
width: 100%;
height: 100%;
background: #0898A0;
justify-content:center;
align-items:center;
box-shadow: 0px 8px 16px rgba(43, 57, 75, 0.15);
border-radius: 5px;

`;


export const SplashScreenWraper= styled.View`
width: 100%;
height: 100%;
background: #0898A0;
justify-content:space-around;
align-items:center;
box-shadow: 0px 8px 16px rgba(43, 57, 75, 0.15);
border-radius: 5px;
`;




