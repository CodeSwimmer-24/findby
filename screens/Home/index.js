// components/Home.js

import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Header from "../../components/Header"; // Header component
import PropertyDetails from "./Screens/PropertyDetails"; // Property Details Screen
import List from "../List"; // List screen
import Forms from "../../Forms"; // Forms component
import colors from "../../constant/colors"; // App color constants
import { getTabBarOptions } from "../../global/TabBarStyle"; // Custom tab bar styles

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  // Update tabBarStyle when this screen is focused
  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent(); // Get the parent navigator
      parent?.setOptions({
        tabBarStyle: { display: "flex" }, // Ensure the tab bar is visible
        ...getTabBarOptions(), // Apply global tab bar styles
      });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Component */}
      <Header />

      {/* Optional Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Add your content here */}
      </ScrollView>
    </SafeAreaView>
  );
};

// Create Native Stack Navigator
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      {/* Main Home Screen */}
      <Stack.Screen
        name="HomeHeader"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide default header
      />

      {/* List Screen */}
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false, // Hide default header
        }}
      />

      {/* Registration Form */}
      <Stack.Screen
        name="RegisterForm"
        component={Forms}
        options={{
          headerShown: false, // Hide default header
        }}
      />

      {/* Example for Property Details */}
      <Stack.Screen
        name="PropertyDetails"
        component={PropertyDetails}
        options={{
          headerShown: false, // Show header for this screen
          title: "Property Details", // Customize the header title
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Default background color
  },
  scrollContent: {
    paddingBottom: 100, // Avoid overlap with tab bar
  },
  registerButton: {
    position: "absolute",
    bottom: 80,
    right: 30,
    backgroundColor: colors.baseColor, // Base app color
    borderRadius: 100,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 10, // Shadow on Android
    shadowColor: "#000", // Shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 55,
    width: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
