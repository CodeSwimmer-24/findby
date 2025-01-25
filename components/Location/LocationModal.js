import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView, // Import ScrollView
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import useLocationStore from "../../store/location";
import colors from "../../constant/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const LOCATIONS = {
  "New Town": ["Sector 8", "Sector 9", "Sector 5"],
  "Salt Lake": ["Block A", "Block B", "Block C"],
  "Park Street": ["Street 1", "Street 2", "Street 3"],
};

const LocationModal = ({ isVisible, onClose }) => {
  const { selectedLocation, selectedSector, setLocation } = useLocationStore();
  const [tempLocation, setTempLocation] = useState(selectedLocation);
  const [tempSector, setTempSector] = useState(selectedSector);
  const [rent, setRent] = useState("rent");
  const [name, setName] = useState(""); // State for name input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input

  const handleApply = () => {
    setLocation(tempLocation, tempSector);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      // onBackdropPress={onClose}
      // onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
    >
      <View style={styles.modalContainer}>
        {/* Header */}

        {/* Scrollable Content */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Image
              source={{
                uri: "https://img.freepik.com/premium-vector/delhi-red-fort-sketch_250484-316.jpg",
              }}
              style={styles.headerImage}
              resizeMode="contain"
            />
            <Text style={styles.modalTitle}>Enter Your details.</Text>
            <Text style={styles.modalDescription}>
              Select the location near which you want to search.
            </Text>
          </View>
          {/* Name and Phone Inputs */}
          <View style={styles.inputContainer}>
            <Text style={styles.pickerLabel}>Enter Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.pickerLabel}>Enter Your Contact Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          {/* Location Pickers */}
          <View style={styles.pickersContainer}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Your Locality</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={tempLocation}
                  onValueChange={(itemValue) => {
                    setTempLocation(itemValue);
                    setTempSector(null);
                  }}
                  style={styles.picker}
                  dropdownIconColor="gray"
                >
                  <Picker.Item label="Select location" value={null} />
                  {Object.keys(LOCATIONS).map((location) => (
                    <Picker.Item
                      key={location}
                      label={location}
                      value={location}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Your Exact Location</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={tempSector}
                  onValueChange={setTempSector}
                  style={styles.picker}
                  dropdownIconColor="gray"
                  enabled={tempLocation !== null}
                >
                  <Picker.Item
                    label={
                      tempLocation ? "Select sector" : "Select location first"
                    }
                    value={null}
                  />
                  {tempLocation &&
                    LOCATIONS[tempLocation].map((sector) => (
                      <Picker.Item key={sector} label={sector} value={sector} />
                    ))}
                </Picker>
              </View>
            </View>

            {/* Rent/Buy Options */}
            <View style={styles.rentBuyContainer}>
              <TouchableOpacity
                onPress={() => {
                  setRent("rent");
                }}
                style={rent === "rent" ? styles.rentButton : styles.buyButton}
              >
                <Text
                  style={
                    rent === "rent"
                      ? styles.rentBuyText
                      : styles.rentBuyTextDisabled
                  }
                >
                  Rent Property
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setRent("buy");
                }}
                style={rent === "buy" ? styles.rentButton : styles.buyButton}
              >
                <Text
                  style={
                    rent === "buy"
                      ? styles.rentBuyText
                      : styles.rentBuyTextDisabled
                  }
                >
                  Buy Property
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Action Buttons */}
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.applyButton]}
              onPress={handleApply}
              // disabled={!tempLocation || !tempSector}
            >
              <Text style={styles.applyButtonText}>Let's Gooo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "95%",
    justifyContent: "space-between",
  },
  headerContainer: {
    alignItems: "center",
  },
  headerImage: {
    height: 150,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "left",
    color: colors.baseColor,
  },
  modalDescription: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    // marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
  },
  pickersContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#000",
  },
  rentBuyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  rentButton: {
    width: "48%",
    backgroundColor: colors.baseColor,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
  buyButton: {
    width: "48%",
    borderWidth: 0.6,
    borderColor: "#a0a0a0",
    paddingVertical: 10,
    borderRadius: 5,
  },
  rentBuyText: {
    textAlign: "center",
    color: "white",
  },
  rentBuyTextDisabled: {
    textAlign: "center",
    color: colors.baseColor,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  cancelButton: {
    flex: 0.4,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    flexDirection: "row",
  },
  cancelButtonText: {
    color: colors.baseColor,
    fontSize: 16,
    fontWeight: "400",
    marginRight: 5,
  },
  applyButton: {
    flex: 1,
    backgroundColor: colors.baseColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  scrollView: {
    flex: 1,
  },
});

export default LocationModal;
