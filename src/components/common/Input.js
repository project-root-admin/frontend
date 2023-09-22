import React from "react";

const Input = ({ value, onChange, className, ...rest }) => {
  return (
    <input
      className={`border border-gray-400 p-2 rounded ${className}`}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;