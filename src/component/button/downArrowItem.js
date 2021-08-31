import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import color from '../../constant/color';
import {Fonts} from '../../constant/font';

downArrowItem = props => {
  const {containerStyle, title, onClick} = props;

  return (
    <TouchableOpacity
      onPress={() => onClick()}
      activeOpacity={0.6}
      style={[containerStyle, styles.parent]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Feather name="chevron-down" size={25} color={color.textColorGray} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

downArrowItem.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  parent: {
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.White,
    borderWidth: 1,
    borderColor: color.Border,
    padding: 8,
    height: responsiveHeight(9),
  },
  title: {
    textAlign: 'right',
    marginRight: 12,
    fontFamily: Fonts.Shabnam,
    fontSize: responsiveFontSize(1.7),
    color: color.textColorGray,
  },
});

export default downArrowItem;
