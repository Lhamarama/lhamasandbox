import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return ( 
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Testes da Lhama ~*</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      headerView: {
        backgroundColor: '#a082cc',
        height: 70,
        elevation: 5
      },
      headerTxt: {
        fontSize: 30,
        color: '#fff',
        paddingTop: 27,
        marginLeft: 20
      }
});
