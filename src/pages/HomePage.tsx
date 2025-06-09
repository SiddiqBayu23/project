import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Flame, PenTool as Tool, ChevronRight, AlertTriangle, Droplet } from 'lucide-react';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';
import ContentSection from '../components/ContentSection';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // In a real implementation, this would trigger a search
    alert(`Searching for: ${query}`);
  };

  return (
    <div>
      <Hero
        title="Marine Boiler Systems: The Heart of Ship Power"
        subtitle="Learn about the vital systems that power ships across the world's oceans. Explore the technology, operation, and maintenance of marine boilers."
        ctaText="Explore Boiler Types"
        ctaLink="/types"
        imageSrc="https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg"
      />
      
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      
      <ContentSection title="Why Learn About Ship Boilers?" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <InfoCard
            title="Power Generation"
            description="Understand how boilers convert fuel into steam energy that powers ship propulsion systems and electrical generators."
            icon={<Flame className="h-6 w-6" />}
          />
          <InfoCard
            title="Safety Protocols"
            description="Learn critical safety measures to prevent accidents and ensure safe operation of high-pressure steam systems."
            icon={<AlertTriangle className="h-6 w-6" />}
          />
          <InfoCard
            title="Efficiency Optimization"
            description="Discover techniques to maximize fuel efficiency and reduce environmental impact through proper boiler operation."
            icon={<Gauge className="h-6 w-6" />}
          />
        </div>
      </ContentSection>
      
      <ContentSection title="Key Boiler Topics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg" 
              alt="Ship engine room" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Types of Marine Boilers</h3>
              <p className="text-gray-600 mb-4">
                From fire-tube to water-tube designs, explore the various boiler types used in maritime applications and their specific advantages.
              </p>
              <Link 
                to="/types" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Learn about boiler types
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2873557/pexels-photo-2873557.jpeg" 
              alt="Control panel" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Boiler Operations</h3>
              <p className="text-gray-600 mb-4">
                Master the fundamentals of boiler operation, including startup procedures, monitoring requirements, and shutdown protocols.
              </p>
              <Link 
                to="/operations" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Explore operations guide
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg" 
              alt="Maintenance worker" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance & Troubleshooting</h3>
              <p className="text-gray-600 mb-4">
                Learn essential maintenance procedures and how to identify and resolve common boiler problems efficiently.
              </p>
              <Link 
                to="/maintenance" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View maintenance guide
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg" 
              alt="Questions and answers" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-4">
                Find answers to common questions about marine boiler systems, operations, and maintenance requirements.
              </p>
              <Link 
                to="/faq" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Browse FAQs
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Key Components" className="bg-blue-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <InfoCard
            title="Furnace"
            description="Where fuel combustion occurs to generate heat for steam production."
            icon={<Flame className="h-6 w-6" />}
            className="h-full"
          />
          <InfoCard
            title="Steam Drum"
            description="Separates water from steam and maintains proper water levels."
            icon={<Droplet className="h-6 w-6" />}
            className="h-full"
          />
          <InfoCard
            title="Control Systems"
            description="Regulate pressure, temperature, and water levels for safe operation."
            icon={<Gauge className="h-6 w-6" />}
            className="h-full"
          />
          <InfoCard
            title="Maintenance Tools"
            description="Specialized equipment for servicing and repairing boiler systems."
            icon={<Tool className="h-6 w-6" />}
            className="h-full"
          />
        </div>
      </ContentSection>
      
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Expand Your Marine Engineering Knowledge?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Explore our comprehensive resources on ship boiler systems and enhance your understanding of these critical marine components.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/types" 
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Explore Boiler Types
            </Link>
            <Link 
              to="/operations" 
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Learn Operations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;