import React, {useState} from 'react';
import { View, StyleSheet, Image,Text, TouchableOpacity } from 'react-native';

export default function List(props) {

    const [imagemLike, setImagemLike] = useState(require('../Images/like.png'));


    const trocarImagem = () => {
      if (imagemLike === require('../Images/like.png')) {
        setImagemLike(require('../Images/likeada.png'));
      } else {
        setImagemLike(require('../Images/like.png'));
      }
    };
 return (
    <View>
        <View style={styles.perfil}>
            <Image
            source={{uri: props.data.imgPerfil}}
            style={styles.imagemPerfil}
            />

            <Text style={styles.nomePerfil}>
                {props.data.nome}
            </Text>
        </View>

        <Image
        source={{uri: props.data.imgPublicacao}}
        style={styles.iamgemPubli}
        />
        <View style={styles.interactionArea}>
        <TouchableOpacity onPress={trocarImagem}>
        <Image
            source={imagemLike}
            style={styles.imagemLike}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            source={require('../Images/commenter.png')}
            style={styles.imagemLike}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            source={require('../Images/direct.png')}
            style={styles.imagemLike}
        />
         </TouchableOpacity>
        </View>
        <Text>
            {mostrarLikes(props.data.likes)}
<       </Text>
            <View style={styles.desc}> 
            <Text style={styles.nomePerfil}>
            {props.data.nome} 
            </Text>
            <Text style={styles.textoDesc}>
               {props.data.descricao}
            </Text>
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
    perfil: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 5
    }, 
    imagemPerfil:{
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#121212'
    },
    nomePerfil:{
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 6
    },
    iamgemPubli:{
        height: 300,
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        marginTop: 5
    }, 
    interactionArea:{
        display: 'flex',
        flexDirection: 'row',

    },
    imagemLike:{
        height: 35,
        width: 35,
        marginTop: 9,
        marginLeft: 9,
    },

    desc:{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 12,
        marginLeft: 9
    },
    textoDesc:{
        marginLeft: 5,
        fontSize: 15,
    }
    
  });