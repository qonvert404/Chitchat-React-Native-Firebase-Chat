import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import AppNavigatorContainer from './components/AppNavigator';
import configureStore from './store/store';

const store = configureStore();

const AppWithNavigationState = createReduxContainer(AppNavigatorContainer);

const ReduxNavigator = connect(state => ({
  state: state.nav
}))(AppWithNavigationState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigator />
      </Provider>
    );
  }
}

export default App;
