import React, {useState} from 'react';
import styled from 'styled-components';
import {StyleSheet, TextInput as Input} from 'react-native';

const TextInput = ({label, value, onChange, onBlur}) => {
  const [isActive, setActive] = useState(false);

  const handleOnBlur = () => {
    setActive(false);
  };

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={handleOnBlur}
      onFocus={() => setActive(true)}
      editable={true}
    />
  );
};

export default TextInput;
