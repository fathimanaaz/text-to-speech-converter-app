import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
//import Constants from 'expo-constants';
import {Header} from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component
{ 
  constructor()
  {
      super();
      this.state={text:''}
  }

render(){
    return(
      <View style={{flex:1, borderWidth:2}}>
        <Header
          backgroundColor={'paleturquoise'}
          centerComponent={{
            text: 'TEXT TO SPEECH CONVERTOR',
            style: { color: 'black', fontSize: 12 , fontWeight:'bold'},
          }}
        />
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: 30,
            marginBottom:20,
          }}
          source={{
            uri: 'https://responsivevoice.org/wp-content/uploads/2020/01/speech-icon-2797263_1280-930x930.png',
          }}
        />

        <View style={styles.inputBoxContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              
             
                Speech.speak(this.state.text)
             

            }}>
            <Text style={styles.searchText}>Speak</Text>
          </TouchableOpacity>
        </View>
        
            
                  
        </View>
      
    )
  }
}


const styles = StyleSheet.create({
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height:350,
    textAlign: 'center',
    borderWidth: 4,
    marginTop: 10,
    marginBottom:20,
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'paleturquoise'
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold'
  }
});
