import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageBack from '../assets/hero.png';

const MyAccountScreen = () => {
  const navigation = useNavigation();

  const handleBenevolePress = () => {
    navigation.navigate('InscriptionCitizen');
  };

  return (
    <ImageBackground source={ImageBack} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Mon Compte</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF7F50' }]} onPress={handleBenevolePress}>
          <Text style={styles.buttonText}>Bénévole</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OU</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF7F50' }]}>
          <Text style={styles.buttonText}>Entreprise</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DAAA84',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  orText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default MyAccountScreen;
