import React from 'react';
import { colors } from '../../lib/design';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function TutoringIcon({ className, width = 70, height = 70 }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={width} 
      height={height} 
      fill="currentColor"
      className={className}
    >
      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
    </svg>
  );
}