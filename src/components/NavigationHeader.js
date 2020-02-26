import React from 'react';
import styled from 'styled-components';
import {Switch, StatusBar} from 'react-native';

const NavigationHeader = ({backgroundColor, onSwitch, value, style}) => {
  return (
    <Header style={style}>
      <StatusBar backgroundColor={backgroundColor} />
      <Switch
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
`;
export default NavigationHeader;
