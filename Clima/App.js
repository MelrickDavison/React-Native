import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Text style={styles.titulo}> ClimAtual </Text>
    
    <Text> Digite um local </Text>
    <TextInput
    placeholder='Ex: Maceió'
    />
    <View>

      <TouchableOpacity>
        <Text> Buscar </Text>
      </TouchableOpacity>
    
      <TouchableOpacity>
        <Text> Limpar </Text>
      </TouchableOpacity>
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
