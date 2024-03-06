import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importez NavigationContainer
import { createStackNavigator } from '@react-navigation/stack'; // Importez createStackNavigator
import { SafeAreaView } from 'react-native';
import Accueil from './components/Accueil'; // Assurez-vous d'importer correctement Accueil

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil"> {/* Utilisez le Navigator Stack */}
          <Stack.Screen name="Accueil" component={Accueil} /> {/* Déclarez votre écran Accueil */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
