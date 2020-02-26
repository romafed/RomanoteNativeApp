import React from 'react';
import styled from 'styled-components';

import {LOGO} from '../../assets/image';

const Hello = () => {
  return (
    <StyledHello>
      <Logo source={LOGO} />
      <HeaderText>Romanote</HeaderText>
      <HelloText>
        The simplest way to keep notes like
        <HeaderText size="20px"> Roman.</HeaderText>
      </HelloText>
    </StyledHello>
  );
};

const StyledHello = styled.View`
  flex: 1;
  background-color: ${props =>
    props.theme.dark.backgroundColor || props.theme.light.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: ${props => props.theme.dark.color || props.theme.light.color};
  font-size: ${props => props.size || '30px'};
  text-align: center;
  font-family: 'Lacquer-Regular';
`;

const HelloText = styled.Text`
  color: ${props => props.theme.dark.color || props.theme.light.color};
  text-align: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-width: 1px;
  border-radius: 10px;
`;

export default Hello;
