import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import TabNavigation from "./screens";
import { useState } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        {isLoggedIn ? <Stack.Screen name="Home" component={TabNavigation} /> :
          <Stack.Screen name="Login" component={Login} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
