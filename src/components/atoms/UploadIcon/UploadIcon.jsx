import React from 'react'

const UploadIcon = ({ ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="upload">
        <polygon id="artboard" points="0 0 24 0 24 24 0 24" />
        <path
          d="M9,16 L15,16 L15,10 L19,10 L12,3 L5,10 L9,10 L9,16 Z M5,18 L19,18 L19,20 L5,20 L5,18 Z"
          id="arrow-upload"
          fill="#8F97A8"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
)

export default UploadIcon
