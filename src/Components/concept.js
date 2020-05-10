import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {connect} from 'react-redux';
import {getConceptData} from '../Services/Concept/action';

class data extends React.Component {
  constructor(props) {
    super(props);
  }

  storeLoginData = async () => {
    try {
      await AsyncStorage.setItem('header', this.props.header);
    } catch (error) {
      console.warn('something went wrong');
    }
  };
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('splash');
  };

  componentDidMount() {
    this.props.conceptDatalist(this.props.header);
    this.storeLoginData();
  }

  render() {
    const {infoData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
          <Text style={styles.headerTxt}>Select Concept</Text>
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
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('storeList');
                  }}>
                  <Text style={styles.conceptName}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity onPress={() => this.logout()}>
          <View style={styles.logoutView}>
            <Text style={styles.logoutTxt}>Logout</Text>
          </View>
        </TouchableOpacity>
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
    padding: 35,
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
  logoutView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutTxt: {
    fontSize: 20,
    color: '#e65c00',
    fontFamily: 'futura-medium',
  },
});

const mapStateToProps = state => ({
  infoData: state.conceptReducer.conceptData,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  conceptDatalist: getConceptData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(data);
