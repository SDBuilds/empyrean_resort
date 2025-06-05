import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border-4 border-white',
    secondary: 'bg-white text-blue-600 hover:bg-gray-50 border-2 border-blue-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 