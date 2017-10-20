import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { link } from './styles.css';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a className={link} href={course.watchHref} target='_blank'>{`Watch`}</a></td>
      <td><Link className={link} to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseListRow;
