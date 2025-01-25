import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import colors from "../../constant/colors";

export default function App() {
  const [activeTab, setActiveTab] = useState("Rent");
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [exactLocation, setExactLocation] = useState(null);
  const [rentRange, setRentRange] = useState([0, 500000]);

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="chevron-left" size={28} color={colors.baseColor} />
        <Text style={styles.title}>Find your Dream Place</Text>
      </View>

      <View style={styles.tabs}>
        {["Rent", "Buy", "Commercial"].map((tab) => (
          <Text
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            {tab}
          </Text>
        ))}
      </View>

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
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      </View>

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
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      )}

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
                  color={
                    exactLocation === item.value ? "white" : colors.baseColor
                  }
                  style={
                    exactLocation === item.value ? styles.selectedItem : {}
                  }
                />
              ))}
            </Picker>
          </View>
        </View>
      )}

      {/* Rest of your components remain the same */}
      <View style={styles.searchTypeGroup}>
        <TouchableOpacity
          style={[styles.searchTypeButton, styles.activeButton]}
        >
          <FontAwesome name="map-marker" size={16} color="white" />
          <Text style={[styles.buttonText, styles.activeBttn]}>
            Locality Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchTypeButton}>
          <FontAwesome name="train" size={16} color={colors.baseColor} />
          <Text style={styles.buttonText}>Search along Metro</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={[styles.input, { marginTop: 10 }]}
        placeholder="Search up to 3 Localities or Landmarks"
      />

      <Text style={styles.sectionTitle}>Looking For</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.box, styles.activeBox]}>
          <Text style={[styles.boxText, styles.activeBttn]}>Full House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>PG/Hostel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Room Sharing</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>BHK Type</Text>
      <View style={styles.row}>
        {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map(
          (type, index) => (
            <TouchableOpacity key={index} style={styles.box}>
              <Text style={styles.boxText}>{type}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View
        style={{
          marginLeft: 10,
          width: "100%",
        }}
      >
        <Text style={styles.sectionTitle}>
          Rent Range: ₹{rentRange[0]} to ₹{rentRange[1]}
        </Text>
        <MultiSlider
          style={styles.slider}
          values={rentRange}
          sliderLength={340}
          onValuesChange={(values) => setRentRange(values)}
          min={10000}
          max={50000}
          step={2000}
          selectedStyle={{ backgroundColor: colors.baseColor }}
          markerStyle={{ backgroundColor: colors.baseColor }}
        />
      </View>
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
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchTypeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.baseColor,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: colors.baseColor,
    borderColor: colors.baseColor,
    color: "#fff",
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.baseColor,
  },
  activeBttn: {
    color: "white",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
    color: colors.baseColor,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20,
  },
  box: {
    width: "30%",
    padding: 8,
    borderWidth: 0.8,
    borderColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  activeBox: {
    backgroundColor: colors.baseColor,
    borderColor: colors.baseColor,
  },
  boxText: {
    fontSize: 14,
    color: colors.baseColor,
  },
  slider: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    marginBottom: 20,
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
    margin: 10,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
