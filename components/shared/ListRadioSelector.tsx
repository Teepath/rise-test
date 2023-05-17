import React from 'react';
import styled from 'styled-components/native';
import {HorizontalWrapper, VerticalWrapper} from './common/styles';

/** styles */
const RadioButtonBox = styled.View<{selected: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: ${({theme, selected}) =>
    `3px solid ${selected ? theme.palette.primary.blue : '#56678942'}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioButton = styled.View<{selected: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({selected, theme}) =>
    selected ? theme.palette.primary.blue : '#ffffff'};
`;

const RadioItem = styled.TouchableOpacity`
  margin-bottom: 34px;
`;

const RadioItemText = styled.Text<{selected: boolean}>`
  font-weight: 400;
  font-size: ${({theme}) => `${theme.fontSizes.body}px`};
  line-height: ${({theme}) => `${theme.lineHeight.body}px`};
  color: ${({theme, selected}) =>
    selected ? theme.palette.primary.blue : theme.palette.tertiary.grey320};
  font-family: ${({theme}) => theme.fontTypes.body};
  margin-left: 26.5px;
`;

export type RadioItem = {
  label: string;
  value: string;
};

interface ListRadioSelectorProps {
  onSelect: (item: RadioItem) => void;
  items: Array<RadioItem>;
}

const ListRadioSelector: React.FC<ListRadioSelectorProps> = ({
  items,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<
    RadioItem | undefined
  >();

  const handleItemSelection = React.useCallback(
    (item: RadioItem) => {
      return () => {
        onSelect(item);
        setSelectedItem(item);
      };
    },
    [onSelect],
  );

  return (
    <VerticalWrapper align="flex-start" justify="flex-start">
      {items.map((item, index) => {
        const isSelected = item.label === selectedItem?.label;
        return (
          <RadioItem
            key={item.label + index}
            onPress={handleItemSelection(item)}>
            <HorizontalWrapper>
              <RadioButtonBox selected={isSelected}>
                <RadioButton selected={isSelected} />
              </RadioButtonBox>
              <RadioItemText selected={isSelected}>{item.value}</RadioItemText>
            </HorizontalWrapper>
          </RadioItem>
        );
      })}
    </VerticalWrapper>
  );
};

export default ListRadioSelector;
