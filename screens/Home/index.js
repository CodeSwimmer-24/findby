import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header";
import Category from "../../components/Categories";
import TopCards from "../../components/TopCards";
import NearYou from "../../components/NearYou";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropertyDetails from "./Screens/PropertyDetails";
import { useIsFocused } from "@react-navigation/native";

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
