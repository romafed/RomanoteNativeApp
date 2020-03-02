/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as formActions from '../../store/forms/actions';
import * as formSelectors from '../../store/forms/selectors';

// View
import LogInView from './LogIn';
import SignUpView from './SignUp';

const mapStateToProps = state => ({
  loading: formSelectors.loadingSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...formActions,
    },
    dispatch,
  );

export default {
  LogInForm: connect(mapStateToProps, mapDispatchToProps)(LogInView),
  SignUpForm: connect(mapStateToProps, mapDispatchToProps)(SignUpView),
};
