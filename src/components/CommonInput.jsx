import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../utility/utils';

/**
 * Common Component for Inputs their types and validation  
 */
class CommonInput extends React.Component {
  constructor(props) {
    super(props);
    this.components = {
      text: props => <input {...props} />,
      textarea: props => <textarea {...props} />,
      email: props => <input {...props} />,
      password: props => <input {...props} />
    };
  }
  checkValid = value => {
    let errorMessage = '';
    let isValid = this.props.pattern
      ? value.match(new RegExp(this.props.pattern, 'gi'))
      : true;
    // if (this.props.name === 'phoneNumber' && !isValid) {
    //   value = value.replace(/-/g, '');
    //   isValid = this.props.pattern.test(value);
    // }
    if (!isValid) {
      const { name } = this.props;
      let nameTemp;
      nameTemp = name === 'emailc' ? 'email' : name;
      nameTemp = name === 'firstnamec' ? 'first name' : name;

      errorMessage =
        this.props.errorMessage || `Invalid ${this.capitalize(nameTemp)}`;
    }
    if (this.props.required && !value) {
      isValid = false;
      errorMessage = `${this.capitalize(this.props.name)} is required`;
    }
    isValid = !!isValid;
    return {
      isValid,
      errorMessage
    };
  };
  capitalize = s => {
    if (typeof s !== 'string') return '';
    let str = s.charAt(0).toUpperCase() + s.slice(1);
    return str.split(/(?=[A-Z])/).join(' ');
  };
  handleChange = e => {
    const value = e.target.value;
    const { isValid } = this.checkValid(value);
    this.props.handleChange({
      target: {
        name: this.props.name,
        value,
        isValid: isValid
      }
    });
  };

  componentDidMount() {
    this.handleChange({
      target: {
        name: this.props.name,
        value: this.props.value
      }
    });
  }

  render() {
    const {
      type,
      placeholder,
      required,
      value,
      name,
      label,
      isSubmitted,
      handleChange,
      isMobile,
      emailEntered,
      ...rest
    } = this.props;
    const { isValid, errorMessage } = this.checkValid(value);
    const showError =
      isMobile ? isSubmitted : ((!!value.length && (isSubmitted || !isValid)) || isSubmitted);
    const TagName = this.components[type || 'text'];
    if (!TagName) return null;
    const isAuthEmail = (typeof emailEntered === "undefined" ? true : emailEntered);
    return (
      <div>
        <TagName
          className="input"
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={this.handleChange}
          name={name}
          {...rest}
        />
        {isAuthEmail && showError && <span className="error-label">{errorMessage}</span>}
      </div>
    );
  }
}

CommonInput.propTypes = {
  required: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  pattern: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any
};

export default CommonInput;
