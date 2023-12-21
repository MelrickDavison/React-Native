import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text, Image, StatusBar } from 'react-native';

export default function App() {
let img = "./img/perfil.jpg";
  return  (
  <SafeAreaView style={styles.container}>
  <StatusBar/>
  <Image
    source={{uri: img}}
    style={styles.foto}
  />
  
  <Image
    source={require('./src/Images/droneOrla.jpg')}
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
    height: 300,
    width: '90%',
    resizeMode: 'contain'
  },
  imgSmall:{
    width: '90%',
    height: 300,
    resizeMode: 'cover'
  }
});
