import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';
import Header from './Header.js';

describe('Testing Login', () => {
  let wrapper;
  test('username check', () => {
    wrapper = shallow(<Header />);
    wrapper.find('input[type="email"]').simulate('change', {
      target: {name: 'username', value: 'rakesh@avi'}
    });
    expect(wrapper.state('username')).toEqual('rakesh@avi');
  })
  it('password check', () => {
    wrapper = shallow(<Header />);
    wrapper.find('input[type="password"]').simulate('change', {
      target: {
        name: "password", value: "rakesh123"
      }
    });
    expect(wrapper.state('password')).toEqual('rakesh123');
  })
})