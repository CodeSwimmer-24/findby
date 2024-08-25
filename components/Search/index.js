import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../constant/colors";

const Search = () => (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.searchBox}>
        <MaterialIcons
          name="location-on"
          size={24}
          color={colors.baseColor}
          style={styles.icon}
        />
        <TextInput
          placeholder="Select your location"
          style={styles.input}
          placeholderTextColor="gray" // Added placeholder text color for better UX
        />
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.unreadButton}>
      <Entypo name="unread" size={20} color={colors.baseColor} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  searchContainer: {
    width: "82%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Adjusted width to be flexible
  },
  unreadButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default Search;
