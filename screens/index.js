// components/TabNavigation.js

import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home/index"; // Stack Navigator defined in Home.js
import Locations from "./Location";
import Fav from "./Fav";
import ProfileRoute from "../routes/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constant/colors";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Form from "../Application/Step1";
import LocationModal from "../components/Location/LocationModal";
import useAuthStore from "../zustand/userAuth";

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

  const { isNewUser, setIsNewUser } = useAuthStore();
  console.log("isNewUser", isNewUser);

  return (
    <>
      {isNewUser && (
        <LocationModal
          isVisible={isNewUser}
          onClose={() => setIsNewUser(false)}
        />
      )}

      {/* Main Tab Navigator */}
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
            fontWeight: "600",
          },
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.baseColor,
          tabBarInactiveTintColor: "#c0c0c0",
          headerShown: false,
        })}
        lazy={true}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
        <Tab.Screen name="Location" component={Locations} options={{ tabBarLabel: "Property" }} />
        <Tab.Screen
          name="Add"
          component={Form}
          options={{
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}>
                <Ionicons name="add" size={30} color="#fff" />
              </CustomTabBarButton>
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen name="Fav" component={Fav} options={{ tabBarLabel: "Favorites" }} />
        <Tab.Screen name="Profile" component={ProfileRoute} options={{ tabBarLabel: "Profile" }} />
      </Tab.Navigator>
    </>
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
    width: 56,
    height: 56,
    borderRadius: 20,
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
