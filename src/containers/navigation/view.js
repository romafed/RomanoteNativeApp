import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Hello from '../../screens/Hello';
import LogIn from '../../screens/LogIn';
import SignUp from '../../screens/SignUp';
import Note from '../../screens/Note';
import NavigationHeader from '../../components/NavigationHeader';

import ScreenTransitionAnimation from '../../animations/screen';

import theme from '../../theme/Theme';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const { replaceTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isSwitchOn) return replaceTheme(theme.dark);
    replaceTheme(theme.light);
  }, [isSwitchOn, replaceTheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hello"
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
      >
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
