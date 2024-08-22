import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "../Search";

const Header = () => (
  <SafeAreaView>
    <StatusBar backgroundColor="#19b55c" />
    <View style={styles.headerContainer}>
      <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationLabel}>Location</Text>
          <View style={styles.locationView}>
            <Ionicons name="location-sharp" size={22} color="white" />
            <TouchableOpacity style={styles.locationButton}>
              <Text style={styles.locationText}>Shaheen Bagh</Text>
              <Entypo name="chevron-small-down" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <FontAwesome name="bell" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <Search />
    </View>
  </SafeAreaView>
);

const styles = {
  headerContainer: {
    backgroundColor: "#19b55c",
    height: 160,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationTextContainer: {
    paddingHorizontal: 10,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: "200",
    color: "white",
    paddingLeft: 5,
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "white",
  },
  bellButton: {
    backgroundColor: "rgb(64,193,120)",
    padding: 10,
    borderRadius: 7,
  },
};

export default Header;
