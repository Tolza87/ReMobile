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
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10, 
    },
    logo: {
      width: 50,
      height: 50, 
    },
    titleTextContainer: {
      marginLeft: 10,
      alignItems: 'center',
    },
    JeVeuxlogo:{
      width: 270,
      height: 50, 
    },
    mainTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'blue',
    },
    subtitle: {
      fontSize: 12,
      color: 'black', 
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
      color: 'black',
    },
    serviceDescription: {
      fontSize: 16,
      color: 'grey',
    },
    menuContainer: {
        backgroundColor: 'white', // Vous pouvez changer la couleur de fond
        paddingTop: 20,
        paddingBottom: 20,
        // Définissez d'autres styles pour le conteneur du menu ici
      },
      menuItem: {
        padding: 10,
        // Définissez d'autres styles pour les éléments du menu ici
      },
      
  });