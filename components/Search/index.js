import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../constant/colors"
import useLocationStore from "../../store/location";
import LocationModal from "../Location/LocationModal";

const Search = () => {
  // Zustand store values
  const { selectedLocation, selectedSector } = useLocationStore();
  const [modalVisible, setModalVisible] = useState(false);

  // Check if Zustand store state is empty or not
  useEffect(() => {
    if (!selectedLocation || !selectedSector) {
      setModalVisible(true); // Show modal if location/sector is empty
    }
  }, [selectedLocation, selectedSector]);

  // Handler to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchBox}
          onPress={toggleModal}
        >
          <View style={styles.searchContent}>
            <AntDesign
              name="search1"
              size={22}
              color={colors.baseColor}
              style={styles.icon}
            />
            <Text style={styles.inputText}>
              {selectedLocation
                ? `${selectedLocation}, ${selectedSector || "Select Sector"}`
                : "Select Locality For Rent/Buy"}
            </Text>
          </View>
          <View style={styles.searchRightContent}>
            <Text style={styles.byAllText}>By All</Text>
            <Entypo name="chevron-down" size={22} color={colors.baseColor} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Location Selection Modal */}
      <LocationModal
        isVisible={modalVisible}
        onClose={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  searchContainer: {
    width: "100%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "83%",
  },
  searchRightContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "17%",
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    color: "gray",
    fontSize: 14,
  },
  byAllText: {
    marginRight: 5,
    fontSize: 13,
    color: "gray",
  },
});

export default Search;
