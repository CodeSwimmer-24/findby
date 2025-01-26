import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import colors from "../constant/colors";
import Step1 from "./Pages/Form1";
import FlatForm from "./Pages/FlatForm"; // Create a new FlatForm for "Flat" type
import ShopForm from "./Pages/ShopForm"; // Create a new ShopForm for "Shop" type
import OfficeForm from "./Pages/OfficeForm"; // Create a new OfficeForm for "Office" type
import Step3 from "./Pages/Form3";
import Step4 from "./Pages/Form4"; // Import Step4
import Step2 from "./Pages/Form2";

const Forms = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    propertyType: "",
    propertyName: "",
    address: "",
    city: "",
    locality: "",
    ownerName: "",
    shortDescription: "",
    numberOfRooms: "",
    amenities: "",
    rentPrice: "",
    availabilityDate: "",
    photos: [],
  });

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "none" },
      });
    }
  }, [isFocused]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    Alert.alert("Form Submitted", JSON.stringify(formData, null, 2));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Text style={styles.sectionTitle}>Location Details</Text>
            <Step1 formData={formData} setFormData={setFormData} />
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.sectionTitle}>Property Details</Text>
            {/* Conditionally render different forms based on the property type */}
            {formData.propertyType === "Flat" && (
              <Step2 formData={formData} setFormData={setFormData} />
            )}
            {formData.propertyType === "Shop" && (
              <ShopForm formData={formData} setFormData={setFormData} />
            )}
            {formData.propertyType === "Office" && (
              <OfficeForm formData={formData} setFormData={setFormData} />
            )}
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.sectionTitle}>Personal Details</Text>
            <Step3 formData={formData} setFormData={setFormData} />
          </>
        );
      case 4:
        return (
          <>
            <Text style={styles.sectionTitle}>Upload Photos</Text>
            <Step4 formData={formData} setFormData={setFormData} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register Your Place</Text>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        {[1, 2, 3, 4].map((step) => (
          <View key={step} style={styles.step}>
            <View
              style={[
                styles.circle,
                currentStep === step
                  ? styles.activeCircle
                  : styles.inactiveCircle,
              ]}
            >
              <Text style={styles.stepText}>{step}</Text>
            </View>
            {step < totalSteps && <View style={styles.line} />}
          </View>
        ))}
      </View>

      {/* Current Step Form */}
      {renderStep()}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentStep < totalSteps && (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
        {currentStep === totalSteps && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  stepIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: colors.baseColor,
  },
  inactiveCircle: {
    backgroundColor: colors.lightGray,
  },
  stepText: {
    color: "white",
    fontWeight: "bold",
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: "#C0C0C0",
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
    paddingHorizontal: 10,
    color: colors.baseColor,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.baseColor,
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3,
  },
  submitButton: {
    backgroundColor: colors.baseColor,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Forms;
