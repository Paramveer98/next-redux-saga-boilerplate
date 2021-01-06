import React from 'react';
import withLoader from '../HOC/withLoader';

/**
 * Reusable Button Component 
 */
const Button = props => {
  const { className = "button_tune-reel" } = props;
  return (
    <button
      type='submit'
      className={`button button-round button-form ${className}`}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.title}
    </button>
  );
};

export default withLoader(Button);
