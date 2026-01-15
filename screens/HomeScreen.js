import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to HealHer 💖</Text>
      <Text style={styles.subtitle}>Your personal women's health companion</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Period Tracker')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/983/983144.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Period Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('PCOD Care')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>PCOD Care</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Pregnancy')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2965/2965874.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Pregnancy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Nutrition')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Nutrition</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('SOS')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2206/2206368.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>SOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Community')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/984/984196.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Community</Text>
        </TouchableOpacity>

        {/* 🧠 New Mental Health Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Mental Health')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3441/3441642.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Mental Health</Text>
        </TouchableOpacity>

        {/* 🩺 Appointment Reminder Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Appointment Reminder')}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2920/2920244.png' }}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Appointment Reminder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f8',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#d63384',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
});
