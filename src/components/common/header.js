import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div>
      <Link to='/' className='active'>{`Home`}</Link>
      {' | '}
      <Link to='/courses' className='active'>{`Courses`}</Link>
      {' | '}
      <Link to='/about' className='active'>{`About`}</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
