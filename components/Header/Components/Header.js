import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../constant/colors";

const HeaderHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("Room Sharing");
  const navigation = useNavigation();

  const categories = [
    "Room Sharing",
    "Flat Rent",
    "Office Rent",
    "Shop Rent",
    "Parking Area",
    "PG/Hostals",
    "Open Land",
    "Godown Rent",
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    navigation.navigate("List", { category });
  };

  return (
    <View style={styles.topBar}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              }}
              style={styles.logo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 13, color: "gray" }}>
              Hey... Welcome 👋
            </Text>
            <Text style={styles.username}>Fahad Mahmood</Text>
          </View>
        </View>

        <View style={styles.topRight}>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="notifications" size={24} color={colors.baseColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="share-social" size={24} color={colors.baseColor} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Buy</Text>
          <Ionicons name="chevron-down" size={16} color={colors.baseColor} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchInput}>
          <Text style={styles.searchText}>Search by Locality</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="search" size={20} color={colors.baseColor} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.nearMe}>
          <Ionicons
            name="location-outline"
            size={14}
            color={colors.baseColor}
          />
          <Text style={styles.nearMeText}> Near me</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Options */}
      <View style={styles.quickOptions}>
        {[
          { label: "Free Price Check", icon: "cash" },
          { label: "Book Your First Site Visit", icon: "navigate-circle" },
          { label: "Find Holiday Homes", icon: "umbrella" },
          { label: "Stay for Couples", icon: "heart" },
        ].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.optionItem}>
            <View
              style={{
                backgroundColor: "#fff",
                elevation: 3,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 8,
              }}
            >
              <Ionicons name={item.icon} size={24} color={colors.baseColor} />
            </View>
            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 0,
    paddingHorizontal: 5,
  },
  logo: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 50,
  },
  username: {
    color: colors.baseColor,
    fontSize: 16,
    fontWeight: "700",
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  bellIcon: {
    marginRight: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    marginTop: 20,
    elevation: 2,
    marginHorizontal: 12,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.baseColor,
    marginRight: 4,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchText: {
    color: "gray",
    fontSize: 14,
  },
  nearMe: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 6,
  },
  nearMeText: {
    fontSize: 12,
    color: colors.baseColor,
  },
  quickOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  optionItem: {
    alignItems: "center",
    width: "23%",
  },
  optionText: {
    color: colors.baseColor,
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
});

export default HeaderHero;
