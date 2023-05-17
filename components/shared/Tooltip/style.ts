import styled from 'styled-components/native';

export const TooltipContent = styled.View`
  background-color: ${({theme}) => theme.palette.tertiary.grey220};
`;

export const TooltipContentHeader = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}) => `${theme.lineHeight.small}px`};
  color: ${({theme}) => theme.palette.primary.blue500};
  font-family: ${({theme}) => theme.fontTypes.h1};
  font-weight: 700;
  margin-top: ${({theme}) => `${-theme.padding.tiny}px`};
  margin-bottom: ${({theme}) => `${theme.padding.tiny}px`};
`;

export const TooltipContentText = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}) => `${theme.lineHeight.small}px`};
  color: ${({theme}) => theme.palette.tertiary.grey320};
  font-family: ${({theme}) => theme.fontTypes.h1};
  font-weight: 400;
  margin-bottom: ${({theme}) => `${theme.padding.big}px`};
  width: 295px;
`;




export const RiderTooltipContentHeader = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}) => `${theme.lineHeight.small}px`};
  color: ${({theme}) => theme.palette.tertiary.grey};
  font-family: ${({theme}) => theme.fontTypes.h1};
  font-weight: 700;
  margin-top: ${({theme}) => `${-theme.padding.tiny}px`};
  margin-bottom: ${({theme}) => `${theme.padding.tiny}px`};
`;



export const RiderTooltipContentText = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}) => `${theme.lineHeight.small}px`};
  color: ${({theme}) => theme.palette.tertiary.grey320};
  font-family: ${({theme}) => theme.fontTypes.h1};
  font-weight: 400;
  margin-bottom: ${({theme}) => `${theme.padding.big}px`};
  width: 150px;
`;
