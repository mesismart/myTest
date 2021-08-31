import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Alert, Button, StatusBar, Image, Dimensions, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import Color from '../../constant/color';
import strings from '../../constant/string';
import Images from '../../constant/images';
import { Fonts, FontSize, IconSize } from '../../constant/font';
import { savingData, gettingData } from '../../component/utility';
import { JcoContext } from '../context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { GetLastDataService } from '../../api/api';

import ScrollList from '../../component/ScrollList';
import { FlatList } from 'react-native-gesture-handler';

const currentVersionText = '1.0.0';
const currentVersion = 1;

export default function Splash({ route, navigation }) {
  let { width } = Dimensions.get('window');

  const { TmpData, setTmpData } = useContext(JcoContext);
  const [userData, setUserData] = useState([]);
  //only run in compunnet didmount
  useEffect(async () => {

    _GetLastData();
  }, []);


  _GetLastData = async () => {
    console.log("_GetLastData");
    let response = await GetLastDataService('11')
    console.log("GetLastData: " + JSON.stringify(response));
    if (response.statusCode == 200) {
      setUserData(response.data);
    }


  }

  return (

    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollList
        style={{ marginTop: 20 }}
        distanceBetweenItem={10}
        data={userData}
        keyExtractor={item => item.index}
        renderItem={data => {
          return (
            <View
              elevation={5}
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                height: 70,
                width: width - 30,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 6,
              }}>
              <Card item={data.item} />
            </View>
          );
        }}
      />

    </SafeAreaView>

  );


}

const Card = ({ item }) => {
  let categoryColor = '#00ff00';

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
        <Text
          style={{
            // flex: 1,
            fontSize: 16,
            fontWeight: '200',
            marginBottom: 4,
            color: '#808080',
          }}>
          {item.name}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: categoryColor }}>
          {item.website}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'flex-end',
          // marginLe,
        }}>
        <Text
          style={{
            // flex: 1,
            marginBottom: 4,
            fontSize: 12,
            fontWeight: '100',
            // fontFamily: 'roboto',
          }}>
          {item.email}
        </Text>
        <Text style={{ alignItems: 'flex-end', color: '#808080', fontSize: 12 }}>
          {item.phone}
        </Text>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: Color.gray1,
  },
  topViewStyle: {
    flex: 0.2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.gray1,

  },
  organlogoContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.gray1,

  },
  organImageStyle: {
    width: responsiveHeight(38),
    height: responsiveHeight(40),
    resizeMode: 'stretch',
  },
  organTextStyle: {
    backgroundColor: Color.textColorBlue,
    fontFamily: Fonts.IRANSansMobile,
    marginTop: responsiveHeight(8),
    fontSize: responsiveFontSize(2)
  },
  jcologoContainerStyle: {
    flex: 0.5,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.gray1,

  },
  jcoImgaeStyle: {
    width: responsiveHeight(3.5),
    height: responsiveHeight(3.5),
    resizeMode: 'stretch',
  },
  jcoTextStyle: {
    marginTop: responsiveHeight(1),
    color: Color.textColorGray,
    fontFamily: Fonts.IRANSansMobile,
    fontSize: responsiveFontSize(1.5)
  },
  versionContainerStyle: {
    height: responsiveHeight(6),
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Color.gray1,

  },
  versionTextStyle: {
    marginTop: responsiveHeight(0.5),
    backgroundColor: Color.textColorGray,
    fontFamily: Fonts.IRANSansMobile,
  },
});