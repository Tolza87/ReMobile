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
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [mail, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip_code, setPostalCode] = useState('');
  const [login, setUsername] = useState('');
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
    const citizen = {
      firstname: firstname,
      lastname: lastname,
      mail: mail,
      phone_number: phone_number,
      address: address,
      zip_code: zip_code,
      login: login,
      password: password,
      level: 0,
      note: 0,
      point: 0,
    };
  

    console.log(JSON.stringify(citizen));

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPostalCode('');
    setUsername('');
    setPassword('');
  
    // Envoyer une requête POST pour créer un citoyen
    fetch('http://localhost:8080/citizen/createCitizen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(citizen),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la création du citoyen');
      }
      return response.json();
    })
    .then(data => {
      console.log('Citoyen créé avec succès:', data);
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="lastname"
          placeholder="Nom"
          value={lastname}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="firstname"
          placeholder="Prénom"
          value={firstname}
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          id="phone_number"
          style={styles.input}
          placeholder="Téléphone"
          value={phone_number}
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
          value={mail}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          onBlur={() => {
            if (!validateEmail(mail)) {
              alert("Adresse e-mail invalide");
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="address"
          placeholder="Adresse"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="zip_code"
          placeholder="Code postal"
          value={zip_code}
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
          value={login}
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
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Vous avez un compte ? </Text>
        <TouchableOpacity onPress={() => console.log("Redirigez vers la page de connexion.")}>
          <Text style={[styles.loginText, styles.link]}>Connectez-vous</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>


  );
};
