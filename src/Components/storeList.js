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
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
        <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('concept');
            }}>
            <Image source={require('../Assets/backarrow.png')} />
          </TouchableOpacity>
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
              <View style={styles.FlatListView}>
                <Text style={styles.conceptName}>
                  {item.storeName.toUpperCase()}
                </Text>
                <Text style={styles.conceptStyle}>
                  {item.storeAddress.toLowerCase()}
                </Text>
                <Text style={styles.conceptStyle}>
                  {item.city.toLowerCase()}
                </Text>
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
    flex: 1,
    width: '85%',
    padding: 32,
    marginHorizontal: 25,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },
  headerTxt: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: -50,
  },
  conceptName: {
    fontSize: 16,
    padding: 8,
    fontWeight: 'bold',
  },
  conceptStyle: {fontSize: 16, padding: 8},
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
