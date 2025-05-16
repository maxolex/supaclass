import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  isActive = false
}) => {
  const baseClasses = "flex flex-row justify-center items-center px-4 py-4 rounded-xl font-medium text-base";
  
  const variantClasses = {
    primary: isActive ? "bg-[#F5F5F5] text-black" : "bg-gray-400 text-black",
    secondary: "bg-gray-700 text-gray-300",
    outline: "border border-gray-600 text-gray-300"
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;