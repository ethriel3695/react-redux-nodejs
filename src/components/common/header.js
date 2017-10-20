import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import { navContainer, link } from './styles.css';

const Header = ({loading}) => {
  return (
    <nav className={navContainer}>
      <ul>
        <li><Link to='/' className={[link]}>{`Home`}</Link></li>
        <li><Link to='/courses' className={[link]}>{`Courses`}</Link></li>
        <li><Link to='/about' className={[link]}>{`About`}</Link></li>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </ul>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
