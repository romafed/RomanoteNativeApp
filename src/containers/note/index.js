/* eslint-disable prettier/prettier */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from '../../store/navigation/actions';

import View from '../../screens/Note';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setToken }, dispatch);

export default connect(null, mapDispatchToProps)(View);
