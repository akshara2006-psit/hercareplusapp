// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Alert,
// } from "react-native";

// export default function AppointmentReminderScreen() {
//   const [reminders, setReminders] = useState([
//     { id: "1", title: "Gynaecologist Appointment", date: "2025-10-12", time: "10:30 AM" },
//     { id: "2", title: "Thyroid Test", date: "2025-10-15", time: "8:00 AM" },
//   ]);

//   const [newTitle, setNewTitle] = useState("");
//   const [newDate, setNewDate] = useState("");
//   const [newTime, setNewTime] = useState("");

//   const addReminder = () => {
//     if (!newTitle || !newDate || !newTime) {
//       Alert.alert("Missing Info", "Please fill all fields before adding a reminder.");
//       return;
//     }

//     const newReminder = {
//       id: Date.now().toString(),
//       title: newTitle,
//       date: newDate,
//       time: newTime,
//     };

//     setReminders([...reminders, newReminder]);
//     setNewTitle("");
//     setNewDate("");
//     setNewTime("");
//   };

//   const deleteReminder = (id) => {
//     setReminders(reminders.filter((r) => r.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>📅 Appointment Reminders</Text>
//       <Text style={styles.subHeader}>Keep track of your health visits easily 💖</Text>

//       {/* Input section */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Appointment Title"
//           value={newTitle}
//           onChangeText={setNewTitle}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Date (YYYY-MM-DD)"
//           value={newDate}
//           onChangeText={setNewDate}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Time (e.g., 10:30 AM)"
//           value={newTime}
//           onChangeText={setNewTime}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addReminder}>
//           <Text style={styles.addButtonText}>Add Reminder</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Reminders list */}
//       <FlatList
//         data={reminders}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.reminderCard}>
//             <View>
//               <Text style={styles.reminderTitle}>{item.title}</Text>
//               <Text style={styles.reminderDetails}>
//                 📆 {item.date}   ⏰ {item.time}
//               </Text>
//             </View>
//             <TouchableOpacity
//               style={styles.deleteButton}
//               onPress={() => deleteReminder(item.id)}
//             >
//               <Text style={styles.deleteButtonText}>🗑️</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fdf3f8",
//     padding: 16,
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#d63384",
//     textAlign: "center",
//   },
//   subHeader: {
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 20,
//     elevation: 2,
//   },
//   input: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: "#eee",
//   },
//   addButton: {
//     backgroundColor: "#d63384",
//     padding: 12,
//     borderRadius: 25,
//     alignItems: "center",
//     marginTop: 5,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   reminderCard: {
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     elevation: 2,
//   },
//   reminderTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#b91c75",
//   },
//   reminderDetails: {
//     fontSize: 14,
//     color: "#555",
//   },
//   deleteButton: {
//     padding: 8,
//   },
//   deleteButtonText: {
//     fontSize: 18,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppointmentReminderScreen() {
  const [reminders, setReminders] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  // Load saved reminders on mount
  useEffect(() => {
    const loadReminders = async () => {
      try {
        const savedReminders = await AsyncStorage.getItem("reminders");
        if (savedReminders) {
          setReminders(JSON.parse(savedReminders));
        }
      } catch (error) {
        console.error("Error loading reminders:", error);
      }
    };
    loadReminders();
  }, []);

  // Save reminders to AsyncStorage whenever they change
  useEffect(() => {
    const saveReminders = async () => {
      try {
        await AsyncStorage.setItem("reminders", JSON.stringify(reminders));
      } catch (error) {
        console.error("Error saving reminders:", error);
      }
    };
    saveReminders();
  }, [reminders]);

  const addReminder = () => {
    if (!newTitle || !newDate || !newTime) {
      Alert.alert("Missing Info", "Please fill all fields before adding a reminder.");
      return;
    }

    const newReminder = {
      id: Date.now().toString(),
      title: newTitle,
      date: newDate,
      time: newTime,
    };

    setReminders([...reminders, newReminder]);
    setNewTitle("");
    setNewDate("");
    setNewTime("");
  };

  const deleteReminder = (id) => {
    const updated = reminders.filter((r) => r.id !== id);
    setReminders(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📅 Appointment Reminders</Text>
      <Text style={styles.subHeader}>Keep track of your health visits easily 💖</Text>

      {/* Input section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Appointment Title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={newDate}
          onChangeText={setNewDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Time (e.g., 10:30 AM)"
          value={newTime}
          onChangeText={setNewTime}
        />
        <TouchableOpacity style={styles.addButton} onPress={addReminder}>
          <Text style={styles.addButtonText}>Add Reminder</Text>
        </TouchableOpacity>
      </View>

      {/* Reminders list */}
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderCard}>
            <View>
              <Text style={styles.reminderTitle}>{item.title}</Text>
              <Text style={styles.reminderDetails}>
                📆 {item.date}   ⏰ {item.time}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteReminder(item.id)}
            >
              <Text style={styles.deleteButtonText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf3f8",
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d63384",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  addButton: {
    backgroundColor: "#d63384",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  reminderCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#b91c75",
  },
  reminderDetails: {
    fontSize: 14,
    color: "#555",
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 18,
  },
});
