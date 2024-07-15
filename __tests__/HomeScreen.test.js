// __tests__/HomeScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';

test('renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );

  expect(getByText('Add Task')).toBeTruthy();
});
