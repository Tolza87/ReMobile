import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
          value={''} // You can add state management here
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "phone-number"
          placeholder="Téléphone"
          value={phone}
          onChangeText={text => setPhone(text)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "mail"
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
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
          id = "ZIP_code"
          placeholder="Code postal"
          value={postalCode}
          onChangeText={text => setPostalCode(text)}
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id = "login"
          placeholder="Identifiant"
          value={username}
          onChangeText={text => setUsername(text)}
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      alignItems: 'center',
    },
    headerContainer: {
      marginBottom: '2%',
      width: '30%',
      paddingHorizontal: '6%',
      paddingVertical: '6%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
    formContainer: {
      width: '100%',
      paddingHorizontal: 24,
      marginTop: 32,
    },
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 4,
      paddingHorizontal: 16,
      fontSize: 16,
    },
    button: {
        marginBottom: '2%',
        backgroundColor: '#003580',
        padding: 10,
        borderRadius: 4,
        width: '35%',
        alignItems: 'center',
        marginTop: 32,
      },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });