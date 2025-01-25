import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import colors from "../../../constant/colors";

const FilterModal = ({ isVisible, onClose, onApply, filters, setFilters }) => {
  const resetFilters = () => {
    setFilters({
      bhk: "",
      squareFt: "",
      floor: "",
      lift: false,
      parking: false,
      rentRange: [5000, 50000],
    });
  };

  const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK"];

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Filter Properties</Text>

        {/* BHK Type Selection */}
        <Text style={styles.sectionLabel}>Select Your Preference</Text>
        <View style={styles.bhkContainer}>
          {bhkOptions.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.bhkButton,
                filters.bhk === value
                  ? { backgroundColor: colors.baseColor }
                  : { borderColor: colors.baseColor, borderWidth: 1 },
              ]}
              onPress={() => setFilters({ ...filters, bhk: value })}
            >
              <Text
                style={
                  filters.bhk === value
                    ? styles.selectedText
                    : styles.unselectedText
                }
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Square Footage Dropdown */}
        <Text style={styles.filterLabel}>Square Area (sq ft)</Text>
        <Dropdown
          data={[
            { label: "500 - 1000", value: "500-1000" },
            { label: "1000 - 1500", value: "1000-1500" },
            { label: "1500 - 2000", value: "1500-2000" },
            { label: "2000+", value: "2000+" },
          ]}
          labelField="label"
          valueField="value"
          value={filters.squareFt}
          onChange={(item) => setFilters({ ...filters, squareFt: item.value })}
          style={[
            styles.dropdown,
            filters.squareFt
              ? styles.selectedDropdown
              : styles.unselectedDropdown,
          ]}
        />

        {/* Floor Dropdown */}
        <Text style={styles.filterLabel}>Floor</Text>
        <Dropdown
          data={[
            { label: "Ground", value: "ground" },
            { label: "1st Floor", value: "1st" },
            { label: "2nd Floor", value: "2nd" },
            { label: "3rd Floor", value: "3rd" },
            { label: "4th Floor", value: "4th" },
          ]}
          labelField="label"
          valueField="value"
          value={filters.floor}
          onChange={(item) => setFilters({ ...filters, floor: item.value })}
          style={[
            styles.dropdown,
            filters.floor ? styles.selectedDropdown : styles.unselectedDropdown,
          ]}
        />

        {/* Lift Option */}
        <Text style={styles.filterLabel}>Lift</Text>
        <Switch
          value={filters.lift}
          onValueChange={(value) => setFilters({ ...filters, lift: value })}
          style={styles.switch}
        />

        {/* Parking Option */}
        <Text style={styles.filterLabel}>Parking</Text>
        <Switch
          value={filters.parking}
          onValueChange={(value) => setFilters({ ...filters, parking: value })}
          style={styles.switch}
        />

        {/* Rent Range Slider */}
        <Text style={styles.filterLabel}>Rent Range</Text>
        <MultiSlider
          values={filters.rentRange}
          onValuesChange={(values) =>
            setFilters({ ...filters, rentRange: values })
          }
          min={1000}
          max={100000}
          step={500}
          sliderLength={280}
          selectedStyle={{ backgroundColor: "blue" }}
          markerStyle={{ backgroundColor: "blue" }}
        />
        <Text style={styles.rentRangeText}>
          ₹{filters.rentRange[0]} - ₹{filters.rentRange[1]}
        </Text>

        {/* Modal Actions */}
        <View style={styles.modalActions}>
          <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton} onPress={onApply}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: "flex-end", margin: 0 },
  modalContainer: { backgroundColor: "white", borderRadius: 10, padding: 20 },
  modalTitle: {
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 15,
    color: colors.baseColor,
  },
  sectionLabel: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "400",
    color: "#505050",
  },
  bhkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bhkButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  selectedText: { color: "white" },
  unselectedText: { color: colors.baseColor },
  filterLabel: { fontSize: 14, color: "gray", marginBottom: 5 },
  dropdown: { marginBottom: 15, paddingHorizontal: 10, paddingVertical: 10 },
  selectedDropdown: { backgroundColor: "rgba(14, 36, 66, 0.2)" },
  unselectedDropdown: { borderColor: "gray", borderWidth: 1 },
  switch: { alignSelf: "flex-start", marginBottom: 15 },
  rentRangeText: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginVertical: 10,
  },
  modalActions: { flexDirection: "row", justifyContent: "space-between" },
  resetButton: {
    width: "49%",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  resetButtonText: { color: "white", fontSize: 16, textAlign: "center" },
  applyButton: {
    width: "49%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  applyButtonText: { color: "white", fontSize: 16, textAlign: "center" },
});

export default FilterModal;
