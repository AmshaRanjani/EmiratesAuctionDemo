import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Row from './Row';
import Header from './Header';
// import Footer from  './src/Footer';
// import { FormattedCurrency } from 'react-native-globalize';
export default class App extends React.Component {
  pageIndex = 1;
  responseData = [];
  constructor(){
		super();
		this.state={
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2}),
		}	
	}
  componentDidMount(){
    this.fetchData(1);
 }
 fetchData(pageNo) {
// const { params } = this.props.navigation.state;
fetch("https://api.emiratesauction.com/v2/carsonline?source=mweb&page="+pageNo+"&itemperpage=10")
.then((response) => response.json())
.then((responseJson) =>{
  data = responseJson.Cars; 
  data.forEach(element => {
       var img = element.image; 
        img = img.replace('[w]','600');
       img = img.replace('[h]','600');
       element.image = img;
       this.responseData.push(element);
 //       const currencyFormatter = this.context.globalize.getCurrencyFormatter('AED', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
 // const formattedCurrency = currencyFormatter(9.99);
  });
  console.log("Response",this.responseData.length);
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(this.responseData)
  })
})
.catch((error) =>{
  console.error(error);
});
 }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
    renderRow={(rowData)=> <Row {...rowData}/>}
    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    renderHeader={() => <Header />}
    renderFooter={() => <View style={styles.footerContainer}>
    <TouchableOpacity style={styles.button} onPress={() => {
       this.pageIndex = this.pageIndex+1;
      console.log('load more',this.pageIndex);
      this.fetchData(this.pageIndex);
      
      }}>
      <Text style={styles.text}>Load More</Text>
    </TouchableOpacity>
  </View>}
    />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  footerContainer: {
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


