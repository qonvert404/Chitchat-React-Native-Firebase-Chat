import React, { Component } from 'react';
import { View } from 'react-native';
import { func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import BasicFormComponent from '../BasicForm/basicForm';
import CustomActivityIndicator from '../../common/CustomActivityIndicator';
import { styles } from '../BasicForm/styles';
import { loginUser, restoreSession } from '../../../actions/session/actions';



class SingInContainer extends Component {
  

  componentDidUpdate(prevProps) {
    if (!prevProps.logged && this.props.logged) {
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
            <React.Fragment>
              <BasicFormComponent
                title="SIGN IN"
                onButtonPress={this.props.loginUser}
                onSignUpButtonOPress={this.props.onSignUp}
              />
            </React.Fragment>
          )}
          <View style={styles.bottomContainer}></View>
        </View>
      </View>
    );
  }
}

SingInContainer.defaultProps = {
  error: null
};

SingInContainer.propTypes = {
  error: string,
  logged: bool.isRequired,
  loading: bool.isRequired,
  onSignedIn: func.isRequired,
  onSignUp: func.isRequired,
  loginUser: func.isRequired
};

const mapStateToProps = ({ sessionReducer: { loading, user, error, logged } }) => ({
  loading: loading,
  user: user,
  error: error,
  logged: logged
});

const mapDispatchToProps = {
  loginUser,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingInContainer);
