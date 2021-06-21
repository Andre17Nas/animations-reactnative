
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Test extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Andre',
      input: ''
    };

    this.trocanome = this.trocanome.bind(this);
    this.peganome = this.peganome.bind(this);
  }

  peganome(texto){
    this.setState({
      input: texto
    })
  }

  trocanome(texto){
    this.setState({
      nome: texto
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#CAF7E3'}}/>

          <View style={{ alignItems: 'center'}}> 
            <Button title="set text" style={{width: 100, margin: 30}} onPress={()=>this.trocanome('joao')}/>
            <Text>Bem Vindo: {this.state.nome}</Text>
          </View>

          <View style={{ alignItems: 'center'}}> 
            <TextInput style={styles.inputText} onChangeText={this.peganome}/>
            <Text>input: {this.state.input}</Text>
          </View>

        <View style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'space-around',
    justifyContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderBottomColor: '#666',
    margin: 10,
    padding: 4, 
    height: 40
  }
});

export default Test;