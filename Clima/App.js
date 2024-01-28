import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView,Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
    
export default function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
  try {
    // API utilizada: https://openweathermap.org/
    const apiKey = 'b1a6c4e7d8151aff17c8882ad520c79c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    setWeatherData(response.data);
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
          <Text style={styles.respostas}>Condição: {weatherData.weather[0].description}</Text>
          <Text style={styles.respostas}>Temperatura: {(weatherData.main.temp).toFixed(1)} °C</Text>
          <Text style={styles.respostas}>Umidade: {weatherData.main.humidity}%</Text>
         
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
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  respostasView: {
    backgroundColor: '#0339fc',
    flexDirection: 'column',
    borderRadius: "60",
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
  }
})
