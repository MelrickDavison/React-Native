import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
export default function App() {

  //let img = './img/perfil.jpg';
 
return (
   <SafeAreaView style={styles.container}>
   
      <View style={styles.header}>
        About Me
      </View>
      <Image
        source={require('./img/perfil.jpg')}
        style={styles.imgSmall}
      />

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
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
    },

  header:{
    color: '#fff',
    backgroundColor: '#f22',
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
    
  }
});

