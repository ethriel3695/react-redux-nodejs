import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCourseContainer extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
    };
  }

  updateCourseState = (event) => {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse = (event) => {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.history.push('/courses');
  }

  render () {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}/>
    );
  }
}

ManageCourseContainer.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

ManageCourseContainer.contextTypes = {
  router: PropTypes.object,
}

function getCourseById (courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) {
    return course[0];
  }
  return null;
}

function mapStateToProps (state, ownProps) {
  console.log(ownProps.match.params.id);
  const courseId = ownProps.match.params.id;

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId) {
    course = getCourseById (state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName,
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseContainer);
