import { View, Text, SafeAreaView, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../constant/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import { getTabBarOptions } from '../../global/TabBarStyle';

const Profile = ({ navigation }) => {

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "flex" },
        ...getTabBarOptions()
      });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="#B6D0E24a" />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Profile Header */}
        <View style={{ backgroundColor: "#B6D0E24a", paddingVertical: 10, height: 90, justifyContent: "center", alignItems: "center" }} />

        {/* Profile Info */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid"
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              marginTop: -50,
            }}
          />
          <Text style={{ paddingTop: 10, fontSize: 22, fontWeight: "400", color: colors.gray }}>
            Tech Pedia
          </Text>
          <Text style={{ paddingTop: 2, fontSize: 13, fontWeight: "400", color: colors.gray }}>
            Subscribed Till: Sep, 15 2024
          </Text>
          <Text style={{ fontWeight: "600", color: colors.gray, fontSize: 16 }}>
            Free
          </Text>
        </View>

        {/* Features Section */}
        <View style={{ marginTop: 25 }}>
          <SectionHeader title="Feature's Setting" />
          {renderSettingOption("Register your place", "add-business", MaterialIcons, navigation)}
          {renderSettingOption("View Property Details", "view-dashboard-outline", MaterialCommunityIcons, navigation)}
          {renderSettingOption("Edit your Property Details", "circle-edit-outline", MaterialCommunityIcons, navigation)}
          {renderSettingOption("Remove the Listed Property", "delete-outline", MaterialIcons, navigation)}
        </View>

        {/* Support and Subscription Section */}
        <View style={{ marginTop: 20 }}>
          <SectionHeader title="Support and Subscription" />
          {renderSettingOption("Subscribe & Unlock all feature's", "currency-rupee", MaterialIcons, navigation)}
          {renderSettingOption("Feedback & Reports", "message-alert-outline", MaterialCommunityIcons, navigation)}
          {renderSettingOption("Rate us on Playstore", "star-outline", MaterialIcons, navigation)}
          {renderSettingOption("Share GherDekho.com", "share-all-outline", MaterialCommunityIcons, navigation)}
        </View>

        {/* Contact Section */}
        <View style={{ marginTop: 20 }}>
          <SectionHeader title="Contact" />
          {renderSettingOption("About Us", "info-outline", MaterialIcons, navigation)}
          {renderSettingOption("WhatsApp", "whatsapp", MaterialCommunityIcons, navigation)}
          {renderSettingOption("Instagram", "instagram", MaterialCommunityIcons, navigation)}
        </View>

        {/* Terms and Conditions Section */}
        <View style={{ marginTop: 40 }}>
          <SectionHeader title="Terms Conditions & Policy" />
          {renderSettingOption("Terms & Conditions", "newspaper-variant-multiple", MaterialCommunityIcons, navigation)}
          {renderSettingOption("Privacy Policy", "security", MaterialCommunityIcons, navigation)}
        </View>

        {/* Logout Section */}
        <View style={{ marginTop: 0, marginBottom: 50 }}>
          <SectionHeader />
          {renderSettingOption("Logout", "logout", MaterialIcons, navigation)}
          {renderSettingOption("Delete Account", "delete-outline", MaterialCommunityIcons, navigation)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const SectionHeader = ({ title }) => (
  <View style={{ paddingHorizontal: 20, marginBottom: 5 }}>
    <Text style={{ color: colors.gray, fontSize: 13, marginBottom: 5 }}>{title}</Text>
    <View style={{ height: 0.7, backgroundColor: "lightgray" }} />
  </View>
);

const renderSettingOption = (label, iconName, IconComponent, navigation) => (
  <TouchableOpacity style={styles.optionContainer}
    onPress={() => {
      // Handle button press, navigate to specific screen based on label
      if (label === "Register your place") {
        navigation.navigate("RegisterForm"); // Example screen navigation
      } else if (label === "Subscribe & Unlock all feature's") {
        navigation.navigate("Subscriptions")
      } else {
        console.log(`${label} option pressed`); // Add additional navigation as needed
      }
    }}
  >
    <View style={styles.optionContent}>
      <IconComponent name={iconName} size={22} color="#696969" />
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <Entypo name="chevron-right" size={22} color="#383838" />
  </TouchableOpacity>
);

const styles = {
  optionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  optionContent: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    paddingLeft: 10,
    fontSize: 15,
    color: "#383838",
  },
};

export default Profile;
