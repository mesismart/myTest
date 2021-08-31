import React, {Component, memo} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constant/font';
import color from '../../constant/color';

rowInput = props => {
  const {
    containerStyle,
    value,
    lable,
    onChangeText,
    returnKeyType = 'next',
    onSubmitEdit,
    refrence,
    multiline = false,
    keyboardType = 'default',
    editable = true,
    secureTextEntry = false,
    errorMessage,
    titleContainer,
    placeholder,
    inputStyle,
    textType = 'number', //string
  } = props;

  return (
    <View style={{...styles.parent, ...containerStyle}}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: errorMessage ? color.red1 : color.Border,
          },
          inputStyle,
        ]}
        value={value}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={editable}
        onChange={e => onChangeText(lable, e.nativeEvent.text, textType)}
        ref={refrence}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        onSubmitEditing={() => onSubmitEdit()}
      />
    </View>
  );
};

rowInput.propTypes = {
  containerStyle: PropTypes.object,
  value: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  returnKeyType: PropTypes.string,
  onSubmitEdit: PropTypes.func.isRequired,
  refrence: PropTypes.object.isRequired,
  multiline: PropTypes.bool,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  errorMessage: PropTypes.string,
  titleContainer: PropTypes.object,
  inputStyle: PropTypes.object,
  textType: PropTypes.string,
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    height: responsiveHeight(9),
    fontFamily: Fonts.Shabnam,
    fontSize: responsiveFontSize(1.7),
    borderRadius: 10,
    backgroundColor: color.White,
    textAlign: 'right',
  },
});

export default memo(rowInput);
