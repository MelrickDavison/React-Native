import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
    <View style={styles.header}>
      <Text>Plantour</Text>
      <Image
        source={require('./src/image/notificacoes.png')}
        style={styles.notIcon}
        />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    flex: 1,
    backgroundColor: '#0080C8',
    justifyContent: 'space-between',
    padding: 15,
    position: 'fixed',
    top: 0,
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "50px"
  },

  notIcon:{
    width: 100,
    height: 100,
  },
});
