import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Locations from "./Location";
import Fav from "./Fav";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constant/colors";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "bed" : "bed-outline";
          } else if (route.name === "Location") {
            iconName = focused ? "business" : "business-outline";
          } else if (route.name === "Fav") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.baseColor,
        tabBarInactiveTintColor: "#c0c0c0",
        tabBarStyle: {
          height: 55, // Adjust height as needed
          paddingBottom: 5, // Adjust padding as needed
          borderTopColor: colors.white,
        },
        tabBarShowLabel: false, // Hide labels for all tabs
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Hide header if you want a full-screen experience
        }}
      />
      <Tab.Screen
        name="Location"
        component={Locations}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Fav}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
