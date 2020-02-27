/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState, useContext, useEffect} from 'react';
import {ThemeContext} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenTransitionAnimation from './animations/screen';

// Components
import Hello from './src/screens/Hello';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import NavigationHeader from './src/components/NavigationHeader';

// Theme
import themes from './src/theme/Theme';

const Stack = createStackNavigator();

const App = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const {theme, replaceTheme} = useContext(ThemeContext);

  useEffect(() => {
    if (isSwitchOn) return replaceTheme(themes.dark);
    replaceTheme(themes.light);
  }, [isSwitchOn, replaceTheme]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({scene}) => {
            const {options} = scene.descriptor;
            return (
              <NavigationHeader
                backgroundColor={theme.colors.backgroundColor}
                onSwitch={() => setSwitchOn(!isSwitchOn)}
                value={isSwitchOn}
                style={options.headerStyle}
              />
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
    </NavigationContainer>
  );
};

export default App;
