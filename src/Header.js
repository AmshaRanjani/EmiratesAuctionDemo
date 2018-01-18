import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    // marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#C1C1C1',
  },
  Title: {
    height: 65,
    flex: 1,
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
    // paddingHorizontal: 8,
    fontSize: 23,
    backgroundColor: '#e51937',
    color: '#FFFFFF'
  },
});

const Header = (props) => (
  // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  <View style={styles.container}>
  <Text style={styles.Title}>Emirate Auction</Text>
    {/* <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    /> */}
  </View>
);

export default Header;