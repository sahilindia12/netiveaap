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






function Home({navigation}) {


  return (
    <>
    
    <View><Text>home</Text></View>
    <Button 
        title="Go to singup"
        onPress={() => navigation.navigate('singup')}
      />

<Button 
        title="Go to api"
        onPress={() => navigation.navigate('api')}
      />
    </>
  );
}

export default Home


