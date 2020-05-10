import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {getSearchData} from '../Services/Search/action';

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.keyword.length >= 3) {
      props.searchDataList(state.keyword, props.header);
    }
    return 0;
  }

  render() {
    const {infoData, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('storeList');
            }}>
            <Image source={require('../Assets/backarrow.png')} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search.."
            onChangeText={keyword => this.setState({keyword})}
            autoCapitalize="none"
          />
          <Image source={require('../Assets/search.png')} />
        </View>
        <FlatList
          data={infoData}
          renderItem={({item}) => {
            return (
              <View style={styles.FlatListView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('itemDetail', {data: item});
                  }}>
                  <View style={styles.productName}>
                    <Text>{item.productName}</Text>
                  </View>
                </TouchableOpacity>
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
    padding: 35,
    marginTop: 20,
    marginHorizontal: 25,
  },
  searchInput: {
    width: '85%',
    height: 40,
    fontSize: 22,
    marginLeft: 20,
  },
  headerTxt: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  infoData: state.searchReducer.searchData,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  searchDataList: getSearchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(search);
