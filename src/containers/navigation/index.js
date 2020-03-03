/* eslint-disable prettier/prettier */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as navigationActions from '../../store/navigation/actions';
import * as navigationSelectors from '../../store/navigation/selectors';

import View from './view';

const mapStateToProps = state => ({
  loading: navigationSelectors.loadingSelector(state),
  token: navigationSelectors.tokenSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...navigationActions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(View);
