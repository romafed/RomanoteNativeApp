import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const AnimatedView = animated(View);

const InputError = ({ show, color, children = '' }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (children) return setText(children);
  }, [show, children]);

  const transition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    native: true,
  });

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <StyledError key={key} style={props}>
              <ErrorText color={color}>{text}</ErrorText>
            </StyledError>
          ),
      )}
    </>
  );
};

const StyledError = styled(AnimatedView)`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  bottom: -10px;
  position: absolute;
`;

const ErrorText = styled.Text`
  position: absolute;
  right: 10px;
  padding: 0 10px;
  color: red;
  background-color: ${props => props.color};
  border-radius: 4px;
`;

export default InputError;
