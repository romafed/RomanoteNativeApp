import React, { useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import styled from 'styled-components';
import { Switch, StatusBar } from 'react-native';

const NavigationHeader = ({ onSwitch, value, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Header style={style}>
      <StatusBar backgroundColor={theme.colors.backgroundColor} />
      <StyledSwitch
        thumbColor={value ? 'rgb(255,255,255)' : 'rgb(56,39,22)'}
        trackColor={{
          false: 'rgba(56,39,22,0.7)',
          true: 'rgba(255,255,255,0.7)',
        }}
        color="red"
        onValueChange={onSwitch}
        value={value}
      />
    </Header>
  );
};

const Header = styled.View`
  width: 100%;
  padding: 10px;
  align-items: flex-end;
`;
const StyledSwitch = styled(Switch)`
  max-width: 50px;
`;
export default NavigationHeader;
