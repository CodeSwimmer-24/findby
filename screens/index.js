// components/TabNavigation.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home/index"; // Stack Navigator defined in Home.js
import Locations from "./Location";
import Fav from "./Fav";
import ProfileRoute from "../routes/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constant/colors";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { getTabBarOptions } from "../global/TabBarStyle";

const Tab = createBottomTabNavigator();

const icons = {
  Home: { focused: "home", unfocused: "home-outline" },
  Location: { focused: "business", unfocused: "business-outline" },
  Fav: { focused: "bookmark", unfocused: "bookmark-outline" },
  Profile: { focused: "person", unfocused: "person-outline" },
};

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.fabContainer}
    onPress={onPress}
    accessibilityLabel="Add Button"
  >
    <View style={styles.fab}>{children}</View>
  </TouchableOpacity>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconSet = icons[route.name];
          const iconName = iconSet
            ? focused
              ? iconSet.focused
              : iconSet.unfocused
            : "ellipse";
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              accessibilityLabel={`${route.name} Tab`}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
          fontWeight: "600", // Adjust label position
        },
        tabBarStyle: styles.tabBarStyle, // Custom style for the tab bar
        tabBarActiveTintColor: colors.baseColor,
        tabBarInactiveTintColor: "#c0c0c0",
        headerShown: false,
      })}
      lazy={true} // Optional: Improve performance by lazy loading tabs
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Location"
        component={Locations}
        options={{ tabBarLabel: "Property" }}
      />
      <Tab.Screen
        name="Add"
        component={() => null} // Placeholder for FAB action
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Ionicons name="add" size={30} color="#fff" />
            </CustomTabBarButton>
          ),
          tabBarLabel: "", // Hides label for the FAB
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{ tabBarLabel: "Favorites" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileRoute}
        options={{ tabBarLabel: "Profile" }}
      />
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
  fabContainer: {
    top: -25, // Makes the FAB float above the tab bar
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.baseColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabNavigation;
