/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Hello from './src/screens/Hello';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import {Switch} from 'react-native-paper';

// Styled components
import styled from 'styled-components';

const AppWrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props =>
    props.theme.dark.backgroundColor || props.theme.light.backgroundColor};
`;

// Theme config
const lightTheme = {
  light: {
    color: 'rgb(56,39,22)',
    backgroundColor: 'rgb(233, 224, 182)',
  },
  dark: false,
};

const darkTheme = {
  dark: {
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(0,0,0)',
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
            <Stack.Screen name="Hello" component={Hello} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </AppWrapper>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
