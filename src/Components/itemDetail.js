import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
class itemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: true,
      newData: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const data = this.state.newData;
    const {route} = this.props;
    if (this.state.userInput) {
      this.setState({newData: route.params.data, userInput: false});
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.navigate('searchList')}>
            <Image
              source={require('../Assets/backarrow.png')}
              style={styles.backbutton}
            />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Product Details</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.productTxt}>{data.productName}</Text>
          <Text style={styles.productSapTxt}>{data.productNumberSAP}</Text>
        </View>
        <Text style={styles.scannedTxt}>Last Scanned Details</Text>
        <View style={styles.boxView}>
          <View style={styles.quantityView}>
            <Text style={styles.boxHeadingTxt}>Quantity</Text>
            <Text style={styles.boxDataText}>
              {data.volume === null ? 0 : data.volume}Kg
            </Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.boxHeadingTxt}>Price</Text>
            <Text style={styles.boxDataText}>
              ${data.price === null ? 0 : data.price}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  backbutton: {
    height: 30,
    marginLeft: 20,
  },

  detailView: {
    flex: 0.11,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  headerTxt: {
    fontSize: 30,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  priceView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  boxDataText: {
    fontSize: 17,
    color: '#000',
  },
  boxHeadingTxt: {
    fontSize: 16,
    color: '#000',
  },
  quantityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  productSapTxt: {
    marginHorizontal: 35,
    fontSize: 17,
    marginTop: 10,
    color: '#000',
  },
  scannedTxt: {
    fontSize: 14,
    marginHorizontal: 35,
    color: '#000',
    marginTop: 8,
  },
  boxView: {
    marginHorizontal: 26,
    flex: 0.15,
    backgroundColor: '#c2c2d6',
    marginTop: 10,
    borderRadius: 5,
  },
  productTxt: {
    fontSize: 22,
    marginHorizontal: 35,
  },
  headerView: {
    flexDirection: 'row',
    marginTop: 15,
  },
  TitleTextView: {
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default itemDetail;
