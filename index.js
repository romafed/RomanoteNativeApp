/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import store from './src/store/store';

import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/Theme';

const AppWrapper = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme.light}>
      <App />
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
