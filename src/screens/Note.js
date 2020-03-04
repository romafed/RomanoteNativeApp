import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'react-native-elements';

// Redux
import { useDispatch } from 'react-redux';
import { setToken } from '../store/navigation/actions';

// Components
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Icon as IconRnc } from 'react-native-elements';

const Note = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setToken(null));
  };

  return (
    <StyledNote backgroundColor={theme.colors.backgroundColor}>
      <StyledIcon
        color={theme.colors.textColor}
        name="logout"
        onPress={handleLogOut}
      />
      <IconRnc
        onPress={() => navigation.navigate('NoteEditor')}
        name="note-add"
        type="material"
        raised
      />
    </StyledNote>
  );
};

const StyledNote = styled.View`
  position: relative;
  flex: 1;
  background-color: ${props => props.backgroundColor || 'white'};
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color};
`;

export default Note;
