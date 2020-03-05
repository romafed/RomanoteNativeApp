/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Animated, Keyboard } from 'react-native';
import useKeyboardStatus from '../hooks/useKeyboardStatus';

import { ThemeContext } from 'react-native-elements';
import Markdown from 'react-native-markdown-display';
import markDownStyle from '../markdown/styles';

import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

const Editor = () => {
  const { theme } = useContext(ThemeContext);

  const [value, setValue] = useState(`
# Roman
### Unordered

+ Create a list by starting a line with "+", "-", or "*"
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
  `);

  const [isOpen, setIsOpen] = useState(false);
  const [inputPositionY] = useState(new Animated.Value(-495));
  const [markdownPositionY] = useState(new Animated.Value(0));
  const [arrowRotate] = useState(new Animated.Value(1));

  const keyboardStatus = useKeyboardStatus();
  const input = useRef(null);

  const handleTextChange = value => {
    setValue(value);
  };

  const topBottomAnimation = () => {
    setIsOpen(!isOpen);
    Animated.stagger(90, [
      Animated.spring(inputPositionY, {
        toValue: isOpen ? -495 : 0,
        useNativeDriver: true,
      }),
      Animated.spring(markdownPositionY, {
        toValue: isOpen ? 0 : 495,
        useNativeDriver: true,
      }),
      Animated.timing(arrowRotate, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (!isOpen) {
      Keyboard.dismiss();
      input.current.blur();
    }
    if (isOpen && !keyboardStatus) {
      input.current.focus();
    }
  }, [isOpen, input.current]);

  return (
    <StyledEditor>
      <MarkdownInputContainer
        style={{ transform: [{ translateY: inputPositionY }] }}
      >
        <MarkdownInput
          ref={input}
          color={theme.colors.textColor}
          value={value}
          onChangeText={handleTextChange}
          multiline={true}
        />
        <ArrowContainer>
          <ArrowIcon
            color={theme.colors.textColor}
            style={{
              transform: [
                {
                  rotate: arrowRotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['-180deg', '0deg'],
                  }),
                },
              ],
            }}
            onPress={topBottomAnimation}
            name="ios-arrow-down"
          />
        </ArrowContainer>
      </MarkdownInputContainer>
      <MarkdownContainer
        style={{
          transform: [{ translateY: markdownPositionY }],
        }}
      >
        <MarkdownView>
          <Markdown
            style={{ ...markDownStyle(theme.colors.textColor) }}
            mergeStyle={true}
          >
            {value}
          </Markdown>
        </MarkdownView>
      </MarkdownContainer>
    </StyledEditor>
  );
};

const StyledEditor = styled.View`
  flex: 1;
  width: 100%;
`;

const MarkdownInputContainer = styled(Animated.View)`
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  height: 500px;
  width: 100%;
`;

const MarkdownInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: ${props => props.color || 'black'};
  padding: 0 20px;
`;

const MarkdownContainer = styled(Animated.View)`
  flex: 1;
`;
const MarkdownView = styled.ScrollView`
  padding: 0 10px;
`;

const ArrowContainer = styled.View`
  min-height: 35px;
  align-items: center;
  justify-content: center;
`;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const ArrowIcon = styled(AnimatedIcon)`
  font-size: 40px;
  color: ${props => props.color || 'black'};
`;

export default Editor;
