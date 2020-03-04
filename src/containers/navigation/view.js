import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Screens from '../../screens';
import NavigationHeader from '../../components/NavigationHeader';

// Animation
import {
  AuthScreensAnimation,
  NoteScreensAnimation,
} from '../../animations/screen';

// Theme
import theme from '../../theme/Theme';

// Stack
const Stack = createStackNavigator();

const Navigation = ({ loading, token, checkToken }) => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const { replaceTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isSwitchOn) return replaceTheme(theme.dark);
    replaceTheme(theme.light);
  }, [isSwitchOn, replaceTheme, token, checkToken]);

  useEffect(() => {
    if (!token) checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'Note' : 'Hello'}
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
        }}
      >
        {!token ? (
          <>
            <Stack.Screen
              name="Hello"
              component={Screens.Hello}
              options={{ ...AuthScreensAnimation }}
            />
            <Stack.Screen
              name="LogIn"
              component={Screens.LogIn}
              options={{ ...AuthScreensAnimation }}
            />
            <Stack.Screen
              name="SignUp"
              component={Screens.SignUp}
              options={{ ...AuthScreensAnimation }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Note"
              component={Screens.Note}
              options={{ ...NoteScreensAnimation }}
            />
            <Stack.Screen
              name="NoteEditor"
              component={Screens.NoteEditor}
              options={{ ...NoteScreensAnimation }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
