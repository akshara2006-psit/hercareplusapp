// // import React, { useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

// // export default function NutritionScreen() {
// //   const [tip, setTip] = useState("");

// //   const nutritionTips = [
// //     "🥗 Eat a balanced meal including fruits, vegetables, and lean proteins.",
// //     "💧 Stay hydrated! Drink at least 8 glasses of water a day.",
// //     "🍇 Include iron-rich foods like spinach, lentils, and raisins to prevent anemia.",
// //     "🥑 Healthy fats like avocado and nuts help with hormone balance.",
// //     "🍋 Vitamin C improves skin health and boosts immunity.",
// //     "🍵 Limit caffeine and processed foods for better hormonal balance.",
// //   ];

// //   const getRandomTip = () => {
// //     const random = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
// //     setTip(random);
// //   };

// //   const showHydrationAlert = () => {
// //     Alert.alert(
// //       "💧 Hydration Reminder",
// //       "Remember to drink a glass of water every 2 hours for optimal hydration!"
// //     );
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.title}>🍎 Nutrition & Wellness</Text>
// //       <Text style={styles.subtitle}>
// //         Your guide to healthy eating and balanced nutrition 🌿
// //       </Text>

// //       <View style={styles.card}>
// //         <Text style={styles.sectionTitle}>🌟 Daily Nutrition Tip</Text>
// //         <Text style={styles.tipText}>
// //           {tip ? tip : "Tap below to get a new nutrition tip for today!"}
// //         </Text>
// //         <TouchableOpacity style={styles.button} onPress={getRandomTip}>
// //           <Text style={styles.buttonText}>Get Tip</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.card}>
// //         <Text style={styles.sectionTitle}>🥗 Basic Diet Chart</Text>
// //         <View style={styles.chart}>
// //           <Text style={styles.chartItem}>🌞 Morning: Oats, milk, fruits</Text>
// //           <Text style={styles.chartItem}>🍛 Lunch: Brown rice, dal, veggies</Text>
// //           <Text style={styles.chartItem}>☕ Evening: Green tea, nuts</Text>
// //           <Text style={styles.chartItem}>🌙 Dinner: Soup, salad, multigrain roti</Text>
// //         </View>
// //       </View>

// //       <View style={styles.card}>
// //         <Text style={styles.sectionTitle}>💧 Hydration Reminder</Text>
// //         <Text style={styles.tipText}>
// //           Water helps regulate temperature, digestion, and skin glow!
// //         </Text>
// //         <TouchableOpacity style={styles.hydrateButton} onPress={showHydrationAlert}>
// //           <Text style={styles.buttonText}>Remind Me</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.card}>
// //         <Text style={styles.sectionTitle}>💊 Essential Vitamins</Text>
// //         <Text style={styles.chartItem}>• Vitamin D – Bone health & mood booster ☀️</Text>
// //         <Text style={styles.chartItem}>• Iron – Energy & prevents fatigue ⚡</Text>
// //         <Text style={styles.chartItem}>• Calcium – Strong bones & muscles 💪</Text>
// //         <Text style={styles.chartItem}>• B12 – Supports brain & blood health 🧠</Text>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff8f2",
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 26,
// //     fontWeight: "700",
// //     color: "#ff7043",
// //     textAlign: "center",
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: "#555",
// //     textAlign: "center",
// //     marginBottom: 20,
// //   },
// //   card: {
// //     backgroundColor: "#fff",
// //     borderRadius: 16,
// //     padding: 16,
// //     marginBottom: 20,
// //     elevation: 3,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#e65100",
// //     marginBottom: 10,
// //   },
// //   tipText: {
// //     fontSize: 15,
// //     color: "#333",
// //     fontStyle: "italic",
// //     marginBottom: 10,
// //   },
// //   chart: {
// //     backgroundColor: "#fff3e0",
// //     padding: 10,
// //     borderRadius: 10,
// //   },
// //   chartItem: {
// //     fontSize: 15,
// //     marginBottom: 6,
// //     color: "#444",
// //   },
// //   button: {
// //     backgroundColor: "#ff7043",
// //     borderRadius: 20,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     alignSelf: "center",
// //   },
// //   hydrateButton: {
// //     backgroundColor: "#26a69a",
// //     borderRadius: 20,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     alignSelf: "center",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// // });



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function NutritionScreen() {
//   const [tip, setTip] = useState("");
//   const [hydrationTip, setHydrationTip] = useState("");
//   const [mealPlan, setMealPlan] = useState([]);
//   const [selectedProblem, setSelectedProblem] = useState("");

//   // Nutrition and hydration tips
//   const nutritionTips = [
//     "🥗 Eat a balanced meal including fruits, vegetables, and lean proteins.",
//     "🍇 Include iron-rich foods like spinach, lentils, and raisins to prevent anemia.",
//     "🥑 Healthy fats like avocado and nuts help with hormone balance.",
//     "🍋 Vitamin C improves skin health and boosts immunity.",
//     "🍵 Limit caffeine and processed foods for better hormonal balance.",
//     "🍠 Prefer whole grains and avoid refined sugar for steady energy levels.",
//   ];

//   const hydrationTips = [
//     "💧 Drink at least 8–10 glasses of water daily.",
//     "🌤️ Start your morning with a glass of warm water.",
//     "🥒 Eat water-rich foods like cucumber, watermelon, and oranges.",
//     "🚶‍♀️ Carry a water bottle when going out — small sips often!",
//     "🌿 Herbal teas can help you stay hydrated and improve digestion.",
//     "🕒 Drink water 30 minutes before meals for better metabolism.",
//   ];

//   // Multiple meal plan variations for variety
//   const mealPlans = {
//     General: [
//       [
//         "🌞 Morning: Oats with fruits & milk",
//         "🍛 Lunch: Brown rice, dal, veggies",
//         "☕ Evening: Green tea & mixed nuts",
//         "🌙 Dinner: Soup, salad & multigrain roti",
//       ],
//       [
//         "🌞 Morning: Poha with vegetables",
//         "🍛 Lunch: Rajma-chawal & salad",
//         "☕ Evening: Buttermilk with roasted chana",
//         "🌙 Dinner: Dalia with veggies",
//       ],
//     ],
//     PCOD: [
//       [
//         "🌞 Morning: Soaked almonds, herbal tea, quinoa porridge",
//         "🍛 Lunch: Brown rice, spinach dal, mixed veggies",
//         "☕ Evening: Makhana & green tea",
//         "🌙 Dinner: Grilled paneer & salad",
//       ],
//       [
//         "🌞 Morning: Smoothie with chia seeds & oats",
//         "🍛 Lunch: Millets, dal, and stir-fried veggies",
//         "☕ Evening: Coconut water & fruits",
//         "🌙 Dinner: Lentil soup with whole wheat toast",
//       ],
//     ],
//     Pregnancy: [
//       [
//         "🌞 Morning: Milk, banana & toast",
//         "🍛 Lunch: Khichdi with ghee & spinach sabzi",
//         "☕ Evening: Coconut water & fruits",
//         "🌙 Dinner: Dalia with vegetables & curd",
//       ],
//       [
//         "🌞 Morning: Ragi porridge with dry fruits",
//         "🍛 Lunch: Dal, rice & bhindi sabzi",
//         "☕ Evening: Milkshake with almonds",
//         "🌙 Dinner: Veg soup & chapati with paneer",
//       ],
//     ],
//     Fitness: [
//       [
//         "🌞 Morning: Boiled eggs, oats, black coffee",
//         "🍛 Lunch: Grilled chicken, brown rice & veggies",
//         "☕ Evening: Protein shake with banana",
//         "🌙 Dinner: Soup & tofu salad",
//       ],
//       [
//         "🌞 Morning: Paneer toast & green tea",
//         "🍛 Lunch: Quinoa salad with chickpeas",
//         "☕ Evening: Nuts & protein smoothie",
//         "🌙 Dinner: Steamed veggies with soup",
//       ],
//     ],
//   };

//   // Load saved data
//   useEffect(() => {
//     loadSavedData();
//   }, []);

//   const loadSavedData = async () => {
//     try {
//       const savedProblem = await AsyncStorage.getItem("selectedProblem");
//       const savedMeal = await AsyncStorage.getItem("mealPlan");

//       if (savedProblem && savedMeal) {
//         setSelectedProblem(savedProblem);
//         setMealPlan(JSON.parse(savedMeal));
//       }
//     } catch (error) {
//       console.log("Error loading saved data", error);
//     }
//   };

//   const getRandomTip = () => {
//     const random = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
//     setTip(random);
//   };

//   const getHydrationTip = () => {
//     const random = hydrationTips[Math.floor(Math.random() * hydrationTips.length)];
//     setHydrationTip(random);
//   };

//   // Generate meal plan and save to storage
//   const generateMealPlan = async (problem, newPlan = false) => {
//     const plans = mealPlans[problem];
//     let selectedPlan;

//     if (newPlan || !mealPlan.length) {
//       selectedPlan = plans[Math.floor(Math.random() * plans.length)];
//     } else {
//       selectedPlan = mealPlan;
//     }

//     setSelectedProblem(problem);
//     setMealPlan(selectedPlan);

//     try {
//       await AsyncStorage.setItem("selectedProblem", problem);
//       await AsyncStorage.setItem("mealPlan", JSON.stringify(selectedPlan));
//     } catch (error) {
//       console.log("Error saving data", error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>🍎 Nutrition & Wellness</Text>
//       <Text style={styles.subtitle}>
//         Personalized diet & hydration guidance for your health 🌿
//       </Text>

//       {/* Problem Selection */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>🎯 Select Your Goal / Problem</Text>
//         <View style={styles.buttonGroup}>
//           {Object.keys(mealPlans).map((key) => (
//             <TouchableOpacity
//               key={key}
//               style={[
//                 styles.optionButton,
//                 selectedProblem === key && styles.selectedButton,
//               ]}
//               onPress={() => generateMealPlan(key)}
//             >
//               <Text
//                 style={[
//                   styles.optionButtonText,
//                   selectedProblem === key && styles.selectedButtonText,
//                 ]}
//               >
//                 {key}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* Nutrition Tip */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>🌟 Daily Nutrition Tip</Text>
//         <Text style={styles.tipText}>
//           {tip ? tip : "Tap below to get a new nutrition tip for today!"}
//         </Text>
//         <TouchableOpacity style={styles.button} onPress={getRandomTip}>
//           <Text style={styles.buttonText}>Get Tip</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Hydration Tip */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>💧 Hydration Tip</Text>
//         <Text style={styles.tipText}>
//           {hydrationTip
//             ? hydrationTip
//             : "Tap below to get a hydration tip for today!"}
//         </Text>
//         <TouchableOpacity style={styles.hydrateButton} onPress={getHydrationTip}>
//           <Text style={styles.buttonText}>Get Hydration Tip</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Meal Plan */}
//       {mealPlan.length > 0 && (
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>
//             🥗 {selectedProblem} Meal Plan
//           </Text>
//           <View style={styles.chart}>
//             {mealPlan.map((item, index) => (
//               <Text key={index} style={styles.chartItem}>
//                 {item}
//               </Text>
//             ))}
//           </View>
//           <TouchableOpacity
//             style={styles.newPlanButton}
//             onPress={() => generateMealPlan(selectedProblem, true)}
//           >
//             <Text style={styles.newPlanText}>🔄 Get Different Plan</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Vitamins */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>💊 Essential Vitamins</Text>
//         <Text style={styles.chartItem}>• Vitamin D – Bone health & mood booster ☀️</Text>
//         <Text style={styles.chartItem}>• Iron – Energy & prevents fatigue ⚡</Text>
//         <Text style={styles.chartItem}>• Calcium – Strong bones & muscles 💪</Text>
//         <Text style={styles.chartItem}>• B12 – Supports brain & blood health 🧠</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff8f2",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#ff7043",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 20,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#e65100",
//     marginBottom: 10,
//   },
//   tipText: {
//     fontSize: 15,
//     color: "#333",
//     fontStyle: "italic",
//     marginBottom: 10,
//   },
//   chart: {
//     backgroundColor: "#fff3e0",
//     padding: 10,
//     borderRadius: 10,
//   },
//   chartItem: {
//     fontSize: 15,
//     marginBottom: 6,
//     color: "#444",
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   optionButton: {
//     borderWidth: 1,
//     borderColor: "#ff7043",
//     borderRadius: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     margin: 5,
//   },
//   selectedButton: {
//     backgroundColor: "#ff7043",
//   },
//   optionButtonText: {
//     color: "#ff7043",
//     fontWeight: "bold",
//   },
//   selectedButtonText: {
//     color: "#fff",
//   },
//   button: {
//     backgroundColor: "#ff7043",
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//   },
//   hydrateButton: {
//     backgroundColor: "#26a69a",
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//   },
//   newPlanButton: {
//     backgroundColor: "#ffa726",
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginTop: 10,
//     alignSelf: "center",
//   },
//   newPlanText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NutritionScreen() {
  const [problem, setProblem] = useState('');
  const [dietType, setDietType] = useState('Vegetarian');
  const [currentPlan, setCurrentPlan] = useState(null);
  const [planHistory, setPlanHistory] = useState([]);

  // Load saved plans on mount
  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const saved = await AsyncStorage.getItem('nutritionPlans');
      if (saved) setPlanHistory(JSON.parse(saved));
    } catch (error) {
      console.log('Error loading plans', error);
    }
  };

  const savePlans = async (plans) => {
    try {
      await AsyncStorage.setItem('nutritionPlans', JSON.stringify(plans));
    } catch (error) {
      console.log('Error saving plans', error);
    }
  };

  const vegPlans = [
    {
      breakfast: 'Oats with fruits and honey',
      lunch: 'Dal, brown rice, salad, and curd',
      dinner: 'Mixed veg curry, chapati, and soup',
    },
    {
      breakfast: 'Vegetable poha with peanuts',
      lunch: 'Rajma with rice and cucumber salad',
      dinner: 'Paneer tikka and chapati',
    },
    {
      breakfast: 'Smoothie bowl with banana and chia seeds',
      lunch: 'Vegetable pulao with raita',
      dinner: 'Tofu stir-fry with quinoa',
    },
  ];

  const nonVegPlans = [
    {
      breakfast: 'Boiled eggs and avocado toast',
      lunch: 'Grilled chicken with brown rice',
      dinner: 'Fish curry and chapati',
    },
    {
      breakfast: 'Omelette with veggies',
      lunch: 'Egg curry and rice',
      dinner: 'Chicken soup with salad',
    },
    {
      breakfast: 'Greek yogurt with berries and oats',
      lunch: 'Tuna sandwich and fruit salad',
      dinner: 'Grilled prawns with sautéed veggies',
    },
  ];

  const generateMealPlan = async () => {
    const plans = dietType === 'Vegetarian' ? vegPlans : nonVegPlans;
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    let message = '';

    if (problem.toLowerCase().includes('pcod')) {
      message = 'High fiber and low sugar diet recommended.';
    } else if (problem.toLowerCase().includes('pregnancy')) {
      message = 'Include folate, iron, calcium-rich foods.';
    } else if (problem.toLowerCase().includes('weight')) {
      message = 'Eat high protein, low fat diet with proper hydration.';
    } else if (problem.trim() === '') {
      message = 'General healthy meal plan:';
    } else {
      message = `Customized plan for ${problem}:`;
    }

    const newPlan = {
      message,
      breakfast: randomPlan.breakfast,
      lunch: randomPlan.lunch,
      dinner: randomPlan.dinner,
      type: dietType,
      time: new Date().toLocaleString(),
    };

    const updatedPlans = [newPlan, ...planHistory];
    setCurrentPlan(newPlan);
    setPlanHistory(updatedPlans);
    await savePlans(updatedPlans);
  };

  const clearHistory = async () => {
    Alert.alert('Clear History', 'Are you sure you want to delete all saved plans?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('nutritionPlans');
          setPlanHistory([]);
          setCurrentPlan(null);
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🍎 Personalized Nutrition Planner</Text>

      <Text style={styles.label}>Enter your health concern (optional):</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. PCOD, pregnancy, weight loss"
        value={problem}
        onChangeText={setProblem}
      />

      <Text style={styles.label}>Select your food preference:</Text>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            dietType === 'Vegetarian' && styles.selectedOption,
          ]}
          onPress={() => setDietType('Vegetarian')}
        >
          <Text
            style={[
              styles.optionText,
              dietType === 'Vegetarian' && styles.selectedText,
            ]}
          >
            Vegetarian
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            dietType === 'Non-Vegetarian' && styles.selectedOption,
          ]}
          onPress={() => setDietType('Non-Vegetarian')}
        >
          <Text
            style={[
              styles.optionText,
              dietType === 'Non-Vegetarian' && styles.selectedText,
            ]}
          >
            Non-Vegetarian
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={generateMealPlan}>
        <Text style={styles.buttonText}>
          {currentPlan ? 'Generate Another Plan 🔁' : 'Generate Plan 🍽️'}
        </Text>
      </TouchableOpacity>

      {planHistory.length > 0 && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff4d6d' }]}
          onPress={clearHistory}
        >
          <Text style={styles.buttonText}>Clear All Plans 🗑️</Text>
        </TouchableOpacity>
      )}

      {currentPlan && (
        <View style={styles.planCard}>
          <Text style={styles.planHeading}>{currentPlan.message}</Text>
          <Text style={styles.planText}>🥗 Type: {currentPlan.type}</Text>
          <Text style={styles.planText}>🕒 Generated: {currentPlan.time}</Text>
          <Text style={styles.planText}>🥣 Breakfast: {currentPlan.breakfast}</Text>
          <Text style={styles.planText}>🍱 Lunch: {currentPlan.lunch}</Text>
          <Text style={styles.planText}>🍛 Dinner: {currentPlan.dinner}</Text>
        </View>
      )}

      {planHistory.length > 1 && (
        <>
          <Text style={styles.historyHeading}>📜 Saved Meal Plans</Text>
          {planHistory.slice(1).map((p, index) => (
            <View key={index} style={styles.historyCard}>
              <Text style={styles.planHeadingSmall}>{p.message}</Text>
              <Text style={styles.planTextSmall}>🥗 {p.type}</Text>
              <Text style={styles.planTextSmall}>🕒 {p.time}</Text>
              <Text style={styles.planTextSmall}>🍽️ {p.breakfast}</Text>
              <Text style={styles.planTextSmall}>🍱 {p.lunch}</Text>
              <Text style={styles.planTextSmall}>🍛 {p.dinner}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#d63384',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: { fontSize: 16, marginVertical: 10, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#d63384',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedOption: { backgroundColor: '#d63384' },
  optionText: { color: '#d63384', fontWeight: '600' },
  selectedText: { color: '#fff' },
  button: {
    backgroundColor: '#d63384',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  planCard: {
    backgroundColor: '#ffe6f2',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
  },
  planHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d63384',
    marginBottom: 10,
  },
  planText: { fontSize: 16, marginVertical: 5, color: '#333' },
  historyHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d63384',
    marginTop: 25,
    marginBottom: 10,
  },
  historyCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#f0a6c8',
  },
  planHeadingSmall: { fontSize: 16, fontWeight: 'bold', color: '#d63384' },
  planTextSmall: { fontSize: 14, color: '#333', marginTop: 3 },
});

