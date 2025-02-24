import React from 'react'
import notFoundImage from '../../../public/notfound.jfif'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <img src={notFoundImage} alt="Not Found" style={{ width: '50%', height: 'auto' }} />
    </div>
  )
}

export default NotFound