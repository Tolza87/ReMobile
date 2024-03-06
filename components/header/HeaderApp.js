import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './header_main';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Text style={styles.menuItem}>Accueil</Text>
          <Text style={styles.menuItem}>Déconnexion</Text>
          <Text style={styles.menuItem}>Mentions Légales</Text>
        </View>
      )}
      <View style={styles.separator} />
    </View>
  );
};

export default Header;