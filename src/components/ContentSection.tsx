import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  children, 
  className = '',
  id
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;