import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Lista from './lista';

class Login extends React.Component {

  static navigationOptions = {
    title: '',
  };

  constructor(props) {
    super(props);
    this.state = { text: 'Email:', pass: 'Password:' };
  }
render() {
  const { navigate } = this.props.navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Welcome!</Text>
      <TextInput style={styles.textBox}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <TextInput style={styles.textBox}
        onChangeText={(pass) => this.setState({pass})}
        value={this.state.pass}
        />
        <View style={styles.button}>
        <Button
          onPress={() => navigate('Lista')}
          title="Login"
          color="#841584"
          />
        </View>
          <TouchableOpacity
            onPress={()=>{console.warn('Presionaste Registro')}}>
            <Text style={styles.registro}>Registrate Aqui</Text>
          </TouchableOpacity>

          <Text style={styles.registro}>Olvidaste tu contraseña</Text>
        <View>
        </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignSelf: 'center',
    marginHorizontal: 40,
  },
  textBox:{
    width: 300,
    height: 60,
    borderColor: 'grey'
  },
  button:{
    margin: 20
  },
  registro:{
    alignSelf: 'center',
    fontSize: 16
  },
  titulo:{
    fontSize: 20,
    color: 'blue',
    alignSelf: 'center'
  }

});

module.exports = Login;
