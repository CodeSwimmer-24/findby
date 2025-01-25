import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Search from "../Search";
import colors from "../../constant/colors";
import Card from "../../screens/List/Cards";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("Room Sharing");
  const navigation = useNavigation(); // Access navigation object

  const categories = [
    "Room Sharing",
    "Flat Rent",
    "Office Rent",
    "Shop Rent",
    "Parking",
    "PG",
    "Land",
    "Godown Rent",
  ];

  const handleCategoryPress = (category) => {
    console.log("hello");
    setSelectedCategory(category);
    navigation.navigate("List", { category }); // Navigate to List page with the selected category
  };

  return (
    <View>
      <StatusBar backgroundColor={colors.baseColor} barStyle="light-content" />

      <View>
        {/* Header Image */}
        <Image
          source={{
            uri: "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/112055.Ss-Group-Unveils-Luxurious-New-Apartment-Project-new.jpg",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.welcome}>Welcome 👋</Text>
        <Text style={styles.nameOverlay}>Fahad Mahmood</Text>
      </View>
      <View style={styles.searchContainer}>
        <Search />
      </View>

      <ScrollView>
        {/* Intro Text */}
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Get Started With...</Text>
          <Text style={styles.subText}>Explore your dream place</Text>
        </View>

        <View style={styles.categoryContainer}>
          <View style={styles.scrollContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category
                    ? styles.selectedButton
                    : styles.nonSelectedButton,
                ]}
                onPress={() => handleCategoryPress(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category
                      ? styles.selectedText
                      : styles.nonSelectedText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: "600",
              color: colors.baseColor,
            }}
          >
            # Top Property Details
          </Text>
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    position: "relative",
  },
  welcome: {
    position: "absolute",
    top: 5, // Adjust this value to position the text vertically
    left: 20, // Adjust this value to position the text horizontally
    fontSize: 14,
    fontWeight: "300",
    color: "white", // Ensure text is visible on the image
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  nameOverlay: {
    position: "absolute",
    top: 22, // Adjust this value to position the text vertically
    left: 20, // Adjust this value to position the text horizontally
    fontSize: 20,
    fontWeight: "600",
    color: "white", // Ensure text is visible on the image
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: -30,
    zIndex: 1,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.baseColor,
  },
  subText: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  categoryContainer: {
    marginVertical: 14,
    // marginLeft: 10,
  },
  scrollContainer: {
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  categoryButton: {
    elevation: 2,
    margin: 5,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedButton: {
    backgroundColor: colors.baseColor,
    borderWidth: 0,
  },
  nonSelectedButton: {
    backgroundColor: "#f5f5f5",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "500",
  },
  selectedText: {
    color: "white",
  },
  nonSelectedText: {
    color: "gray",
  },
});

export default Header;
