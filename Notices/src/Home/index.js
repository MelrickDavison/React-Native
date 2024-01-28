import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, Button, StatusBar} from 'react-native';
import axios from 'axios';

import List from './index.js';

export default function Home() {

  const [news, setNews] = useState([]);

      useEffect(() => {
        const apiKey = '5837e993bd5f4094a22e4eab73c0523c';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
        axios.get(apiUrl)
          .then(response => {
            setNews(response.data.articles);
          })
          .catch(error => {
            console.error('Erro ao buscar notícias:', error);
          });
      }, []);

  
    
      // const[notices, setNoticia] = useState([
      //   {
      //     id: '1',
      //     titulo: 'Greve geral na Argentina reúne 130 mil pessoas em Buenos Aires, diz polícia',
      //     descricao: '',
      //     autor: 'Autor',
      //     foto: 'http://www.andes.org.br/diretorios/images/bruna/AB/WhatsApp%20Image%202023-11-13%20at%2015_55_59.jpeg',
      //     dataPublicacao: {
      //       dia:'01',
      //       mes:'12',
      //       ano: '2020'
      //     }
      //   },
      //   {
      //    id: '2',
      //     titulo: 'Projeto que descongela tempo de serviço na pandemia é aprovado na Comissão de Finanças e Tributação da Câmara',
      //     descricao: '',
      //     autor: 'Vinícius Cassela',
      //     foto: 'http://www.andes.org.br/diretorios/images/bruna/AB/WhatsApp%20Image%202023-11-13%20at%2015_55_59.jpeg',
      //     dataPublicacao: {
      //       dia:'13',
      //       mes: '11',
      //       ano:'2023'
      //     }
      //   }
      // ])

 return (

  <View>
      <Text>Últimas Notícias</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>

  // <View style={styles.container}>
  //       <Text style={styles.subtitle}>{dateNow}</Text>


  //   <StatusBar barStyle="light-content" />


  //     <FlatList
  //  data={notices}
  //  keyExtractor={ (item) => item.id}
  //  renderItem={ ({item}) => <List data={item} />}
  //  />
    
  //   </View>


  );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 40,
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: 7,
      alignItems: 'center',
      justifyContent: 'space-between'
    }, 

    container: {
      flex: 1,
      backgroundColor: '#008080',
      alignItems: 'center',
    },

      subtitle: {
        alignContent: 'space-between'
      }
  });
