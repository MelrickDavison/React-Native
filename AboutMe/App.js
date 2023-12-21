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
  backgroundColor: '#000',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
  },
  foto:{
    position:'relative',
    top: 100,
    height: 300,
    width: '90%',
    resizeMode: 'contain'
  },
  imgSmall:{
    width: '90%',
    height: 300,
    resizeMode: 'cover'
  },
  header:{
    color: '#fff',
    backgroundColor: '#f22',
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

