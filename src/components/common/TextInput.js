import React from 'react';
import PropTypes from 'prop-types';
import { inputFieldSelectContainer, labelText, inputField } from './styles.css';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  // let wrapperClass = 'form-group';
  // if (error && error.length > 0) {
  //   wrapperClass += ' ' + 'has-error';
  // }

  return (
    <div className={inputFieldSelectContainer}>
      <label className={labelText} htmlFor={name}>{label}</label>
      <div className='field'>
        <input
          type='text'
          name={name}
          className={inputField}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className='alert'>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
