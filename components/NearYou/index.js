import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constant/colors";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const cards = [
  {
    id: 1,
    name: "House Name",
    price: "3000/month",
    location: "Thoker No 6, Shaheen Bagh",
    image:
      "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
  },
  {
    id: 2,
    name: "House Name",
    price: "3000/month",
    location: "Thoker No 6, Shaheen Bagh",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg",
  },
  {
    id: 3,
    name: "House Name",
    price: "3000/month",
    location: "Thoker No 6, Shaheen Bagh",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
  },
];

const NearYou = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>#Premisum Collection</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>More</Text>
          <Entypo name="chevron-small-right" size={20} color={colors.gray} />
        </TouchableOpacity>
      </View>
      <View>
        {cards.map((card) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push("PropertyDetails", { card });
            }}
            key={card.id}
            style={styles.card}
          >
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.name}</Text>
              <View style={styles.locationContainer}>
                <FontAwesome6
                  name="location-dot"
                  size={16}
                  color={colors.gray}
                />
                <Text style={styles.cardLocation}>{card.location}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <MaterialCommunityIcons
                  name="crop-landscape"
                  size={20}
                  color={colors.gray}
                />
                <Text style={styles.detailsText}>1200 sqrft</Text>
                <MaterialCommunityIcons
                  name="sofa-single-outline"
                  size={20}
                  color={colors.gray}
                  style={styles.sofaIcon}
                />
                <Text style={styles.detailsText}>3.0</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Room Rent</Text>
                </View>
                <Text style={styles.cardPrice}>₹ {card.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.baseColor,
  },
  moreButton: {
    flexDirection: "row",
  },
  moreText: {
    color: colors.gray,
  },
  card: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: colors.white,
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },
  cardContent: {
    width: "70%",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.baseColor,
    paddingBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  cardLocation: {
    fontSize: 12,
    color: colors.gray,
    paddingLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  detailsText: {
    fontSize: 10,
    color: colors.gray,
    paddingLeft: 5,
  },
  sofaIcon: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.baseColor,
  },
  cardPrice: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.baseColor,
    paddingLeft: 10,
  },
});

export default NearYou;
