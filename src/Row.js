import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { FormattedCurrency } from 'react-native-globalize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  photo: {
    height: 85,
    width: 85
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: 'red'
  },
  lotText: {
    marginTop: 10,
    fontSize: 13,
    color: 'blue'
  },
  priceText: {
    marginTop: 20,
    fontSize: 15,
    color: 'green'
  }
});
// var NumberFormat = require('react-number-format');
const Row = (props) => (
  
  <View style={styles.container}>
    <Image source={{ uri: props.image}} style={styles.photo} />
    <View style={styles.textContainer}>
   <Text style={styles.text} ellipsizeMode='tail' numberOfLines={1}>
      {`${props.makeEn} ${props.modelEn} ${props.year}`}
    </Text>
    <Text style={styles.lotText}>
    Lot #{`${props.AuctionInfo.lot}`}
    </Text>
    <Text style={styles.priceText}>
      {`${props.AuctionInfo.currentPrice} ${props.AuctionInfo.currencyEn}`}
    </Text>
    {/* <FormattedCurrency
        value={9.99}
        currency="USD"
        style={{ color: 'red' }} /> */}
    </View>
  </View>
  
);

export default Row;