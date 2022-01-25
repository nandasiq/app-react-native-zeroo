import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import Check from './Check/index.js';


const CompareTres = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.comparar}>
                
                <Check 
                    status={checked? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.textoComparar}>Comparar Carrinhos</Text>
                <Check />                
            </View>

            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 20,
                }}
            >   

                <View style={styles.card}>
                    <Text style={styles.numeroItens}>135</Text>
                    <Text style={styles.linhaDois}>Itens encontrados{"\n"} nesse local</Text>
                    <View style={styles.logo}><Text>logo mercados</Text></View>
                    
                    <View style={styles.valores}>
                        <Text style={styles.valor}>
                            5.992,00
                        </Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.numeroItens}>135</Text>
                    <Text style={styles.linhaDois}>{"\n"}Itens{"\n"}</Text>
                    <View style={styles.logo}><Text>logo Zeroo</Text></View>
                    <View style={styles.valores}>
                    <Text style={styles.valor}>
                            4.647,99
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.numeroItens}>Economia</Text>
                    <Text style={styles.linhaDois}>{"\n"} nos X itens{"\n"}</Text>
                    <View style={styles.logo}>
                        <Text style={styles.economiaPorcento}> 22,43%
                        </Text>
                    </View>
                    <View style={styles.valores}>
                    <Text style={styles.valorEconomia}>
                            1.344,01
                        </Text>
                    </View>
                </View>

            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 0.3,
        minHeight: 450,
        marginLeft: 20,
        backgroundColor: '#f9f9f9',
        borderWidth: 4,
        borderColor: '#e6e6e6',
        margin: 'auto',
    },
    comparar: {
        flexDirection: 'row',
        marginTop: 200,        
        justifyContent: 'space-around',
    },
    textoComparar: {
        textAlign: 'center',
        fontSize: 30,
        paddingRight: 200,
        paddingLeft: 200,
    },
    numeroItens: {
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 20,
        paddingBottom: 30
    },
    linhaDois: {
        textAlign: "center",
        padding: 20,
        fontSize: 15
    },
    logo: {
        height: 200,
        backgroundColor:'white',
        borderColor:'#e6e6e6',
        borderTopWidth: 3,
        borderBottomWidth: 3
    },
    economiaPorcento: {
        fontSize: 30,
        fontWeight: '100',
        color: 'gray',
        textAlign: 'center',
        marginTop: 80,
    },
    valores: {
        backgroundColor: '#98d4ea',
        minHeight:100,
        marginLeft: -4,
        marginRight: -4,
    },
    valor:{
        fontSize: 60,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        padding: 10
    },
    valorEconomia:{
        fontSize: 60,
        fontWeight: '600',
        color: 'green',
        textAlign: 'center',
        padding: 10
    }
})
export default CompareTres;