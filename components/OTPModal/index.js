import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import colors from "../../constant/colors"; // adjust path as needed

const OtpVerificationScreen = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber || "+91 9123456789";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);

  useEffect(() => {
    setTimer(60);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOTPChange = (text, index) => {
    if (text.length > 1) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    // Auto focus logic
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length === 6) {
      console.log("OTP:", fullOtp);
      navigation.navigate("Home"); // Change to actual next screen
    } else {
      alert("Enter all 6 digits of the OTP.");
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    // trigger resend logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Enter the Verification Code.</Text>
        <Text style={styles.subtitle}>
          Please check the SMS to verify the phone number provided
        </Text>
        <Text style={styles.phoneText}>{phoneNumber}</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleOTPChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code?</Text>
          {timer > 0 ? (
            <Text style={styles.timerText}>
              {" "}
              Resend - 00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}> Resend</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 6,
    color: colors.baseColor,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  phoneText: {
    fontSize: 16,
    color: colors.baseColor,
    fontWeight: "500",
    marginTop: 6,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: 45,
    height: 55,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  verifyButton: {
    backgroundColor: colors.baseColor,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  verifyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  resendContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  resendText: {
    fontSize: 14,
    color: "#888",
  },
  timerText: {
    fontSize: 14,
    color: colors.baseColor,
    fontWeight: "500",
  },
  resendLink: {
    fontSize: 13,
    color: colors.baseColor,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default OtpVerificationScreen;
