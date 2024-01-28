import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView,Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
    
export default function App() {
  const [imagemTemp, setImagem] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  

  const getWeather = async () => {
  try {
    // API utilizada: https://openweathermap.org/
    const apiKey = 'b1a6c4e7d8151aff17c8882ad520c79c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=pt_br`;

    const response = await axios.get(apiUrl);
    setWeatherData(response.data);
    
    const temperature = response.data.main.temp;

    if(parseInt(temperature) > 25){
      setImagem(require('./src/image/quente.png'))
    }else if(temperature > 10){
      setImagem(require('./src/image/morno.png'))
    } else{
      setImagem(require('./src/image/frio.png'))
    }

  } catch (error) {
    alert("Digite um local válido");
    console.error('Erro ao obter dados do clima:', error);
  }
  
  }
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Text style={styles.titulo}> ClimAtual </Text>
    
    <Text style={styles.legenda}> Digite um local: </Text>

    <View style={styles.Busca}>
    <TextInput
        style={styles.input}
        onChangeText={text => setLocation(text)}
        value={location}
      />
       <TouchableOpacity  onPress={getWeather}>
       <Image
        source={require('./src/image/pesquisa.png')}
        style={styles.imgBusca}
    />
      </TouchableOpacity>
      </View>
    <View>
  
    </View>

    {weatherData && (
        <View style={styles.respostasView}>
          <View style={styles.viewTemp}> 
            <View style={styles.header}>
              <Text style={styles.temp}>{(weatherData.main.temp).toFixed(1)}°</Text>
              <Text style={styles.desc}>{weatherData.weather[0].description}</Text>
            </View>
            
            
          </View>
        
          <Image
            source={imagemTemp}
             style={styles.imgTemp}
          />
        <View style={styles.info}>
          <Text style={styles.respostas}>Umidade: {weatherData.main.humidity}%</Text>
          <Text style={styles.respostas}>Sensação Térmica de {(weatherData.main.feels_like).toFixed(1)}°</Text>
        </View>
   

         
        </View>
      )}



   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0390fc',
    alignItems: 'center',
  },
  respostas: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  respostasView: {
    backgroundColor: '#0339fc',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: '2px', 
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 3.6,
    shadowRadius: 4,
    elevation: 2,
  },
  Busca: {
    flexDirection: 'row',
    padding: '10px'
  },
  imgBusca: {
    width: 30,
    height: 30,
    marginLeft: '10px',
    top:  '3px',
  
  },
  titulo: {
    color: '#fff',
    fontFamily:  'Arial',
    fontWeight: 'bold',
    fontSize: 48,
    margin: '20px'
  },

  legenda:{
    color:'#000',
    fontSize: 15
  },

  input: {
    height: 35, 
    width: 200,
    borderColor: '#000', 
    color: '#fff',
    borderWidth: 1, 
    marginBottom: 10 
  },

  temp: {
    color: '#fff',
    fontSize: 70,
    padding: 15,
  },
  desc:{
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
    top: -8
  },
  imgTemp: {
    marginRight: 12,
    marginLeft: 200,
    marginTop: 30,
    height: 90,
    width: 90,
  },

  viewTemp:{
    flexDirection: "row",
     alignContent: 'space-between'
  },

  info:{
   marginTop: 20,
   marginRight: 12,
   marginBottom: 20,
  }
})
