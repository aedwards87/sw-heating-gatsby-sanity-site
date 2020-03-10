import React from 'react'

const Warning = ({ height = 18, icon = '#e30613', sign = '#ffffff', className }) => {
  return (
    <svg height={height} className={className} viewBox="0 0 64 64" fill="none">
      <path
        d="M5.89991 62C2.59991 62 1.09991 59.6 2.59991 56.7L29.2999 4.20002C30.7999 1.30002 33.1999 1.30002 34.6999 4.20002L61.3999 56.7C62.8999 59.6 61.3999 62 58.0999 62H5.89991Z" fill={sign}
      />
      <path
        d="M27.8 23.6L30.6 42.1C30.9 43.9 33.2 43.9 33.5 42.1L36.2 23.6C36.7 16.4 27.3 16.4 27.8 23.6"
        fill={icon}
      />
      <path
        d="M32 53.8C34.3196 53.8 36.2001 51.9196 36.2001 49.6C36.2001 47.2804 34.3196 45.4 32 45.4C29.6805 45.4 27.8 47.2804 27.8 49.6C27.8 51.9196 29.6805 53.8 32 53.8Z"
        fill={icon}
      />
    </svg>
  )
}

export default Warning
