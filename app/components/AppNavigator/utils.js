import React from 'react';

const navigateToCreator = navigation => routeName => params => navigation.navigate({ routeName, params });

// eslint-disable-next-line
export const withNavigation = Component => ({ navigation, screenProps }) => (
  <Component
    navigateTo={navigateToCreator(navigation)}
    goBack={navigation.goBack}
    addOnWillFocusListener={listener => navigation.addListener('willFocus', listener)}
    params={navigation.state.params}
    setParams={navigation.setParams}
    getParam={navigation.getParam}
    isFocused={navigation.isFocused}
    popToTop={navigation.popToTop}
    screenProps={screenProps}
  />
);
