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
  Alert,
  StyleSheet,
  Text,

  Pressable,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






function Add({navigation}) {

    const createTwoButtonAlert = () =>
        Alert.alert('alert from sahil ', 'plese full of form data', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);


  return (
    <>
   
   <Button 
        title="Go to add"
        onPress={() => navigation.navigate('Home')}
      />

    <Pressable className=' flex justify-center w-[45%] rounded-md  mt-10 mx-[15%] bg-red-600' onPress={()=>navigation.navigate('Home')} >
  <Text className=' text-2xl mx-10 text-white'>bottom</Text>
</Pressable>



    </>
  );
}

export default Add