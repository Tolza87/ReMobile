import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: 'white',
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
    },
    mainTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'blue',
    },
    subtitle: {
      fontSize: 12,
      color: 'black', // Couleur du texte pour le sous-titre
    },
    separator: {
      height: 1,
      backgroundColor: 'grey',
    },
    serviceContainer: {
      padding: 10,
    },
    serviceTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black', // Couleur du texte pour le nom du service
    },
    serviceDescription: {
      fontSize: 16,
      color: 'grey', // Couleur du texte pour la description du service
    },
  });