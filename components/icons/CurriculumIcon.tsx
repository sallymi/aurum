import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function CurriculumIcon({ className, width = 70, height = 70 }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={width} 
      height={height} 
      fill="currentColor"
      className={className}
    >
      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
      <path d="M7,7H17V9H7V7Z" />
      <path d="M7,11H17V13H7V11Z" />
      <path d="M7,15H14V17H7V15Z" />
    </svg>
  );
}