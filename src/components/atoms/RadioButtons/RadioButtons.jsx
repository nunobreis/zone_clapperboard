import React from 'react'
import PropTypes from 'prop-types'

const RadioButtons = ({ value, name, label }) => <div>
  <input type="radio" value={value} name={name} />
  <label htmlFor={value}>{label}</label>
</div>

RadioButtons.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default RadioButtons
