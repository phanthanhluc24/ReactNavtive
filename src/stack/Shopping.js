import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Orders } from '../screen/Orders';
import { ConfirmOrder } from '../components/Confirm';
import { Payment } from '../components/Payment';
import { Shipping } from '../components/Shipping';
import { Location } from '../components/Location';
import { TrackOrder } from '../components/TrackOrder';
export const Shopping = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Order" component={Orders}/>
           <Stack.Screen name="Confirm" component={ConfirmOrder}></Stack.Screen>
          <Stack.Screen name="Payment" component={Payment}/>
          <Stack.Screen name='Shipping' component={Shipping}/>
          {/* <Stack.Screen name='Location' component={Location}/> */}
          {/* <Stack.Screen name='TrackOrder' component={TrackOrder}/> */}
        </Stack.Navigator>
      )
}
