import React from 'react'

function FullScreen({ children, className = "" }) {
  return (
    <div className={`w-full h-screen ${className}`}>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default FullScreen;
