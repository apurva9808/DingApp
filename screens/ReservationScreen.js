import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function ReservationScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(true);

  const carpoolers = [
    {
      id: "1",
      name: "Eva P.",
      gender: "Male",
      departure: "Pepperdine > LAX",
      time: "Leave at 9:00AM",
      date: "1/12",
      flight: "Flight # SW3997",
      image: require("../assets/images/eva.jpg"),
      bgColor: "#9DD6F9",
    },
    {
      id: "2",
      name: "Paige C.",
      gender: "Female",
      departure: "Pepperdine > SNA",
      time: "Leave at 5:00AM",
      date: "1/13",
      flight: "Flight # UA2863",
      image: require("../assets/images/paige.jpg"),
      bgColor: "#FBE2C5",
    },
    {
      id: "3",
      name: "Leon M.",
      gender: "Male",
      departure: "Pepperdine > LAX",
      time: "Leave at 6:00PM",
      date: "1/16",
      flight: "Flight # SW1898",
      image: require("../assets/images/leon.jpg"),
      bgColor: "#FFD33D",
    },
  ];

  const renderCarpooler = ({ item }) => (
    <View style={styles.carpoolerContainer}>
      <View style={[styles.imageContainer, { backgroundColor: item.bgColor }]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.gender}</Text>
        <Text style={styles.departure}>{item.departure}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.flight}>{item.flight}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../assets/images/background.jpg")} // Background Image
        style={styles.backgroundImage}
      />

      <Text style={styles.title}>My Reservations</Text>
      <Text style={styles.subtitle}>You do not have any reservations</Text>

      {/* Nearby Carpoolers */}
      <Text style={styles.sectionTitle}>Nearby Carpoolers</Text>
      <FlatList
        data={carpoolers}
        renderItem={renderCarpooler}
        keyExtractor={(item) => item.id}
      />

      {/* Post Button */}
      <TouchableOpacity
        style={styles.postButton}
        onPress={() => navigation.navigate("Posts")} // Navigate to PostScreen
      >
        <Text style={styles.postButtonText}>+</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")} // Navigate to Home Screen
        >
          <Text style={styles.navButtonText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Posts")} // Navigate to Post Screen
        >
          <Text style={styles.navButtonText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Settings")} // Navigate to Settings Screen
        >
          <Text style={styles.navButtonText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Welcome to Ding!</Text>
            <Text style={styles.modalText}>
              Create posts so that you can match with other carpoolers, and
              split costs like Uber/Lyft and save big time!
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#7D7D7D",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  carpoolerContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 10,
    elevation: 3,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gender: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  departure: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#7D7D7D",
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
  },
  flight: {
    fontSize: 12,
    color: "#7D7D7D",
  },
  postButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2C3E50",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#2F4563",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    alignItems: "center",
  },
  navButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#7D7D7D",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "red",
  },
});
