import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Forms from "../Forms";
import Subscriptions from "../screens/subscriptions";

const ProfileRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterForm"
        component={Forms}
        options={{
          headerShown: false,
          // Optionally, hide the tab bar on this screen
        }}
      />
      <Stack.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{
          headerShown: false,
          // Optionally, hide the tab bar on this screen
        }}
      />
      {/* Add more screens like "RegisterPlace" if needed */}
    </Stack.Navigator>
  );
};

export default ProfileRoute;
