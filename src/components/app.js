import React from 'react';
import PropTypes from 'prop-types';
import { HomeComponent } from '../components';

class App extends React.Component {
  render () {
    return (
      <div className={`container`}>
        <HomeComponent />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
// };

export default App;
