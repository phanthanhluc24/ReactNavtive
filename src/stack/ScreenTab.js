import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image } from "react-native";
import { Home } from './Home';
import { Shopping } from './Shopping';
import { Chat } from '../screen/Chat';
import Profile from '../components/Profile';
const Tab = createBottomTabNavigator();
export const ScreenTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen
      name="HOME"
      component={Home}
      options={{
        tabBarIcon: () => (
          <View>
            <Image source={require("../../assets/Home.png")}></Image>
          </View>
        ),
      }}
    ></Tab.Screen>
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={require("../../assets/IconProfile.png")}></Image>
            </View>
          ),
        }}
      />
    <Tab.Screen
      name="SHOPPING"
      component={Shopping}
      options={{
        tabBarIcon: () => (
          <View>
            <Image source={require("../../assets/IconCart.png")}></Image>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="CHAT"
      component={Chat}
      options={{
        tabBarIcon: () => (
          <View>
            <Image source={require("../../assets/IconChat.png")}></Image>
          </View>
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
  )
}
