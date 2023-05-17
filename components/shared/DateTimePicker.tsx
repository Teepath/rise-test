import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {
  BottomModal,
  BOTTOM_MODAL_SIZE,
  Button,
  BUTTON_TYPES,
  Dropdown,
  Icon,
  ICON_NAME,
  MARGIN_SIZES,
  Spacing,
} from '.';
import {
  FlexItemView,
  HorizontalWrapper,
  ScreenWrapper,
  StyledScrollView,
} from './common/styles';

/** styles */
const CalendarHeaderText = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.h2}px`};
  line-height: ${({theme}) => `${theme.lineHeight.h2}px`};
  color: ${({theme}) => theme.palette.primary.blue900};
  font-family: ${({theme}) => theme.fontTypes.body};
  font-weight: 700;
`;

const TimeText = styled.Text`
  font-size: ${({theme}) => `${theme.fontSizes.small}px`};
  line-height: ${({theme}) => `${theme.lineHeight.small}px`};
  color: ${({theme}) => theme.palette.tertiary.grey440};
  font-family: ${({theme}) => theme.fontTypes.body};
  font-weight: 500;
  margin-right: ${({theme}) => `${theme.margin.small}px`};
`;

const hours = [
  {label: '01', value: '01'},
  {label: '02', value: '02'},
  {label: '03', value: '03'},
  {label: '04', value: '04'},
  {label: '05', value: '05'},
  {label: '06', value: '06'},
  {label: '07', value: '07'},
  {label: '08', value: '08'},
  {label: '09', value: '09'},
  {label: '10', value: '10'},
  {label: '11', value: '11'},
  {label: '12', value: '12'},
];

type fontWeightType =
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface PickerProps {
  visible: boolean;
  applySelectedSchedule: (time: string, date: string) => void;
  children?: JSX.Element | JSX.Element[];
  onRequestClose: () => void;
  btnActionName?: string;
}

const SchedulePickupModal: React.FC<PickerProps> = ({
  visible,
  onRequestClose,
  applySelectedSchedule,
  btnActionName = 'Apply',
}) => {
  const [selected, setSelected] = React.useState(
    new Date().toISOString().substring(0, 10),
  );
  const [startHour, setStartHour] = React.useState<string>('09');
  const [endHour, setEndHour] = React.useState<string>('11');
  const [clockSys, setClockSys] = React.useState<string>('AM');

  const theme = useTheme();

  const onDayPress: CalendarProps['onDayPress'] = React.useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = React.useMemo(() => {
    const today = new Date().toISOString().substring(0, 10);
    if (today === selected) {
      return {
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: theme.palette.primary.blue,
          selectedTextColor: '#ffffff',
          customStyles: {
            text: {
              color: theme.palette.primary.blue,
              fontWeight: '700' as fontWeightType,
            },
            container: {
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderColor: theme.palette.primary.blue,
              borderRadius: 32,
            },
          },
        },
      };
    }

    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: theme.palette.primary.blue,
        selectedTextColor: '#ffffff',
      },
    };
  }, [selected, theme.palette.primary.blue]);

  return (
    <BottomModal
      visible={visible}
      onRequestClose={onRequestClose}
      size={BOTTOM_MODAL_SIZE.medium}>
      <ScreenWrapper>
        <StyledScrollView showsVerticalScrollIndicator={false}>
          <Spacing direction="vertical" size={MARGIN_SIZES.small2} />
          <Calendar
            current={selected}
            theme={{
              todayTextColor: theme.palette.primary.blue,
              todayBackgroundColor: '#ffffff',
              textDayFontFamily: theme.fontTypes.body,
              textMonthFontFamily: theme.fontTypes.body,
              textDayHeaderFontFamily: theme.fontTypes.body,
              textDayFontSize: 14,
              textMonthFontSize: 14,
              textMonthFontWeight: 'bold',
              textDisabledColor: theme.palette.tertiary.grey310,
              textDayFontWeight: '400',
              header: {
                marginBottom: 10,
              },
            }}
            onDayPress={onDayPress}
            markingType="custom"
            markedDates={marked}
            renderArrow={direction => (
              <>
                <Icon
                  name={ICON_NAME.arrow}
                  direction={direction}
                  color={theme.palette.primary.blue900}
                />
                <Spacing size={MARGIN_SIZES.large} />
              </>
            )}
            renderHeader={date => (
              <CalendarHeaderText>
                {new Date(date).toLocaleString('default', {month: 'long'})}{' '}
                {date.getFullYear()}
              </CalendarHeaderText>
            )}
          />
          <Spacing direction="vertical" size={MARGIN_SIZES.small2} />
          <HorizontalWrapper justify="center">
            <Icon
              name={ICON_NAME.clock}
              color={theme.palette.primary.blue}
              size={28}
            />
            <Spacing size={MARGIN_SIZES.small} />
            <Dropdown
              onSelect={({value}) => setStartHour(value)}
              data={hours}
              justify="center">
              <HorizontalWrapper>
                <TimeText>{startHour}</TimeText>
                <Icon
                  name={ICON_NAME.arrow}
                  direction="down"
                  color={theme.palette.secondary.orange410}
                />
              </HorizontalWrapper>
            </Dropdown>
            <Spacing />
            <TimeText>to</TimeText>
            <Spacing />
            <Dropdown
              onSelect={({value}) => setEndHour(value)}
              justify="center"
              data={hours}>
              <HorizontalWrapper>
                <TimeText>{endHour}</TimeText>
                <Icon
                  name={ICON_NAME.arrow}
                  direction="down"
                  color={theme.palette.secondary.orange410}
                />
              </HorizontalWrapper>
            </Dropdown>
            <Spacing size={MARGIN_SIZES.small} />
            <Dropdown
              onSelect={({value}) => setClockSys(value)}
              justify="center"
              data={[
                {label: 'AM', value: 'AM'},
                {label: 'PM', value: 'PM'},
              ]}>
              <HorizontalWrapper>
                <TimeText>{clockSys}</TimeText>
                <Icon
                  name={ICON_NAME.arrow}
                  direction="down"
                  color={theme.palette.secondary.orange410}
                />
              </HorizontalWrapper>
            </Dropdown>
          </HorizontalWrapper>
          <Spacing direction="vertical" size={MARGIN_SIZES.medium} />
          <HorizontalWrapper>
            <FlexItemView>
              <Button
                type={BUTTON_TYPES.primary}
                text={btnActionName}
                fill
                onPress={() => {
                  const time = `${startHour}:${endHour}:${clockSys}`;
                  applySelectedSchedule(time, selected);
                }}
              />
            </FlexItemView>
            <Spacing size={MARGIN_SIZES.small2} />
            <FlexItemView>
              <Button
                type={BUTTON_TYPES.primaryALT}
                text="Cancel"
                fill
                onPress={onRequestClose}
              />
            </FlexItemView>
          </HorizontalWrapper>
        </StyledScrollView>
      </ScreenWrapper>
    </BottomModal>
  );
};

export default SchedulePickupModal;
