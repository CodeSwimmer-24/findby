import { View, Text, ScrollView, ProgressBarAndroidBase } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Category from "../../components/Categories";

const Locations = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header />
        <Category />
      </View>
    </ScrollView>
  );
};

export default Locations;
