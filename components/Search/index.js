import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Updated import
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../constant/colors";

// Define a list of locations and corresponding sectors
const locations = {
  "New Town": ["Sector 8", "Sector 9", "Sector 5"],
  "Salt Lake": ["Block A", "Block B", "Block C"],
  "Park Street": ["Street 1", "Street 2", "Street 3"],
};

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false); // For controlling modal visibility
  const [selectedLocation, setSelectedLocation] = useState(null); // Selected location
  const [selectedSector, setSelectedSector] = useState(null); // Selected sector

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => setModalVisible(true)} // Open modal on search box click
        >
          <MaterialIcons
            name="location-on"
            size={24}
            color={colors.baseColor}
            style={styles.icon}
          />
          <Text style={styles.inputText}>
            {selectedLocation
              ? `${selectedLocation}, ${selectedSector}`
              : "Search by location..."}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.unreadButton}>
        <Entypo name="unread" size={20} color={colors.baseColor} />
      </TouchableOpacity>

      {/* Modal for selecting location and sector */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal when back button is pressed
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Your Location</Text>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Your Locality</Text>
              <Picker
                selectedValue={selectedLocation}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setSelectedLocation(itemValue);
                  setSelectedSector(null); // Reset sector when location changes
                }}
              >
                <Picker.Item label="Select location" value={null} />
                {Object.keys(locations).map((location) => (
                  <Picker.Item
                    key={location}
                    label={location}
                    value={location}
                  />
                ))}
              </Picker>
            </View>

            {/* Second dropdown for sector */}
            {selectedLocation && (
              <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Your Exact Location</Text>
                <Picker
                  selectedValue={selectedSector}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedSector(itemValue)}
                >
                  <Picker.Item label="Select sector" value={null} />
                  {locations[selectedLocation].map((sector) => (
                    <Picker.Item key={sector} label={sector} value={sector} />
                  ))}
                </Picker>
              </View>
            )}

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.applyButtonText}>Find Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  inputText: {
    color: "gray",
    fontSize: 14,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
    elevation: 30,
    height: 350,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  cancelButton: {
    marginRight: 15,
    width: "49%",
    backgroundColor: colors.dangerbg,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    textAlign: "center",
    color: colors.danger,
    fontSize: 16,
    alignItems: "center",
  },
  applyButton: {
    backgroundColor: colors.baseColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "49%",
    elevation: 5,

    justifyContent: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Search;
