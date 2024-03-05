import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Fonction d'adaptation pour la taille de police
const adaptiveFontSize = (size) => {
  return size * (width / 360); // 360 est la largeur de base utilisée pour le design
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: height * 0.02, // Utilisation de height pour un espacement adaptatif
    width: '80%', // Ajustement pour une meilleure adaptabilité
    paddingHorizontal: width * 0.04, // Calcul basé sur la largeur de l'écran
    paddingVertical: height * 0.02, // Calcul basé sur la hauteur de l'écran
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: adaptiveFontSize(24), // Utilisation de la fonction d'adaptation
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%', // Maintien à 100% pour la largeur complète
    paddingHorizontal: width * 0.06, // Adaptation basée sur la largeur de l'écran
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
    fontSize: adaptiveFontSize(16), // Utilisation de la fonction d'adaptation
  },
  button: {
    marginBottom: height * 0.02, // Utilisation de height pour un espacement adaptatif
    backgroundColor: '#003580',
    padding: 10,
    borderRadius: 4,
    width: '80%', // Ajustement pour une meilleure adaptabilité
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: adaptiveFontSize(16), // Utilisation de la fonction d'adaptation
    fontWeight: 'bold',
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    textDecorationLine: 'underline',
    marginLeft: 5,
    color: 'blue',
  },
});
