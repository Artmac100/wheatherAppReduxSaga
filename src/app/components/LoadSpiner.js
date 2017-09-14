import React from 'react';

function LoadSpiner(props) {
  return (
    <div className="loadspiner">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadSpiner;