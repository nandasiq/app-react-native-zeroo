/*import React from 'react';
import { Image , Text , Dimensions , StyleSheet, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;


export default function Cesta(){
    return<>

    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}> Detalhes da cesta</Text> 

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
         <Image source={logo} style={estilos.logo}/>
         <Text style={estilos.nomeFazenda}>Jenny Jack farm</Text>
        </View>
        <Text style={estilos.descricao}>
            Uma cesta com produtos selecionados 
            cuidadosamente da fazenda direto para 
            sua cozinha
        </Text>
        <Text style={estilos.preco}>R$40,00</Text>                   
   </View>  
    
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578/768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 26,
        color : 'white',
        fontWeight: 'bold',
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#4646",
        fontSize:46,
        lineHeight:42,
        fontWeight: 'bold',
    },
    nomeFazenda: {
        fontSize: 30,
        lineHeight: 46,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 26,
        lineHeight:26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: 'bold',
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    logo: {
        width: 62,
        height: 62,
        marginRight: 62
        },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
        marginLeft: 12,
    }
})*/