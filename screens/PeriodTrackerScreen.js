// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Alert } from "react-native";
// import { Calendar } from "react-native-calendars";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function PeriodTrackerScreen() {
//   const [markedDates, setMarkedDates] = useState({});
//   const [periodStart, setPeriodStart] = useState(null);
//   const [nextPeriod, setNextPeriod] = useState(null);

//   useEffect(() => {
//     loadStoredData();
//   }, []);

//   const loadStoredData = async () => {
//     try {
//       const storedStart = await AsyncStorage.getItem("periodStart");
//       const storedNext = await AsyncStorage.getItem("nextPeriod");
//       if (storedStart && storedNext) {
//         setPeriodStart(storedStart);
//         setNextPeriod(storedNext);
//         highlightDates(storedStart, storedNext);
//       }
//     } catch (error) {
//       console.log("Error loading data", error);
//     }
//   };

//   const handleDayPress = async (day) => {
//     const selectedDate = day.dateString;
//     const nextDate = calculateNextPeriod(selectedDate);

//     setPeriodStart(selectedDate);
//     setNextPeriod(nextDate);
//     highlightDates(selectedDate, nextDate);

//     await AsyncStorage.setItem("periodStart", selectedDate);
//     await AsyncStorage.setItem("nextPeriod", nextDate);

//     Alert.alert(
//       "Period Updated 💖",
//       `Next period expected around ${nextDate}`
//     );
//   };

//   const calculateNextPeriod = (startDate) => {
//     const start = new Date(startDate);
//     const next = new Date(start);
//     next.setDate(start.getDate() + 28); // average 28-day cycle
//     return next.toISOString().split("T")[0];
//   };

//   const highlightDates = (start, next) => {
//     const marked = {
//       [start]: {
//         selected: true,
//         marked: true,
//         selectedColor: "#ff5b77",
//       },
//       [next]: {
//         selected: true,
//         marked: true,
//         selectedColor: "#ffa5b5",
//       },
//     };
//     setMarkedDates(marked);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Period Tracker 💕</Text>
//       <Calendar
//         markedDates={markedDates}
//         onDayPress={handleDayPress}
//         theme={{
//           selectedDayBackgroundColor: "#ff5b77",
//           todayTextColor: "#ff5b77",
//           arrowColor: "#ff5b77",
//         }}
//       />
//       {periodStart && (
//         <Text style={styles.info}>
//           Last Period Start: {periodStart}
//         </Text>
//       )}
//       {nextPeriod && (
//         <Text style={styles.info}>
//           Predicted Next Period: {nextPeriod}
//         </Text>
//       )}
//       <Text style={styles.tip}>
//         Tap a date to set your current period start 💗
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff0f5",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#d63384",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   info: {
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 10,
//     color: "#333",
//   },
//   tip: {
//     textAlign: "center",
//     fontStyle: "italic",
//     marginTop: 10,
//     color: "#555",
//   },
// });





import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as Notifications from 'expo-notifications';

// Request permission for notifications
Notifications.requestPermissionsAsync();

export default function PeriodTrackerScreen() {
  const [lastPeriod, setLastPeriod] = useState(null);
  const [cycleLength] = useState(28);
  const [periodLength] = useState(5);
  const [nextPeriod, setNextPeriod] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  // Handle marking dates when last period changes
  useEffect(() => {
    if (lastPeriod) {
      const predictedNext = addDaysYMD(lastPeriod, cycleLength);
      setNextPeriod(predictedNext);

      const newMarks = {};
      const startDate = new Date(predictedNext);
      for (let i = 0; i < periodLength; i++) {
        const d = addDaysYMD(predictedNext, i);
        newMarks[d] = {
          selected: true,
          marked: true,
          selectedColor: '#ff4d6d',
        };
      }
      newMarks[lastPeriod] = { marked: true, dotColor: '#4d79ff' };
      setMarkedDates(newMarks);

      checkAlerts(predictedNext);
    }
  }, [lastPeriod]);

  // Alert system for reminders
  const checkAlerts = (predictedNext) => {
    const today = new Date();
    const next = new Date(predictedNext);
    const diffDays = Math.floor((next - today) / (1000 * 60 * 60 * 24));

    if (diffDays === 3) {
      Alert.alert('Upcoming Period Reminder 💖', 'Your next period is expected in 3 days.');
      scheduleNotification('Upcoming Period', 'Your next period is expected in 3 days!');
    } else if (diffDays < 0 && diffDays >= -2) {
      Alert.alert('Missed Period Alert ⚠️', 'Your predicted period date has passed.');
      scheduleNotification('Missed Period', 'Your predicted period date has already passed.');
    }
  };

  // Schedule notification
  const scheduleNotification = async (title, body) => {
    await Notifications.scheduleNotificationAsync({
      content: { title, body },
      trigger: null,
    });
  };

  // User selects start date
  const handleDayPress = (day) => {
    setLastPeriod(day.dateString);
  };

  // User marks today as start of period
  const handleMarkToday = () => {
    const todayYMD = formatDateYMD(new Date());
    setLastPeriod(todayYMD);
    Alert.alert('Cycle Updated', 'Your new period start date has been recorded.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🩸 Period Tracker</Text>
      <Text style={styles.subtitle}>Tap on the date when your last period started</Text>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#ff4d6d',
          todayTextColor: '#ff1744',
        }}
      />

      {nextPeriod && (
        <Text style={styles.prediction}>
          🌸 Next period predicted: <Text style={styles.date}>{nextPeriod}</Text>
        </Text>
      )}

      <Button title="Mark Today as Start" onPress={handleMarkToday} color="#ff4d6d" />
    </View>
  );
}

// ----------------- Helper functions -----------------
function formatDateYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDaysYMD(ymd, days) {
  const date = new Date(ymd);
  date.setDate(date.getDate() + days);
  return formatDateYMD(date);
}

// ----------------- Styles -----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f8',
    padding: 16,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff4d6d',
    textAlign: 'center',
    marginVertical: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  prediction: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  date: {
    fontWeight: 'bold',
    color: '#ff4d6d',
  },
});
