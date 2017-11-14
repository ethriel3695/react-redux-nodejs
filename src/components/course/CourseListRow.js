import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { link } from './styles.css';
import { roundButton } from './styles.css';

const CourseListRow = ({course, onClick}) => {
  return (
    <tr>
      <td><a className={link} href={course.watchhref} target='_blank'>{`Watch`}</a></td>
      <td><Link className={link} to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{`${course.firstname.toLowerCase()}-${course.lastname.toLowerCase()}`}</td>
      <td>{course.programmingcategory}</td>
      <td>{course.length}</td>
      <td>
      <input type='submit'
          value='x'
          className={roundButton}
          onClick={onClick}/>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseListRow;
