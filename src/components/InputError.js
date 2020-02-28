import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';

const InputError = ({show, children}) => {
  const [visibility] = useState(new Animated.Value(0));
  const [text, setText] = useState('');

  useEffect(() => {
    Animated.spring(visibility, {
      toValue: show ? 1 : 0,
      duration: 1000,
    }).start();
  }, [visibility, show]);

  return (
    <StyledError style={{opacity: visibility}}>
      <ErrorText>{text}</ErrorText>
    </StyledError>
  );
};

const StyledError = styled(Animated.View)`
  width: 100%;
`;

const ErrorText = styled.Text`
  color: red;
`;

export default InputError;
