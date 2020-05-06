import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../Services/Login/action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
  }

  onLogin = () => {
    const {navigation, loading, failure, success} = this.props;
    if (loading === true && success === true) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else if (success === true) {
      navigation.navigate('concept');
    } else if (failure === true) {
      return Alert.alert('wrong credentials');
    }
  };

  static getDerivedStateFromProps(props, state) {
    props.toggleHomeFlag(state.username, state.password, props.header);
    return 0;
  }

  render() {
    return (
      <ImageBackground
        source={require('../Assets/veggies.png')}
        style={styles.container}>
        <View style={styles.loginView}>
          <Image
            source={require('../Assets/axfoodLogo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter User id"
            onChangeText={text => this.setState({username: text})}
            value={this.state.username}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.onLogin();
            }}>
            <Text style={styles.btnTxt}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.txtView}>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.forgotTxt}>
              New User?
              <Text style={styles.signupTxt}>Signup</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0.75,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 140,
    marginHorizontal: 20,
  },
  btnTxt: {
    color: '#fff',
    marginHorizontal: 100,
    fontSize: 18,
  },
  txtView: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotTxt: {
    color: '#8585ad',
    fontSize: 16,
  },
  signupTxt: {
    fontSize: 16,
    color: '#e65c00',
  },

  loginBtn: {
    paddingHorizontal: 45,
    paddingVertical: 12,
    backgroundColor: '#e65c00',
    borderRadius: 5,
    marginBottom: 20,
    color: '#fff',
    width: '85%',
    marginLeft: 30,
    marginVertical: 30,
    height: 50,
  },
  input: {
    marginTop: 50,
    marginLeft: 30,
    height: 65,
    width: '85%',
    fontSize: 18,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#a3a3c2',
  },
});
const mapStateToProps = state => ({
  success: state.homeReducer.loginSuccess,
  loding: state.homeReducer.loding,
  failure: state.homeReducer.loginFailure,
});
const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
