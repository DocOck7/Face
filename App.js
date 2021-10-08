import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';
export default class App extends React.Component {
  render(){  
  return (
 <LoginScreen/>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
