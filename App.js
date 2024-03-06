import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accueil from "./components/Accueil";
import InscriptionCompte from "./components/Inscription/InscriptionCompte";
import InscriptionCitizen from "./components/Inscription/InscriptionCitizen";
import InscriptionCorporation from "./components/Inscription/inscriptionCorporation";
import authenticate from "./components/connexion_user/authenticate";

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="InscriptionCompte" component={InscriptionCompte} />

        <Stack.Screen name="Accueil" component={Accueil} />

        <Stack.Screen name="InscriptionCitizen" component={InscriptionCitizen} />
        <Stack.Screen name="InscriptionCorporation" component={InscriptionCorporation} />

        <Stack.Screen name="authenticate" component={authenticate} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );

}
