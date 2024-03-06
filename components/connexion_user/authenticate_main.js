import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '70%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    marginTop: 10,
    width: '70%',
    borderRadius: 5,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
