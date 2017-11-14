import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import { slogan, addButton } from './styles.css';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

class CoursesComponent extends React.Component {
  constructor (props, context) { // eslint-disable-line no-useless-constructor
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      saving: false,
    };
  }// eslint-disable-line no-useless-constructor

  courseRow (course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage = () => {
    this.props.history.push('/course');
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  deleteCourse = (event) => {
    event.preventDefault();
    this.setState({
      saving: true,
    });
    this.props.actions.deleteCourse(this.state.course)
      .then(() => this.loadCoursesForComponent())
      .catch(error => {
        UserMessageModal(error);
        this.setState({
          saving: false,
        });
      });
  }

  loadCoursesForComponent = () => {
    this.props.actions.loadCourses()
      .then(() => this.redirect())

      .catch(error => {
        UserMessageModal(error);
        this.setState({
          saving: false,
        });
      });
  }

  redirect = () => {
    this.setState({
      saving: false,
    });
    this.props.history.push('/courses');
    // this.context.router.history.push('/courses'))
  }

  render () {
    const courses = this.props.courses;
    return (
      <div>
        <h1 className={slogan}>{`Courses`}</h1>
        <input type='submit'
          value='Add Course'
          className={addButton}
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} onClick={this.deleteCourse} />
      </div>
    );
  }
}

CoursesComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
};

function getCourseById (courses, id) {
  const course = courses.filter(course => course.id.toString() === id);
  if (course) {
    return course[0];
  }
  return null;
}

function mapStateToProps (state, ownProps) {
  let course = {id: 0};

  const courseId = ownProps.match.params.id;
  console.log(courseId);

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    courses: state.courses,
    course: course,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesComponent);
