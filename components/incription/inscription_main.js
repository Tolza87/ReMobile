import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const adaptiveFontSize = (size) => {
  return size * (width / 360); 
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
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
    width: '100%',
    paddingHorizontal: width * 0.06, 
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
    fontSize: adaptiveFontSize(16),
  },
  button: {
    marginBottom: height * 0.02,
    backgroundColor: '#003580',
    padding: 10,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
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
