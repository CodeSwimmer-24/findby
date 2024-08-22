import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Search = () => (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={20}
          color="#19b55c"
          style={styles.icon}
        />
        <TextInput placeholder="Search the Service" style={styles.input} />
      </View>
    </View>
    <TouchableOpacity style={styles.unreadButton}>
      <Entypo name="unread" size={20} color="#19b55c" />
    </TouchableOpacity>
  </View>
);

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  searchContainer: {
    alignItems: "center",
    width: "90%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: "80%",
  },
  unreadButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
};

export default Search;
