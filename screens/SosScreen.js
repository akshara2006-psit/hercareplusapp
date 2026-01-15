import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from "react-native";
import * as Notifications from "expo-notifications";

export default function SosSupportScreen() {
  const [sending, setSending] = useState(false);

  // Mock emergency contacts
  const contacts = [
    { name: "Mom", phone: "9876543210" },
    { name: "Friend", phone: "9123456789" },
  ];

  // Function to simulate SOS alert
  const sendSOS = async () => {
    setSending(true);
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🚨 SOS Alert Sent!",
          body: "Your emergency contacts have been notified.",
        },
        trigger: { seconds: 1 },
      });

      setTimeout(() => {
        Alert.alert(
          "🚨 SOS Sent!",
          "Your location and emergency message have been sent to your contacts.",
        );
        setSending(false);
      }, 1500);
    } catch (error) {
      Alert.alert("Error", "Failed to send SOS alert.");
      setSending(false);
    }
  };

  // Function to simulate emergency call
  const callNumber = (num) => {
    Linking.openURL(`tel:${num}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 SOS & Emergency Support</Text>
      <Text style={styles.subtitle}>
        Use this in case of emergency — alerts your trusted contacts.
      </Text>

      <TouchableOpacity
        style={[styles.sosButton, sending && { backgroundColor: "#999" }]}
        onPress={sendSOS}
        disabled={sending}
      >
        <Text style={styles.sosText}>{sending ? "Sending..." : "SEND SOS"}</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Quick Helplines</Text>
        <TouchableOpacity
          style={styles.helplineButton}
          onPress={() => callNumber("100")}
        >
          <Text style={styles.helplineText}>🚓 Police (100)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.helplineButton}
          onPress={() => callNumber("102")}
        >
          <Text style={styles.helplineText}>🚑 Ambulance (102)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.helplineButton}
          onPress={() => callNumber("1091")}
        >
          <Text style={styles.helplineText}>👩‍🦰 Women Helpline (1091)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👨‍👩‍👧 Emergency Contacts</Text>
        {contacts.map((c, i) => (
          <TouchableOpacity
            key={i}
            style={styles.contactButton}
            onPress={() => callNumber(c.phone)}
          >
            <Text style={styles.contactText}>
              {c.name} - 📞 {c.phone}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f8",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff4d6d",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: "#ff0033",
    borderRadius: 100,
    alignSelf: "center",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#ff0033",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  sosText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  section: {
    marginVertical: 15,
    backgroundColor: "#ffe6eb",
    borderRadius: 12,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff4d6d",
    marginBottom: 10,
  },
  helplineButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  helplineText: {
    fontSize: 16,
    color: "#333",
  },
  contactButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  contactText: {
    fontSize: 16,
    color: "#444",
  },
});



