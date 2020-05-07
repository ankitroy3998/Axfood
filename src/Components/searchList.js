import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
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
    const {infoData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
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
                <Text style={styles.conceptName}>{item.productName}</Text>
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
    marginTop: 25,
    marginHorizontal: 25,
  },
  searchInput: {
    width: '85%',
    height: 40,
    fontSize: 22,
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
