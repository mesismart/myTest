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

const BoldLabel = props => {
  return (
    <Text {...props} style={{...styles.screen, ...props.style}}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '80%',
    color: Color.textColorBlue,
    textAlign: 'right',
    fontFamily: Fonts.ShabnamBold,
    marginBottom: Margins.marg8,
  },
});

export default BoldLabel;
