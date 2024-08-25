import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PropertyDetails = ({ route }) => {
  const { card } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.price}>Price: ₹ {card.price}</Text>
      <Text style={styles.location}>Location: {card.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
});

export default PropertyDetails;
