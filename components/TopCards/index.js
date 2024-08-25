import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../constant/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const cards = [
  {
    id: 1,
    name: "House Name",
    price: "3000/month",
    location: " Thoker No 6, Shaheen Bagh",
    image:
      "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
  },
  {
    id: 2,
    name: "House Name",
    price: "3000/month",
    location: " Thoker No 6, Shaheen Bagh",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg",
  },
  {
    id: 3,
    name: "House Name",
    price: "3000/month",
    location: " Thoker No 6, Shaheen Bagh",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
  },
];

const TopCards = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cards.map((card, index) => {
          return (
            <View>
              <TouchableOpacity key={index} style={styles.card}>
                <Image
                  source={{
                    uri: card.image,
                  }}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{card.name}</Text>
                    <Text style={styles.cardPrice}>₹ {card.price}</Text>
                    <View style={styles.locationContainer}>
                      <MaterialIcons
                        name="location-on"
                        size={18}
                        color="lightgray"
                      />
                      <Text style={styles.cardLocation}>{card.location}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.bookmarkButton}>
                    <MaterialIcons
                      name="bookmark"
                      size={24}
                      color={colors.baseColor}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10, // Add padding to the scroll container for better UX
  },
  card: {
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  cardImage: {
    height: 150,
    width: 260,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  cardPrice: {
    paddingTop: 5,
    fontWeight: "600",
    color: colors.primary,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -5,
    marginBottom: 10,
  },
  cardLocation: {
    fontSize: 12,
    color: "gray",
  },
  bookmarkButton: {
    justifyContent: "flex-end",
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default TopCards;
