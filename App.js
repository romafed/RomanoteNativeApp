/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import theme from './src/theme/Theme';

import ScreenTransitionAnimation from './src/animations/screen';

// Components
import Hello from './src/screens/Hello';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Note from './src/screens/Note';
import NavigationHeader from './src/components/NavigationHeader';

const Stack = createStackNavigator();

const App = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const { replaceTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isSwitchOn) return replaceTheme(theme.dark);
    replaceTheme(theme.light);
  }, [isSwitchOn, replaceTheme]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ scene }) => {
            const { options } = scene.descriptor;
            return (
              <NavigationHeader
                onSwitch={() => setSwitchOn(!isSwitchOn)}
                value={isSwitchOn}
                style={options.headerStyle}
              />
            );
          },
          headerTransparent: true,
          ...ScreenTransitionAnimation,
        }}
        initialRouteName="Hello"
      >
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
