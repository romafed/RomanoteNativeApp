/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import Markdown from 'react-native-markdown-display';

// Rich text editor
import { View, Text, TextInput } from 'react-native';

import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';

const NoteEditor = () => {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState(`
  [google link](https://www.google.com)

  + Create a list by starting a line with
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet
      - Nulla volutpat aliquam velit
  + Very easy!

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  `);

  let mark = `${value}`;

  return (
    <StyledEditor>
      <TextInput
        value={value}
        onChangeText={value => setValue(value)}
        multiline={true}
      />
      <Markdown>{mark}</Markdown>
    </StyledEditor>
  );
};

const StyledEditor = styled.View`
  padding: 35px 20px;
`;

export default NoteEditor;
