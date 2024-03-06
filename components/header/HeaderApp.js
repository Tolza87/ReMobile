import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './header_main';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Je veux vraiment aider</Text>
            <Text style={styles.subtitle}>Liberté Égalité Renault Coupé</Text>
          </View>
          <TouchableOpacity onPress={toggleDrawer}>
            {isDrawerOpen ? (
              <Ionicons name="close" size={24} color="black" />
            ) : (
              <Ionicons name="menu" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

export default Header;
