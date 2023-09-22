import React from 'react';

const Select = ({ options, value, onChange, ...rest }) => {
  return (
      <select
        className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    
  );
};

export default Select;