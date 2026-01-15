import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PcodScreen() {
  const [symptoms, setSymptoms] = useState({
    irregularPeriods: false,
    acne: false,
    weightGain: false,
    hairLoss: false,
    moodSwings: false,
  });

  const toggleSymptom = (key) => {
    setSymptoms({ ...symptoms, [key]: !symptoms[key] });
  };

  const getTips = () => {
    const active = Object.keys(symptoms).filter((s) => symptoms[s]);
    if (active.length === 0) {
      return ['Select symptoms above to get personalized suggestions 💡'];
    }

    let tips = [];

    if (symptoms.irregularPeriods) {
      tips.push('⏰ Try to sleep and wake up at the same time daily — it helps balance hormones.');
      tips.push('🍎 Eat iron-rich foods like spinach, lentils, and jaggery.');
    }

    if (symptoms.acne) {
      tips.push('🚿 Wash your face twice daily and avoid oily skincare.');
      tips.push('💧 Stay hydrated — drink at least 2-3L of water daily.');
    }

    if (symptoms.weightGain) {
      tips.push('🏃‍♀️ Add 30 minutes of exercise daily — walking or yoga works great.');
      tips.push('🥗 Avoid refined carbs and sugar; prefer whole grains and veggies.');
    }

    if (symptoms.hairLoss) {
      tips.push('💆‍♀️ Massage scalp with coconut or castor oil twice a week.');
      tips.push('🧴 Include protein-rich foods — eggs, sprouts, or soy.');
    }

    if (symptoms.moodSwings) {
      tips.push('🧘‍♀️ Try meditation or breathing exercises 10 mins a day.');
      tips.push('🌞 Spend time outdoors — sunlight helps stabilize mood.');
    }

    return tips;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>💖 PCOD / PCOS Care</Text>
      <Text style={styles.subtitle}>Track your symptoms and get lifestyle suggestions.</Text>

      {Object.keys(symptoms).map((key) => (
        <TouchableOpacity
          key={key}
          style={[styles.symptom, symptoms[key] && styles.activeSymptom]}
          onPress={() => toggleSymptom(key)}
        >
          <Text style={styles.symptomText}>
            {symptoms[key] ? '✅ ' : '⬜️ '} {formatSymptom(key)}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>💡 Recommendations</Text>
        {getTips().map((tip, index) => (
          <Text key={index} style={styles.tipText}>• {tip}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

function formatSymptom(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f8',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff4d6d',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  symptom: {
    backgroundColor: '#ffe6eb',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  activeSymptom: {
    backgroundColor: '#ffb3c1',
  },
  symptomText: {
    fontSize: 16,
    color: '#333',
  },
  tipBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ff4d6d',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
  },
});
