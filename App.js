import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Authenticate from './components/connexion_user/authenticate';
import InscriptionCitizen from './components/incription/InscriptionCitizen'
import InscriptionCorporation from './components/incription/inscriptionCorporation'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InscriptionCorporation /> {/* si tu veux changer de page change la page et oublie pas d'importer */}
    </SafeAreaView>
  );
}
