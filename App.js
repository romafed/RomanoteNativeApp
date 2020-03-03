/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import Navigation from './src/containers/navigation';

import { Provider } from 'react-redux';
import store from './src/store/store';

import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/Theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
