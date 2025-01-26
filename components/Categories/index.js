import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import colors from "../../constant/colors";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Room Rent",
    "Office Rent",
    "Shop Rent",
    "Parking Area",
    "Goudune Rent",
  ];

  const handleCastegoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: -10,
    marginLeft: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10, // Add padding to the scroll container for better UX
  },
  categoryButton: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10, // Add margin between buttons for better spacing
  },
  selectedButton: {
    backgroundColor: colors.baseColor, // Background color for selected category
    borderWidth: 0, // No border for selected category
  },
  nonSelectedButton: {
    backgroundColor: "transparent", // Transparent background for non-selected category
    backgroundColor: "#f5f5f5",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "500",
  },
  selectedText: {
    color: "white", // Text color for selected category
  },
  nonSelectedText: {
    color: "gray", // Text color for non-selected category
  },
});

export default Category;
