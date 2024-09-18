/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






function Api({navigation}) {

    const [data,setdata]=useState()

 
  
   


   

     
            const apii= async()=>{
                const call= await fetch("https://jsonplaceholder.typicode.com/posts")
                const data= await call.json()
        
                setdata(data)
        
             
            }
        
    
   
   console.warn(data)
       
    


  return (
    <>

<Button 
        title="Go call api"
        onPress={() => apii()}
      />
    
    <View><Text>api call</Text></View>
    <Button 
        title="Go to singup"
        onPress={() => navigation.navigate('singup')}
      />


<ScrollView>

      {



data?data.map((itme)=>{
    return(

        <>
            <View className=' bg-green-400 mx-5 mt-5'><Text className=' text-white'>{itme.userId}</Text></View>
            <View className=' bg-green-400 mx-5 mt-5'><Text className=' text-white'>{itme.id}</Text></View>
            <View className=' bg-green-400 mx-5 mt-5'><Text className=' text-white'>{itme.title}</Text></View>
            <View className=' bg-green-400 mx-5 mt-5'><Text className=' text-white'>{itme.body}</Text></View>
        
        </>
    )
})
:<ActivityIndicator/>
      }



</ScrollView>

    </>
  );
  
}



export default Api


