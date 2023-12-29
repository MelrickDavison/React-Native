import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header(props) {
 return (
   <View style={styles.header}>
    <TouchableOpacity>
        <Image
        source={require('../Images/Instagram.png')}
        style = {styles.logo}
        />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
        source={require('../Images/direct.png')}
        style = {styles.logo1}
        />
    </TouchableOpacity>
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
    logo:{
      height: 40,
      width: 124,
      resizeMode: 'contain'
    },
    logo1:{
      resizeMode: 'contain',
      height: 30,
      width: 30
    }
  });