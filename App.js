/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenTransitionAnimation from './animations/screen';

// Components
import Hello from './src/screens/Hello';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import {Switch} from 'react-native-paper';

// Theme config
const lightTheme = {
  light: {
    color: 'rgb(56,39,22)',
    backgroundColor: 'rgb(233, 224, 182)',
    buttonBackColor: 'rgb(255,255,255)',
  },
  dark: false,
};

const darkTheme = {
  dark: {
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(0,0,0)',
    buttonBackColor: 'black',
  },
  light: false,
};

const Stack = createStackNavigator();

const App = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  return (
    <NavigationContainer>
      <ThemeProvider theme={isSwitchOn ? darkTheme : lightTheme}>
        <AppWrapper>
          <Stack.Navigator
            screenOptions={{
              header: ({scene}) => {
                const {options} = scene.descriptor;
                return (
                  <>
                    <StatusBar
                      backgroundColor={
                        isSwitchOn
                          ? darkTheme.dark.backgroundColor
                          : lightTheme.light.backgroundColor
                      }
                    />
                    <Switch
                      color="white"
                      onValueChange={() => setSwitchOn(!isSwitchOn)}
                      value={isSwitchOn}
                      style={options.headerStyle}
                    />
                  </>
                );
              },
              headerTransparent: true,
            }}
            initialRouteName="Hello">
            <Stack.Screen
              options={{...ScreenTransitionAnimation}}
              name="Hello"
              component={Hello}
            />
            <Stack.Screen
              options={{...ScreenTransitionAnimation}}
              name="LogIn"
              component={LogIn}
            />
            <Stack.Screen
              options={{...ScreenTransitionAnimation}}
              name="SignUp"
              component={SignUp}
            />
          </Stack.Navigator>
        </AppWrapper>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const AppWrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props =>
    props.theme.dark.backgroundColor || props.theme.light.backgroundColor};
`;

export default App;
