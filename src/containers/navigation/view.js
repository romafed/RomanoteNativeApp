import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Screens from '../../screens';
import NavigationHeader from '../../components/NavigationHeader';

// Animation
import ScreenTransitionAnimation from '../../animations/screen';

// Theme
import theme from '../../theme/Theme';

// Stack
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
        <Stack.Screen name="Hello" component={Screens.Hello} />
        <Stack.Screen name="LogIn" component={Screens.LogIn} />
        <Stack.Screen name="SignUp" component={Screens.SignUp} />
        <Stack.Screen name="Note" component={Screens.Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
