import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import Search from "../Search";
import colors from "../../constant/colors";

const Header = ({ search }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.white} />
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
        <Search />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Header;
