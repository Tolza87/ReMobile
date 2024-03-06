import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './inscription_main';
import ImageBack from '../../assets/hero2.png';


export default function RegistrationScreen() {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [siret, setSiret] = useState('');
  const [siren, setSiren] = useState('');
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

  const formatSiret = (text) => {
    const cleanedText = text.replace(/\D/g, '');
    const formattedText = cleanedText.replace(/^(\d{3})(\d{3})(\d{3})(\d{5})$/, '$1 $2 $3 $4');
    const limitedText = formattedText.slice(0, 14);
    
    setSiret(limitedText);
  };

  const formatSiren = (text) => {
    const cleanedText = text.replace(/\D/g, '');
    const limitedText = cleanedText.slice(0, 9);
    setSiren(limitedText);
  };

  const validateEmail = (text) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(text);
  };

  const handleRegistration = () => {
    const citizen = {
      name: name,
      siret: siret,
      siren: siren,
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

    setName('');
    setSiret('');
    setSiren('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPostalCode('');
    setUsername('');
    setPassword('');
  
    fetch('http://localhost:8080/corporation/createCorporation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(citizen),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la création de la corp');
      }
      return response.json();
    })
    .then(data => {
      console.log('Citoyen créé avec succès:', data);
      navigation.navigate('authenticate');
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <ImageBackground source={ImageBack} style={styles.background}>
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
          id="name"
          placeholder="Nom"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="siret"
          placeholder="Siret"
          value={siret}
          onChangeText={formatSiret}
          keyboardType="numeric"
          maxLength={14}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          id="siren"
          placeholder="Siren"
          value={siren}
          onChangeText={formatSiren}
          keyboardType="numeric"
          maxLength={9}
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
    </ImageBackground>
    </ScrollView>
  );
};
