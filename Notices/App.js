import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Detalhes from './src/DetalhesNoticia'
import Home from './src/Home';

// import List from './src/List';

export default function app() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen
      name='Home'
      component={Home}
      animationTypeForReplace='push'
      options={{
        title: 'Clarim Diário',
        headerStyle:{
          backgroundColor:'#121212',
          textAlign: 'center'
        },
        headerTintColor: '#fff'
      }}
      />

<Stack.Screen
      name='Detalhes'
      component={Detalhes}
      />

    </Stack.Navigator>
   </NavigationContainer>
  
  );
}
