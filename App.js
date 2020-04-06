
import React, {Component} from 'react';
import WelcomeScreen from "./components/WelcomeScreen"
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component{
  render(){
    return (
        <WelcomeScreen/>
    );
  }
}

const styles = StyleSheet.create({

});
