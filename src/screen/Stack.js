/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import Home from './Home';
import Add from './Add';



const stack = createNativeStackNavigator();


function Stackk() {


  return (
    <>

<NavigationContainer>

        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="add" component={Add} />


        
      
</NavigationContainer>
  
    
    </>
  );
}

export default Stackk