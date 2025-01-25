import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useIsFocused, useRoute } from "@react-navigation/native";
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Card from "./Cards";
import colors from "../../constant/colors";

const List = ({ navigation }) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const { category } = route.params;

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "none" },
      });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color={colors.baseColor} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{category}</Text>
        </View>
      </View>

      {/* Filter Section */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filter}>
          <MaterialCommunityIcons
            name="filter"
            size={24}
            color={colors.baseColor}
          />
        </TouchableOpacity>
        {["3 BHK", "2 BHK", "4 BHK", "1 BHK"].map((bhk) => (
          <TouchableOpacity key={bhk} style={styles.filterButton}>
            <Text style={styles.filterText}>{bhk}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Entypo name="location" size={20} color={colors.baseColor} />
        <Text style={styles.footerText}>
          Know <Text style={styles.highlight}>Lalpur</Text> with
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Locality Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <Card navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.baseColor,
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 15,
  },
  filter: {
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  filterText: {
    fontSize: 14,
    color: colors.baseColor,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    marginLeft: 5,
  },
  highlight: {
    fontWeight: "600",
    color: colors.baseColor,
  },
  linkText: {
    fontSize: 16,
    color: colors.baseColor,
    marginLeft: 5,
    fontWeight: "600",
  },
  cardContainer: {
    flex: 1,
    marginTop: 0,
  },
});

export default List;
