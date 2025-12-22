import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  color?: 'dark' | 'light';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, align = 'center', color = 'dark' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const colorClass = color === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-12 leading-tight ${alignClass} ${colorClass}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;