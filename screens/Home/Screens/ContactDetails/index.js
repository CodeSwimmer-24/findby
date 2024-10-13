// components/PropertyDetails/ContactModal.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../../../constant/colors";
import house from "../../../../assets/icons/house.png";

const ContactModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={["down"]}
      style={styles.modal}
      propagateSwipe
      avoidKeyboard
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContentContainer}
      >
        <View style={styles.handle} />
        <View style={styles.content}>
          <Text style={styles.title}>Contact Now</Text>
          <Text style={styles.subtitle}>
            You can contact the person personally via WhatsApp or Phone Number
          </Text>

          <View style={styles.contactInfoContainer}>
            <Image source={house} style={styles.contactImage} />
            <Text style={styles.contactName}>Khalid Mahmood</Text>
            <View style={styles.locationContainer}>
              <Ionicons
                name="location-outline"
                color={colors.baseColor}
                size={24}
              />
              <Text style={styles.locationText}>
                4th Floor B15, Toker Number 6, Shahin Bag, Jamaya Nager, Delhi
              </Text>
            </View>
            <View style={styles.phoneContainer}>
              <View style={styles.phoneInfo}>
                <Ionicons
                  name="call-outline"
                  color={colors.baseColor}
                  size={22}
                />
                <Text style={styles.phoneText}>+91 9234379990</Text>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name="copy-outline"
                  color={colors.baseColor}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.messageButton}>
              <Feather name="message-circle" size={22} color="#305eff" />
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton}>
              <Ionicons name="logo-whatsapp" size={22} color="#128c7e" />
              <Text style={styles.whatsappButtonText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.callButton} onPress={onClose}>
            <Ionicons name="call-outline" size={24} color={colors.white} />
            <Text style={styles.callButtonText}>Call for Inquiry</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContentContainer: {
    backgroundColor: colors.white,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: colors.lightGray,
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: 10,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.baseColor,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  contactInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contactImage: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.baseColor,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.gray,
    fontWeight: "500",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "90%",
    marginVertical: 20,
    borderRadius: 10,
  },
  phoneInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneText: {
    paddingLeft: 10,
    fontSize: 16,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 50,
  },
  messageButton: {
    flexDirection: "row",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#305eff1a",
    paddingVertical: 10,
    borderRadius: 10,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    color: "#305effa1",
  },
  whatsappButton: {
    flexDirection: "row",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dcf8c6",
    paddingVertical: 10,
    borderRadius: 10,
  },
  whatsappButtonText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    color: "#128c7e",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.baseColor,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
    width: "100%",
  },
  callButtonText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
  },
});

export default ContactModal;
