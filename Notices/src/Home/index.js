import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, StatusBar} from 'react-native';
import axios from 'axios';


export default function Home() {

  const [imageData, setImageData] = useState([]);
  const [news, setNews] = useState([]);
  const [noticiasModificadas, setNoticias] = useState(null)

      useEffect(() => {
        
        const apiUrl = `http://servicodados.ibge.gov.br/api/v3/noticias/`
       
    
        axios.get(apiUrl)
          .then(response => {
            setNews(response.data.items);
            setNoticias(response.data.items.map((item) => {
              const palavraInicio = '"image_intro":"';
              const palavraFim = '.';
              const indexInicio = item.imagens.indexOf(palavraInicio);
              const indexFim = item.imagens.indexOf(palavraFim) + 4;
              if(indexFim == -1){
                console.log(item.imagens)
                return null
              }
              const textUri = item.imagens.substring(indexInicio + palavraInicio.length, indexFim);
        
              const imageUri = textUri.replace(/\s/g, '')
             
              return {
                ...item,
                imagens: `https://agenciadenoticias.ibge.gov.br/${imageUri}`,
              };
            }));

         
            // for (let i = 0; i < 10; i++) {
            //   const element = response.data.items[i];
              
            //   const palavraInicio = '"image_intro":';
            //   const palavraFim = '.';
            //   const indexInicio = element.imagens.indexOf(palavraInicio);
            //   const indexFim = element.imagens.indexOf(palavraFim) + 4;
            //   console.log(indexInicio);
            //   console.log(indexFim);
            //   const imageUri = element.imagens.substring(indexInicio + palavraInicio.length, indexFim + palavraFim.length);
            //   console.log(element.imagens)
            //   console.log(imageUri)
              
            // }
          })
          .catch(error => {
            console.error('Erro ao buscar notícias:', error);
          });
      }, []);

      console.log(noticiasModificadas)
      
     
  
    
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
        data={noticiasModificadas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View>
            <Image source={{ uri: item.imagens }} style={styles.fotoCapa} />
            </View>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Button
              title="Ver Detalhes"
              // onPress={() => navigation.navigate('Details', { newsItem: item })}
            />
          </View>
        )}
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
  container: {
    flex: 1,
    borderWidth: 1,
    width: '90%',
    height: 40,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#808080',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 3.6,
    shadowRadius: 4,
    elevation: 2,
},
info: {
    color: '#fff'
}, 
viewImage:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
},

fotoCapa:{
    width: '100%',
    height: 250,
    borderRadius: 20,
},
title: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
},
detalhes: {
},
geral: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
}
  });
