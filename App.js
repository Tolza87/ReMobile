import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from "./components/Page1";
import InscriptionCitizen from "./components/InscriptionCitizen";
import InscriptionCompte from "./components/InscriptionCompte";

const Stack = createNativeStackNavigator();
export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name="InscriptionCompte" component={InscriptionCompte} />
        <Stack.Screen name="InscriptionCitizen" component={InscriptionCitizen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
