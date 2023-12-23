import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { useFonts } from 'react-native-google-fonts/GoogleFonts';

export default function App() {

  //let img = './img/perfil.jpg';
  const [fontsLoaded] = useFonts({
    Roboto: require('path-to-your-fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('path-to-your-fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou algum componente de carregamento enquanto as fontes estão sendo carregadas
  }

 
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
    background: 'linear-gradient(to bottom right, #10378a, #0b2978)',
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
    fontFamily: 'Roboto',
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
    
  }
});

