import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const shallowRenderer = shallow(<App />);

describe('App', () => {
  test('renders correctly', () => {
    expect(shallowRenderer).toMatchSnapshot();
  });
});
