import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText = "Learn More", 
  ctaLink = "/types", 
  imageSrc 
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Ship boiler background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;