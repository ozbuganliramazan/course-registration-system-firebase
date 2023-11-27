import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageCourse from "./screen/ManageCourse";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentCourses from "./screen/RecentCourses";
import AllCourses from "./screen/AllCourses";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "pink" },
        tabBarActiveTintColor: "darkblue",
        headerRight: () => (
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => {
              navigation.navigate("ManageCourse");
            }}
          >
            <View style={styles.iconContainer}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          </Pressable>
        ),
      })}
    >
      <Tab.Screen
        name="RecentCourses"
        component={RecentCourses}
        options={{
          title: "Yakın Zamanda Kaydolunanalar",
          tabBarLabel: "Yakın Zamanda",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllCourses"
        component={AllCourses}
        options={{
          title: "Tüm Kurslar",
          tabBarLabel: "Tüm Kurslar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CourseOverview"
          component={CourseOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  iconContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
