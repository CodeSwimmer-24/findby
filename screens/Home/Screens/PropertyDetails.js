// components/PropertyDetails/PropertyDetails.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../constant/colors";
import ContactModal from "./ContactDetails"; // Ensure this is the correct path and filename

const extraDetails = [
  {
    id: 1,
    title: "Maintenance Details",
    description: "You have to pay Rs.500 as a monthly maintenance amount.",
    icon: "wallet-outline",
  },
  {
    id: 2,
    title: "Parking Details",
    description: "Parking fees are Rs.700 for a bike and Rs.1200 for a car.",
    icon: "car-sport-outline",
  },
  {
    id: 3,
    title: "Advance Amount",
    description: "Two months advance amount.",
    icon: "cash-outline",
  },
  {
    id: 4,
    title: "Security Deposit",
    description: "Two months advance amount.",
    icon: "archive-outline",
  },
  {
    id: 5,
    title: "Agreement Duration",
    description: "11 months agreement duration.",
    icon: "document-outline",
  },
];

// Dummy photos for the Photos Tab
const propertyPhotos = [
  { id: 1, uri: "https://www.atlasinteriors.in/wp-content/uploads/2023/12/0H7A2495-1-1.jpg" },
  { id: 2, uri: "https://media.designcafe.com/wp-content/uploads/2020/07/23205856/home-interior-design-ideas.jpg" },
  { id: 3, uri: "https://via.placeholder.com/300" },
  { id: 4, uri: "https://via.placeholder.com/300" },
  { id: 5, uri: "https://via.placeholder.com/300" },
  { id: 6, uri: "https://via.placeholder.com/300" },
];

const PropertyDetails = ({ route }) => {
  const { card } = route.params;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState("About Flat");
  const [isModalVisible, setIsModalVisible] = useState(false); // State for Modal

  useEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gray} />
      <ImageBackground
        source={{ uri: card.image }}
        style={styles.imageBackground}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={20} color={colors.baseColor} />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{card.name}</Text>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </View>
          <Text style={styles.description}>
            It's a very good house at a very affordable rate, and you can rent
            it with only 2 months' advance rent.
          </Text>
          <View style={styles.locationContainer}>
            <Ionicons
              name="location-outline"
              size={20}
              color={colors.baseColor}
            />
            <Text style={styles.location}>{card.location}, Delhi.</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          {/* Tab for About Flat */}
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                borderBottomColor:
                  activeTab === "About Flat" ? colors.baseColor : "lightgray",
                borderBottomWidth: activeTab === "About Flat" ? 1.5 : 1.5, // Thicker border for active tab
              },
            ]}
            onPress={() => setActiveTab("About Flat")}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "About Flat" ? colors.baseColor : "gray",
                  fontWeight: activeTab === "About Flat" ? "600" : "600",
                },
              ]}
            >
              About Flat
            </Text>
          </TouchableOpacity>

          {/* Tab for More Info */}
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                borderBottomColor:
                  activeTab === "More Info" ? colors.baseColor : "lightgray",
                borderBottomWidth: activeTab === "More Info" ? 1.5 : 1.5, // Thicker border for active tab
              },
            ]}
            onPress={() => setActiveTab("More Info")}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "More Info" ? colors.baseColor : "gray",
                  fontWeight: activeTab === "More Info" ? "600" : "600",
                },
              ]}
            >
              More Info.
            </Text>
          </TouchableOpacity>

          {/* Tab for Photos */}
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                borderBottomColor:
                  activeTab === "Photos" ? colors.baseColor : "lightgray",
                borderBottomWidth: activeTab === "Photos" ? 1.5 : 1.5, // Thicker border for active tab
              },
            ]}
            onPress={() => setActiveTab("Photos")}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "Photos" ? colors.baseColor : "gray",
                  fontWeight: activeTab === "Photos" ? "600" : "600",
                },
              ]}
            >
              Gallery
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditional Rendering based on activeTab */}
        {activeTab === "About Flat" ? (
          <View style={{ marginTop: 20 }}>
            <View style={styles.featuresContainer}>
              <FeatureCard icon="albums-outline" value="1225" label="sqft" />
              <FeatureCard icon="bed-outline" value="3.0" label="Bedrooms" />
              <FeatureCard icon="water-outline" value="2.0" label="Bathrooms" />
              <FeatureCard
                icon="arrow-up-outline"
                value="Yes"
                label="Elec. Lift"
              />
            </View>
            <View style={styles.featuresContainer}>
              <FeatureCard icon="man-outline" value="Yes" label="Security" />
              <FeatureCard
                icon="car-sport-outline"
                value="1 Bike"
                label="Parking"
              />
              <FeatureCard
                icon="cloudy-night-outline"
                value="Yes"
                label="Balcony"
              />
              <FeatureCard icon="arrow-up-circle-outline" value="4 th" label="Floor No." />
            </View>
            <View style={styles.featuresContainer}>
              <FeatureCard icon="man-outline" value="Yes" label="Furnished" />
              <FeatureCard
                icon="backspace-outline"
                value="Back"
                label="Phase"
              />
              <FeatureCard
                icon="cloudy-night-outline"
                value="Yes"
                label="Balcony"
              />
              <FeatureCard icon="arrow-up-circle-outline" value="4 th" label="Floor No." />
            </View>
          </View>
        ) : activeTab === "More Info" ? (
          <View style={styles.extraDetailsContainer}>
            {extraDetails.map((detail) => (
              <View key={detail.id} style={styles.extraDetail}>
                <Ionicons
                  name={detail.icon}
                  size={22}
                  color={colors.gray}
                  style={styles.extraDetailIcon}
                />
                <View>
                  <Text style={styles.extraDetailTitle}>{detail.title}</Text>
                  <Text style={styles.extraDetailDescription}>
                    {detail.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <PhotoGallery photos={propertyPhotos} />
        )}
      </ScrollView>

      {/* Contact Modal */}
      <ContactModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <View style={styles.bottomSection}>
        <View style={styles.totalRentContainer}>
          <Text style={styles.totalRentLabel}>Total Rent</Text>
          <Text style={styles.totalRentValue}>
            ₹ 2500 <Text style={styles.monthlyText}>/monthly</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setIsModalVisible(true)} // Open Modal on Press
        >
          <Text style={styles.contactButtonText}>Contact now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FeatureCard = ({ icon, value, label }) => (
  <View style={styles.featureCard}>
    <Ionicons name={icon} size={22} color={colors.gray} />
    <Text style={styles.featureValue}>{value}</Text>
    <Text style={styles.featureLabel}>{label}</Text>
  </View>
);

// PhotoGallery Component for the Photos Tab
const PhotoGallery = ({ photos }) => {
  return (
    <View style={styles.photoGalleryContainer}>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          source={{ uri: photo.uri }}
          style={styles.photo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageBackground: {
    width: "100%",
    height: 280,
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  backButton: {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.baseColor,
  },
  description: {
    paddingRight: 20,
    fontSize: 13,
    color: "gray",
    marginVertical: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  location: {
    fontSize: 14,
    color: "gray",
    paddingLeft: 5,
    fontWeight: "600",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // Removed borderBottomWidth and borderColor
  },
  tabButton: {
    width: "33.3%",
    paddingVertical: 12,
    alignItems: "center",
    // Removed borderBottomWidth and borderColor
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600", // This will be overridden conditionally
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  featureCard: {
    backgroundColor: "white",
    elevation: 2,
    width: "20%",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  featureValue: {
    fontSize: 12,
    paddingVertical: 2,
    fontWeight: "500",
    color: colors.gray,
  },
  featureLabel: {
    fontSize: 12,
    color: "gray",
  },
  extraDetailsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  extraDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
  },
  extraDetailIcon: {
    marginRight: 10,
  },
  extraDetailTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray,
  },
  extraDetailDescription: {
    fontSize: 12,
    color: "gray",
  },
  photoGalleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  photo: {
    width: "50%",
    height: 160,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 10,
    alignItems: "center",
    borderTopWidth: 0.3,
    backgroundColor: "white",
    borderColor: colors.lightGray,
  },
  totalRentContainer: {
    marginTop: 10,
    width: "50%",
  },
  totalRentLabel: {
    color: colors.gray,
  },
  totalRentValue: {
    color: colors.baseColor,
    fontSize: 18,
    fontWeight: "600",
  },
  monthlyText: {
    color: "gray",
    fontSize: 12,
    fontWeight: "300",
  },
  contactButton: {
    marginTop: 10,
    backgroundColor: colors.baseColor,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 50,
    elevation: 5,
    alignItems: "center",
  },
  contactButtonText: {
    color: colors.white,
  },
});

export default PropertyDetails;
