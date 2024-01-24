import React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
    return (
   <View>
      <StatusBar/>
      <Text> TELA HOME </Text>
     <Button
     title='Sobre'
     onPress={ () => navigation.navigate('Sobre') }
     />

   </View>
  );
}