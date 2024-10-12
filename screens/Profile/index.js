import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import colors from "../../constant/colors";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your Profile</Text>
      </View> */}
      <View contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationLabel}>Let's Find Your Place</Text>
              <TouchableOpacity style={styles.locationButton}>
                <Text style={styles.locationText}>Fahad Mahmood</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid",
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerContainer: {
    paddingHorizontal: 28,
    // paddingTop: 50,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#505050",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationTextContainer: {
    marginLeft: 5,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: "200",
    color: "gray",
  },
  locationButton: {
    // marginTop: 5,
  },
  locationText: {
    color: colors.baseColor,
    fontSize: 20,
    fontWeight: "600",
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
});

export default Profile;
