import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
// import { cartProvider } from '../hooks/useCart';
// import { cartContextProvider } from "@/hooks/useCart";
import { CartContextProvider } from "@/hooks/useCart";

export default function RootLayout() {
  return (
    <CartContextProvider>
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
          ),title: "Cart",}}
        />

        <Tabs.Screen name="Form" options={{tabBarIcon: ({ color, size }) => (
            <Feather name="credit-card" size={24} color={color} />
          ),title: "Checkout",}}
        />
      </Tabs>
    </CartContextProvider>
  );
}
