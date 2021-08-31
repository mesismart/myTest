import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  responsiveHeight,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';

import Color from '../../constant/color';
import {Margins, Paddings} from '../../constant/dimension';
import {Fonts} from '../../constant/font';

const Card = props => {
  return (
    <View {...props} style={{...styles.screen, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    textAlign: 'center',
    width: '80%',
    padding: 5,
    backgroundColor: Color.White,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.Border,
    height: responsiveHeight(9),
  },
});

export default Card;
