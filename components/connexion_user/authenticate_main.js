import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 200,
    width: width - 40,
    height: 400,
    maxWidth: 500,
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '70%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    borderRadius: 5,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});