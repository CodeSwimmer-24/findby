import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Reusable Component for Selectable Options
const OptionSelector = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.optionSelected,
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Step2 = () => {
  const [ownership, setOwnership] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const ownershipOptions = [
    "Freehold",
    "Leasehold",
    "Co-operative society",
    "Power of Attorney",
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Ownership Section */}
      <OptionSelector
        title="Ownership"
        options={ownershipOptions}
        selectedOption={ownership}
        setSelectedOption={setOwnership}
      />

      {/* Price Details Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Price Details</Text>
        <TextInput
          style={styles.input}
          placeholder="\u20B9 Expected Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkboxItem}>
            <Text style={styles.checkboxText}>All inclusive price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkboxItem}>
            <Text style={styles.checkboxText}>Price Negotiable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkboxItem}>
            <Text style={styles.checkboxText}>
              Tax and Govt. charges excluded
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Property Description Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>What makes your property unique</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Share some details about your property like spacious rooms, well maintained facilities.."
          multiline
          value={description}
          onChangeText={setDescription}
        />
        <Text style={styles.charCount}>
          {description.length}/5000 (Min. 30 characters)
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Post and Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  optionSelected: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  optionText: {
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  charCount: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  checkboxContainer: {
    marginTop: 10,
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Step2;
