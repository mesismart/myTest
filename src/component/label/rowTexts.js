import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../constant/color';
import {Fonts, FontSize} from '../../constant/font';

const rowTexts = props => {
  const {
    textStyle,
    titleStyle,
    numberOfLines = 1,
    title,
    text,
    containerStyle,
  } = props;

  return (
    <View style={{...styles.screen, ...props.containerStyle}}>
      {text != null && text.length > 0 ? (
        <Text
          numberOfLines={numberOfLines}
          style={{...styles.text, ...props.textStyle}}>
          {text}
        </Text>
      ) : null}

      {title != null && title.length > 0 ? (
        <Text style={{...styles.title, ...props.titleStyle}}>{title}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 1,
    flexDirection: 'row',
  },
  text: {
    fontFamily: Fonts.ShabnamFD,
    fontSize: FontSize.medium,
    
    color: Color.textColorBlue,
  },
  title: {
    fontFamily: Fonts.ShabnamFD,
    fontSize: FontSize.medium,
    color: Color.textColorGray,
  },
});

export default rowTexts;
