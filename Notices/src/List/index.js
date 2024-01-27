import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation();

export default function List(props) {
    
   function gerarQuantDias(diaPublicacao){
        let diaAtual = new Date().getDate()
        
       if (diaPublicacao.ano == new Date().getFullYear()) {
        if(parseInt(diaPublicacao.mes) == new Date().getMonth()){
            let dias = diaAtual - parseInt(diaPublicacao.dia)
                if(dias == 0){
                    return "Hoje"
                } else{
                    return dias == 1 ? dias + " dia" : dias + " dias"
                }
        }else{
            return new Date().getMonth() - parseInt(diaPublicacao.mes)
        }
       } else{
        if(new Date().getMonth() < parseInt(diaPublicacao.mes)){
            let result = new Date().getFullYear() - parseInt(diaPublicacao.ano)
         return result == 1 ? result + " ano" : result + " anos"
        }else{
          let result = new Date().getFullYear() - parseInt(diaPublicacao.ano)
          result--
         return result == 1 ? result + " ano" : result + " anos"  

        }
       }

    }

 return (

    <TouchableOpacity style={styles.geral} >
   <View style={styles.container}>
    <View style={styles.viewImage}> 

    <Image
        source={{uri: props.data.foto}}
        style={styles.fotoCapa}
    />
    </View>
    <View style={styles.detalhes}>

    <Text style={styles.title}>
        {props.data.titulo} 
    </Text>
    <Text style={styles.info}>
        {props.data.autor} · {gerarQuantDias(props.data.dataPublicacao)}
        </Text>

    </View>

   </View>
   </TouchableOpacity>

  );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        width: '90%',
        height: 40,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#808080',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    info: {
        color: '#fff'
    }, 
    viewImage:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    fotoCapa:{
        width: '100%',
        height: 250,
        borderRadius: 20,
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    detalhes: {
    },
    geral: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }

  })