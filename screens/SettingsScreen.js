import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../assets/images/background.jpg")}
        style={styles.backgroundImage}
      />

      {/* User Info */}
      <View style={styles.profileContainer}>
        <Text style={styles.userId}>User ID: 1 938 234 8345</Text>
        <Image
          source={require("../assets/images/profile.jpg")} // Replace with your profile image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Kevin Ding</Text>
        <Text style={styles.userEmail}>kevin_ding@pepperdine.edu</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => alert("Logged Out")}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 200,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  userId: {
    fontSize: 14,
    color: "#7D7D7D",
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#7D7D7D",
    marginBottom: 20,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#2F4563",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
