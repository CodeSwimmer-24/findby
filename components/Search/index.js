// Import External Libraries
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Modal from "react-native-modal";

// Import Internal Modules
import colors from "../../constant/colors";

// Location Data
const LOCATIONS = {
  "New Town": ["Sector 8", "Sector 9", "Sector 5"],
  "Salt Lake": ["Block A", "Block B", "Block C"],
  "Park Street": ["Street 1", "Street 2", "Street 3"],
};

/**
 * LocationModal Component
 * Handles the selection of location and sector within a modal.
 */
const LocationModal = ({
  isVisible,
  onClose,
  selectedLocation,
  setSelectedLocation,
  selectedSector,
  setSelectedSector,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose} // Close modal when clicking outside
      onSwipeComplete={onClose} // Enable swiping to dismiss
      swipeDirection="down"
      style={styles.modal}
      backdropOpacity={0.5} // Set backdrop transparency
      animationIn="slideInUp" // Slide modal in from the bottom
      animationOut="slideOutDown" // Slide modal out downwards
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Select Your Location</Text>

        {/* Location Picker */}
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
            {Object.keys(LOCATIONS).map((location) => (
              <Picker.Item key={location} label={location} value={location} />
            ))}
          </Picker>
        </View>

        {/* Sector Picker (Displayed only if a location is selected) */}
        {selectedLocation && (
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Your Exact Location</Text>
            <Picker
              selectedValue={selectedSector}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSector(itemValue)}
            >
              <Picker.Item label="Select sector" value={null} />
              {LOCATIONS[selectedLocation].map((sector) => (
                <Picker.Item key={sector} label={sector} value={sector} />
              ))}
            </Picker>
          </View>
        )}

        {/* Modal Action Buttons */}
        <View style={styles.modalActions}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={onClose} // You can add additional actions here
          >
            <Text style={styles.applyButtonText}>Find Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

/**
 * Search Component
 * Main component that displays the search box and handles modal visibility.
 */
const Search = () => {
  // State Management
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

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
                ? `${selectedLocation}, ${selectedSector}`
                : "Select Locality For Rent/Buy"}
            </Text>
          </View>
          <View style={styles.searchRightContent}>
            <Text style={styles.byAllText}>By All</Text>
            <Entypo name="chevron-down" size={24} color={colors.baseColor} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Location Selection Modal */}
      <LocationModal
        isVisible={modalVisible}
        onClose={toggleModal}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
      />
    </View>
  );
};

/**
 * Stylesheet for the components
 */
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
  modal: {
    justifyContent: "flex-end", // Aligns the modal to the bottom
    margin: 0, // Removes default margin
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 20,
    height: 400,
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
