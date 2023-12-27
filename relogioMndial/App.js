import React, {useState} from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0;

export default function App() {
  const[numero,setNumero] = useState(0);
  const[botao,setBotao] = useState('Iniciar');
  const[Ultimo,setUltimo] = useState(null);

  function iniciar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar');
    }else{
      timer = setInterval(() => {
        segundos++;
        
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }

        if(minutos >= 60){
          minutos = 0;
          horas++;
        }

        let formatado = (horas < 10? '0' + horas : horas) + ':' 
        + (minutos < 10? '0' + minutos : minutos ) + ':' 
        + (segundos < 10? '0' + segundos : segundos);
        setNumero(formatado);
      },100);
      setBotao('Parar');
    }
  }

  function zerar(){
    clearInterval(timer);
    timer = null;
    setUltimo(numero);
    setNumero(0);
    segundos = 0;
    minutos = 0;
    horas = 0;
    setBotao('Iniciar');
    console.log(Ultimo);
  }


  return (
   <SafeAreaView style={styles.container}>
      <StatusBar  style= "auto"/>

      <Text style={styles.titulo}>
       Relógio Mundial
       
      </Text>

      <Image
      source={require('./src/Images/relogio-digital.png')}
      style={styles.img}
      
      />

      <Text style={styles.texto}>
       00:00:00
       
      </Text>

      <Text style={styles.textLocation}>
       Maceió
       
      </Text>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={ iniciar }>
          <Text style={styles.btnText}>
              Maceió
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ zerar }>
          <Text style={styles.btnText}>
              Nova York
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ zerar }>
          <Text style={styles.btnText}>
              Nova York
          </Text>

        </TouchableOpacity>

      <Text style={styles.tempoMedido}>
        {Ultimo !== null? 'Ultimo tempo medido: ' + Ultimo : null}
      </Text>
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: '100%',
    height:300,
    marginLeft: 10,
    resizeMode: 'contain',
    marginTop: 10
  },
  titulo:{
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  texto:{
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -150
  },
  textLocation: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -4
  },
  areaBtn:{
    backgroundColor: '#ff00',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 90
  },
  btn:{
    margin: 14,
    height: 45,
    width: '80%',
    backgroundColor: '#00aeef',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
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
