import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';




export default function List(props) {


 return (

    <TouchableOpacity style={styles.geral}   onPress={ () => navigation.navigate('Detalhes') }>
   <View style={styles.container}>
    <View style={styles.viewImage}> 

    <Image
        source={{uri: props.data.urlToImage}}
        style={styles.fotoCapa}
    />
    </View>
    <View style={styles.detalhes}>

    <Text style={styles.title}>
            {props.data.title}
            </Text>
    <Text style={styles.info}>
        {props.data.autor} · {gerarQuantDias(props.data.publishedAt)}
        </Text>
        <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Detalhes', { newsItem: item })}
            />
         
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