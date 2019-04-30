import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import BasicFormContainer from '../BasicForm/basicForm';
import CustomActivityIndicator from '../../common/CustomActivityIndicator/';
import { styles } from '../BasicForm/styles';
import { signupUser, restoreSession} from '../../../actions/session/actions';


class SignupContainer extends Component {
  
  componentDidUpdate(prevProps) {
    if (!prevProps.registered && this.props.registered) 
    {
      this.props.onSignedIn();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          
        </View>
        <View style={styles.loginBox}>
          {this.props.loading ? (
            <CustomActivityIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormContainer title="Create account" onButtonPress={this.props.signupUser} isSignUp />
          )}
          <View style={styles.bottomContainer2}></View>
        </View>
      </View>
    );
  }
}

SignupContainer.defaultProps = {
  registered: false
};

SignupContainer.propTypes = {
  registered: bool.isRequired,
  onSignedIn: func.isRequired,
  loading: bool.isRequired,
  signupUser: func.isRequired
};

const mapStateToProps = ({ sessionReducer: { loading, registered, user } }) => ({
  loading: loading,
  registered: registered,
  user: user,
});

const mapDispatchToProps = {
  signupUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);
