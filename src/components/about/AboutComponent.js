import React from 'react';
import { container, title, slogan } from './styles.css';

const aboutText = `When I first started my journey as a developer
  I was so lost on where to begin, how to find information and
  what information would be beneficial to me in learning enough to
  be a contribution in the development world. How do you get
  5-10 years of experience when no one will give you a chance
  to earn the experience. The best solution I have is to build
  real projects to learn and showcase my skills. I found so many
  blogs and information hubs which say "just write code, create projects"
  but fail to provide guidance on how to do so. My goal is to provide
  a guide for coding personal projects and what resources work for me
  as a learning tool. If you are passionate, come delve into the realm
  of infinite possibilities!`;

class AboutComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <h1 className={title}>{`About`}</h1>
        <p className={slogan}>{`${aboutText}`}</p>
      </div>
    );
  }
}

export default AboutComponent;
