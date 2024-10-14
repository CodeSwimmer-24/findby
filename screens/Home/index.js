// components/Home.js

import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import Category from "../../components/Categories";
import TopCards from "../../components/TopCards";
import NearYou from "../../components/NearYou";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropertyDetails from "./Screens/PropertyDetails";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../../constant/colors";
import { useIsFocused } from "@react-navigation/native";
import { getTabBarOptions } from "../../global/TabBarStyle";
import Forms from "../../Forms";

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "flex" },
        ...getTabBarOptions()
      });
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TopCards navigation={navigation} />
        <NearYou navigation={navigation} />
      </ScrollView>

      {/* Fixed Register Your Place Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          // Handle button press, e.g., navigate to a "Register" screen
          navigation.navigate("RegisterForm"); // Example navigation
        }}
        accessible={true}
        accessibilityLabel="Register Your Place"
      >
        <MaterialIcons name="add" size={25} color="white" />
        {/* <Text style={styles.buttonText}>Register Place</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropertyDetails"
        component={PropertyDetails}
        options={{
          headerShown: false,
          // Optionally, hide the tab bar on this screen
        }}
      />
      <Stack.Screen
        name="RegisterForm"
        component={Forms}
        options={{
          headerShown: false,
          // Optionally, hide the tab bar on this screen
        }}
      />
      {/* Add more screens like "RegisterPlace" if needed */}
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    paddingBottom: 100, // Ensures content doesn't get hidden behind the tab bar
  },
  registerButton: {
    position: "absolute",
    bottom: 80,
    right: 30,
    backgroundColor: colors.baseColor,
    borderRadius: 100,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 10, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 50,
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
