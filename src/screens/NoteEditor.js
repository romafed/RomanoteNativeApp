import React, { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';

import Editor from '../components/Editor';

const NoteCreator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledNoteCreator
      behavior="padding"
      enabled
      backgroundColor={theme.colors.backgroundColor}
    >
      <Editor />
    </StyledNoteCreator>
  );
};

const StyledNoteCreator = styled(KeyboardAvoidingView)`
  position: relative;
  flex: 1;
  padding: 35px 0;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'white'};
`;

export default NoteCreator;
