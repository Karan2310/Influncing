import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import { useFonts } from 'expo-font';
import {Shop, Wallet, SignUp} from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () =>{
  let [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
  });

  if (!fontsLoaded) {
    return (<SafeAreaView>
      <Image
        source={require('./assets/splash.png')}
      />
    </SafeAreaView>);
  } else {

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName="Wallet"
      
      >
        <Stack.Screen name="Shop" component={Shop}></Stack.Screen>
        <Stack.Screen name="Wallet" component={Wallet}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
    }
}


export default App;