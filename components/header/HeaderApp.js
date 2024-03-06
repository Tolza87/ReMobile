import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './header_main';

const Header = ({ navigation }) => { // Assurez-vous de passer l'objet navigation en prop si vous utilisez React Navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour ouvrir un lien externe
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
          <Text style={styles.mainTitle}>Je veux vraiment aider</Text>
          <Text style={styles.subtitle}>Liberté Égalité Renault Coupé</Text>
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
          <TouchableOpacity onPress={() => {/* fonction de déconnexion ici */}}>
            <Text style={styles.menuItem}>Déconnexion</Text>
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

// Vos styles existants ici

export default Header;