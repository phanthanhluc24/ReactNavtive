import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Detail } from "./src/screen/Detail";
import { Conversation } from "./src/components/conversation/Message";
import { Calling } from "./src/components/conversation/Call";
import { ScreenTab } from "./src/stack/ScreenTab";
import { Location } from "./src/components/Location";
import { TrackOrder } from "./src/components/TrackOrder";
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Notification } from "./src/components/Notification";
import { FinishOrder } from "./src/components/FinishOrder";
import { Login } from "./src/screen/Login";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
Navigation.registerComponent('PROFILE', () => gestureHandlerRootHOC(ScreenTab));
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="MyTab" component={ScreenTab}></Stack.Screen>
        <Stack.Screen
          name="ConversationStack"
          options={({ route }) => ({
            image: route.params.image,
            name: route.params.name
          })}
        >
          {props => <ConversationStack {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name='Location' component={Location}/>
        <Stack.Screen name='TrackOrder' component={TrackOrder}/>
        <Stack.Screen name="Notify" component={Notification}/>
        <Stack.Screen name="Finish" component={FinishOrder}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ConversationStack({ navigation, route }) {
  const { image, name } = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="Conversation"
        options={{ image, name }}
      >
        {props => <Conversation {...props} image={image} name={name} />}
      </Stack.Screen>
      <Stack.Screen name="Calling" component={Calling} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
