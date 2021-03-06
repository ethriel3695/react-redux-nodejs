import React from 'react';
import { Link } from 'react-router-dom';
import { container, title, slogan, aboutButton } from './styles.css';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <p className={title}>{`The Developer's Journey`}</p>
        <p className={slogan}>{`A beacon of guidance in a Universe of knowledge and possibilities!`}</p>
        <Link to='about' className={aboutButton}>{`Learn More`}</Link>
      </div>
    );
  }
}

export default HomeComponent;
