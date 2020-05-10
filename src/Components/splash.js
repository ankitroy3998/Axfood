import React from 'react';
import {View, Image, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

class splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={require('../Assets/axfoodLogo.png')}
            style={styles.logoStyle}
          />
        </View>
      </View>
    );
  }
  getLoginData = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('updatedHeader');
      if (value !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'concept'}],
        });
      }
      if (value === null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    } catch (error) {
      console.log('no data');
    }
  };
  componentDidMount() {
    this.getLoginData();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 40,
    width: '85%',
  },
});
const mapStateToProps = state => ({
  updatedHeader: state.homeReducer.header,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(splash);
