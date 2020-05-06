import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {getStoreData} from '../Services/Store/action';

class store extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.storeDatalist(this.props.header);
  }

  render() {
    const {infoData} = this.props;
    console.log(this.props)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
          <Text style={styles.headerTxt}>Select Store</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('searchList');
            }}>
            <Image source={require('../Assets/search.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={infoData}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
              <View style={styles.FlatListView}>
                <Text style={styles.conceptName}>{item.storeName}</Text>
                <Text>{item.storeAddress}</Text>
                <Text>{item.city}</Text>
              </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conceptView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 25,
  },
  FlatListView: {
    //flex: 1,
    width:'80%',
    padding: 35,
    marginHorizontal: 25,
  },
  card:{
      width:'80%',
      marginHorizontal:20,
      marginTop:20,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,

  },
  headerTxt: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  conceptName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  addStore: {
    paddingTop: 10,
  },
});

const mapStateToProps = state => ({
  infoData: state.storeReducer.storeData,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  storeDatalist: getStoreData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(store);
