import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, ScrollView, Linking} from 'react-native';

export default function Detalhes({route}) {

  console.log(route.params.newsItem)
 return (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ScrollView>
      <View>
        
      <Text style={styles.title}>{route.params.newsItem.titulo}</Text>

      <View style={styles.legenda}>
        <Text style={styles.legendaText}>Por {(route.params.newsItem.editorias).toUpperCase()} </Text>
        <Text style={styles.legendaText}>Publicado em {route.params.newsItem.data_publicacao}</Text>
      </View>
    <View style={styles.viewImage}>
      <Image
      source={{uri: route.params.newsItem.imagens}}
      style={styles.imagemCapa}
      />
    </View>
   
    <View style={styles.viewtTexto}>
      <Text style={styles.texto}>{route.params.newsItem.introducao}</Text>
    </View>
    
    <View style={styles.viewLink}>
    <Text style={styles.legendaLink}> Acesse a matéria completa</Text>
    <Text style={styles.link}onPress={() => { Linking.openURL(route.params.newsItem.link) }}> clicando aqui </Text>
    </View>
    
    </View>
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a88b0'
  },

  title:{
    fontSize: 25,
    fontFamily: 'Arial Black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black'
  },

  viewImage:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemCapa: {
    padding: 10,
    width: 340,
    height: 240,
    borderColor: 'black',
    borderWidth: 2
  },

  legenda: {
    top: -4,
    padding: 3,
  },
  legendaText:{
    fontSize: 17,
    textAlign: 'left',
    marginLeft: 2,
  },

  viewtTexto: {
    margin: 20
  },

  texto: {
    textAlign: 'justify',
    fontFamily: 'Arial',
    fontSize: 25,
  },

  viewLink:{
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  legendaLink: {
    fontSize: 18,
  }
});