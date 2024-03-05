import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Authenticate from './components/connexion_user/authenticate';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Authenticate />
    </SafeAreaView>
  );
}
