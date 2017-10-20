import React from 'react';
import { container, title, slogan } from './styles.css';

class AboutComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <h1 className={title}>{`About`}</h1>
        <p className={slogan}>{`This tool provides developers at all levels
          with a list of courses in specific languages which are beneficial
          for learning and have assisted other developers in their careers!`}</p>
      </div>
    );
  }
}

export default AboutComponent;
