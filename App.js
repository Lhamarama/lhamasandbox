import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';

export default class SandBox extends React.Component {
  render() {
    return (
      <View style={styles.PRINCIPAL}>
      <Header />
        <Text style={styles.txt}>Oie</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      PRINCIPAL: {
        backgroundColor: '#f0edf2',
        flex: 1
      },
      txt: {
        fontSize: 16,
        paddingTop: 10,
        marginLeft: 10
      }
});
