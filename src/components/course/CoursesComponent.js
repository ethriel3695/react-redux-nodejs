import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import { slogan, addButton } from './styles.css';

class CoursesComponent extends React.Component {
  constructor (props, context) { // eslint-disable-line no-useless-constructor
    super(props, context);// eslint-disable-line no-useless-constructor
  }// eslint-disable-line no-useless-constructor

  courseRow (course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage = () => {
    this.props.history.push('/course');
  }

  componentWillMount() {

  }

  render () {
    const courses = this.props.courses;
    console.log(courses);
    return (
       courses === undefined ? <div></div> :
      <div>
        <h1 className={slogan}>{`Courses`}</h1>
        <input type='submit'
          value='Add Course'
          className={addButton}
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
};

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesComponent);
