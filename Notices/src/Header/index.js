import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {

    const [dateNow, setDate] = useState(`${new Date().getDate() < 10 ? "0"+ new Date().getDate() : new Date().getDate()}/${new Date().getMonth() == 0 ? "01" : "0"+new Date().getMonth()}/${new Date().getFullYear()}`)


 return (
   <View style={styles.header}>
        <Text style={styles.title}>Clarim Diário</Text>
        <Text style={styles.subtitle}>{dateNow}</Text>
   </View>


  );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 40,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderBottomWidth: 0.5,
      shadowColor: '#000',
      elevation: 2,
      paddingHorizontal: 7,
      alignItems: 'center',
      justifyContent: 'space-between'
    }, 
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
      },

      subtitle: {
        alignContent: 'space-between'
      }
  });