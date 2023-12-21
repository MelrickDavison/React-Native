import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {
 return (
   <SafeAreaView style={styles.container}>
      <StatusBar  style= "auto"/>
   
      <Image
      source={require('./src/Images/crono.png')}
      style={styles.img}
      />

      <Text style={styles.texto}>
        00:00:00
      </Text>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
              Iniciar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
              Zerar
          </Text>

        </TouchableOpacity>

      </View>

      <Text style={styles.tempoMedido}>
        Ultimo tempo medido: 02:50:45
      </Text>
   
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:400,
    height:400,
    resizeMode: 'contain'
  },
  texto:{
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -185
  },
  areaBtn:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 155
  },
  btn:{
    height: 45,
    width: '40%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  tempoMedido:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15
  }
});
