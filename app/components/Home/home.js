import React, { Component } from 'react';
import { SafeAreaView, View, Button, Image, Text } from 'react-native';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { styles } from './styles';
import { logoutUser,restoreSession } from '../../actions/session/actions';

class Home extends Component {
  componentDidMount() {
    this.props.restoreSession();
  }
  logout = async () => {
    const status = await this.props.logout();
    this.props.onSignOut();
  };

  

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.marginBox}>
           
            <Image source = {{ uri: this.props.user.photoURL}} style={{ width: 200, height:  200,}}resizeMode='cover'
                    borderRadius={98} borderWidth={5} borderColor={'#138a72'}/>
            <Text style={styles.title}>Welcome, {this.props.user.displayName}!</Text>
            <Button onPress={this.logout} title="Logout" />
          </View>
            
        </View>
      </SafeAreaView>
    );
  }
}





Home.propTypes = {
  restoreSession: func.isRequired,
  logout: func.isRequired,
  onSignOut: func.isRequired,
  users: shape({}),
  user: shape({}).isRequired
};

const mapStateToProps = ({ sessionReducer }) => ({
  user: sessionReducer.user
});

const mapDispatchToProps = {
  logout: logoutUser,
  restoreSession: restoreSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
