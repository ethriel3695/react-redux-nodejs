import React from 'react';
import PropTypes from 'prop-types';
import { labelText, inputFieldSelect, inputFieldSelectContainer } from './styles.css';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className={inputFieldSelectContainer}>
      <label className={labelText} htmlFor={name}>{label}</label>
      <div className={''}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={inputFieldSelect}>
          <option value=''>{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className='alert'>{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectInput;
