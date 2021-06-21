import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Cabeçalho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#005A8D',
        height: 60,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center'       
    },

    title:{
        color: '#FFF',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 700,
        
    }
})