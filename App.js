/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  Button,
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


import Stackk from './src/screen/Stack';
import Home from './src/screen/Home';
import Add from './src/screen/Add';
import Singup from './src/screen/Singup';
import Loging from './src/screen/Loging';
import Api from './src/screen/Api';



// const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App({navigation}) {

  const stack = createNativeStackNavigator();
  return (
    <>


    

{/* <NavigationContainer className=' mt-10'>

      


        <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="add" component={Add} />
      </Tab.Navigator>
      
</NavigationContainer> */}



<NavigationContainer>
<stack.Navigator>

<stack.Screen name="Home" component={Home} />
<stack.Screen name="Add" component={Add} />
<stack.Screen name="singup" component={Singup} />
<stack.Screen name="loging" component={Loging} />
<stack.Screen name="api" component={Api} />
</stack.Navigator>
       


        
      
</NavigationContainer>

    </>
  );
}

export default App