import React from 'react';
import { Info } from 'lucide-react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import BoilerDiagram from '../components/BoilerDiagram';

const BoilerTypesPage = () => {
  const waterTubeBoilerParts = [
    {
      id: 'steam-drum',
      name: 'Steam Drum',
      description: 'The upper drum where steam is collected and water is separated from steam.',
      coordinates: { x: 50, y: 20 }
    },
    {
      id: 'water-tubes',
      name: 'Water Tubes',
      description: 'Tubes containing water that are heated by the furnace. Water circulates through these tubes, converting to steam.',
      coordinates: { x: 45, y: 50 }
    },
    {
      id: 'furnace',
      name: 'Furnace',
      description: 'The combustion chamber where fuel is burned to generate heat.',
      coordinates: { x: 50, y: 80 }
    },
    {
      id: 'mud-drum',
      name: 'Mud Drum',
      description: 'Lower drum where sediments and impurities settle out of the water.',
      coordinates: { x: 50, y: 65 }
    },
    {
      id: 'superheater',
      name: 'Superheater',
      description: 'Heats the steam further beyond its saturation point to increase efficiency.',
      coordinates: { x: 75, y: 40 }
    }
  ];

  const fireTubeBoilerParts = [
    {
      id: 'fire-tubes',
      name: 'Fire Tubes',
      description: 'Hot gases from combustion pass through these tubes, which are surrounded by water.',
      coordinates: { x: 50, y: 45 }
    },
    {
      id: 'shell',
      name: 'Shell',
      description: 'Outer container that holds the water surrounding the fire tubes.',
      coordinates: { x: 50, y: 25 }
    },
    {
      id: 'combustion-chamber',
      name: 'Combustion Chamber',
      description: 'Area where fuel is burned to generate hot gases.',
      coordinates: { x: 20, y: 50 }
    },
    {
      id: 'smoke-box',
      name: 'Smoke Box',
      description: 'Collects the exhaust gases after they pass through the fire tubes.',
      coordinates: { x: 80, y: 50 }
    },
    {
      id: 'water-level',
      name: 'Water Level',
      description: 'The maintained water level within the shell, which must be carefully monitored.',
      coordinates: { x: 50, y: 65 }
    }
  ];

  return (
    <div>
      <Hero
        title="Types of Marine Boilers"
        subtitle="Explore the various boiler designs used in maritime applications, their characteristics, advantages, and specific use cases."
        imageSrc="https://images.pexels.com/photos/2132047/pexels-photo-2132047.jpeg"
      />
      
      <ContentSection title="Understanding Marine Boilers" className="bg-white">
        <div className="prose max-w-none">
          <p>
            Marine boilers are essential components in ship propulsion systems, generating steam that powers turbines or provides auxiliary services. They must be robust, efficient, and capable of withstanding the demanding conditions of marine environments.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Marine boilers operate under stricter safety requirements than land-based systems due to the confined spaces and potential hazards aboard ships.
                </p>
              </div>
            </div>
          </div>
          
          <p>
            The two main categories of marine boilers are water-tube and fire-tube designs, each with specific characteristics suited to different vessel types and operational requirements.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Water-Tube Boilers" className="bg-gray-50" id="water-tube">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Characteristics</h3>
            <p className="text-gray-700 mb-4">
              In water-tube boilers, water circulates through tubes that are heated externally by hot combustion gases. Steam is generated as water flows through these tubes and collects in a steam drum.
            </p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Advantages</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Higher pressure capability (up to 160 bar)</li>
              <li>Faster steam raising due to less water content</li>
              <li>Better efficiency at high outputs</li>
              <li>Greater flexibility in layout and installation</li>
              <li>Reduced risk of catastrophic failure</li>
            </ul>
            
            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Common Applications</h4>
            <p className="text-gray-700">
              Water-tube boilers are typically used in:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Large commercial vessels</li>
              <li>Naval ships requiring high power output</li>
              <li>Modern cruise ships</li>
              <li>Vessels where weight and space efficiency are critical</li>
            </ul>
          </div>
          
          <div>
            <BoilerDiagram 
              imageSrc="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" 
              parts={waterTubeBoilerParts} 
            />
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Notable Designs</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">Babcock & Wilcox Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Characterized by straight tubes connecting water drums, widely used in naval vessels.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Foster Wheeler Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Features D-shaped water tubes with excellent circulation properties.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Yarrow Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Compact design with high steam raising capacity, popular in high-speed vessels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Fire-Tube Boilers" className="bg-white" id="fire-tube">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Characteristics</h3>
            <p className="text-gray-700 mb-4">
              In fire-tube boilers, hot gases from combustion pass through tubes that are surrounded by water. The heat from these gases is transferred to the water, generating steam.
            </p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Advantages</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Simpler construction and maintenance</li>
              <li>Lower initial cost</li>
              <li>Greater water storage capacity</li>
              <li>More forgiving of water quality issues</li>
              <li>Better suited for intermittent demand</li>
            </ul>
            
            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-3">Limitations</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Lower pressure capability (typically up to 18 bar)</li>
              <li>Slower to raise steam due to larger water volume</li>
              <li>Less efficient at high outputs</li>
              <li>Heavier for equivalent output</li>
            </ul>
          </div>
          
          <div>
            <BoilerDiagram 
              imageSrc="https://images.pexels.com/photos/2086621/pexels-photo-2086621.jpeg" 
              parts={fireTubeBoilerParts} 
            />
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Common Designs</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">Scotch Marine Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Features a large furnace tube with combustion occurring inside. Widely used in merchant vessels.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Locomotive Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Horizontally oriented with multiple small fire tubes, adapted for marine use in smaller vessels.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Cochran Boilers</h5>
                  <p className="text-gray-600 text-sm">
                    Vertical fire-tube design with good efficiency for auxiliary services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Composite Boilers" className="bg-gray-50" id="composite">
        <div className="prose max-w-none">
          <p>
            Composite boilers combine features of both water-tube and fire-tube designs to leverage advantages of each type. They typically have a water-tube furnace section for rapid steam generation and a fire-tube section for economical heat recovery.
          </p>
          
          <h3>Key Characteristics</h3>
          <ul>
            <li>Higher efficiency than pure fire-tube designs</li>
            <li>Better pressure capability than traditional fire-tube boilers</li>
            <li>Good response to load changes</li>
            <li>Compact design for space-constrained installations</li>
          </ul>
          
          <h3>Applications</h3>
          <p>
            Composite boilers are commonly found in:
          </p>
          <ul>
            <li>Medium-sized commercial vessels</li>
            <li>Ships requiring balanced performance and economy</li>
            <li>Vessels with varying steam demand profiles</li>
          </ul>
        </div>
      </ContentSection>
      
      <ContentSection title="Exhaust Gas Boilers" className="bg-white" id="exhaust-gas">
        <div className="prose max-w-none">
          <p>
            Exhaust gas boilers (also called waste heat recovery boilers) utilize heat from engine exhaust gases to generate steam, improving overall vessel efficiency by recovering energy that would otherwise be lost.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Design Features</h3>
              <ul className="space-y-2">
                <li>Typically water-tube configuration</li>
                <li>Integrated with main engine exhaust system</li>
                <li>May include supplementary firing capability</li>
                <li>Often part of combined system with oil-fired boilers</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Efficiency Benefits</h3>
              <ul className="space-y-2">
                <li>Reduces overall fuel consumption</li>
                <li>Provides "free" steam during engine operation</li>
                <li>Can supply 100% of steam needs during full-power steaming</li>
                <li>Reduces vessel carbon footprint</li>
              </ul>
            </div>
          </div>
          
          <p>
            Modern vessel designs often incorporate sophisticated waste heat recovery systems that may include exhaust gas boilers, economizers, and other heat recovery devices to maximize efficiency.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Selection Considerations" className="bg-blue-50">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Criteria</th>
                <th className="py-3 px-4 text-left">Water-Tube</th>
                <th className="py-3 px-4 text-left">Fire-Tube</th>
                <th className="py-3 px-4 text-left">Composite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Pressure Capability</td>
                <td className="py-3 px-4">High (up to 160 bar)</td>
                <td className="py-3 px-4">Low-Medium (up to 18 bar)</td>
                <td className="py-3 px-4">Medium (up to 60 bar)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Steam Raising Speed</td>
                <td className="py-3 px-4">Fast</td>
                <td className="py-3 px-4">Slow</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Weight</td>
                <td className="py-3 px-4">Lighter</td>
                <td className="py-3 px-4">Heavier</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Space Requirements</td>
                <td className="py-3 px-4">Flexible layout</td>
                <td className="py-3 px-4">More rigid constraints</td>
                <td className="py-3 px-4">Moderate flexibility</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Initial Cost</td>
                <td className="py-3 px-4">Higher</td>
                <td className="py-3 px-4">Lower</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Maintenance</td>
                <td className="py-3 px-4">More complex</td>
                <td className="py-3 px-4">Simpler</td>
                <td className="py-3 px-4">Moderate complexity</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Vessel Types</td>
                <td className="py-3 px-4">Large commercial, naval</td>
                <td className="py-3 px-4">Small-medium vessels</td>
                <td className="py-3 px-4">Medium commercial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentSection>
    </div>
  );
};

export default BoilerTypesPage;