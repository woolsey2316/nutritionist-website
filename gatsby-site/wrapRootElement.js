import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/state/configureStore';

const store = configureStore()

export default ({ element }) => {
  return (
    <Provider store={store}>{element}</Provider>
    )
};