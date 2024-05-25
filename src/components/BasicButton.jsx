import React from 'react'
import PropTypes from 'prop-types';

// function BasicButton({ className, type = 'button', disabled = false, onClick }) {
//   return (
//     <button type={type} onClick={onClick} disabled={disabled} className={className}>Increment</button>
//   )
// }

function BasicButton({ text = "Default", ...restProps }) {
  return (
    <button {...restProps}>{text}</button>
  )
}

export default BasicButton

BasicButton.propTypes = {
  text: PropTypes.string,
  restProps: PropTypes.shape({
    disable: PropTypes.bool,
    className: PropTypes.string
  }),
}