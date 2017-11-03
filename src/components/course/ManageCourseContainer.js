import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
// import configureStore from '../../store/configureStore';
// import { loadCourses } from '../../actions/courseActions';

function UserMessageModal (error) {
  return (
    error !== null && error !== undefined
      ? <div>{`Success!`}</div> : <div>{`Error!`}</div>
  );
}

export class ManageCourseContainer extends React.Component {
  constructor (props, context) {
    super(props, context);

    // console.log(`This is the one ${this.props.course}`);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    // console.log(`Actually this ${this.props.course.id}`);
    // console.log(`Or this ${nextProps}`);
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState = (event) => {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  courseFormIsValid () {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  saveCourse = (event) => {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({
      saving: true,
    });
    this.props.actions.saveCourse(this.state.course)
      .then(() => console.log(this.state.course), this.loadCoursesForComponent())
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
      })
  }

  redirect = () => {
    this.setState({
        saving: false,
    })
    this.props.history.push('/courses');
    // this.context.router.history.push('/courses'))
  }

  render () {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}/>
    );
  }
}

ManageCourseContainer.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
};

ManageCourseContainer.contextTypes = {
  router: PropTypes.object,
};

function getCourseById (courses, id) {
  const course = courses.filter(course => course.id.toString() === id);
  if (course) {
    return course[0];
  }
  return null;
}

function mapStateToProps (state, ownProps) {
  const courseId = ownProps.match.params.id;
  // console.log(state);
  // console.log(`It is This ${ownProps.match.params.id}`);

  let course = {id: 0, title: '', length: '', watchhref: 'https://github.com/ethriel3695', programmingcategory: '', firstname: 'first', lastname: 'last', authorid: ''};

  if (courseId && state.courses.length > 0) {
    // console.log(state.courses, courseId);
    course = getCourseById(state.courses, courseId);
  }
  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors.authors),
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseContainer);
