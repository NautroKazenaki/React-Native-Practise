import { View, Text, StatusBar } from "react-native";
import AppNavigation from "./navigation/appNavigation.js";
import { TailwindProvider } from 'tailwindcss-react-native'
export default function App() {
  return (
    <TailwindProvider>
      <AppNavigation />
    </TailwindProvider>
  );
}
