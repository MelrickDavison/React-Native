import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/Home';
import Sobre from './src/Sobre';

const Stack = createNativeStackNavigator();

export default function icons() {
 return(
   <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen
      name='Home'
      component={Home}
      options={{
        title: 'Tela Início',
        headerStyle:{
          backgroundColor:'#121212'
        },
        headerTintColor: '#fff'
      }}
      />

      <Stack.Screen
      name='Sobre'
      component={Sobre}
      />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

