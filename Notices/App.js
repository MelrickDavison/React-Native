import  React, {useState}  from 'react';
import { StyleSheet, Text, View , FlatList, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [dateNow, setDate] = useState(`${new Date().getDate() < 10 ? "0"+ new Date().getDate() : new Date().getDate()}/${new Date().getMonth() == 0 ? "01" : "0"+new Date().getMonth()}/${new Date().getFullYear()}`)

  console.log(dateNow)

  const[notices, setNoticia] = useState([
    {
      id: '1',
      titulo: 'Greve geral na Argentina reúne 130 mil pessoas em Buenos Aires, diz polícia',
      descricao: '',
      autor: 'Autor',
      foto: 'http://www.andes.org.br/diretorios/images/bruna/AB/WhatsApp%20Image%202023-11-13%20at%2015_55_59.jpeg',
      dataPublicacao: {
        dia:'01',
        mes:'12',
        ano: '2020'
      }
    },
    {
     id: '2',
      titulo: 'Projeto que descongela tempo de serviço na pandemia é aprovado na Comissão de Finanças e Tributação da Câmara',
      descricao: '',
      autor: 'Vinícius Cassela',
      foto: 'http://www.andes.org.br/diretorios/images/bruna/AB/WhatsApp%20Image%202023-11-13%20at%2015_55_59.jpeg',
      dataPublicacao: {
        dia:'13',
        mes: '11',
        ano:'2023'
      }
    }
  ])
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <Header/>

      <FlatList
   data={notices}
   keyExtractor={ (item) => item.id}
   renderItem={ ({item}) => <List data={item} />}
   />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
  },
  header: {
    position: 'relative'
  },

  subtitle: {

  },
});
