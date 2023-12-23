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
        style={styles.imgSmall}
      />
      <Text style={styles.titulo}>
        Melrick Davison
      </Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
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
  imgSmall:{
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
  }
});

