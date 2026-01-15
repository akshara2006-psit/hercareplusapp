import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import * as Notifications from "expo-notifications";

export default function PregnancyScreen() {
  const [weeksPregnant, setWeeksPregnant] = useState(0);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  const trimester = () => {
    if (weeksPregnant <= 13) return "First Trimester (1–13 weeks)";
    if (weeksPregnant <= 27) return "Second Trimester (14–27 weeks)";
    return "Third Trimester (28+ weeks)";
  };

  const getTips = () => {
    let t = [];
    if (weeksPregnant <= 13) {
      t = [
        "🤰 Eat small, frequent meals to avoid nausea.",
        "💧 Stay hydrated — 8–10 glasses of water daily.",
        "🚶 Gentle walks and yoga help reduce fatigue."
      ];
    } else if (weeksPregnant <= 27) {
      t = [
        "🥦 Include calcium and iron-rich foods.",
        "🧘 Try light exercises and prenatal yoga.",
        "😴 Sleep on your left side for better circulation."
      ];
    } else {
      t = [
        "🧸 Prepare your hospital bag early.",
        "🫶 Do breathing exercises daily.",
        "🍲 Eat energy-rich but light meals."
      ];
    }
    setTips(t);
  };

  const sendReminder = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💖 Pregnancy Reminder",
        body: "Don’t forget your upcoming check-up this week!",
      },
      trigger: { seconds: 3 },
    });
    Alert.alert("✅ Reminder Set!", "You’ll get a notification soon.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🤱 Pregnancy Care & Support</Text>
      <Text style={styles.subtitle}>
        Track your progress and get health guidance.
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Enter Pregnancy Week:</Text>
        <View style={styles.weekSelector}>
          {[...Array(40)].map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.weekButton,
                weeksPregnant === i + 1 && styles.activeWeek,
              ]}
              onPress={() => setWeeksPregnant(i + 1)}
            >
              <Text
                style={[
                  styles.weekText,
                  weeksPregnant === i + 1 && styles.activeWeekText,
                ]}
              >
                {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {weeksPregnant > 0 && (
        <View style={styles.resultBox}>
          <Text style={styles.trimesterText}>{trimester()}</Text>
          <TouchableOpacity style={styles.button} onPress={getTips}>
            <Text style={styles.buttonText}>Get Health Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={sendReminder}>
            <Text style={styles.buttonText}>Set Appointment Reminder</Text>
          </TouchableOpacity>

          <View style={styles.tipBox}>
            {tips.map((tip, i) => (
              <Text key={i} style={styles.tipText}>• {tip}</Text>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f8",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff4d6d",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#ffe6eb",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  weekSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  weekButton: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  activeWeek: {
    backgroundColor: "#ffb3c1",
  },
  weekText: {
    color: "#444",
  },
  activeWeekText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trimesterText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#ff4d6d",
  },
  button: {
    backgroundColor: "#ff4d6d",
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  tipBox: {
    marginTop: 10,
  },
  tipText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 6,
  },
});
