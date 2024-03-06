import React, { useState, useEffect } from 'react';
import { Text, ScrollView, ImageBackground, SafeAreaView, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './authenticate_main';
import { Linking } from 'react-native';
import ImageBack from '../../assets/hero.png';
import { useNavigation } from '@react-navigation/native'; 

export default function Authenticate() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    const url = 'http://localhost:8080/citizen/authenticate';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password: password }),
      });
      const token = await response.text();
      if (response.ok) {
        await AsyncStorage.setItem('token', token);
        setIsLoggedIn(true);
        console.log('Connexion réussie', 'Vous êtes maintenant connecté.');
        console.log("Token:", token);
        navigation.navigate('Accueil');
      } else {
        throw new Error('La connexion a échoué');
      }
    } catch (error) {
      console.log('Erreur de connexion', error.message);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
    console.log('Déconnexion', 'Vous avez été déconnecté.');
  };

  const handleFranceConnectLogin = () => {
    const url = 'https://app.franceconnect.gouv.fr/api/v1/authorize?scope=openid+profile+email+identite_pivot&state=W2ezlJ2jVK9apq2rn4ORC6ottBlb1UcIgxGsko63KQ8.nuHuyCTyXuY.TOxaHmaWSuWFoZnduhxbFg&response_type=code&client_id=2a466fcaa59eb0408ad7cbee91b271368de77f6f0a1e03c8e694a27527e73ddd&redirect_uri=https%3A%2F%2Fsso.anef.dgef.interieur.gouv.fr%2Fauth%2Frealms%2Fanef-usagers%2Fbroker%2Ffranceconnect-particulier%2Fendpoint&prompt=consent&acr_values=eidas1&nonce=692656427E9867AE92F653404F7808CA6EBACFD820F7DC4E05C10397D30E6D6D';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <ImageBackground source={ImageBack} style={styles.background}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Connectez vous</Text>
      <TextInput
        style={styles.input}
        placeholder="Identifiant"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de Passe"
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
      />
      
      {!isLoggedIn ? (
      <View style={styles.buttonContainer}>
        <Button
          title="Connexion"
          onPress={handleLogin}
        />
        {/* Ligne de séparation */}
        <View style={styles.separator} />
        {/* Bouton Se connecter avec France Connect */}
        <Button
          title="Se connecter avec France Connect"
          onPress={handleFranceConnectLogin} // Vous devez définir cette fonction
        />
      </View>
    ) : (
      <View style={styles.buttonContainer}>
        <Button
          title="Déconnexion"
          onPress={handleLogout}
        />
      </View>
    )}
    </SafeAreaView>
    </ImageBackground>
    </ScrollView>
  );
}
