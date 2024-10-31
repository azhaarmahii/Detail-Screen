import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Detail from "./screen/auth/Detail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="Detail" component={Detail}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}



