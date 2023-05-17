import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../theme';

export enum OTP_INPUT_MODES {
  primary = 'primary',
  secondary = 'secondary',
}

interface OTPInputProps {
  /** number of inputs to generate. default is 4 **/
  digits?: number;
  /** this determines the background colors which would suit either the user or rider's color palette **/
  mode: OTP_INPUT_MODES;
  /** get the values entered in the input boxes */
  onChange: (value: number) => void;
}

const DigitInput = styled.TextInput<{
  bgColor: string;
  color: string;
  hasValue: boolean;
  isLastInput: boolean;
  paddingLeft: number;
}>`
  flex: 1;
  ${({isLastInput}) => !isLastInput && `margin-right : ${theme.margin.big}px`};
  max-width: 60px;
  height: 50px;
  border-radius: ${theme.borderRadii.md}px;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  ${({color, hasValue}) => !hasValue && `border: 1px solid ${color}`};
  padding-left: ${({paddingLeft}) => `${paddingLeft}px`};
  font-size: ${theme.fontSizes.h1}px;
  font-weight: bold;
`;

const InputBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

/** generates 4 - 6 input boxes for OTP inputs. defaults to 4 inputs */
const OTPInput: React.FC<OTPInputProps> = ({digits = 4, mode, onChange}) => {
  const [values, setValues] = React.useState<Map<number, number>>(new Map());
  const color =
    mode === OTP_INPUT_MODES.primary
      ? theme.palette.primary.blue
      : theme.palette.secondary.orange;
  const refs: {[key: string]: React.RefObject<any>} = {};
  const paddingLeft =
    theme.padding.big - theme.padding.big * (0.25 * (digits - 4));

  const generateRef = (index: number) => {
    if (!refs.hasOwnProperty(`${index}`)) {
      refs[`${index}`] = React.createRef<TextInput>();
    }
    return refs[`${index}`];
  };

  const handleOnTextChange = (text: string, index: number) => {
    setValues(val => {
      const inputMap = new Map(val.set(index, Number(text)));
      onChange(parseInt(Array.from(inputMap.values()).join(''), 10));
      return inputMap;
    });
    const nextIndex = ++index;
    nextIndex < digits && text.length && refs[nextIndex].current?.focus();
  };

  return (
    <InputBox>
      {Array(digits)
        .fill(undefined)
        .map((_, i) => {
          const currentInputValue = values.get(i); 
          const bgBasedOnMode =
            mode === OTP_INPUT_MODES.primary
              ? theme.palette.primary.blue100
              : theme.palette.secondary.orange100;
          const bgColor =
            currentInputValue && currentInputValue > 0
              ? bgBasedOnMode
              : theme.palette.white;
          return (
            <DigitInput
              key={i}
              ref={generateRef(i)}
              autoFocus={i === 0}
              color={color}
              bgColor={bgColor}
              hasValue={!!currentInputValue}  //Todo fix bug, could lead to a potential error if the value entered is 0
              paddingLeft={paddingLeft}
              isLastInput={i + 1 === digits}
              maxLength={1}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              onChangeText={text => handleOnTextChange(text, i)}
            />
          );
        })}
    </InputBox>
  );
};

export default OTPInput;
