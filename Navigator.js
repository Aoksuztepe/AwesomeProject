import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import FirstScreen from './components/FirstScreen';
import ForgotScreen from './components/ForgotScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';
import TopScreen from './components/TopScreen';
import CartScreen from './components/CartScreen';
import DiscoveryScreen from './components/DiscoveryScreen';
const Stack = createNativeStackNavigator();


function Navigator() {
  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: ' React Native ',
          headerStyle: {
            backgroundColor: '#270c3e',
           
          },
          headerTintColor: '#fff',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'SIGN IN',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          title: 'SIGN UP',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="First" component={FirstScreen} options={{
          title: ' React Native ',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Forgot" component={ForgotScreen} options={{
          title: 'RESET PASSWORD',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

         <Stack.Screen name="Cart" component={CartScreen} options={{
          title: 'CART',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

         <Stack.Screen name="Discovery" component={DiscoveryScreen} options={{
          title: 'Discovery',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

         <Stack.Screen name="Profile" component={ProfileScreen} options={{
          title: 'PROFILE',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Top" component={TopScreen} options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: '#270c3e',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        
      </Stack.Navigator>

    </NavigationContainer>
    
  );
};

export default Navigator;