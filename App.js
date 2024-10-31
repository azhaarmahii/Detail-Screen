import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./screen/Detail";
import HomeScreen from "./screen/HomeScreen";
import webView from "./screen/WebView";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WebView"
      >
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebView" component={webView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
