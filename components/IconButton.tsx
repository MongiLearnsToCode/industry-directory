import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function IconButton({ 
  onClick, 
  children, 
  className = '',
  active = false 
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        p-1 rounded-md
        ${active ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
