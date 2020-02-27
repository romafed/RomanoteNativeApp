import React, {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';
import styled from 'styled-components';

// Components
import Button from '../components/Button';

import {LOGO} from '../../assets/image';

const Hello = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const handleScreenNavigate = to => {
    navigation.navigate(to);
  };

  return (
    <StyledHello backgroundColor={theme.colors.backgroundColor}>
      <ThumbWrapper>
        <Logo source={LOGO} />
        <HeaderText color={theme.colors.textColor}>Romanote</HeaderText>
        <HelloText color={theme.colors.textColor}>
          The simplest way to keep notes like:
          <HeaderText color={theme.colors.textColor} size="20px">
            Roman.
          </HeaderText>
        </HelloText>
      </ThumbWrapper>
      <ButtonWrapper>
        <Button onPress={() => handleScreenNavigate('SignUp')}>Sign Up</Button>
        <Button onPress={() => handleScreenNavigate('LogIn')} type="clear">
          Log In
        </Button>
      </ButtonWrapper>
    </StyledHello>
  );
};

const StyledHello = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props => props.backgroundColor};
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
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || '30px'};
  text-align: center;
  font-family: 'Lacquer-Regular';
`;

const HelloText = styled.Text`
  color: ${props => props.color || 'black'};
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
