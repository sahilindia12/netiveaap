/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






function Singup({navigation}) {


  return (
    <>
    
    <View><Text>singup</Text></View>

    <Button 
        title="Go to loging"
        onPress={() => navigation.navigate('loging')}
      />
 
    </>
  );
}

export default Singup


