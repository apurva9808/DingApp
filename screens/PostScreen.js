import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Posts</Text>
        <Text style={styles.headerSubtitle}>You do not have any posts.</Text>
        <Text style={styles.headerSubtitle}>Create one!</Text>
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("CreatePost")} // Navigate to CreatePostScreen
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#2C3E50",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#B0C4DE",
    marginTop: 5,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2C3E50",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
