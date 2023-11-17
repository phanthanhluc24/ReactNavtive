import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View,Text} from 'react-native';
import { Homes } from '../screen/Home';
import { Search } from '../components/Search';
import { Result } from '../components/Result';
export const Home = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Homes}></Stack.Screen>
        <Stack.Screen name='Search' component={Search}></Stack.Screen>
        <Stack.Screen name='Result' component={Result}></Stack.Screen>
    </Stack.Navigator>
  )
}
