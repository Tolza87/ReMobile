import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from "./components/Page1";

const Stack = createNativeStackNavigator();
export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name="hello" component={Page1} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
