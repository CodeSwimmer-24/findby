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
import { useIsFocused } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../../constant/colors";

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "flex" },
      });
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Category />
      <ScrollView>
        <TopCards navigation={navigation} />
        <NearYou navigation={navigation} />
      </ScrollView>

      {/* Fixed Register Your Place Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          // Handle button press, e.g., navigate to a "Register" screen
          navigation.navigate("RegisterPlace"); // Example navigation
        }}
      >
        <MaterialIcons name="add" size={25} color="white" />
        {/* <Text style={styles.buttonText}>Registe Place</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Optional: hide the header for the Home screen
      />
      <Stack.Screen
        name="PropertyDetails"
        options={{ headerShown: false }}
        component={PropertyDetails}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  registerButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: colors.baseColor,
    borderRadius: 100,
    paddingVertical: 10,
    // paddingHorizontal: 15,
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
