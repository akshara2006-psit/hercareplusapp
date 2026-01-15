// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to HerCarePlus 💖</Text>
//       <Text style={styles.subtitle}>Your personal women's health companion</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff0f6',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#e91e63',
//   },
//   subtitle: {
//     fontSize: 16,
//     marginTop: 10,
//     color: '#880e4f',
//   },
// });
import React from 'react';
import * as Notifications from "expo-notifications";

// Required handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
