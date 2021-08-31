import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fonts} from '../../constant/font';
import color from '../../constant/color';

const Loading = ({error, customStyle, tryAgainClick}) => {
  let content;
  if (error) {
    content = (
      <>
        <Text style={{fontFamily: Fonts.Shabnam}}>خطایی رخ داده است...</Text>
        <TouchableOpacity
          onPress={() => tryAgainClick()}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
          <Text
            style={{
              fontFamily: Fonts.Shabnam,
              color: color.primaryColor,
            }}>
            تلاش مجدد
          </Text>
          <AntDesign
            name="reload1"
            size={20}
            style={{color: color.primaryColor, marginLeft: 8}}
          />
        </TouchableOpacity>
      </>
    );
  } else {
    content = <ActivityIndicator size="large" color={color.primaryColor} />;
  }
  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
        customStyle,
      ]}>
      {content}
    </View>
  );
};

export default Loading;
