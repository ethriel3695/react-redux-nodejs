import React from 'react';
import { Link } from 'react-router-dom';
import { container, title, slogan, aboutButton } from './styles.css';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <p className={title}>{`Programming: A Learning Guide`}</p>
        <p className={slogan}>{`A tool to track beneficial learning courses!`}</p>
        <Link to='about' className={aboutButton}>{`Learn More`}</Link>
      </div>
    );
  }
}

export default HomeComponent;
