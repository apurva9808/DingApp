import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
        <Text style={styles.title}>DING</Text>
        <Text style={styles.subtitle}>CARPOOL WITH EASE   SAVE TIME   SAVE MONEY</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.registerText}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <View style={styles.termsContainer}>
          <CheckBox
            value={acceptTerms}
            onValueChange={setAcceptTerms}
          />
          <Text style={styles.termsText}>
            I accept the <Text style={styles.boldText}>Terms and Conditions</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={() => {alert("Registered Successfully!");
    navigation.navigate("SignIn");
     }}
    >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.boldText}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F4563", // Blue background
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#B0C4DE",
    fontSize: 12,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  registerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  termsText: {
    marginLeft: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#2F4563", // Blue color for Register button
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "#000000",
  },
});
