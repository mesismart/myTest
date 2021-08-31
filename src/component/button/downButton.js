import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,
} from 'react-native';
import { responsiveHeight, useResponsiveHeight } from 'react-native-responsive-dimensions';

import Color from '../../constant/color';
import { Margins,Paddings } from '../../constant/dimension';
import { Fonts } from '../../constant/font';


const DownButton=props=>
{
  return <TouchableOpacity {...props} style={{...styles.screen,...props.style}} >
  <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
      screen:{
        height:responsiveHeight(8),
        width:'100%',
        backgroundColor:Color.primaryColor,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
      },
      text:{
        color:Color.White,
        width:'100%',
        textAlign:'center',
        fontFamily:Fonts.Shabnam,
      },
});


export default DownButton ;