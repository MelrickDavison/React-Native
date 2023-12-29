import React, {useState, useEffect} from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment-timezone';

var relogio = null;

export default function App() {

  const [localTime, setLocalTime] = useState('');
  const[local, setLocal] = useState('Brazil/Maceio')
  const[localName, setLocalName] = useState('Maceio')
  
  useEffect(() => {
    relogio = setInterval(() => {
      const formattedTime = moment().tz(local).format('HH:mm:ss');
      setLocalTime(formattedTime);
    }, 1000);
  }, [])

  function iniciarTime(zone){
    clearInterval(relogio)
    relogio = setInterval(() => {
      const formattedTime = moment().tz(zone).format('HH:mm:ss');
      setLocalTime(formattedTime);
    }, 1000);
    return relogio
  }

  

function RelogioMaceio(){
 // setLocal()
  setLocalName('Maceio')
  iniciarTime('America/Maceio')
}

function RelogioNewYork(){
  //setLocal('America/New_York')
  setLocalName('Nova York')
  iniciarTime('America/New_York')

 }

 function RelogioLondres(){
  setLocalName('Londres')  
  iniciarTime('Europe/London')
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
       {localTime}
       
      </Text>

      <Text style={styles.textLocation}>
        {localName}
       
      </Text>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={ RelogioMaceio }>
          <Text style={styles.btnText}>
            Maceió
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ RelogioNewYork}>
          <Text style={styles.btnText}>
              Nova York
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ RelogioLondres }>
          <Text style={styles.btnText}>
              Londres
          </Text>

        </TouchableOpacity>

    
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
  }
});
