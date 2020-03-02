import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';

const Note = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledNote backgroundColor={theme.colors.backgroundColor}>
      <Header color={theme.colors.textColor}>Note screen</Header>
    </StyledNote>
  );
};

const StyledNote = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'white'};
`;
const Header = styled.Text`
  color: ${props => props.color};
`;

export default Note;
