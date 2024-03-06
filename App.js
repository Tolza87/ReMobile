// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import HeaderApp from './components/header/HeaderApp';
import Authenticate from './components/connexion_user/authenticate';
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderApp />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authenticate" headerMode="none">
          <Stack.Screen name="Authenticate" component={Authenticate} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
