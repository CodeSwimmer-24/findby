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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../constant/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getTabBarOptions } from "../../global/TabBarStyle";

// Reusable Component for Action Items
const ProfileActionItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.actionItemContainer} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.actionItemContent}>
      <MaterialIcons name={icon} size={24} color="#505050" />
      <Text style={styles.actionItemText}>{label}</Text>
    </View>
    <Entypo name="chevron-small-right" size={24} color={colors.baseColor} />
  </TouchableOpacity>
);

const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "flex" },
        ...getTabBarOptions(),
      });
    }
  }, [isFocused, navigation]);

  // Action Items Data
  const actionItems = [
    { icon: "view-quilt", label: "View Property Details", onPress: () => { } },
    { icon: "edit", label: "Edit Property Details", onPress: () => { } },
    { icon: "subscriptions", label: "Subscription Plan", onPress: () => { } },
    { icon: "feedback", label: "Your Feedback", onPress: () => { } },
    { icon: "share", label: "Share App", onPress: () => { } },
    { icon: "help", label: "Technical Help", onPress: () => { } },
    { icon: "logout", label: "Logout", onPress: () => { } },
  ];

  return (
    <View style={styles.container}>
      {/* Status Bar Configuration */}
      <StatusBar backgroundColor={colors.baseColor} barStyle="light-content" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.locationLabel}>Let's Find Your Place</Text>
            <TouchableOpacity style={styles.userInfoButton} activeOpacity={0.7}>
              <Text style={styles.userName}>Fahad Mahmood</Text>
              <Text style={styles.userEmail}>fahadmahmood1200@gmail.com</Text>
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

        {/* Register Your Place Button */}
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("RegisterForm")}
          >
            <AntDesign name="plus" size={22} color={colors.white} />
            <Text style={styles.registerButtonText}>Register Your Place</Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons Section */}
        <View style={{
          alignItems: "center",
          marginTop: 20
        }}>
          <View style={styles.actionsContainer}>
            {actionItems.map((item, index) => (
              <ProfileActionItem
                key={index}
                icon={item.icon}
                label={item.label}
                onPress={item.onPress}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

// Stylesheet
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    marginBottom: 30,
  },
  headerLeft: {
    flex: 1,
    marginRight: 10,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: "200",
    color: "gray",
    marginBottom: 5,
  },
  userInfoButton: {
    // Add styles if you have specific button behavior
  },
  userName: {
    color: colors.baseColor,
    fontSize: 20,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 12,
    color: "gray",
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  registerButtonContainer: {
    alignItems: "center",
    // marginTop: 20,
  },
  registerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: colors.baseColor,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  registerButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: colors.white,
  },
  actionsContainer: {
    backgroundColor: "#fff",
    elevation: 5,
    width: "95%",
    borderRadius: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
  },
  actionItemContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  actionItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#505050",
    fontWeight: "400",
  },
});
