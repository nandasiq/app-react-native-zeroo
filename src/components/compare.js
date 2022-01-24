import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';


const Compare = () => {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoItens}>Carrinho com 135 itens</Text>
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 20,
                }}
            >
                <View style={styles.card} >
                    <Text style={styles.titulo}>Maior Preço</Text>
                    <Text style={styles.porcentagem}>+ 84,01%</Text>
                    <Text style={styles.preco}> R$ 7.126,00</Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.titulo}>Preço Médio</Text>
                    <Text style={styles.porcentagem}>+19,76%</Text>
                    <Text style={styles.preco}> R$5.930,01</Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.titulo}>Menor Preço</Text>
                    <Text style={styles.porcentagem}>logo Zeroo</Text>
                    <Text style={styles.preco}> R$4.647,99</Text>
                </View>
            </View>
            <View style={styles.linha}/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 0.3,
        backgroundColor: '#fff',
        height: 160,
        marginLeft: 20,
        border : '2px solid gray',
        margin: 'auto',

    },
    textoItens: {
        width: '100%',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    },
    titulo:{
        marginTop:5,
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    },
    porcentagem: {
        marginTop: 10,
        width: '100%',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },
    preco:{
        width: '100%',
        fontSize: 35,
        textAlign: 'center',
        color: 'gray',
        marginTop: 15,
    },
    linha:{
        backgroundColor: 'gray',
        flex: 1,
        height: 100,
        padding: 10,
        marginTop: 110
    }

});

export default Compare;