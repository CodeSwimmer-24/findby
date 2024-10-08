import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../constant/colors";

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
    title: "Aggirement Duration",
    description: "11 months aggriment duration.",
    icon: "document-outline",
  },
];

const PropertyDetails = ({ route }) => {
  const { card } = route.params;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState("About Flat");

  useEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.baseColor} />
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
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                borderBottomColor:
                  activeTab === "About Flat" ? colors.baseColor : "lightgray",
              },
            ]}
            onPress={() => setActiveTab("About Flat")}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "About Flat" ? colors.baseColor : "gray",
                },
              ]}
            >
              About Flat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              {
                borderBottomColor:
                  activeTab === "More Info" ? colors.baseColor : "lightgray",
              },
            ]}
            onPress={() => setActiveTab("More Info")}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTab === "More Info" ? colors.baseColor : "gray",
                },
              ]}
            >
              More Info
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditional Rendering based on activeTab */}
        {activeTab === "About Flat" ? (
          <>
            <View style={styles.featuresContainer}>
              <FeatureCard icon="albums-outline" value="1225" label="sqrt.Ft" />
              <FeatureCard icon="bed-outline" value="3.0" label="Bedrooms" />
              <FeatureCard icon="water-outline" value="2.0" label="Bathrooms" />
              <FeatureCard
                icon="arrow-up-outline"
                value="Yes"
                label="Elec. Lift"
              />
            </View>
            <View style={styles.featuresContainer}>
              <FeatureCard icon="man-outline" value="Yes" label="WatchMan" />
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
              <FeatureCard icon="wifi-outline" value="Yes" label="Wifi Cable" />
            </View>
          </>
        ) : (
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
        )}
      </ScrollView>
      <View style={styles.bottomSection}>
        <View style={styles.totalRentContainer}>
          <Text style={styles.totalRentLabel}>Total Rent</Text>
          <Text style={styles.totalRentValue}>
            ₹ 2500 <Text style={styles.monthlyText}>/monthly</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.contactButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageBackground: {
    width: "100%",
    height: 260,
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
  tag: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.baseColor,
  },
  description: {
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
    color: colors.baseColor,
    paddingLeft: 5,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tabButton: {
    width: "50%",
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  featureCard: {
    backgroundColor: "white",
    elevation: 3,
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
  bottomSection: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopWidth: 0.3,
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
