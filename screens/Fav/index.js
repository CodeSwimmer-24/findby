// components/Fav.js

import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import colors from "../../constant/colors";
import notfound from "../../assets/icons/notfound.png";

const Fav = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar Configuration */}
      <StatusBar backgroundColor="#f6f6f6" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmark's</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image source={notfound} style={styles.image} resizeMode="contain" />
          <Text style={styles.oopsText}>Oops!</Text>
          <Text style={styles.messageText}>
            No Bookmark List Found. Add your List
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Fav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: "#f6f6f6",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  headerTitle: {
    color: colors.baseColor,
    fontSize: 20,
    fontWeight: "600",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
  oopsText: {
    fontSize: 40,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.baseColor,
  },
  messageText: {
    fontSize: 16,
    fontWeight: "300",
    color: "gray",
    textAlign: "center",
  },
});
