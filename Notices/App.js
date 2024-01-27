import  React, {useState}  from 'react';
import { StyleSheet, Text, View , FlatList, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Detalhes from './src/DetalhesNoticia'
import Home from './src/Home';
// import List from './src/List';

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
          backgroundColor:'#121212'
        },
        headerTintColor: '#fff'
      }}
      />

    </Stack.Navigator>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({

  header: {
    position: 'relative'
  },

  subtitle: {

  },
});
