import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert, // Import ScrollView
} from "react-native";
import Modal from "react-native-modal";
import colors from "../../constant/colors";
import useAuthStore from "../../zustand/userAuth";
import { BASE_URL } from "../../services";
import axios from "axios";

const LocationModal = ({ isVisible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [isLoading, setIsLoading] = useState(false);
  const { email, name } = useAuthStore();


  const handleContinue = async () => {
    if (phoneNumber.length === 10) {
      try {
        setIsLoading(true);
        const response = await axios.post(`${BASE_URL}/login`, {
          emailId: email,
          name: name,
          contactNo: phoneNumber,
        });
        // Optional: check response.status or response.data
        const data = response.data;
        console.log('Backend response:', data);
        onClose();
      } catch (error) {
        Alert.alert("Error", "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert("Invalid", "Please enter a valid 10-digit phone number");
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
    >
      <View style={styles.modalContainer}>

        {/* Scrollable Content */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.headerContainer}>

            <Image source={require("../../assets/icons/phone.png")} style={styles.headerImage} />

          </View>
          {/* Name and Phone Inputs */}
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="9123 456789"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text.replace(/\s/g, ""))}
            />
          </View>


          {/* Action Buttons */}
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.applyButton, isLoading && styles.disabledButton]}
              onPress={handleContinue}
              disabled={isLoading}
            >
              <Text style={styles.applyButtonText}>
                {isLoading ? <ActivityIndicator size="small" color="#fff" /> : "Continue"}
              </Text>
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
    justifyContent: "space-between",
    height: "40%"
  },
  headerContainer: {
    alignItems: "center",
  },
  headerImage: {
    height: 50,
    width: 50,
    marginBottom: 20,
    marginTop: 20
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
    width: "80%",
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
    marginVertical: 10
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
    paddingVertical: 15,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
    elevation: 5,
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    elevation: 5,
  },
  scrollView: {
    flex: 1,
  },

  label: {
    marginBottom: 8,
    color: "#6e6e6e",
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#fff",
  },
  countryCode: {
    fontSize: 16,
    color: colors.baseColor,
  },
  divider: {
    height: "70%",
    width: 1,
    backgroundColor: "#c0c0c0",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default LocationModal;
