import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import FaqItem from '../components/FaqItem';

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqItems = [
    {
      question: "What is the main purpose of a marine boiler?",
      answer: "The main purpose of a marine boiler is to generate steam, which is used for various applications aboard ships including propulsion (in steam-powered vessels), generating electricity via steam turbines, heating fuel and lubricating oils, heating living and working spaces, and providing hot water for domestic use. In modern vessels, boilers primarily serve auxiliary functions while main propulsion is typically provided by diesel engines."
    },
    {
      question: "What are the key differences between water-tube and fire-tube boilers?",
      answer: "In water-tube boilers, water flows through tubes that are heated externally by hot combustion gases. They can operate at higher pressures (up to 160 bar), have faster steam raising capability, and are more efficient at high outputs. Fire-tube boilers have combustion gases flowing through tubes surrounded by water. They operate at lower pressures (typically up to 18 bar), have simpler construction, lower initial cost, and are better suited for intermittent demand but are generally heavier for equivalent output."
    },
    {
      question: "How often should marine boilers be inspected?",
      answer: "Marine boilers should undergo daily operational checks, weekly functional tests of safety systems, monthly inspections of burners and controls, and comprehensive annual inspections. Additionally, they require special inspections after significant repairs, following malfunctions, or prior to vessel classification renewal. The exact inspection schedule depends on classification society requirements, flag state regulations, and manufacturer recommendations."
    },
    {
      question: "What causes scale formation in boilers and how can it be prevented?",
      answer: "Scale forms when minerals in the feedwater (primarily calcium and magnesium compounds) precipitate and deposit on heat transfer surfaces. It can be prevented through proper water treatment including: softening or demineralizing feedwater, maintaining appropriate pH levels (typically 8.5-9.5), using chemical scale inhibitors, implementing regular blowdown procedures to remove concentrated impurities, and monitoring water quality through regular testing."
    },
    {
      question: "What safety systems are required for marine boilers?",
      answer: "Essential safety systems include: low water level cutoffs to prevent firing with insufficient water, high pressure safety valves to release excess pressure, flame monitoring systems to detect flame failure, combustion safeguards to ensure proper air-fuel ratio, feedwater control systems to maintain proper water levels, purge cycles to prevent explosive conditions, burner management systems with timed ignition sequences, and emergency shutdown systems for rapid response to dangerous conditions."
    },
    {
      question: "How is water quality maintained in marine boilers?",
      answer: "Water quality is maintained through: pre-treatment of feedwater (filtration, softening, deaeration), chemical treatment to control pH and prevent corrosion, oxygen scavengers to remove dissolved oxygen, polymer treatments to prevent scale formation, regular blowdown procedures to remove concentrated impurities, continuous and batch chemical dosing systems, and regular water testing to monitor conditions and adjust treatment accordingly."
    },
    {
      question: "What are the common causes of boiler failures?",
      answer: "Common causes of boiler failures include: low water conditions leading to overheating, scale buildup reducing heat transfer and causing localized hot spots, corrosion of pressure parts, fatigue cracking from thermal cycling, refractory failures allowing heat damage, improper combustion causing soot buildup or flame impingement, control system failures, inadequate water treatment leading to corrosion or scale, and improper operating procedures including rapid heating or cooling."
    },
    {
      question: "How is boiler efficiency measured and improved?",
      answer: "Boiler efficiency is typically measured by calculating the ratio of energy output (in steam) to energy input (in fuel). It can be improved by: optimizing combustion air-fuel ratios, maintaining clean heat transfer surfaces, minimizing radiation and convection losses through proper insulation, installing economizers to recover waste heat from flue gases, reducing blowdown rates while maintaining water quality, implementing automatic combustion controls, optimizing burner performance, and ensuring proper operation of steam traps and condensate return systems."
    },
    {
      question: "What qualifications are required for marine boiler operators?",
      answer: "Qualifications typically include: engineering certification appropriate to position (e.g., Chief Engineer, 2nd Engineer), specialized training in boiler operations and maintenance, knowledge of relevant regulations and codes, understanding of combustion principles and controls, familiarity with water treatment, safety system operation, emergency procedures, and regular refresher training. Specific requirements vary by flag state, vessel type, and company policies."
    },
    {
      question: "How has boiler technology evolved in modern vessels?",
      answer: "Modern marine boiler technology has evolved with: improved combustion systems with lower emissions, enhanced automation and digital controls, integrated safety systems with redundancy, higher efficiency designs, composite boilers combining water-tube and fire-tube elements, waste heat recovery systems, improved materials for higher temperature operation, water treatment innovations, and integration with vessel management systems for remote monitoring and predictive maintenance."
    },
    {
      question: "What is a boiler blowdown and why is it necessary?",
      answer: "Boiler blowdown is the controlled removal of water from a boiler to discharge accumulated solids, sludge, and impurities. It's necessary to prevent concentration of dissolved solids that could cause scale formation, foaming, carryover, or corrosion. There are two types: bottom blowdown to remove settled solids and sludge, and surface or continuous blowdown to control dissolved solid concentration. Proper blowdown procedures maintain water quality while minimizing water and heat loss."
    },
    {
      question: "How are marine boilers started safely?",
      answer: "Safe boiler startup involves: performing all pre-start checks including water level verification, conducting a furnace purge to remove any combustible gases, starting at minimum firing rate, warming up gradually to allow for thermal expansion, monitoring all parameters during startup, following manufacturer's recommended heating rates (typically not exceeding 100°F/hour), ensuring all safety systems are operational, venting air from the system, and gradually integrating the boiler with the ship's steam system only after proper pressure and temperature are achieved."
    },
    {
      question: "What fuels are commonly used in marine boilers?",
      answer: "Common marine boiler fuels include: Heavy Fuel Oil (HFO) for larger vessels, Marine Diesel Oil (MDO) for medium-sized vessels, Marine Gas Oil (MGO) in emission control areas, Liquefied Natural Gas (LNG) in newer environmentally-focused designs, and in some cases, dual-fuel capabilities allowing switching between fuel types. Fuel selection depends on availability, cost, environmental regulations, and specific vessel requirements."
    },
    {
      question: "How are emissions from marine boilers regulated?",
      answer: "Marine boiler emissions are regulated through: IMO MARPOL Annex VI establishing limits on sulfur oxides (SOx) and nitrogen oxides (NOx), Emission Control Areas (ECAs) with stricter requirements in designated coastal regions, requirements for lower sulfur fuels or equivalent emission reduction technology, mandated technical improvements for NOx reduction, and regional or port-specific requirements that may exceed international standards. Compliance options include using cleaner fuels, installing scrubbers, or implementing advanced combustion technology."
    },
    {
      question: "What is superheated steam and why is it used?",
      answer: "Superheated steam is steam that has been heated beyond its saturation temperature at a given pressure. It's used because: it contains more energy per unit mass than saturated steam, it doesn't condense as readily during work processes (improving efficiency), it reduces moisture-related erosion in turbines and piping, it allows for more efficient power generation in steam turbines, and it provides higher temperature process heat when required. Superheaters are special heat exchangers within or connected to the boiler that provide this additional heating."
    }
  ];
  
  const filteredFaqs = searchQuery
    ? faqItems.filter(
        item =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;
  
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about marine boiler systems, operations, and maintenance."
        imageSrc="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg"
      />
      
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for questions..."
                className="w-full py-3 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContentSection title="General Questions" className={searchQuery ? "hidden" : "bg-gray-50"}>
        <div className="max-w-3xl mx-auto">
          {faqItems.slice(0, 5).map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </ContentSection>
      
      <ContentSection title="Technical Questions" className={searchQuery ? "hidden" : "bg-white"}>
        <div className="max-w-3xl mx-auto">
          {faqItems.slice(5, 10).map((item, index) => (
            <FaqItem 
              key={index + 5}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </ContentSection>
      
      <ContentSection title="Operational Questions" className={searchQuery ? "hidden" : "bg-gray-50"}>
        <div className="max-w-3xl mx-auto">
          {faqItems.slice(10).map((item, index) => (
            <FaqItem 
              key={index + 10}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </ContentSection>
      
      {searchQuery && (
        <ContentSection title="Search Results" className="bg-gray-50">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => (
                <FaqItem 
                  key={`search-${index}`}
                  question={item.question}
                  answer={item.answer}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </ContentSection>
      )}
      
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            If you couldn't find the answer you were looking for, explore our detailed sections on boiler types, operations, and maintenance for more in-depth information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/types" 
              className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Explore Boiler Types
            </a>
            <a 
              href="/operations" 
              className="px-5 py-2 bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 transition-colors"
            >
              View Operations Guide
            </a>
            <a 
              href="/maintenance" 
              className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition-colors"
            >
              Maintenance Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;