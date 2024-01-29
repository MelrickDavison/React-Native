import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Modal, Image, FlatList, Button, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';


export default function Home() {
  const navigation = useNavigation();

  const [news, setNoticias] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const shareSelecionado = (option) => {
    setModalVisible(false);
    switch (option) {
      case 'facebook':
        alert("Compartilhado com o Facebook")
        break;
      case 'twitter':
        alert("Compartilhado com o Twitter")
        break;
      case 'whatsapp':
        alert("Compartilhado com o WhatsApp")
        break;
      default:
        break;
    }
  };

      useEffect(() => {
        
        const apiUrl = `http://servicodados.ibge.gov.br/api/v3/noticias/`
       
    
        axios.get(apiUrl)
          .then(response => {
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
             
              const indexHora = item.data_publicacao.indexOf(" "),
              dataPublicacao = item.data_publicacao.slice(0, indexHora)
              return {
                ...item,
                imagens: `https://agenciadenoticias.ibge.gov.br/${imageUri}`,
                data_publicacao_formatada:  dataPublicacao,
                favorito: false,
              };
            }));
          })
          .catch(error => {
            console.error('Erro ao buscar notícias:', error);
          });
      }, []);

      
    
    const [imagemLike, setImagemLike] = useState('');


   

    const gerarImagem = (flag) => {
      if (flag) {
       setImagemLike(require('../img/likeada.png'));
      } else {
       setImagemLike(require('../img/like.png'));
      }
      return imagemLike
    };

    const favoritar = (noticia) => {
      noticia.favorito = !noticia.favorito
      gerarImagem(noticia.favorito)
    }
  
 return (

  <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={ (item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardNotice}>
            <View>
            <Image source={{ uri: item.imagens }} style={styles.fotoCapa} />
            </View>
            <Text style={styles.titulo}>{item.titulo}</Text>
        <View style={styles.ViewInfo}>
            <Text style={styles.info}>
           {(item.editorias).toUpperCase()} · {item.data_publicacao_formatada}
        </Text>
        <View style={styles.interactionArea}>
        <TouchableOpacity onPress={() => favoritar(item)}>
        <Image
            source={item.favorito ? require('../img/likeada.png') : require('../img/like.png')}
            style={styles.imagemLike}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
            source={require('../img/share.png')}
            style={styles.imagemLike}
        />
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.areaButton}>
         <TouchableOpacity style={styles.buttonVer}onPress={() => navigation.navigate('Detalhes', { newsItem: item })}>
              <Text style={styles.saibaMais}>Saiba Mais</Text>
            </TouchableOpacity>
        </View>
            
          </View>

          
        )}
      />
      <View style={styles.modalContainer}>
             <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
          <View style={styles.modalContainer}>
          <View style={styles.modalContent}> 
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeModal}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>
            Compartilhar:
          </Text> 

            <View style={styles.optionsShare}>
              <TouchableOpacity style={styles.clickOption} onPress={() => shareSelecionado('facebook')}>
                <Image
                source={require('../img/facebook.png')}
                style={styles.shareImage}
                />
                <Text style={styles.info}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.clickOption}onPress={() => shareSelecionado('whatsapp')}>
                <Image
                source={require('../img/whatsapp.png')}
                style={styles.shareImage}
                />
                <Text style={styles.info}>WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.clickOption} onPress={() => shareSelecionado('twitter')}>
                <Image
                source={require('../img/twitter.png')}
                style={styles.shareImage}
                />
                <Text style={styles.info}>Twitter</Text>
              </TouchableOpacity>


            </View>
            </View>
            </View>
            </Modal>
        </View>
   
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
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a88b0',
  },
  cardNotice: {
    flex: 1,
    borderWidth: 1,
    width: '90%',
    height: 40,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#09457d',
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
    color: '#fff',
    textAlign: 'justify'
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
    borderColor: 'black',
    borderWidth: 2,
},
titulo: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 10
},
areaButton:{
  alignContent: 'center',
  alignItems: 'center',
  marginTop: 10
},
buttonVer: {
  alignContent: 'center',
  alignItems: 'center',
    width: '60%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#082454',

},
saibaMais: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 20
},
geral: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
},

interactionArea:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-around',
  alignItems: 'flex-end',
  marginLeft: 110,


},
imagemLike:{
  height: 30,
  width: 30,
  marginLeft: 9,
},
ViewInfo: {
  alignItems: 'center',
  flexDirection: 'row',
  alignContent: 'space-around',
  marginTop: 19
},

shareButton: {
  fontSize: 18,
  color: 'blue',
},
modalContainer: {
  marginTop: 12,
  flex: 1,
   justifyContent: 'flex-end',
  alignItems: 'center',
},

modalContent: {
 
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 20,
  borderBottomEndRadius: 0,
  borderBottomStartRadius: 0,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,

},

closeModal:{
  width: 30,
  marginRight: 330
},
closeButton: {
  marginTop: 20,
  fontSize: 18,

  color: 'white',
  marginLeft: 10
},

optionsShare:{
  flexDirection: 'row',
  padding: 12,
  alignContent: 'center',
  justifyContent: 'center',
  marginLeft: 10,
},

clickOption: {
  alignItems: 'center',
  alignContent: 'center',
  padding: 12,
  textAlign: 'center'
}
  });
