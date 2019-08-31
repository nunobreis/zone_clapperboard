import React from 'react'

const AddRowIcon = ({ ...props }) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="add-row">
        <circle id="button-background" fill="#D0D4DA" cx="16" cy="16" r="16" />
        <polygon
          id="plus"
          fill="#FFFFFF"
          points="20.52 16.84 17.04 16.84 17.04 20.24 14.46 20.24 14.46 16.84 11 16.84 11 14.4 14.46 14.4 14.46 11 17.04 11 17.04 14.4 20.52 14.4"
        />
      </g>
    </g>
  </svg>
)

export default AddRowIcon
