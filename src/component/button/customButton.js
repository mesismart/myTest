import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import color from '../../constant/color';
import {Fonts, FontSize} from '../../constant/font';

import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../../constant/config.json';
const Iconb = createIconSetFromFontello(fontelloConfig);

const customButton = props => {
  //const {containerStyle, iconName, title} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{...styles.parent, ...props.containerStyle}}>
      <Text style={styles.value}>{props.value}</Text>

      <View style={styles.parent1}>
        <Text style={styles.title}>{props.title}</Text>
        <Iconb
          name={props.iconName}
          size={FontSize.xxlarg}
          style={{color: color.primaryColor}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.White,
    borderWidth: 1,
    borderColor: color.Border,
    padding: 8,
    width: '94%',
    height: responsiveHeight(9),
  },
  parent1: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
    justifyContent: 'flex-end',
  },
  title: {
    marginRight: 16,
    fontFamily: Fonts.Shabnam,
    fontSize: responsiveFontSize(1.7),
    color: color.textColorBlue,
  },
  value: {
    fontFamily: Fonts.ShabnamFD,
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    flex: 1,
    color: color.textColorBlue,
  },
});

export default customButton;
