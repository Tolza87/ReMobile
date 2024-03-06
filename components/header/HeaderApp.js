import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis react-navigation
import { Ionicons } from '@expo/vector-icons';
import { styles } from './header_main';
import logo from '../../assets/logoGouv.png';
import JeVeuxlogo from '../../assets/JeVeux.png';

const Header = () => {
  const navigation = useNavigation(); // Utilisez useNavigation pour obtenir l'objet de navigation

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePressExternalLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.titleTextContainer}>
            <Image source={JeVeuxlogo} style={styles.JeVeuxlogo} />
          </View>
        </View>
        <TouchableOpacity onPress={toggleMenu}>
          {isMenuOpen ? (
            <Ionicons name="close" size={24} color="black" />
          ) : (
            <Ionicons name="menu" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
            <Text style={styles.menuItem}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('authenticate')}>
            <Text style={styles.menuItem}>Mon Compte</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InscriptionCompte')}>
            <Text style={styles.menuItem}>Inscription</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressExternalLink("https://www.gouvernement.fr/mentions-legales")}>
            <Text style={styles.menuItem}>Mentions Légales</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.separator} />
    </View>
  );
};

export default Header;
