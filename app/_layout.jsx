import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "grey",}}>

      <Tabs.Screen name="index" options={{tabBarIcon: ({ color, size }) => (
          <Feather name="menu" size={24} color={color} />
        ),title: "Menu",}}
      />

      <Tabs.Screen name="Cart" options={{tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-cart" size={24} color={color} />
        ),}}
      />

      <Tabs.Screen name="Form" options={{tabBarIcon: ({ color, size }) => (
          <Feather name="file" size={24} color={color} />
        ),}}
      />

      <Tabs.Screen name="Profile" options={{tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={24} color={color} />
        ),}}
      />
    </Tabs>
  );
}
