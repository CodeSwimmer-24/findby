import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../constant/colors";
import { useNavigation } from "@react-navigation/native";

const cities = [
  {
    name: "New Delhi",
    subtitle: "Delhi, India",
    icon: require("../../assets/icons/house.png"),
  },
  {
    name: "Lucknow",
    subtitle: "Uttar Pradesh, India",
    icon: require("../../assets/icons/house.png"),
  },
  {
    name: "Kolkata",
    subtitle: "West Bengal, India",
    icon: require("../../assets/icons/house.png"),
  },
  {
    name: "Ranchi",
    subtitle: "Jharkhand, India",
    icon: require("../../assets/icons/house.png"),
  },
  {
    name: "Jamshedpur",
    subtitle: "Jharkhand, India",
    icon: require("../../assets/icons/house.png"),
  },
  {
    name: "Patna",
    subtitle: "Bihar, India",
    icon: require("../../assets/icons/house.png"),
  },
];

const CityCard = ({ name, subtitle, icon, onPress }) => (
  <TouchableOpacity style={styles.cityCard} onPress={onPress}>
    <View style={styles.cityInfo}>
      <Image source={icon} style={styles.cityIcon} />
      <View style={styles.cityTextContainer}>
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.citySubtitle}>{subtitle}</Text>
      </View>
    </View>
    <FontAwesome name="angle-right" size={24} color={colors.baseColor} />
  </TouchableOpacity>
);

const LocationModal = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  const handleCitySelect = (cityName) => {
    navigation.navigate("Home", { selectedCity: cityName });
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
    >
      <View style={styles.modalContainer}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>
            Please select your location where you want to see the Property
          </Text>

          {cities.map((city, index) => (
            <CityCard
              key={index}
              name={city.name}
              subtitle={city.subtitle}
              icon={city.icon}
              onPress={() => handleCitySelect(city.name)}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LocationModal;

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
    height: "90%",
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.baseColor,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  cityCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    marginBottom: 25,
    marginHorizontal: 5,
  },
  cityInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cityIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  cityTextContainer: {
    marginLeft: 10,
  },
  cityName: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.baseColor,
  },
  citySubtitle: {
    fontSize: 12,
    color: "#666",
  },
});
