import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "../constant/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function Form() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [lookingFor, setLookingFor] = useState("Sell");
  const [propertyType, setPropertyType] = useState("Residential");
  const [propertySubType, setPropertySubType] = useState("Apartment");
  const [contactDetails, setContactDetails] = useState("");

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "none" },
      });
    }
  }, [isFocused]);

  const options = {
    lookingFor: ["Sell", "Rent / Lease", "Paying Guest"],
    propertyType: ["Residential", "Commercial"],
    propertySubType: [
      "Apartment",
      "Independent House / Villa",
      "Independent / Builder Floor",
      "Plot / Land",
      "1 RK/ Studio Apartment",
      "Serviced Apartment",
      "Farmhouse",
      "Other",
    ],
  };

  const OptionButtons = ({ options, selectedOption, setSelectedOption }) => {
    return options.map((option) => (
      <TouchableOpacity
        key={option}
        style={[
          styles.optionButton,
          selectedOption === option && styles.optionButtonSelected,
        ]}
        onPress={() => setSelectedOption(option)}
      >
        <Text
          style={
            selectedOption === option
              ? styles.optionButtonTextSelected
              : styles.optionButtonText
          }
        >
          {option}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add Basic Details</Text>
      <Text style={styles.stepText}>STEP 1 OF 3</Text>

      <Text style={styles.label}>You're looking to?</Text>
      <View style={styles.optionContainer}>
        <OptionButtons
          options={options.lookingFor}
          selectedOption={lookingFor}
          setSelectedOption={setLookingFor}
        />
      </View>

      <Text style={styles.label}>What kind of property?</Text>
      <View style={styles.optionContainer}>
        <OptionButtons
          options={options.propertyType}
          selectedOption={propertyType}
          setSelectedOption={setPropertyType}
        />
      </View>

      <Text style={styles.label}>Select Property Type</Text>
      <View style={styles.optionContainer}>
        <OptionButtons
          options={options.propertySubType}
          selectedOption={propertySubType}
          setSelectedOption={setPropertySubType}
        />
      </View>

      <Text style={styles.label}>Your contact details</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number / User name / E-mail"
        value={contactDetails}
        onChangeText={setContactDetails}
      />

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  stepText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: colors.baseColor,
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  optionButtonSelected: {
    backgroundColor: colors.baseColor,
    borderColor: colors.baseColor,
  },
  optionButtonText: {
    color: "#000",
    color: colors.baseColor,
  },
  optionButtonTextSelected: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  nextButton: {
    backgroundColor: colors.baseColor,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    elevation: 5,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
