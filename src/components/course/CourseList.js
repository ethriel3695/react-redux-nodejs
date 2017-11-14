import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onClick}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>{`Title`}</th>
          <th>{`Author`}</th>
          <th>{`Category`}</th>
          <th>{`Length`}</th>
          <th>{``}</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course} onClick={onClick}/>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
