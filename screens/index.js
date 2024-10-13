// components/TabNavigation.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home/index"; // Stack Navigator defined in Home.js
import Locations from "./Location";
import Fav from "./Fav";
import ProfileRoute from "../routes/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constant/colors";
import { StyleSheet } from "react-native";
import { getTabBarOptions } from "../global/TabBarStyle";

const Tab = createBottomTabNavigator();

const icons = {
  Home: { focused: "bed", unfocused: "bed-outline" },
  Location: { focused: "business", unfocused: "business-outline" },
  Fav: { focused: "bookmark", unfocused: "bookmark-outline" },
  Profile: { focused: "person", unfocused: "person-outline" },
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconSet = icons[route.name];
          const iconName = iconSet ? (focused ? iconSet.focused : iconSet.unfocused) : "ellipse";
          return <Ionicons name={iconName} size={size} color={color} accessibilityLabel={`${route.name} Tab`} />;
        },
        ...getTabBarOptions()
      })}
      lazy={true} // Optional: Improve performance by lazy loading tabs
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Location" component={Locations} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Profile" component={ProfileRoute} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#fff",
    borderTopWidth: 0,
    height: 70,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 5,
  },
});

export default TabNavigation;
