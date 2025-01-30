import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function CreatePostScreen({ navigation }) {
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleCreatePost = () => {
    alert("Post Created Successfully!");
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create a Post</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Flight Number"
        value={flightNumber}
        onChangeText={setFlightNumber}
      />
      <Text style={styles.orText}>OR</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="From"
        value={fromLocation}
        onChangeText={setFromLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        value={toLocation}
        onChangeText={setToLocation}
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      {/* Create Post Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreatePost}>
        <Text style={styles.createButtonText}>Create Post</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  messageInput: {
    height: 80,
    textAlignVertical: "top",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#7D7D7D",
  },
  createButton: {
    backgroundColor: "#2C3E50",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
