import React, { useState } from 'react';
import { View,
         SafeAreaView, 
         Image, 
         Text, 
         TouchableOpacity, 
         StatusBar, 
         StyleSheet,
         FlatList 
        } from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App() {

 const[feed,setFeed] = useState([
  {id: '1',
   nome: 'VictorBrunno',
   descricao: 'Mais um dia de trabalho',
   imgPerfil: 'https://i1.sndcdn.com/avatars-000179405104-pcjko5-t240x240.jpg',
   imgPublicacao: 'https://blog.eseg.edu.br/wp-content/uploads/2021/12/como-e-trabalhar-com-programacao.png',
   likeada: true,
   likes: 12
  },

  {id: '2',
  nome: 'Melrickkj',
  descricao: 'Curtindo um pouco...',
  imgPerfil: 'https://cdn-icons-png.flaticon.com/512/260/260142.png',
  imgPublicacao: 'https://www.publicdomainpictures.net/pictures/110000/nahled/leyendo-un-libro-en-la-playa.jpg',
  likeada: true,
  likes: 12
 },

 {id: '3',
 nome: 'Julio1313',
 descricao: 'Vazia, tá pagoo',
 imgPerfil: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
 imgPublicacao: 'https://bluefit.com.br/storage/app/uploads/public/60a/bf3/ab5/thumb_2984_740_650_0_0_crop.jpg',
 likeada: true,
 likes: 12
},

{id: '4',
nome: 'Im.Vitoria',
descricao: 'Tem que sentar e curtir as flores da vida',
imgPerfil: 'https://i.pinimg.com/736x/82/1b/6e/821b6e3b78e530cad395814d5685c3fa.jpg',
imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_nCsQNu7yqXFeyfVj4R-GljinmjEsAFaiwD6UNQOSA&s',
likeada: true,
likes: 1
},

{id: '5',
nome: 'Igor1215',
descricao: 'TBT 2026... Saudades',
imgPerfil: 'https://i.pinimg.com/736x/39/25/c3/3925c3c5f091247b44ef4ba016041354.jpg',
imgPublicacao: 'https://photo980x880.mnstatic.com/7f7c57ae827d942544637296a906c689/coliseo-475444.jpg',
likeada: true,
likes: 120
},

{id: '6',
nome: 'PizzariaNova',
descricao: 'Venha provar você também!',
imgPerfil: 'https://static.vecteezy.com/system/resources/previews/007/944/092/non_2x/pizza-logo-design-template-illustration-free-vector.jpg',
imgPublicacao: 'https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852113.jpg',
likeada: true,
likes: 91
},

 ])

 return (
   <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />

   <Header/>

   <FlatList
   data={feed}
   keyExtractor={ (item) => item.id}
   renderItem={ ({item}) => <List data={item} />}
   />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});