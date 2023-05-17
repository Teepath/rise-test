import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity} from 'react-native'
import React,{useState, FC, useRef, ReactElement} from 'react';
import styled from 'styled-components/native';
import Icon,{ICON_NAME} from '../Icon'

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
  top?:any;
  width?:string;
  height?:string;

}


const MyTouchableOpacity = styled.TouchableOpacity<{width?:string, height?:string, ref:any}>`
backgroundColor: #fff;
flex-direction: row;
align-items: center;
align-self:center;
justify-content:center;
border-width:2px;
background-color: #efefef;
border-radius:10px;
height: ${({height}:any)=> height? height: '50px'};
width: ${({width}:any)=> width? width: '100px'};
paddingHorizontal: 10px;
z-index: 1;
`;

const ContentDropdown = styled.View<{top?:any, width?:string}>`
position: absolute;
background-color: #fff;
top:${({top}:any)=> top?top:0};
padding:10px;
border-width:1px;
border-radius:15px;
width:${({width}:any)=> width?width:'250px'};

`;


const SelectView =styled.View`
align-items:center;
flex-direction: column;
`;

const DropdownBox = styled.View

type DistanceProps ={
    _fx:any, _fy:any, _w:any, h:number, _px:any, py:number
}

const DropdownContainer: FC<Props> = ({ label, data, onSelect, top, width, }) => {
  const [visible, setVisible] = useState(false);
  const DropdownButton:any = useRef();
  const [selected, setSelected] = useState<any>(undefined);
const [dropdownTop, setDropdownTop] = useState(0);

const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure(({_fx, _fy, _w, h, _px, py}: DistanceProps)=> {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const renderItem = ({ item }:any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  )

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          {/* <View style={[styles.dropdown]}> */}
          <ContentDropdown top={top} width={width}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          {/* </View> */}
          </ContentDropdown>
        </TouchableOpacity>
      </Modal>
    );
  };

  const onItemPress = (item:any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  return (

<MyTouchableOpacity
  ref={DropdownButton}
  style={styles.button}
  onPress={toggleDropdown}
>
      {renderDropdown()}
      <Text style={styles.buttonText}>
  {(selected && selected.label) || label}
</Text>
      <Icon name={ICON_NAME.arrow} direction="down"/>
    </MyTouchableOpacity>
  );
}

type SelectProps = {
    data:any;
    onSelect:(item:any)=> void;
    top?:any;
    label?:string;
    width?:string;
}

const Select = ({data, onSelect, label, top}: SelectProps) => {
  return (
    <SelectView>
      <DropdownContainer label= {label?"Select Item": ''} data={data} onSelect={onSelect} top={top}/>
      {/* <Text>This is the rest of the form.</Text> */}
    </SelectView>
  )
}


const styles = StyleSheet.create({
    overlay:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
    },

    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#efefef',
      height: 50,
      width: '90%',
      paddingHorizontal: 10,
      zIndex: 1,
    },

    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        
      },
    buttonText: {
      flex: 1,
      textAlign: 'center',
    },
   
      dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        top: 50,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
      },
     
  });
  

export default Select