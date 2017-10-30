import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { container, slogan, addButton } from './styles.css';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form className={container}>
      <h1 className={slogan}>{`Manage Course`}</h1>
      <TextInput
        name='title'
        label='Title'
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name='authorid'
        label='Author'
        value={course.authorid}
        defaultOption='Select Author'
        options={allAuthors}
        onChange={onChange} error={errors.authorid}/>

      <TextInput
        name='programmingcategory'
        label='Category'
        value={course.programmingcategory}
        onChange={onChange}
        error={errors.programmingcategory}/>

      <TextInput
        name='length'
        label='Length'
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type='submit'
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className={addButton}
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};

export default CourseForm;
