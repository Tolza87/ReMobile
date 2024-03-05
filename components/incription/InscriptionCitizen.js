import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './inscription_main';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formatPhoneNumber = (text) => {
    const cleanedText = text.replace(/\D/g, '');
    const formattedText = cleanedText.replace(/(\d{2})(?=\d)/g, '$1 ');
    const limitedText = formattedText.slice(0, 14);
    setPhone(limitedText);
  };

  const validateEmail = (text) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(text);
  };

  const handleRegistration = () => {
    // Handle form submission and API calls here
    // faire un post de données que je recup du formu et l'envoyer sur l'endpoint 
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <View style={styles.container}>
      <View style={styles.headerContainer}>
    </View>
    </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "lastname"
          placeholder="Nom"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "firstname"
          placeholder="Prénom"
          value={''}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          value={phone}
          onChangeText={formatPhoneNumber}
          keyboardType="phone-pad"
          maxLength={14}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="mail"
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          onBlur={() => {
            if (!validateEmail(email)) {
              alert("Adresse e-mail invalide");
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "address"
          placeholder="Adresse"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="ZIP_code"
          placeholder="Code postal"
          value={postalCode}
          onChangeText={text => {
            const filteredText = text.replace(/\D/g, '');
            if (filteredText.length <= 5) {
              setPostalCode(filteredText);
            }
          }}
          keyboardType="number-pad"
          maxLength={5}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="login"
          placeholder="Identifiant"
          value={username}
          onChangeText={text => {
            const filteredText = text.replace(/[^\w]/g, '');

            setUsername(filteredText);
          }}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "password"
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};