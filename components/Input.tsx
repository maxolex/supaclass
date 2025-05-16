import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-4 border-2 border-gray-600 rounded-xl bg-transparent text-gray-300 focus:outline-none focus:border-gray-400 ${className}`}
      {...props}
    />
  );
};

export default Input;