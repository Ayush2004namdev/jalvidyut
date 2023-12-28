import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../Screen/HomeScreen';
import Analytics from '../Screen/AnalyticScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import CoinsScreen from '../Screen/CoinsScreen';
import Usage from '../Screen/UsageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottonNavigation() {

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
    }}>
      
        <Tab.Screen name='Analytics' component={Analytics} options={{
          tabBarIcon:({color,size}) => (
            <Foundation name="graph-bar" size={size} color={color} />
            )
          }}/>

        <Tab.Screen name='Usage' component={Usage} options={{
          tabBarHideOnKeyboard:true,
          tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name="battery-high"  size={size} color={color} />
            )
          }}/>
          <Tab.Screen name='Home' component={HomeScreen } options={{
            tabBarIcon:({color,size}) => (
              <Ionicons name="home" size={size} color={color} />
              )
          }}/>

        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarIcon:({color,size}) => (
            <FontAwesome name="search" size={size} color={color} />
            )
          }}/>

        <Tab.Screen name='Coins' component={CoinsScreen} options={{
          tabBarIcon:({color,size}) => (
            <FontAwesome5 name="coins" size={size} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}