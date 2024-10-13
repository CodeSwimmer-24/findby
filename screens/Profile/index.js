// components/Profile.js

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../constant/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getTabBarOptions } from "../../global/TabBarStyle";

const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "flex" },
        ...getTabBarOptions()
      });
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      {/* Status Bar Configuration */}
      <StatusBar backgroundColor={colors.baseColor} barStyle="light-content" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationLabel}>Let's Find Your Place</Text>
              <TouchableOpacity
                style={styles.locationButton}
                activeOpacity={0.7}
              >
                <Text style={styles.locationText}>Fahad Mahmood</Text>
                <Text style={styles.emailText}>fahadmahmood1200@gmail.com</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid",
              }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Promotional Image Section */}
        <View style={styles.promoImageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/flat-design-car-rental-low-prices-facebook-post_23-2149235897.jpg",
            }}
            style={styles.promoImage}
            resizeMode="cover"
          />
        </View>

        {/* Register Your Place Button */}
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.7}
            onPress={() => {
              // Handle button press, e.g., navigate to "RegisterPlace" screen
              navigation.navigate("RegisterForm");
            }}
          >
            <View style={styles.registerButtonContent}>
              <AntDesign name="plus" size={22} color={colors.white} />
              <Text style={styles.registerButtonText}>Register Your Place</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Action Buttons Section */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome6 name="building" size={22} color="black" />
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="pencil"
                size={24}
                color={colors.baseColor}
              />
              <Text style={styles.actionButtonText}>Edit Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="dollar" size={22} color="black" />
              <Text style={styles.actionButtonText}>Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="pencil"
                size={24}
                color={colors.baseColor}
              />
              <Text style={styles.actionButtonText}>Share App</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // Consistent color usage
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 100, // Ensure content doesn't get hidden behind the register button
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  locationTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: "200",
    color: "gray",
    marginBottom: 5,
  },
  locationButton: {
    // Add styles if you have specific button behavior
  },
  locationText: {
    color: colors.baseColor,
    fontSize: 20,
    fontWeight: "600",
  },
  emailText: {
    fontSize: 12,
    color: "gray",
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  promoImageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  promoImage: {
    height: 180,
    width: "95%",
    borderRadius: 10,
  },
  registerButtonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  registerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    backgroundColor: colors.baseColor,
    paddingVertical: 12,
    elevation: 5, // Corrected 'evolution' to 'elevation'
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
  },
  registerButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: colors.white,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    alignItems: "center",
    marginTop: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "48%",
    elevation: 5,
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 10,
  },
  actionButtonText: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "400",
  },
});
