import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import colors from "../../constant/colors";
import FlatFilter from "./Components/FlatFilter/FlatFilter";
import OfficeFilter from "./Components/OfficeFilter/OfficeFilter";
import PgHostals from "./Components/PG/PgHostals";

export default function App() {
  const [city, setCity] = useState("delhi");
  const [location, setLocation] = useState(null);
  const [exactLocation, setExactLocation] = useState(null);


  const [activePropertyType, setActivePropertyType] = useState("flats");

  const cityItems = [
    { label: "Bangalore", value: "bangalore" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Delhi", value: "delhi" },
  ];

  const locationItems = [
    { label: "Koramangala", value: "koramangala" },
    { label: "Whitefield", value: "whitefield" },
    { label: "Indiranagar", value: "indiranagar" },
  ];

  const exactLocationItems = [
    { label: "Exact Location 1", value: "exactLocation1" },
    { label: "Exact Location 2", value: "exactLocation2" },
    { label: "Exact Location 3", value: "exactLocation3" },
  ];

  const propertyType = [
    { label: "Flats", value: "flats" },
    { label: "Office", value: "office" },
    { label: "PG/Hostel", value: "pgHostel" },
    { label: "Shop", value: "shop" },
    { label: "Parking", value: "parking" },
    { label: "Land", value: "land" },
    { label: "Godown", value: "godown" },
    { label: "Room Sha", value: "roomSharing" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="chevron-left" size={28} color={colors.baseColor} />
        <Text style={styles.title}>Find your Dream Place</Text>
      </View>


      {/* Select City */}

      <View style={{ display: "none" }}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select City</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={city}
              onValueChange={(value) => setCity(value)}
              dropdownIconColor={colors.baseColor}
            >
              <Picker.Item label="Select City" value={null} />
              {cityItems.map((item) => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      {/* Select Location (conditional) */}
      {city && (
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select Location</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={location}
              onValueChange={(value) => setLocation(value)}
              dropdownIconColor={colors.baseColor}
            >
              <Picker.Item label="Select Location" value={null} />
              {locationItems.map((item) => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </View>
      )}

      {/* Select Exact Location (conditional) */}
      {location && (
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select Exact Location</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={exactLocation}
              onValueChange={(value) => setExactLocation(value)}
              dropdownIconColor={colors.baseColor}
            >
              <Picker.Item label="Select Exact Location" value={null} />
              {exactLocationItems.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  color={exactLocation === item.value ? "white" : colors.baseColor}
                  style={exactLocation === item.value ? styles.selectedItem : {}}
                />
              ))}
            </Picker>
          </View>
        </View>
      )}


      {/* Locality Search Input */}
      <TextInput
        style={[styles.input, { marginTop: 10, marginLeft: 10, marginBottom: 5 }]}
        placeholder="Whats on your mind?"
      />

      {/* Looking For */}
      <View style={styles.searchTypeGroup}>
        {propertyType.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setActivePropertyType(item.value)} style={activePropertyType === item.value ? styles.activeButton : styles.searchTypeButton}>
            <Text style={activePropertyType === item.value ? styles.activeBttn : styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Flat Filter */}
      {activePropertyType === "flats" && <FlatFilter />}
      {activePropertyType === "office" && <OfficeFilter />}
      {activePropertyType === "pgHostel" && <PgHostals />}

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>SEARCH</Text>
      </TouchableOpacity>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: colors.baseColor,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: "gray",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    color: "black",
    borderColor: colors.baseColor,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
  },
  selectedItem: {
    backgroundColor: colors.baseColor,
  },
  searchTypeGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // justifyContent: "center",
    // justifyContent: "space-between",
    marginBottom: 10,
  },
  searchTypeButton: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.baseColor,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: "center",
    marginVertical: 5,
  },
  activeButton: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: "center",
    borderWidth: 1,
    backgroundColor: colors.baseColor,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: "center",
    marginVertical: 5,
    elevation: 3
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.baseColor,
  },
  activeBttn: {
    color: "white",
  },
  searchButton: {
    backgroundColor: colors.baseColor,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
    marginBottom: 150,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});