import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderApp from './components/header/HeaderApp';
import Accueil from "./components/Accueil";
import InscriptionCompte from "./components/Inscription/InscriptionCompte";
import InscriptionCitizen from "./components/Inscription/InscriptionCitizen";
import InscriptionCorporation from "./components/Inscription/inscriptionCorporation";
import authenticate from "./components/connexion_user/authenticate";

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
  
    <SafeAreaView style={{ flex: 1 }}>
    
    <NavigationContainer>
    <HeaderApp />
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="InscriptionCompte" component={InscriptionCompte} options={{ headerShown: false }} />

        <Stack.Screen name="Accueil" component={Accueil} options={{ headerShown: false }}/>

        <Stack.Screen name="InscriptionCitizen" component={InscriptionCitizen} options={{ headerShown: false }}/>
        <Stack.Screen name="InscriptionCorporation" component={InscriptionCorporation} options={{ headerShown: false }} />

        <Stack.Screen name="authenticate" component={authenticate} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );

}
