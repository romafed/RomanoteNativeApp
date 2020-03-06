/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Animated, Keyboard } from 'react-native';
import useKeyboardStatus from '../hooks/useKeyboardStatus';

import { PanGestureHandler, State } from 'react-native-gesture-handler';

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

  const keyboardStatus = useKeyboardStatus();
  const input = useRef(null);

  const handleTextChange = value => {
    setValue(value);
  };

  const [translateY] = useState(new Animated.Value(0));

  const handlerGesture = Animated.event(
    [
      {
        nativeEvent: { absoluteY: translateY },
      },
    ],
    { useNativeDriver: true },
  );

  const handlerGestureState = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.absoluteY >= 50) {
        Animated.spring(translateY, {
          toValue: 500,
          useNativeDriver: true,
        }).start();
        setIsOpen(true);
      }
      if (nativeEvent.absoluteY < 400) {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (!isOpen) {
      Keyboard.dismiss();
      input.current.blur();
    }
    if (isOpen && !keyboardStatus) {
      console.log('Focused');
      input.current.focus();
    }
  }, [isOpen, input.current]);

  return (
    <StyledEditor>
      <MarkdownInputContainer
        style={{ transform: [{ translateY: translateY }] }}
      >
        <MarkdownInput
          ref={input}
          color={theme.colors.textColor}
          value={value}
          onChangeText={handleTextChange}
          multiline={true}
        />
        <ArrowContainer>
          <PanGestureHandler
            onGestureEvent={handlerGesture}
            onHandlerStateChange={handlerGestureState}
          >
            <ArrowIcon
              color={theme.colors.textColor}
              style={{
                transform: [
                  {
                    rotate: translateY.interpolate({
                      inputRange: [0, 500],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              }}
              name="ios-arrow-down"
            />
          </PanGestureHandler>
        </ArrowContainer>
      </MarkdownInputContainer>
      <MarkdownContainer
        style={{
          transform: [{ translateY: translateY }],
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
  top: -500px;
  align-items: center;
  justify-content: flex-end;
  height: 500px;
  width: 100%;
`;

const ArrowContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const ArrowIcon = styled(AnimatedIcon)`
  font-size: 40px;
  color: ${props => props.color || 'black'};
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

export default Editor;
