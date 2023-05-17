import React from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
// import { Image } from 'react-native-svg';
import styled from 'styled-components/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../common/constants';
import {flexAlignTypes} from '../common/styles';

/** styles */
const DropdownItemText = styled.Text`
  font-size: ${({theme}:any) => `${theme.fontSizes.body}px`};
  line-height: ${({theme}:any) => `${theme.lineHeight.body}px`};
  color: ${({theme}:any) => theme.palette.primary.blue900};
  font-family: ${({theme}:any) => theme.fontTypes.body};
  font-weight: 400;
`;

const DropdownItem = styled.TouchableOpacity<{
  borderRadius: number;
  justify?: flexAlignTypes;
}>`
  border-bottom-width: 1px;
  border-color: ${({theme}:any) => `${theme.palette.secondary.orange310}`};
  background-color: #ffffff;
  height: 48px;
  padding-left: ${({justify}:any) => (justify ? '0px' : '20px')};
  flex: 1;
  align-items: center;
  justify-content: ${({justify}:any) => justify ?? 'flex-start'};
  flex-direction: row;
  border-bottom-right-radius: ${({borderRadius}:any) => `${borderRadius}px`};
  border-bottom-left-radius: ${({borderRadius}:any) => `${borderRadius}px`};
`;

const PAGE_SIZE = 10;

type DropDownItem = {callingCodes: string; value?:string; flags?:any; name:string; code:string};

interface DropdownProps {
  data: Array<DropDownItem>;
  onSelect: (item: DropDownItem) => void;
  isRefreshing?:boolean;
  handleLoadMore: (item:any) => void;
  handleRefresh: (item: any)=> void;
  isLoading?:boolean;
  justify?: flexAlignTypes;
  children: JSX.Element | JSX.Element[];
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  isLoading,
  isRefreshing,
  handleLoadMore,
  handleRefresh,
  onSelect,
  children,
  justify,
}) => {
  const DropdownButton = React.useRef<any>();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [dropdownDimensions, setDropdownDimensions] = React.useState({
    x: 0,
    y: 0,
    w: 0,
  });

  const openDropdown = React.useCallback(() => {
    DropdownButton.current?.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownDimensions({y: py + h, x: _px, w: _w});
      },
    );
    setVisible(true);
  }, [DropdownButton]);

  const toggleDropdown = React.useCallback((): void => {
    visible ? setVisible(false) : openDropdown();
  }, [openDropdown, visible]);

  const onItemPress = React.useCallback(
    (item: DropDownItem): void => {
      onSelect(item);
      setVisible(false);
    },
    [onSelect],
  );

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }
    return <ActivityIndicator style={{ marginVertical: 20 }} />;
  };

  const renderItem: React.FC<{item: DropDownItem; index: number}> = ({
    item,
    index,
  }) => (
    <DropdownItem
      justify={justify}
      onPress={() => onItemPress(item)}
      borderRadius={index === data.length - 1 ? 6 : 0}>
      <DropdownItemText> <Image source={{uri: item['flags'].png}} style={{width:20, height:20}}/> {`+${item['callingCodes'][0]}`}</DropdownItemText>
     
    </DropdownItem>
  );

  const DropdownModal = React.memo(() => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.dropdown,
              {
                top: dropdownDimensions.y,
                left: dropdownDimensions.x,
                width: dropdownDimensions.w,
              },
            ]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              decelerationRate="normal"
              keyExtractor={(item, index) => item?.name}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              onEndReached={handleLoadMore}
              refreshing={isRefreshing}
               onRefresh={handleRefresh}
              // getItemCount={() => data.length}
              // getItem={(data, index) => data[index]}
              initialNumToRender={5}
              getItemLayout={(data, index) => ({ length: 5, offset: 5 * index, index })}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  });

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>
      <DropdownModal />
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  overlay: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 100,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.1,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});

export default Dropdown;
