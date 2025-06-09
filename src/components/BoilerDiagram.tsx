import React, { useState } from 'react';

interface DiagramPart {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
}

interface BoilerDiagramProps {
  imageSrc: string;
  parts: DiagramPart[];
}

const BoilerDiagram: React.FC<BoilerDiagramProps> = ({ imageSrc, parts }) => {
  const [activePart, setActivePart] = useState<DiagramPart | null>(null);

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Boiler Diagram</h3>
      
      <div className="relative">
        <img 
          src={imageSrc} 
          alt="Boiler diagram" 
          className="w-full h-auto rounded-md"
        />
        
        {parts.map((part) => (
          <div
            key={part.id}
            className="absolute w-6 h-6 bg-blue-500 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:bg-blue-600 flex items-center justify-center text-white text-xs font-bold transition-all hover:scale-110"
            style={{ 
              left: `${part.coordinates.x}%`, 
              top: `${part.coordinates.y}%`,
              zIndex: activePart?.id === part.id ? 30 : 20
            }}
            onClick={() => setActivePart(part)}
          >
            +
          </div>
        ))}
      </div>
      
      {activePart && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <h4 className="font-semibold text-blue-900">{activePart.name}</h4>
          <p className="text-gray-700 mt-1">{activePart.description}</p>
          <button 
            className="mt-2 text-sm text-blue-600 hover:text-blue-800" 
            onClick={() => setActivePart(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BoilerDiagram;