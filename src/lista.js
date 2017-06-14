import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

//Importamos Crypto JS
var Crypto = require('crypto-js');
import DetailView from './DetailView';

const RequestURL = "http://gateway.marvel.com:80/v1/public/characters"

class Lista extends React.Component {
  constructor(props){
    super(props)
    this.timestamp = 1;
    this.public_key = '9a6a2e7e2ee1ff735a5d269bed263e7e';
    this.private_key = '6ebe068fe586aeb4c6a9003538560d873bc38dcb';
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      }),
      loaded: false
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  //hacer la peticion al API para obtener los datos
  fetchData(){
    var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);

    fetch(RequestURL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
    //Pasar a json
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
      loaded: true
    })
  })
}

renderLoandingView(){
  return(
    //Se muestra el mensaje mientras carga la lista
    <View style={styles.container}>
      <Text style={{marginTop: 100}}>Cargando comics ...</Text>
    </View>
  )
}

renderComic(comic){
  const { navigate } = this.props.navigation;
  return(
    <TouchableOpacity onPress={() => navigate('Detalle', {name: 'Detail', description: comic.description, title:comic.name, imagen:comic.thumbnail.path })}>
      <Image source={{uri:comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{comic.name}</Text>
          <Text style={styles.available}>{comic.comics.available}</Text>
        </View>
      </Image>
    </TouchableOpacity>
  )
}

render() {
  //Si no ha cargado la lista se muestra el mensaje
  if(!this.state.loaded){
    return this.renderLoandingView();
  }

  return(
    <ListView
      dataSource= {this.state.dataSource}
      renderRow={this.renderComic.bind(this)}
      style={styles.listView}
      />
  )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  backgroundImage:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 150,
  },
  rightContainer: {
    backgroundColor:'rgba(52,52,52,0.5)',
    alignSelf: 'stretch',
    paddingTop:30,
    height: 150,
  },
  title: {
    fontSize: 27,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  available: {
    fontSize:18,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor:'rgba(52,52,52,0)',
  },

});

module.exports = Lista;
