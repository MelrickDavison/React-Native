import React, {useState, useRef} from 'react';
import { View, SafeAreaView, Text, StyleSheet, Keyboard, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import api from './src/Services/api';

export default function App() {
    
  const[cep,setCep] = useState(null);
  const[dados, setDados] = useState(null);
  const inputRef = useRef(null);

  async function buscar(){
    if(cep == '' || cep.length !== 8){
      alert("Digite um cep Válido");
      setCep('');
      return;
    }
    try{
      const response = await api.get(`/${cep}/json/`);
      console.log(response.data);
      setDados(response.data);
      console.log('Dados: ' + dados);
      Keyboard.dismiss();
      setCep('');
    }catch(error){
      setDados(null);
      console.log('ERROR: ' + error);
      alert('Cep não encontrador');
    }
  }

  function limpar(){
    setCep(null);
    inputRef.current.focus();
  }

  return (
   <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Text style={styles.titulo}> BUSCADOR DE CEP</Text>
    
    <TextInput
    style={styles.input}
    placeholder='ex: 57045260'
    value={cep}
    onChangeText={(text) => setCep(text)}
    keyboardType='numeric'
    ref={inputRef}
    />

    <View style={styles.viewBtn}>
      <TouchableOpacity 
      style={[styles.btn, {backgroundColor: '#1d75cd'}]}
      onPress={ buscar }
      >
        <Text style={styles.btnText}> Buscar </Text>
      </TouchableOpacity>
    
      <TouchableOpacity 
      style={[styles.btn, {backgroundColor: '#cd3e1d'}]}
      onPress={ limpar }
      >
        <Text style={styles.btnText}> Limpar </Text>
      </TouchableOpacity>
    </View>
    {dados && 
    <View style={styles.resultado}>
      <Text style={styles.itemTexto}>{dados.cep !== ''? 'CEP: ' + dados.cep : ''} </Text>
      <Text style={styles.itemTexto}>{dados.logradouro !== ''? 'Logradouro: ' + dados.logradouro : ''}</Text>
      <Text style={styles.itemTexto}>{dados.bairro !== ''? 'Bairro: ' + dados.bairro : ''}</Text>
      <Text style={styles.itemTexto}>{dados.localidade !== ''? 'Cidade: ' + dados.localidade : ''}</Text>
      <Text style={styles.itemTexto}>{dados.uf !== ''? 'Estado: ' + dados.uf : ''}</Text>
      
    </View>
    }
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8
  },
  input:{
    borderWidth: 1,
    width: '90%',
    height: 40,
    borderRadius: 8,
    padding: 10
  },
  viewBtn:{
    flexDirection:'row',
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '35%'
  },
  btnText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  resultado:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTexto:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
