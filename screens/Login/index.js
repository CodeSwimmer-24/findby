import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import welcome from "../../assets/icons/welcome.png";
import colors from "../../constant/colors";

const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    if (mobile.length === 10) {
      navigation.push("OtpVerificationScreen");
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.baseColor} barStyle="light-content" />
      <ImageBackground source={welcome} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Urban<Text style={styles.grayText}>House.com</Text>
          </Text>

          <View style={styles.inputSection}>
            <View style={styles.inputWrapper}>
              <Text style={styles.countryCode}>+91 🇮🇳</Text>
              <View style={styles.divider} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Mobile Number"
                keyboardType="phone-pad"
                maxLength={10}
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Let's Gooo...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bottomNote}>
        <Text style={styles.policyText}>
          By continuing, you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text> of UrbanHouse.com!
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.baseColor,
    marginBottom: 30,
    textAlign: "center",
  },
  grayText: {
    color: "gray",
  },
  inputSection: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  label: {
    marginBottom: 8,
    color: "#6e6e6e",
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 60,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
  },
  divider: {
    height: "60%",
    width: 1,
    backgroundColor: "#c0c0c0",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: colors.baseColor,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomNote: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  policyText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: colors.baseColor,
  },
});
