import React from 'react';
import { container, title, slogan } from './styles.css';

class AboutComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <h1 className={title}>{`About`}</h1>
        <p className={slogan}>{`This application uses React, Redux, React Router and Node.js`}</p>
      </div>
    );
  }
}

export default AboutComponent;
