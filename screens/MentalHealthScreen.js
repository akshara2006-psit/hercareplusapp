// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import { Audio } from "expo-av";

// export default function MentalHealthScreen() {
//   const affirmations = [
//     "✨ I am strong, calm, and capable.",
//     "💖 I choose peace over stress.",
//     "🌸 I deserve time to rest and recharge.",
//     "🌿 My mind and body are in harmony.",
//     "☀️ I am becoming the best version of myself every day.",
//   ];

//   const [currentAffirmation, setCurrentAffirmation] = useState("");
//   const [breathingPhase, setBreathingPhase] = useState("");
//   const [isBreathing, setIsBreathing] = useState(false);
//   const [sound, setSound] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     generateAffirmation();
//     return sound
//       ? () => {
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   const generateAffirmation = () => {
//     const random = affirmations[Math.floor(Math.random() * affirmations.length)];
//     setCurrentAffirmation(random);
//   };

//   const startBreathing = async () => {
//     setIsBreathing(true);
//     const phases = ["Inhale deeply 🌬️", "Hold... 🤫", "Exhale slowly 🌿"];
//     let index = 0;

//     const breathingInterval = setInterval(() => {
//       setBreathingPhase(phases[index]);
//       index++;
//       if (index >= phases.length) {
//         clearInterval(breathingInterval);
//         setIsBreathing(false);
//         setBreathingPhase("");
//         Alert.alert("Great Job!", "You completed one calming cycle 💖");
//       }
//     }, 4000);
//   };

//   // 🎵 Play Calming Music
//   async function playSound() {
//     const { sound } = await Audio.Sound.createAsync(
//       {
//         uri: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1bb82d4b0b.mp3", // free relaxing piano music
//       },
//       { shouldPlay: true }
//     );
//     setSound(sound);
//     setIsPlaying(true);
//   }

//   // ⏸ Stop Music
//   async function stopSound() {
//     if (sound) {
//       await sound.stopAsync();
//       await sound.unloadAsync();
//       setSound(null);
//       setIsPlaying(false);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🧘‍♀️ Mental Health & Relaxation</Text>

//       {/* 💬 Affirmations */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>💬 Daily Affirmation</Text>
//         <Text style={styles.affirmation}>{currentAffirmation}</Text>
//         <TouchableOpacity style={styles.button} onPress={generateAffirmation}>
//           <Text style={styles.buttonText}>New Affirmation</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 🌬 Guided Breathing */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>🌬 Guided Breathing</Text>
//         {isBreathing ? (
//           <Text style={styles.breathingText}>{breathingPhase}</Text>
//         ) : (
//           <TouchableOpacity style={styles.button} onPress={startBreathing}>
//             <Text style={styles.buttonText}>Start Breathing Exercise</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* 🎵 Calming Music */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>🎧 Calming Sound</Text>
//         <Text style={styles.soundInfo}>
//           Play soothing background music to relax your mind.
//         </Text>
//         {isPlaying ? (
//           <TouchableOpacity style={styles.stopButton} onPress={stopSound}>
//             <Text style={styles.buttonText}>⏸ Stop Music</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.button} onPress={playSound}>
//             <Text style={styles.buttonText}>▶️ Play Calming Music</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e6f7f5",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#008080",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#006666",
//     marginBottom: 10,
//   },
//   affirmation: {
//     fontSize: 16,
//     color: "#333",
//     fontStyle: "italic",
//     marginBottom: 10,
//   },
//   breathingText: {
//     fontSize: 20,
//     color: "#009999",
//     textAlign: "center",
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: "#00b3b3",
//     borderRadius: 25,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//   },
//   stopButton: {
//     backgroundColor: "#cc4444",
//     borderRadius: 25,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   soundInfo: {
//     fontSize: 14,
//     color: "#555",
//     fontStyle: "italic",
//     marginBottom: 10,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  TextInput,
  Alert,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MentalHealthScreen() {
  const [currentExercise, setCurrentExercise] = useState("");
  const [currentTip, setCurrentTip] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [savedEntries, setSavedEntries] = useState([]);

  // 🧘 Exercises & Tips
  const exercises = [
    "🌬️ Deep Breathing: Inhale 4s, hold 4s, exhale 6s — repeat 3 times.",
    "🧘‍♀️ Try 10 minutes of gentle yoga or stretching.",
    "🕯️ Sit quietly, close your eyes, and focus on sounds around you for 5 minutes.",
    "💭 Practice gratitude — write down 3 things you’re thankful for.",
    "🚶 Take a mindful walk — observe your surroundings and breathe slowly.",
  ];

  const tips = [
    "✨ Take small breaks every hour to recharge your mind.",
    "💧 Drink enough water — it helps reduce fatigue and stress.",
    "📵 Disconnect from social media for 30 minutes daily.",
    "🌙 Try guided meditation before bed to sleep better.",
    "😊 Laugh or talk to someone you trust — it releases tension instantly.",
  ];

  // 🎧 YouTube relaxation videos (working links)
 // 🎧 YouTube relaxation videos (working links)
const musicOptions = [
  {
    title: "🌿 Nature Sounds for Relaxation",
    thumbnail: "https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
  },
  {
    title: "🎵 Deep Focus Music",
    thumbnail: "https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WPni755-Krg",
  },
  {
    title: "Mindful Breathing Meditation (10 min) — Calm",
    thumbnail: "https://img.youtube.com/vi/VBlFHuCzPgY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
  },
  {
    title: "☁️ Guided Sleep Meditation",
    thumbnail: "https://www.youtube.com/watch?v=iPLkdxbJV3o/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=iPLkdxbJV3o",
  },
  {
    title: "Deep Relaxation Body Scan Meditation",
    thumbnail: "https://www.youtube.com/watch?v=ihO02wUzgkc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ihO02wUzgkc",
  },
];


  const generateExercise = () => {
    const random = exercises[Math.floor(Math.random() * exercises.length)];
    setCurrentExercise(random);
  };

  const generateTip = () => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(random);
  };

  const openMusic = (url) => {
    Linking.openURL(url);
  };

  // 📓 Save journal entry persistently
  const saveJournalEntry = async () => {
    if (journalEntry.trim().length === 0) {
      Alert.alert("Empty Entry", "Please write something before saving 💬");
      return;
    }

    const newEntries = [journalEntry, ...savedEntries];
    setSavedEntries(newEntries);
    setJournalEntry("");

    try {
      await AsyncStorage.setItem("@journal_entries", JSON.stringify(newEntries));
      Alert.alert("Saved!", "Your reflection has been added 🌸");
    } catch (error) {
      console.error("Error saving journal:", error);
    }
  };

  // 🔄 Load saved entries on start
  useEffect(() => {
    const loadJournalEntries = async () => {
      try {
        const storedEntries = await AsyncStorage.getItem("@journal_entries");
        if (storedEntries) {
          setSavedEntries(JSON.parse(storedEntries));
        }
      } catch (error) {
        console.error("Error loading journal:", error);
      }
    };
    loadJournalEntries();
  }, []);

  // 🗑️ Optional: Clear all journal entries
  const clearJournal = async () => {
    try {
      await AsyncStorage.removeItem("@journal_entries");
      setSavedEntries([]);
      Alert.alert("Cleared", "All journal entries removed ❌");
    } catch (error) {
      console.error("Error clearing journal:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>💆‍♀️ Mind & Wellness Hub</Text>

      {/* 🧘 Relaxation Exercise */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🧘 Relaxation Exercise</Text>
        <Text style={styles.text}>
          {currentExercise || "Press below to get a mindfulness activity!"}
        </Text>
        <TouchableOpacity style={styles.button} onPress={generateExercise}>
          <Text style={styles.buttonText}>Generate Exercise</Text>
        </TouchableOpacity>
      </View>

      {/* 💡 Tips */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>💡 Daily Wellness Tip</Text>
        <Text style={styles.text}>
          {currentTip || "Press below to get a new mental wellness tip!"}
        </Text>
        <TouchableOpacity style={styles.button} onPress={generateTip}>
          <Text style={styles.buttonText}>New Tip</Text>
        </TouchableOpacity>
      </View>

      {/* 🎶 YouTube Relaxation Library */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🎶 Relaxation Video Library</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {musicOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.videoCard}
              onPress={() => openMusic(item.url)}
            >
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.videoTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 📓 Journaling */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📓 Mindful Journal</Text>
        <Text style={styles.text}>
          Take a moment to reflect. Write about your mood, thoughts, or gratitude.
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Write your thoughts here..."
          value={journalEntry}
          onChangeText={setJournalEntry}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={saveJournalEntry}>
          <Text style={styles.buttonText}>💾 Save Entry</Text>
        </TouchableOpacity>

        {savedEntries.length > 0 && (
          <View style={styles.savedSection}>
            <Text style={styles.savedTitle}>📝 Your Saved Reflections:</Text>
            {savedEntries.map((entry, index) => (
              <Text key={index} style={styles.savedEntry}>
                • {entry}
              </Text>
            ))}

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#d9534f", marginTop: 10 }]}
              onPress={clearJournal}
            >
              <Text style={styles.buttonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eafaf9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00796b",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004d40",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#009688",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  videoCard: {
    width: 180,
    marginRight: 15,
    backgroundColor: "#f0fdf9",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#004d40",
    fontWeight: "600",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    minHeight: 80,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  savedSection: {
    marginTop: 15,
    backgroundColor: "#f5fffa",
    padding: 10,
    borderRadius: 10,
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00695c",
    marginBottom: 5,
  },
  savedEntry: {
    fontSize: 14,
    color: "#333",
    marginBottom: 3,
  },
});
