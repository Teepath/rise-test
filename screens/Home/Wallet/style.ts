import styled from "styled-components/native";
import { theme } from "../../../components/shared/theme";



export const TransferInfoWraper= styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: 100%;
height: 85px;
`;

export const TransferViewDetails = styled.View`
flex-direction: column;
align-items: center;
justify-content:center;
width: 60%;`;

export const TrasferDetailsTitleText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
color: #222222;
`
export const TransferSubText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: ${theme.palette.tertiary.grey400}
`;

export const TransferAmountDetails= styled.View`
flex-direction: column;
align-items: center;
justify-content:center;
`;

export const TransferAmountText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: ${theme.palette.tertiary.grey400}
`;

export const AmountSubText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 19px;
color: ${theme.palette.tertiary.grey400}
`;


export const ModalWrapperTitle =styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 90%;
height: 56px;
`;

export const ModalTitleView =styled.View`
width:80%;
flex-direction:row;
justify-content:center;
align-items:center;
`;

export const ModalTitleText = styled.Text`
font-family: ${theme.fontTypes.h1};
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
color: #222222;
`;


export const DetailsWrapper = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding:20px;
width: 100%;
height: 76.19px;
border: 0.2px solid grey;
`;

export const DetailsView = styled.View`
width: 70%;
`;
export const ExchangeView = styled.View`

`;
export const ExchageText = styled.Text`
font-family: ${theme.fontTypes.h1};
font-style: normal;
font-weight: 400;
font-size: 15px;
color: #222222;
`;
export const RateInfoView=styled.View`
width:100%;
padding:20px;
`;
export const RateInfoText= styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 16px;
color: ${theme.palette.tertiary.grey400}
`;

export const BankInfoWrapper = styled.TouchableOpacity`
flex-direction:row;
justify-content:space-between;
align-items: center;
margin-bottom:20px;
padding: 0px;
width: 100%;
height: 46px;
`;

export const BankDetailsView=styled.View`

`;

export const BankDetailSubText =styled.Text`
ont-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: ${theme.palette.tertiary.grey400}
`;

export const BankDetailsText = styled.Text`
font-family: ${theme.fontTypes.body};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #222222;

`;