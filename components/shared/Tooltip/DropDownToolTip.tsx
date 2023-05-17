import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components/native';
import _TooltipDropDown from 'react-native-walkthrough-tooltip';
import { useNavigation } from '@react-navigation/native';
import {
TooltipContent,
  RiderTooltipContentHeader,
  TooltipContentText,
} from './style';
import {HorizontalWrapper, VerticalWrapper} from '../common/styles';
import Icon, {ICON_NAME} from '../Icon';
import Spacing from '../Spacing';
import Button, {BUTTON_TYPES} from '../Button';
import Navigation from '../../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';


interface TooltipProps {
  children: JSX.Element;
  title: string;
  content: any;
  visible: boolean;
  onRequestClose: () => void;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center' | undefined;
}

type ItemProps = {
    item:any
}

const TooltipContentData = ({item}: ItemProps)=>{

  const navigation = useNavigation<StackNavigationProp<OrderDetailsParams>>()
    return(
        <TouchableOpacity style={styles.wrapper} onPress={()=>navigation.navigate(item)}>
            <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
    )
}

const RiderTooltip: React.FC<TooltipProps> = ({
  children,
  title,
  content,
  visible,
  onRequestClose,
  placement = 'bottom',
}) => {
  const theme = useTheme();
  const contentStyle = {
    padding: 12,
    backgroundColor: theme.palette.tertiary.grey220,
    height: 'auto',
    width: 200,
  };

  return (
    <_TooltipDropDown
      isVisible={visible}
      content={
        <TooltipContent>
          <HorizontalWrapper align="flex-start">
            {/* <Icon name={ICON_NAME.glyph} /> */}
            <Spacing />
            <VerticalWrapper align="flex-start" justify="flex-start">
              <RiderTooltipContentHeader>{title}</RiderTooltipContentHeader>
              {/* <TooltipContentText>{content}</TooltipContentText> */}
              <FlatList
                data={content}
                renderItem={({item})=> <TooltipContentData item={item} />}
                keyExtractor={({item})=> item}
              />
            </VerticalWrapper>
          </HorizontalWrapper>
        </TooltipContent>
      }
      disableShadow
      placement={placement}
      allowChildInteraction
      contentStyle={contentStyle}
      arrowSize={{height: 15, width: 28}}
      onClose={onRequestClose} >
      {children}
    </_TooltipDropDown>
  );
};


const styles = StyleSheet.create({
    wrapper:{
        padding:5,
        margin:10,
        // borderBottomWidth:0.25,
    },

    text:{
        fontSize:14,
        color:'black'
    }
})

export default RiderTooltip;