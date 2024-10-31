import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import welcome from "../../assets/icons/welcome.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../constant/colors";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={welcome} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Gharr<Text style={{ color: "gray" }}>Dekho.com</Text>
          </Text>
        </View>
        <View style={styles.overlay2}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Home");
            }}
            style={styles.button}
          >
            <Ionicons name="logo-google" size={20} color="white" />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    bottom: 150, // Text will be 50 units from the bottom
    left: 0,
    right: 0,
    alignItems: "center",
  },
  overlay2: {
    position: "absolute",
    bottom: 80, // Text will be 50 units from the bottom
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.baseColor,
    marginBottom: 25,
  },
  button: {
    backgroundColor: colors.baseColor,
    paddingVertical: 15,
    width: "90%",
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default Login;
