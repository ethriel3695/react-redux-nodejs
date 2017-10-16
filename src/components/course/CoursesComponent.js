import React from 'react';
import { connect } from 'react-redux';
// import * as courseActions from '../../actions/courseActions';
// import PropTypes from 'prop-types';

class CoursesComponent extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      course: { title: '' },
    };
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave = () => {
    // this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render () {
    return (
      <div>
        <h1>{`Courses`}</h1>
        <h2>{`Add Course`}</h2>
        <input
          type='text'
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type='submit'
          value={`Save`}
          onChange={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesComponent);
