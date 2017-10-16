import React from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className={`container`}>
        <p className={`title`}>{'React + Redux + Node.js Dashboard'}</p>
        <p className={`slogan`}>{`A project using React and Redux with a Node.js back-end!`}</p>
        <Link to='about' className={`aboutButton`}>{`Learn More`}</Link>
      </div>
    );
  }
}

export default HomeComponent;
