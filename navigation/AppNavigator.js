// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // Screens
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import HomeScreen from '../screens/HomeScreen';
// import PeriodTrackerScreen from '../screens/PeriodTrackerScreen';
// import PcodScreen from '../screens/PcodScreen';
// import PregnancyScreen from '../screens/PregnancyScreen';
// import SosScreen from '../screens/SosScreen';
// import NutritionScreen from '../screens/NutritionScreen';
// import CommunityScreen from '../screens/CommunityScreen';
// import MentalHealthScreen from '../screens/MentalHealthScreen';
// import AppointmentReminderScreen from '../screens/AppointmentReminderScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MainApp() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           switch (route.name) {
//             case 'Home': iconName = 'home-outline'; break;
//             case 'Period Tracker': iconName = 'calendar-outline'; break;
//             case 'PCOD Care': iconName = 'heart-outline'; break;
//             case 'Pregnancy': iconName = 'female-outline'; break;
//             case 'SOS': iconName = 'alert-circle-outline'; break;
//             case 'Nutrition': iconName = 'nutrition-outline'; break;
//             case 'Community': iconName = 'chatbubble-ellipses-outline'; break;
//             case 'Mental Health': iconName = 'leaf-outline'; break;
//             case 'Appointment Reminder': iconName = 'alarm-outline'; break;
//             default: iconName = 'ellipse-outline';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#d63384',
//         tabBarInactiveTintColor: '#999',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Period Tracker" component={PeriodTrackerScreen} />
//       <Tab.Screen name="PCOD Care" component={PcodScreen} />
//       <Tab.Screen name="Pregnancy" component={PregnancyScreen} />
//       <Tab.Screen name="SOS" component={SosScreen} />
//       <Tab.Screen name="Nutrition" component={NutritionScreen} />
//       <Tab.Screen name="Community" component={CommunityScreen} />
//       <Tab.Screen name="Mental Health" component={MentalHealthScreen} />
//       <Tab.Screen name="Appointment Reminder" component={AppointmentReminderScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}
//       initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="MainApp" component={MainApp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import PeriodTrackerScreen from '../screens/PeriodTrackerScreen';
import PcodScreen from '../screens/PcodScreen';
import PregnancyScreen from '../screens/PregnancyScreen';
import SosScreen from '../screens/SosScreen';
import NutritionScreen from '../screens/NutritionScreen';
import MentalHealthScreen from '../screens/MentalHealthScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AppointmentReminderScreen from '../screens/AppointmentReminderScreen'; // ✅ Added import

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Period Tracker':
                iconName = 'calendar-outline';
                break;
              case 'PCOD Care':
                iconName = 'heart-outline';
                break;
              case 'Pregnancy':
                iconName = 'female-outline';
                break;
              case 'SOS':
                iconName = 'alert-circle-outline';
                break;
              case 'Nutrition':
                iconName = 'nutrition-outline';
                break;
              case 'Community':
                iconName = 'chatbubble-ellipses-outline';
                break;
              case 'Mental Health':
                iconName = 'meditation-outline';
                break;
              case 'Appointment Reminder':
                iconName = 'alarm-outline'; // ⏰ Nice appointment icon
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#d63384',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Period Tracker" component={PeriodTrackerScreen} />
        <Tab.Screen name="PCOD Care" component={PcodScreen} />
        <Tab.Screen name="Pregnancy" component={PregnancyScreen} />
        <Tab.Screen name="Nutrition" component={NutritionScreen} />
        <Tab.Screen name="SOS" component={SosScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen
          name="Mental Health"
          component={MentalHealthScreen}
          options={{ tabBarLabel: 'Mental Health 🧘‍♀️' }}
        />
        <Tab.Screen
          name="Appointment Reminder"
          component={AppointmentReminderScreen}
          options={{ tabBarLabel: 'Reminder ⏰' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
