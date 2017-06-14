import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

class DetailView extends React.Component {

  static navigationOptions = {
    title: 'Volver',
  };

render() {
  const { params } = this.props.navigation.state;
  return (
    <View style={styles.container}>
      <Image source={{uri: params.imagen+'.jpg'}} style={styles.imagen} />
      <Text style={styles.title}>Nombre: {params.title}</Text>
      <Text style={styles.description}>{params.description}</Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imagen: {
    alignSelf: 'stretch',
    height: 300,
  },
  title:{
    fontSize:23,
    color: '#007AFF'
  },
  description:{
    marginTop:10,
    fontSize: 16,
  },

});

module.exports = DetailView;
