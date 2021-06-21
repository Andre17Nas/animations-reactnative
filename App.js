import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BounceInUpAnimationContainer from './src/components/BounceInUpAnimationContainer';

export default function App(){

  const [characters, setCharacters] = useState(
    [

      {
      "name": "Harry Potter",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "31-07-1980",
      "yearOfBirth": 1980,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "black",
      
      "wand": {
      "wood": "holly",
      "core": "phoenix feather",
      "length": 11
      },
      "patronus": "stag",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Daniel Radcliffe",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/harry.jpg"
      },
      
      {
      "name": "Hermione Granger",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "19-09-1979",
      "yearOfBirth": 1979,
      "ancestry": "muggleborn",
      "eyeColour": "brown",
      "hairColour": "brown",
      
      "wand": {
      "wood": "vine",
      "core": "dragon heartstring",
      "length": ""
      },
      "patronus": "otter",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Emma Watson",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
      },
      
      {
      "name": "Ron Weasley",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "01-03-1980",
      "yearOfBirth": 1980,
      "ancestry": "pure-blood",
      "eyeColour": "blue",
      "hairColour": "red",
      
      "wand": {
      "wood": "willow",
      "core": "unicorn tail-hair",
      "length": 14
      },
      "patronus": "Jack Russell terrier",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Rupert Grint",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/ron.jpg"
      },
      
      {
      "name": "Draco Malfoy",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "05-06-1980",
      "yearOfBirth": 1980,
      "ancestry": "pure-blood",
      "eyeColour": "grey",
      "hairColour": "blonde",
      
      "wand": {
      "wood": "hawthorn",
      "core": "unicorn tail-hair",
      "length": 10
      },
      "patronus": "",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Tom Felton",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/draco.jpg"
      },
      
      {
      "name": "Minerva McGonagall",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "04-10-1925",
      "yearOfBirth": 1925,
      "ancestry": "",
      "eyeColour": "",
      "hairColour": "black",
      
      "wand": {
      "wood": "",
      "core": "",
      "length": ""
      },
      "patronus": "tabby cat",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Dame Maggie Smith",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
      },
      
      {
      "name": "Cedric Diggory",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "",
      "yearOfBirth": 1977,
      "ancestry": "",
      "eyeColour": "grey",
      "hairColour": "brown",
      
      "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 12.25
      },
      "patronus": "",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Robert Pattinson",
      "alive": false,
      "image": "http://hp-api.herokuapp.com/images/cedric.png"
      },
      
      {
      "name": "Cho Chang",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "",
      "yearOfBirth": "",
      "ancestry": "",
      "eyeColour": "brown",
      "hairColour": "black",
      
      "wand": {
      "wood": "",
      "core": "",
      "length": ""
      },
      "patronus": "swan",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Katie Leung",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/cho.jpg"
      },
      
      {
      "name": "Severus Snape",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "09-01-1960",
      "yearOfBirth": 1960,
      "ancestry": "half-blood",
      "eyeColour": "black",
      "hairColour": "black",
      
      "wand": {
      "wood": "",
      "core": "",
      "length": ""
      },
      "patronus": "doe",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Alan Rickman",
      "alive": false,
      "image": "http://hp-api.herokuapp.com/images/snape.jpg"
      },
      
      {
      "name": "Rubeus Hagrid",
      "species": "half-giant",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "06-12-1928",
      "yearOfBirth": 1928,
      "ancestry": "half-blood",
      "eyeColour": "black",
      "hairColour": "black",
      
      "wand": {
      "wood": "oak",
      "core": "",
      "length": 16
      },
      "patronus": "",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Robbie Coltrane",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/hagrid.png"
      },
      
      {
      "name": "Neville Longbottom",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "30-07-1980",
      "yearOfBirth": 1980,
      "ancestry": "pure-blood",
      "eyeColour": "",
      "hairColour": "blonde",
      
      "wand": {
      "wood": "cherry",
      "core": "unicorn tail-hair",
      "length": 13
      },
      "patronus": "",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Matthew Lewis",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/neville.jpg"
      },
      
      {
      "name": "Luna Lovegood",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "13-02-1981",
      "yearOfBirth": 1981,
      "ancestry": "",
      "eyeColour": "grey",
      "hairColour": "blonde",
      
      "wand": {
      "wood": "",
      "core": "",
      "length": ""
      },
      "patronus": "hare",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Evanna Lynch",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/luna.jpg"
      },
      
    
      ]
   )

     


  return(
      <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {
            characters.map((item, index)=>{
              const indexValue = index + 1;
              const itemDelay = indexValue * 100;

              return(
                <BounceInUpAnimationContainer delay={itemDelay} children={indexValue}>
                  <View style={styles.card}>
                    <Text style={styles.card_title}>{item.name}</Text>
                  </View>
                </BounceInUpAnimationContainer>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF5FD',
      width: 320,
      alignSelf: 'center',
      justifyContent: 'center',
      maxHeight: '100vh'
    },
    scroll: {
      flex: 1,
      marginTop: 40,
      marginBottom: 40,
      padding: 8,
      alignSelf: 'center'
    },
    card: {
      width: 300,
      height: 60,
      borderRadius: 10,
      backgroundColor: '#FFF',
      textAlign: 'center',
      justifyContent: 'center', 
      marginBottom: 15
    },
    card_title: {
      fontFamily: 'Roboto',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 700,
      color: '#7D5A50'
    }
  })


