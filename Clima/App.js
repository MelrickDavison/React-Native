import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Text style={styles.titulo}> ClimAtual </Text>
    
    <TextInput/>

    <View>
      <TouchableOpacity>
        <Text> Buscar </Text>
      </TouchableOpacity>
    
      <TouchableOpacity>
        <Text> Limpar </Text>
      </TouchableOpacity>
    </View>

    <View>
      <Text>CEP: 57045260</Text>
      <Text>Logradouro: Avenida Muniz Falcão</Text>
      <Text>Bairro: Barro Duro</Text>
      <Text>Cidade: Maceió</Text>
      <Text>Estado: Alagoas</Text>
      
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
