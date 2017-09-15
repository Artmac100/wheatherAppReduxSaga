import React from 'react';

function LoadSpiner() {
  return (
    <div className="loadspiner">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadSpiner;
