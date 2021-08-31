import React, {
  Component,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Color from '../../constant/color';
import {Fonts, FontSize} from '../../constant/font';
import {Dialog} from 'react-native-simple-dialogs';

ProgressBar = (props, ref) => {
  const [ishShow, setShow] = useState(false);

  const {action = 'دریافت'} = props;

  useImperativeHandle(ref, () => ({
    show: () => {
      console.log('\n  show me');
      setShow(true);
    },
    hide: () => {
      console.log('\n hide me');
      setShow(false);
    },
  }));

  return (
    <Dialog
      style={{flexDirection: 'column'}}
      animationType="fade"
      visible={ishShow}
      {...props}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ActivityIndicator size="large" color={Color.secondColor} />
        <View>
          <Text
            style={{
              marginBottom: 16,
              fontFamily: Fonts.Shabnam,
              fontSize: FontSize.larg,
              color: Color.textColorBlue,
            }}>
            در حال {action} اطلاعات
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Shabnam,
              fontSize: FontSize.medium,
            }}>
            {' '}
            لطفا منتظر بمانید ...{' '}
          </Text>
        </View>
      </View>
    </Dialog>
  );
};

export default React.forwardRef(ProgressBar);
