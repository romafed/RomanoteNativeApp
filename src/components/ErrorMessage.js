import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

const AnimatedView = animated(View);

const ErrorMessage = ({ children }) => {
  const [text, setText] = useState('');
  const transition = useTransition(children, null, {
    native: true,
    from: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -100 },
  });

  useEffect(() => {
    if (children) return setText(children);
  }, [children]);

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <StyledErrorMessage
              key={key}
              style={{
                opacity: props.opacity,
                transform: [{ translateX: props.y }],
              }}
            >
              <ErrorText>{text}</ErrorText>
            </StyledErrorMessage>
          ),
      )}
    </>
  );
};

const StyledErrorMessage = styled(AnimatedView)`
  width: 100%;
  border-width: 2px;
  border-radius: 10px;
  border-color: red;
  margin: 10px;
  padding: 5px;
  align-self: center;
`;

const ErrorText = styled.Text`
  color: red;
  text-align: center;
`;

export default ErrorMessage;
