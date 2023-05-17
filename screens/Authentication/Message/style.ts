import styled from 'styled-components/native';
import { theme } from '../../../components/shared/theme';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';



import {SCREEN_WIDTH} from '../../../components/shared/common/constants';



export const TopBox = styled.View`
height: 50%;
justify-content:center;
align-items:center;
`;


export const SuccessMsgView = styled.View`
margin-top:10%;
width: 60%;
justify-content:center;
align-items:center;
`;

export const SuccessMsgText = styled.Text`
font-family: 'Tomato Grotesk';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
color:#222222;
text-align: center;
`;

export const SubMessageView = styled.View`
margin-top:2%;
width: 55%;
justify-content:center;
align-items:center;
`;

export const SubMessageText =styled.Text`
font-family: ${theme.fontTypes.small};
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
text-align: center;
color: #71879C;
`;

export const BottomBox = styled.View`
height:40%;
justify-content:flex-end;
align-items:center;
`;