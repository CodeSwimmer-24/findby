import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome6, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../../constant/colors";

const Card = ({ navigation }) => {
  const apartments = [
    {
      id: 1,
      name: "Woodland Apartment",
      location: "1012 Ocean Avenue, New York, USA",
      area: "1,225 gaz",
      floor: "Third Floor",
      rooms: "3.0",
      price: "₹ 34,000/month",
      image: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGZvciUyMHJlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Seaside Villa",
      location: "104 Beach Road, Miami, USA",
      area: "2,500 gaz",
      floor: "First Floor",
      rooms: "4.0",
      price: "₹ 75,000/month",
      image: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGZvciUyMHJlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Skyline Residency",
      location: "55 Tower Street, Chicago, USA",
      area: "1,500 gaz",
      floor: "Third Floor",
      rooms: "3.0",
      price: "₹ 45,000/month",
      image: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGZvciUyMHJlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Downtown Apartments",
      location: "120 Main Street, Boston, USA",
      area: "1,300 gaz",
      floor: "Second Floor",
      rooms: "2.0",
      price: "₹ 30,000/month",
      image: "https://dynamic.realestateindia.com/prop_images/2803617/1197897_1-350x350.jpg",
    },
    {
      id: 5,
      name: "Luxury Heights",
      location: "45 Hilltop Road, LA, USA",
      area: "3,000 gaz",
      floor: "Third Floor",
      rooms: "5.0",
      price: "₹ 1,00,000/month",
      image: "https://dynamic.realestateindia.com/prop_images/2777137/1151673_1-350x350.jpg",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {apartments.map((apartment) => (
        <TouchableOpacity
          key={apartment.id}
          style={styles.card}
          onPress={() => navigation.navigate("PropertyDetails", { card: apartment })}
        >
          {/* Property Image */}
          <View style={{
            flexDirection: "row",
            justifyContent: "center"
          }}>
            <Image source={{ uri: apartment.image }} style={styles.image} />
          </View>
          {/* Property Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>{apartment.name}</Text>
              <View style={styles.locationContainer}>
                <FontAwesome6 name="location-dot" size={16} color="#A9A9A9" />
                <Text style={styles.location}>{apartment.location}</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <Ionicons name="share-social-outline" size={22} color="#A9A9A9" />
              <MaterialCommunityIcons
                name="bookmark-outline"
                size={22}
                color="#A9A9A9"
                style={styles.actionIcon}
              />
            </View>
          </View>

          {/* Property Features */}
          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Ionicons name="bed-outline" size={18} color={colors.baseColor} />
              <Text style={styles.featureText}>{apartment.rooms} Rooms</Text>
            </View>
            <View style={styles.featureItem}>
              <AntDesign name="totop" size={18} color={colors.baseColor} />
              <Text style={styles.featureText}>{apartment.floor}</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="tv-outline" size={18} color={colors.baseColor} />
              <Text style={styles.featureText}>{apartment.area}</Text>
            </View>
          </View>

          {/* Property Footer */}
          <View style={styles.footer}>
            <View style={styles.agentContainer}>
              <Image
                source={{ uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" }}
                style={styles.agentImage}
              />
              <Text style={styles.agentName}>Firoz Khan</Text>
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
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    marginBottom: 5,
    paddingBottom: 16,

  },
  image: {
    width: "96%",
    height: 170,
    resizeMode: "cover",
    borderRadius: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    maxWidth: 240,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    color: "#A9A9A9",
    marginLeft: 6,
    maxWidth: 240,
  },
  actions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 12,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingTop: 2,
    marginHorizontal: 15,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  agentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  agentImage: {
    width: 25,
    height: 25,
    borderRadius: 14,
    marginRight: 8,
  },
  agentName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.baseColor,
  },
});

export default Card;