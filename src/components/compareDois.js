import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';


const CompareDois = () => {


    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 20,
                }}
            >
                <View style={styles.card} >
                    <Text style={styles.titulo}> Quantidade </Text>
                    <Text style={styles.quantidade}> 97 </Text>
                    <Text style={styles.estabelecimento}> Estabelecimentos </Text>
                    <Text style={styles.data}> 16/09/2021 </Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.titulo}>Tipos</Text>
                    <Text style={styles.tipos}>45 Distribuidoras</Text>
                    <Text style={styles.tipos}>10 Hipermercados</Text>
                    <Text style={styles.tipos}>12 Supermercados</Text>
                    <Text style={styles.tipos}>8 Sites</Text>
                    <Text style={styles.tipos}>13 Ceasa</Text>
                    <Text style={styles.tipos}>4 Diversos</Text>
                    <Text style={styles.tipos}>5 Encartes</Text>

                </View>
                <View style={styles.card} >
                    <Text style={styles.titulo}>Economia</Text>
                    <Text style={styles.subtitulo}>média</Text>
                    <Text style={styles.subtitulo}> 135 itens comparados</Text>
                    <Text style={styles.preco}> R$4.647,99</Text>
                    <Text style={styles.porcentagem}> 19,76% </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:70,
    },
    card: {
        flex: 0.3,
        backgroundColor: '#fff',
        height: 350,
        marginLeft: 20,
        border : '2px solid gray',
        margin: 'auto',
        marginTop: 30

    },
    titulo:{
        marginTop:5,
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    quantidade :{
        marginTop: 30,
        width: '100%',
        fontSize: 120,
        textAlign: 'center',
        color: 'blue'
    }, 
    estabelecimento: {
        marginTop: 20,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    data:{
        marginTop: 30,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    tipos: {
        marginTop: 15,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
    },
    subtitulo: {
        width: '100%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',

    },
    preco :{
        marginTop:20,
        width: '100%',
        fontSize: 42,
        textAlign: 'center',
        color: 'green',
    },
    porcentagem: {
        marginTop:80,
        width: '100%',
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
    }

});

export default CompareDois;