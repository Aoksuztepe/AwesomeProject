import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import DiscoveryScreen from './DiscoveryScreen';
import TopScreen from './TopScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartScreen from './CartScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={TopScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoveryScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function FirstScreen() {
  return (
    
      <MyTabs />
    
  );
}
