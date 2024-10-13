// components/TabNavigation.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home/index"; // This is the Stack Navigator defined in Home.js
import Locations from "./Location";
import Fav from "./Fav";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constant/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Define the icon for each tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "bed" : "bed-outline";
              break;
            case "Location":
              iconName = focused ? "business" : "business-outline";
              break;
            case "Fav":
              iconName = focused ? "bookmark" : "bookmark-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Customize the tab bar appearance
        tabBarActiveTintColor: colors.baseColor,
        tabBarInactiveTintColor: "#c0c0c0",
        tabBarShowLabel: false, // Hide labels
        headerShown: false, // Hide headers for all screens
        tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Location" component={Locations} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 10, // 20 units from the bottom
    left: "5%", // 5% left margin
    right: "5%", // 5% right margin
    width: "90%", // Ensures the width is 90%
    height: 60, // Adjust height as needed
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    // Ensure that children are not clipped
    overflow: "hidden",
    // Remove the default top border
    borderTopWidth: 0,
  },
});

export default TabNavigation;
