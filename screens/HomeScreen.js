import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";

export default function HomeScreen({ navigation }) {
  const [showOptions, setShowOptions] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Ensure state retains animation value

  useEffect(() => {
    console.log("useEffect triggered");

    const timer = setTimeout(() => {
      console.log("10 seconds passed, showing buttons");
      setShowOptions(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 1-second fade-in animation
        useNativeDriver: true,
      }).start(() => console.log("Animation Completed"));
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>DING</Text>
      <Text style={styles.subtitle}>
        CARPOOL WITH EASE   ·   SAVE TIME   ·   SAVE MONEY
      </Text>

      {/* Buttons will appear here */}
      {showOptions ? (
        <Animated.View style={[styles.optionsContainer, { opacity: fadeAnim }]}>
          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Create an account</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <Text style={{ color: "white", marginTop: 20 }}>Waiting for buttons...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C3E50",
  },
  logo: {
    width: 100,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ABB2BF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#D7DDE5",
    marginBottom: 30,
    textAlign: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3B4F66",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    width: "80%",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  orText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginVertical: 5,
  },
});
