import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';
import { connect } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          loading={this.props.loading} />
        <div className={`innerContainer`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps (state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);

// export default App;
