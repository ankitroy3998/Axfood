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
import {getConceptData} from '../Services/Concept/action';

class data extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.conceptDatalist(this.props.header);
  }

  render() {
    const {infoData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.conceptView}>
          <Text style={styles.headerTxt}>Select Concept</Text>
          <Image source={require('../Assets/search.png')} />
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
