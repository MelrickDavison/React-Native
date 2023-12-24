import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text, Image, ScrollView} from 'react-native';

export default function App() {

 
return (
  
   <SafeAreaView style={styles.container}>
    <ScrollView> 
    <View style={styles.header}>
        About Me
      </View>
      <Image
        source={require('./img/perfil.jpg')}
        style={styles.imgPerfil}
      />
      <Text style={styles.titulo}>
        Melrick Davison
      </Text>
      <Text style={styles.text}>
        Olá, meu nome é Melrick Davison Fonseca Ribeiro, nasci e moro em Maceió, Alagoas. Atualmente, estudo no Instituto Federal de Alagoas (IFAL) campus Rio Largo, onde atuo como bolsista de um projeto que instrui a população apartir de cursos maker's chamado Espaço 4.0 
         </Text>
         <Image
        source={require('./img/espaco40.jpg')}
        style={styles.imgGaleria}
      />
            <Text style={styles.text2}>
          Gosto de fazer uma infinidade de coisas, como sair com meus amigos, conhecer lugares novos e ler vários livros. Além de, é claro, programar. 
                 </Text>
                 <Image
        source={require('./img/amigos.jpg')}
        style={styles.imgGaleria2}
      />
        <Image
        source={require('./img/foto1.jpg')}
        style={styles.imgGaleria3}
      />
                 
      </ScrollView>
     
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10378a',
    flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
  },
  imgPerfil:{
    width: '90%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 300,
    borderStyle: 'solid',
    borderWidth: '2px', 
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 3.6,
    shadowRadius: 4,
    elevation: 2,
    position: 'fixed',
    top: 150,
    marginLeft: 22.6,
    },

      imgGaleria:{
    width: '90%',
    height: 400,
    resizeMode: 'cover',
    borderStyle: 'solid',
    borderWidth: '2px', 
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 3.6,
    shadowRadius: 4,
    elevation: 2,
    position: 'fixed',
    top: 900,
    marginLeft: 22.6,
    },

    imgGaleria2:{
      width: '90%',
      height: 400,
      resizeMode: 'cover',
      borderStyle: 'solid',
      borderWidth: '2px', 
      borderColor: 'black',
      shadowColor: 'black',
      shadowOffset: { width: 3, height: 4 },
      shadowOpacity: 3.6,
      shadowRadius: 4,
      elevation: 2,
      position: 'fixed',
      top: 1560,
      marginLeft: 22.6,
      },

      imgGaleria3:{
        width: '90%',
        height: 400,
        resizeMode: 'cover',
        borderStyle: 'solid',
        borderWidth: '2px', 
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 3.6,
        shadowRadius: 4,
        elevation: 2,
        position: 'fixed',
        top: 2000,
        marginLeft: 22.6,
        },

  header:{
    color: '#fff',
    backgroundColor: '#000c55',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2, // Necessário para sombras aparecerem no Android
    padding: 15,
    position: 'fixed',
    top: 0,
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "50px"
  },
  titulo: {
    marginLeft: 55,
    width: 300,
    fontSize: '34px',
    padding: '12px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#051a67',
    textAlign: 'center',
    marginTop: 470,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2, // Necessário para sombras aparecerem no Android
  },

  text:{
    margin: 12,
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: '24px',
    color: '#fff',
    top: 24
  },
  
  text2:{
    margin: 12,
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: '24px',
    color: '#fff',
    top:490
  },
});

