import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InscriptionCitizen from "./components/incription/InscriptionCitizen";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name="InscriptionCitizen" component={InscriptionCitizen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
