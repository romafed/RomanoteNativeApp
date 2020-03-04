import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';

const NoteCreator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledNoteCreator backgroundColor={theme.colors.backgroundColor}>
      <StyledText>Hello</StyledText>
    </StyledNoteCreator>
  );
};

const StyledNoteCreator = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'white'};
`;

const StyledText = styled.Text``;

export default NoteCreator;
