import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  Platform,
} from "react-native";
import Header from "../../components/Header";
import Category from "../../components/Categories";
import colors from "../../constant/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker"; // Use this if installed

const cards = [
  {
    id: 1,
    name: "House Name",
    price: "22000 /month",
    location: "Thoker No 6, Shaheen Bagh",
    image:
      "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
  },
  // Ensure each card has a unique id
  {
    id: 2,
    name: "House Name",
    price: "22000 /month",
    location: "Thoker No 6, Shaheen Bagh",
    image:
      "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
  },
  // Add more unique cards as needed
  // ...
];

const Locations = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility
  const [filters, setFilters] = useState({
    bhk: "",
    squareFt: "",
    bathrooms: "",
    lift: false,
    parking: false,
  });

  // Function to apply filters (you can enhance this as needed)
  const applyFilters = () => {
    // Implement your filter logic here
    // For demonstration, we'll just close the modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 210, backgroundColor: "white" }}>
        <Header />
        <Category />
      </View>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {cards.map((card) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push("PropertyDetails", { card });
              }}
              key={card.id}
              style={styles.card}
            >
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{card.name}</Text>
                <View style={styles.locationContainer}>
                  <FontAwesome6
                    name="location-dot"
                    size={16}
                    color={colors.gray}
                  />
                  <Text style={styles.cardLocation}>{card.location}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <MaterialCommunityIcons
                    name="crop-landscape"
                    size={20}
                    color={colors.gray}
                  />
                  <Text style={styles.detailsText}>1200 sqrft</Text>
                  <MaterialCommunityIcons
                    name="sofa-single-outline"
                    size={20}
                    color={colors.gray}
                    style={styles.sofaIcon}
                  />
                  <Text style={styles.detailsText}>3.0 BHK</Text>
                </View>
                <View style={styles.footer}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Room Rent</Text>
                  </View>
                  <Text style={styles.cardPrice}>₹ {card.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Fixed Filter Button */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="filter" size={24} color="white" />
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter Properties</Text>

            {/* BHK Type */}
            <Text style={styles.filterLabel}>BHK Type</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={filters.bhk}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  setFilters({ ...filters, bhk: itemValue })
                }
              >
                <Picker.Item label="Select BHK" value="" />
                <Picker.Item label="1 BHK" value="1BHK" />
                <Picker.Item label="2 BHK" value="2BHK" />
                <Picker.Item label="3 BHK" value="3BHK" />
                <Picker.Item label="4 BHK" value="4BHK" />
              </Picker>
            </View>

            {/* Square Footage */}
            <Text style={styles.filterLabel}>Square Footage</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={filters.squareFt}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  setFilters({ ...filters, squareFt: itemValue })
                }
              >
                <Picker.Item label="Select Area" value="" />
                <Picker.Item label="1000 - 1500 sqft" value="1000-1500" />
                <Picker.Item label="1501 - 2000 sqft" value="1501-2000" />
                <Picker.Item label="2001 - 2500 sqft" value="2001-2500" />
                <Picker.Item label="2501+ sqft" value="2501+" />
              </Picker>
            </View>

            {/* Bathrooms */}
            <Text style={styles.filterLabel}>Bathrooms</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={filters.bathrooms}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  setFilters({ ...filters, bathrooms: itemValue })
                }
              >
                <Picker.Item label="Select Bathrooms" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4+" value="4+" />
              </Picker>
            </View>

            {/* Lift */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setFilters({ ...filters, lift: !filters.lift })}
              >
                {filters.lift && (
                  <MaterialCommunityIcons
                    name="check-bold"
                    size={16}
                    color={colors.baseColor}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>Lift</Text>
            </View>

            {/* Parking */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() =>
                  setFilters({ ...filters, parking: !filters.parking })
                }
              >
                {filters.parking && (
                  <MaterialCommunityIcons
                    name="check-bold"
                    size={16}
                    color={colors.baseColor}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>Parking</Text>
            </View>

            {/* Buttons */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                  setFilters({
                    bhk: "",
                    squareFt: "",
                    bathrooms: "",
                    lift: false,
                    parking: false,
                  });
                }}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={applyFilters}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
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
    flex: 1, // Ensure it takes full height
    backgroundColor: "#fff",
  },
  content: {
    flex: 1, // Make sure it stretches to fit available height
  },
  scrollContent: {
    paddingBottom: 120, // Add bottom padding to avoid overlap with the tab bar and buttons
  },
  card: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: colors.white,
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },
  cardContent: {
    width: "70%",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.baseColor,
    paddingBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  cardLocation: {
    fontSize: 12,
    color: colors.gray,
    paddingLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  detailsText: {
    fontSize: 10,
    color: colors.gray,
    paddingLeft: 5,
  },
  sofaIcon: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.baseColor,
  },
  cardPrice: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.baseColor,
    paddingLeft: 10,
  },
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.baseColor,
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
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
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  filterLabel: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  pickerContainer: {
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "gray",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resetButton: {
    width: "49%",
    backgroundColor: colors.dangerbg,
    marginRight: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonText: {
    color: "red",
    fontSize: 16,
  },
  applyButton: {
    width: "49%",
    backgroundColor: colors.baseColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 10,
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Locations;
