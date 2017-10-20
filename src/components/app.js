import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';
import { connect } from 'react-redux';
import { centeredContainer } from '../sharedStyles/styles.css';

class App extends React.Component {
  render () {
    return (
      <div className={centeredContainer}>
        <Header
          loading={this.props.loading} />
        <div>
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
