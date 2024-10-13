import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../constant/colors";
import Modal from "react-native-modal"; // Import react-native-modal

const locations = {
  "New Town": ["Sector 8", "Sector 9", "Sector 5"],
  "Salt Lake": ["Block A", "Block B", "Block C"],
  "Park Street": ["Street 1", "Street 2", "Street 3"],
};

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => setModalVisible(true)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "83%",
            }}
          >
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
          <Text
            style={{
              marginRight: 5,
              fontSize: 12,
              color: colors.gray,
            }}
          >
            By All
          </Text>
          <Entypo name="chevron-down" size={24} color={colors.baseColor} />
        </TouchableOpacity>
      </View>

      {/* Modal for selecting location and sector */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)} // Close modal when clicking outside
        onSwipeComplete={() => setModalVisible(false)} // Enable swiping to dismiss
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0.5} // Set backdrop transparency
        animationIn="slideInUp" // Slide modal in from the bottom
        animationOut="slideOutDown" // Slide modal out downwards
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Your Location</Text>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Your Locality</Text>
            <Picker
              selectedValue={selectedLocation}
              style={styles.picker}
              onValueChange={(itemValue) => {
                setSelectedLocation(itemValue);
                setSelectedSector(null);
              }}
            >
              <Picker.Item label="Select location" value={null} />
              {Object.keys(locations).map((location) => (
                <Picker.Item key={location} label={location} value={location} />
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
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
