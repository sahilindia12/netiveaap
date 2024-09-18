/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
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






function Loging({navigation}) {

   const [lodind,setlodinf]=useState(false)

   setTimeout(() => {
    console.warn("time out")
    setlodinf(true)
   }, 3000);


  return (
    <>

    <View>

   


   {
    lodind? <ActivityIndicator size="large" color="#00ff00" />:null
   }

   <Button
   title='show'
   onPress={()=>setlodinf(!lodind)}
   />
    </View>
    
    <View><Text>loging pase</Text></View>
    <Button 
        title="Go to home page"
        onPress={() => navigation.navigate('singup')}
      />
    </>
  );
}

export default Loging


