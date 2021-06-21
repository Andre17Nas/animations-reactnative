import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native'

function Card(props){
/*
    Trabalhando com animações
1- importar o animated
2- criar states pra mudar as variaveis
3- agregar Animated nos components
4- crias as funcoes para mudar os valores

*/

const [position, setPosition] = useState(new Animated.Value(300));
const [v_opacity, setOpacity] = useState(new Animated.Value(0));

Animated.parallel(
    [
        Animated.timing(
            v_opacity, {
                toValue: 1,
                duration: 1000
            }),
        
            Animated.timing(
                position, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.elastic()
                
                } )
    ]

).start();

return(
     <Animated.View style={[styles.card, {position: 'relative', right: position, opacity: v_opacity}]}>
         <Text style={styles.title}>{props.witch_name}</Text>
     </Animated.View>
 )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        height: 80,
        width: 300,
        borderRadius: 10,
        elevation: 16,
        shadowColor: 'red',
        marginBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',

        /*box-shadows*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title:{
        fontSize: 20
    }
})

export default Card;