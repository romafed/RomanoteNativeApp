import React, { useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import styled from 'styled-components';

const Loading = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledLoading backgroundColor={theme.colors.backgroundColor}>
      <LoadingHeader color={theme.colors.textColor}>Loading</LoadingHeader>
    </StyledLoading>
  );
};

const StyledLoading = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`;

const LoadingHeader = styled.Text`
  font-size: ${props => props.fontSize || '30px'};
  text-align: center;
  font-family: 'Lacquer-Regular';
  color: ${props => props.color || 'black'};
`;

export default Loading;
