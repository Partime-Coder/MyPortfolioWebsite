import React from "react";

function Container({ children, className = "" }) {
  return (
    <div className={`w-[95%] sm:w-[90%] mx-auto  ${className}`}>
      {children}
    </div>
  );
}

export default Container;
