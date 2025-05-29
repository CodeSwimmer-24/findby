import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../constant/colors"; // Ensure you have this file or replace `colors` with actual color values.

const Card = ({ navigation }) => {
  // Array of apartment data
  const apartments = [
    {
      id: 1,
      name: "Woodland Apartment",
      location: "1012 Ocean Avenue, New York, USA",
      area: "1,225 gaz",
      floor: "Third Floor",
      rooms: "3.0",
      price: "₹ 34,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2788037/1174733_1-350x350.jpg",
    },
    {
      id: 2,
      name: "Seaside Villa",
      location: "104 Beach Road, Miami, USA",
      area: "2,500 gaz",
      floor: "First Floor",
      rooms: "4.0",
      price: "₹ 75,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2818157/1215733_1-350x350.jpg",
    },
    {
      id: 3,
      name: "Skyline Residency",
      location: "55 Tower Street, Chicago, USA",
      area: "1,500 gaz",
      floor: "Third Floor",
      rooms: "3.0",
      price: "₹ 45,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2829187/1238739_1-350x350.jpg",
    },
    // Add more objects for other cards
    {
      id: 4,
      name: "Downtown Apartments",
      location: "120 Main Street, Boston, USA",
      area: "1,300 gaz",
      floor: "Secound Floor",
      rooms: "2.0",
      price: "₹ 30,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2803617/1197897_1-350x350.jpg",
    },
    {
      id: 5,
      name: "Luxury Heights",
      location: "45 Hilltop Road, LA, USA",
      area: "3,000 gaz",
      floor: "Third Floor",
      rooms: "5.0",
      price: "₹ 1,00,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2777137/1151673_1-350x350.jpg",
    },
    {
      id: 6,
      name: "Mountain Retreat",
      location: "200 Valley Drive, Denver, USA",
      area: "2,200 gaz",
      floor: "Fourth Floor",
      rooms: "3.0",
      price: "₹ 60,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2765437/1141237_1-350x350.jpg",
    },
    {
      id: 7,
      name: "Cityscape Apartments",
      location: "10 Downtown Ave, NYC, USA",
      area: "1,800 gaz",
      floor: "First Floor",
      rooms: "3.0",
      price: "₹ 50,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2781937/1171237_1-350x350.jpg",
    },
    {
      id: 8,
      name: "Greenwood Villas",
      location: "80 Greenwood Street, SF, USA",
      area: "2,000 gaz",
      floor: "Fourth Floor",
      rooms: "4.0",
      price: "₹ 55,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2753137/1131127_1-350x350.jpg",
    },
    {
      id: 9,
      name: "Urban Heights",
      location: "25 City Road, Houston, USA",
      area: "1,600 gaz",
      floor: "Third Floor",
      rooms: "2.0",
      price: "₹ 40,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2788037/1174733_1-350x350.jpg",
    },
    {
      id: 10,
      name: "Golden Residency",
      location: "55 Sunset Blvd, Seattle, USA",
      area: "2,100 gaz",
      floor: "First Floor",
      rooms: "3.0",
      price: "₹ 70,000/month",
      image:
        "https://dynamic.realestateindia.com/prop_images/2829187/1238739_1-350x350.jpg",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {apartments.map((apartment) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PropertyDetails", { card: apartments });
          }}
          key={apartment.id}
          style={styles.card}
        >
          <Image source={{ uri: apartment.image }} style={styles.image} />
          <View style={styles.details}>
            <View style={styles.header}>
              <Text style={styles.title}>{apartment.name}</Text>
              <TouchableOpacity>
                <Ionicons name="bookmark" size={20} color={colors.baseColor} />
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>{apartment.location}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                <Icon name="building-o" size={14} /> {apartment.area}
              </Text>
              <Text style={styles.infoText}>
                <Icon name="tv" size={14} /> {apartment.floor}
              </Text>
              <Text style={styles.infoText}>
                <Icon name="bed" size={14} /> {apartment.rooms}
              </Text>
            </View>
            <Text style={styles.price}>{apartment.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  details: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.baseColor,
  },
  location: {
    fontSize: 12,
    color: "#888",
    marginVertical: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  infoText: {
    fontSize: 12,
    color: "#555",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.baseColor,
  },
});

export default Card;
