import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const adaptiveFontSize = (size) => {
  return size * (width / 360); 
};


export const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: height * 0.02, 
    width: '80%', 
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: adaptiveFontSize(24),
    fontWeight: 'bold',
  },
  formContainer: {
    width: '80%', // Ajuster selon votre mise en page
    marginTop: height * 0.1, // Marge du haut
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 48, // Hauteur fixe pour tous les champs TextInput
    width: 200,
    borderWidth: 2,
    borderColor: '#003580',
    backgroundColor: '#FFF', // Couleur de la bordure
    placeholderTextColor: '#888',
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: adaptiveFontSize(16),
    color: '#FFF', // Couleur du texte
    marginBottom: 16, // Marge inférieure entre les champs
  },
  button: {
    backgroundColor: '#003580',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    width: 200,
    color: '#FFF',
    textAlign: 'center',
    fontSize: adaptiveFontSize(16),
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
