import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {Color, Fonts, FontSize, IconSize} from '../Value';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import {responsiveHeight} from 'react-native-responsive-dimensions';

class ColumnInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTipVisible: false,
    };
  }

  render() {
    const {
      containerStyle,
      hint,
      value,
      lable,
      onChangeText,
      returnKeyType = 'next',
      onSubmitEdit,
      refrence,
      multiline = false,
      keyboardType,
      editable = true,
      secureTextEntry = false,
      errorMessage,
    } = this.props;

    return (
      <View style={[containerStyle, styles.parent]}>
        <Text style={styles.text}>
          {hint}
          {':'}
        </Text>
        <View>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: errorMessage
                  ? Color.red_button2
                  : Color.border_color,
              },
            ]}
            value={value}
            keyboardType={keyboardType}
            multiline={multiline}
            onChange={e => onChangeText(lable, e.nativeEvent.text)}
            ref={refrence}
            editable={editable}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            onSubmitEditing={() => onSubmitEdit()}
          />
          {/* {errorMessage && (
            <Text style={styles.text_error}>{errorMessage}</Text>
          )} */}
        </View>
      </View>
    );
  }
}

ColumnInput.propTypes = {
  containerStyle: PropTypes.object,
  hint: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  returnKeyType: PropTypes.string,
  onSubmitEdit: PropTypes.func.isRequired,
  refrence: PropTypes.object.isRequired,
  multiline: PropTypes.bool,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  // errorMessage: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'column',
    // margin: 8,
  },
  text: {
    fontFamily: Fonts.IRANSansMobile,
    color: Color.gray2,
    fontSize: FontSize.medium,
    textAlignVertical: 'center',
  },
  input: {
    height: responsiveHeight(7),
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    textAlign: 'right',
    fontFamily: Fonts.IRANSansMobile,
    fontSize: FontSize.medium,
    borderRadius: 10,
    backgroundColor: Color.white,
  },
});

export default ColumnInput;
