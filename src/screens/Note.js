import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Note = ({ setToken }) => {
  const { theme } = useContext(ThemeContext);

  const handleLogOut = () => {
    setToken(null);
  };
  return (
    <StyledNote backgroundColor={theme.colors.backgroundColor}>
      <StyledIcon
        color={theme.colors.textColor}
        name="logout"
        onPress={handleLogOut}
      />
      <Header color={theme.colors.textColor}>Note screen</Header>
    </StyledNote>
  );
};

const StyledNote = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'white'};
`;
const Header = styled.Text`
  color: ${props => props.color};
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color};
`;

export default Note;
