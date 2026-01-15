import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please enter both email and password');
  //     return;
  //   }

  //   Alert.alert('Login Successful', 'Welcome back!', [
  //     {
  //       text: 'Continue',
  //       onPress: () => navigation.replace('MainApp'), // ✅ correct navigation
  //     },
  //   ]);
  // };
const handleLogin = () => {
  console.log("Login button pressed"); // ✅ debug check

  if (!email || !password) {
    Alert.alert('Error', 'Please enter both email and password');
    return;
  }

  Alert.alert('Login Successful', 'Welcome back!', [
    {
      text: 'Continue',
      onPress: () => {
        console.log("Navigating to MainApp"); // ✅ debug check
        navigation.replace('MainApp');
      },
    },
  ]);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HerCarePlus 💖</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff5f8',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d63384',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#d63384',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#d63384',
    fontWeight: '600',
  },
});
