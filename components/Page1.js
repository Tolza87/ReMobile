import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function Page2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
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
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        console.log('Connexion réussie', 'Vous êtes maintenant connecté.');
      } else {
        throw new Error('La connexion a échoué');
      }
    } catch (error) {
      console.log('Erreur de connexion', error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    console.log('Déconnexion', 'Vous avez été déconnecté.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mon Compte</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
  },
});