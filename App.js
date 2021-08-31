/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  I18nManager,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JcoContext } from './src/screen/context';
import Splash from './src/screen/splash/splash';

export default function App() {
  I18nManager.forceRTL(false);

  const [TmpData, setTmpData] = useState({ Token: null, User: null });
  const [TmpData2, setTmpData2] = useState({ Token: null, User: null });

  const Stack = createStackNavigator();




  return (
    <JcoContext.Provider value={{ TmpData, setTmpData }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />

        </Stack.Navigator>
      </NavigationContainer>
    </JcoContext.Provider>
  );
}
