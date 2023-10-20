import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/main/PostsScreen";
import CreateScreen from "./screens/main/CreateScreen";
import ProfileScreen from "./screens/main/ProfileScreen";

// Icons import
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 35,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
      }}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        },
        headerTitleAlign: "center",
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name="appstore-o" size={size} color={color} />;
          },

          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size, color }) => {
            return <Ionicons name="add" size={size} color={color} />;
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#BDBDBD"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
        screenOptions={{
          tabBarVisible: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="user" size={size} color={color} />;
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#BDBDBD"
              style={{ marginLeft: 16 }}
            />
          ),
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};
