import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>⬥</Text>
        </View>
        <Text style={styles.title}>DING</Text>
        <Text style={styles.subtitle}>CARPOOL WITH EASE · SAVE TIME · SAVE MONEY</Text>
      </View>

      {/* Sign In Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ABB2BF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ABB2BF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={() => { if (email && password) { console.log("Sign In Successfully!");
        navigation.reset({
            index: 0,
            routes: [{ name: "Reservations" }], // Navigate to Reservations screen
          });
        } else {
            alert("Please enter email and password");
          }
        }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text style={styles.footerLink} onPress={() => navigation.navigate("Register")}>
            Create an account
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logoBox: {
    width: 100,
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  logoText: {
    fontSize: 64,
    color: "#2C3E50",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ABB2BF",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#D7DDE5",
    marginVertical: 10,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 15,
    marginVertical: 10,
    borderRadius: 50,
    color: "#000",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  button: {
    backgroundColor: "#3B4F66",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#000",
  },
  footerLink: {
    fontWeight: "bold",
    color: "#3B4F66",
  },
});
