import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#e51937',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  text: {
    color: '#FFFFFF',
  },
});

const Footer = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => console.log('load more')}>
      <Text style={styles.text}>Load More</Text>
    </TouchableOpacity>
  </View>
);

export default Footer;