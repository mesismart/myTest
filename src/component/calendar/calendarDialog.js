import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react';
import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import moment from 'jalali-moment';
import color from '../../constant/color';
import {Fonts, FontSize} from '../../constant/font';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BoldLabel from '../label/boldlabel';
import {Margins} from '../../constant/dimension';

import fontelloConfig from '../../constant/config.json';
import {createIconSetFromFontello} from 'react-native-vector-icons';
const Iconb = createIconSetFromFontello(fontelloConfig);

calendarDialog = (props, ref) => {
  const [currentday, setCurrentdate] = useState(
    moment().locale('fa').format('YYYY/MM/DD'),
  );
  const [ishShow, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
    },
    hide: () => {
      setShow(false);
    },
  }));

  useEffect(() => {
    setCurrentdate(currentday);
    // props.onDataChange(currentday);
  });

  return (
    <Modal
      visible={ishShow}
      onTouchOutside={() => setShow(false)}
      onRequestClose={() => setShow(false)}>
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
          //   padding: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'absolute',
            top: 0,
            zIndex: 999,
            height: responsiveHeight(10),
            backgroundColor: color.primaryColor,
          }}>
          <BoldLabel
            style={{
              fontFamily: Fonts.Shabnam,
              color: color.White,
              marginRight: Margins.marg8,
              fontSize: responsiveFontSize(2),
            }}
            title="یادداشت"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Iconb
              name="arrow---right-2"
              size={FontSize.xxlarg}
              style={{color: color.White}}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            marginTop: responsiveHeight(10),
            padding: 12,
          }}>
          <DatePicker
            style={{
              alignSelf: 'center',
              backgroundColor: color.white,
              borderRadius: 10,
            }}
            selected={currentday}
            dateSeparator="/"
            minDate="1380/1/1"
            maxDate="1420/12/29"
            headerContainerStyle={{height: responsiveHeight(7)}}
            yearMonthBoxStyle={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            yearMonthTextStyle={{
              fontSize: 14,
              color: color.textColorGray,
              fontFamily: Fonts.Shabnam,
            }}
            iconContainerStyle={{width: `${100 / 7}%`}}
            backIconStyle={{
              width: 16,
              height: 16,
              resizeMode: 'center',
              tintColor: color.gray8,
            }}
            nextIconStyle={{
              width: 16,
              height: 16,
              resizeMode: 'center',
              tintColor: color.gray8,
            }}
            eachYearStyle={{
              width: `${88 / 3}%`,
              padding: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1.5%',
              marginBottom: 5,
              marginHorizontal: '1.5%',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: color.Border,
            }}
            eachYearTextStyle={{
              fontSize: 16,
              color: color.gray8,
              fontFamily: Fonts.Shabnam,
            }}
            eachMonthStyle={{
              width: `${88 / 3}%`,
              padding: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: color.Border,
              marginBottom: '3%',
              borderRadius: 10,
            }}
            eachMonthTextStyle={{
              fontSize: responsiveFontSize(1.8),
              color: color.gray8,
              fontFamily: Fonts.Shabnam,
            }}
            weekdaysContainerStyle={{
              height: '10%',
              marginBottom: 15,
              marginTop: 15,
            }}
            weekdayStyle={{
              flex: 1,
              borderBottomColor: color.Border,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            weekdayTextStyle={{
              fontSize: 11,
              fontFamily: Fonts.Shabnam,
              color: color.gray7,
            }}
            dayStyle={{
              width: `${100 / 7}%`,
              justifyContent: 'center',
              alignItems: 'center',
              aspectRatio: 1 / 1,
            }}
            selectedDayStyle={{
              width: '70%',
              aspectRatio: 1 / 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            selectedDayColor={'#66BEFF'}
            dayTextStyle={{fontSize: 13, fontFamily: Fonts.Shabnam}}
            selectedDayTextColor={color.White}
            dayTextColor={color.gray8}
            disabledTextColor="#4bcffa66"
            onDateChange={date => setCurrentdate(date)}
          />

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              position: 'absolute',
              bottom: 80,
              right: 20,
              left: 20,
            }}>
            <TouchableOpacity
              onPress={() => props.onDataChange(currentday)}
              activeOpacity={0.8}
              style={{
                backgroundColor: color.blue1,
                padding: 10,
                flex: 1,
                marginRight: 12,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: Fonts.Shabnam,
                  color: color.White,
                }}>
                انتخاب
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShow(false)}
              activeOpacity={0.8}
              style={{
                borderColor: color.blue1,
                borderWidth: 1,
                padding: 10,
                flex: 1,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: Fonts.Shabnam,
                  color: color.blue1,
                }}>
                بازگشت
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default forwardRef(calendarDialog);
