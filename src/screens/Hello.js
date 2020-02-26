import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../components/Button';

import {LOGO} from '../../assets/image';

const Hello = ({navigation}) => {
  const handleScreenNavigate = to => {
    navigation.navigate(to);
  };

  return (
    <StyledHello>
      <ThumbWrapper>
        <Logo source={LOGO} />
        <HeaderText>Romanote</HeaderText>
        <HelloText>
          The simplest way to keep notes like
          <HeaderText size="20px"> Roman.</HeaderText>
        </HelloText>
      </ThumbWrapper>
      <ButtonWrapper>
        <Button onPress={() => handleScreenNavigate('SignUp')}>Sign Up</Button>
        <Button onPress={() => handleScreenNavigate('LogIn')} mode="text">
          Log In
        </Button>
      </ButtonWrapper>
    </StyledHello>
  );
};

const StyledHello = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props =>
    props.theme.dark.backgroundColor || props.theme.light.backgroundColor};
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const ThumbWrapper = styled.View`
  flex: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
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
  font-size: 17px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-width: 1px;
  border-radius: 10px;
`;

export default Hello;
