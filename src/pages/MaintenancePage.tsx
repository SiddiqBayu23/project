import React from 'react';
import { PenTool as Tool, AlertTriangle, Clock, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import { CheckCircle } from 'lucide-react';
import ContentSection from '../components/ContentSection';

const MaintenancePage = () => {
  return (
    <div>
      <Hero
        title="Marine Boiler Maintenance"
        subtitle="Essential procedures and best practices for maintaining ship boiler systems to ensure reliability, efficiency, and longevity."
        imageSrc="https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg"
      />
      
      <ContentSection title="Maintenance Overview" className="bg-white">
        <div className="prose max-w-none">
          <p>
            Proper maintenance of marine boilers is crucial for safe operation, regulatory compliance, and operational efficiency. A well-maintained boiler system minimizes downtime, extends equipment life, and reduces fuel consumption.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important Safety Notice:</strong> Always follow proper lockout/tagout procedures before performing maintenance. Ensure the boiler is properly cooled and depressurized before opening any access points.
                </p>
              </div>
            </div>
          </div>
          
          <p>
            This guide outlines the maintenance requirements for marine boilers, including routine tasks, scheduled maintenance, troubleshooting common issues, and best practices for documentation.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Maintenance Schedules" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-4">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white ml-2">Daily Checks</h3>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Inspect water level gauges and verify proper operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Check for abnormal noises, vibrations, or leaks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Monitor flue gas temperature and appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Verify proper operation of feedwater system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Test water quality and add chemicals as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Perform bottom blowdown as per schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Check fuel system for leaks or abnormalities</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Daily checks should be performed during each watch rotation and recorded in the boiler log.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-700 p-4">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white ml-2">Weekly Tasks</h3>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Test all safety valves and alarms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Inspect burner assemblies and clean as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Check combustion controls and linkages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Inspect refractory for damage or deterioration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Verify proper operation of water treatment system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Clean air filters on forced draft fans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Check for proper operation of soot blowers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <span>Inspect all pumps and motors for leaks or wear</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Complete weekly maintenance tasks during scheduled downtime or periods of reduced load.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 p-4">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white ml-2">Monthly/Quarterly</h3>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-gray-900 mb-3">Monthly</h4>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Inspect all valves and repair/replace as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Clean and calibrate fuel oil heaters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Check and clean flame scanners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Inspect economizer for leaks or fouling</span>
                </li>
              </ul>
              
              <h4 className="font-medium text-gray-900 mb-3">Quarterly</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Perform comprehensive water analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Clean and inspect all strainers and filters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Test all automatic controls and safety devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 font-bold mr-2">•</span>
                  <span>Inspect superheater and desuperheater systems</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Schedule these tasks during planned maintenance periods.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Annual and Special Inspections</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Annual Maintenance</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Complete internal inspection of pressure parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Remove and clean burner assemblies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Inspect and clean all tubes and tube sheets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Check and repair refractory and insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Overhaul all safety valves</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Inspect and clean all heat transfer surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Conduct pressure test as required by regulations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Special Inspections</h4>
              <p className="text-gray-700 mb-3">
                Special inspections are required under these circumstances:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>After significant repairs or modifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Following any boiler malfunction or accident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Prior to vessel classification renewal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>When returning to service after long-term storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>If abnormal operating conditions are observed</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                All inspections should be documented and certified by appropriate authorities.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Maintenance Procedures" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Cleaning Procedures</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Fireside Cleaning</h4>
                <p className="text-gray-700 mb-3">
                  Fireside cleaning removes soot, ash, and deposits from surfaces exposed to combustion gases.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Ensure boiler is cool and properly locked out</li>
                  <li>Remove access doors and inspection ports</li>
                  <li>Use appropriate brushes and vacuum equipment</li>
                  <li>Clean all tube surfaces thoroughly</li>
                  <li>Inspect for signs of overheating or corrosion</li>
                  <li>Clean soot blower elements</li>
                  <li>Inspect and clean burner assemblies</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Waterside Cleaning</h4>
                <p className="text-gray-700 mb-3">
                  Waterside cleaning removes scale, sediment, and corrosion products from water-contact surfaces.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Drain and cool boiler completely</li>
                  <li>Remove handhole and manhole covers</li>
                  <li>Perform initial inspection for deposits</li>
                  <li>Use mechanical cleaning methods for accessible areas</li>
                  <li>Chemical cleaning may be required for severe scaling</li>
                  <li>Flush thoroughly after cleaning</li>
                  <li>Inspect for evidence of corrosion or pitting</li>
                </ol>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Note:</strong> Chemical cleaning should only be performed by qualified personnel following approved procedures.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Control System Maintenance</h3>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Key Components</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Tool className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Water Level Controls</p>
                      <p className="text-sm text-gray-600">
                        Clean probe tips, verify proper operation, check electrical connections. Test alarms and shutdown functions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Tool className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Pressure Controls</p>
                      <p className="text-sm text-gray-600">
                        Calibrate pressure sensors, test operating and high-limit controllers. Verify proper cutout and cut-in settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Tool className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Flame Safeguard Systems</p>
                      <p className="text-sm text-gray-600">
                        Clean and test flame scanners, verify proper operation of flame monitoring system. Test safety shutdown timing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Tool className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Combustion Controls</p>
                      <p className="text-sm text-gray-600">
                        Check linkages, actuators, and damper movement. Verify fuel-air ratio across operating range. Calibrate O₂ sensors.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Component Maintenance</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Burner Maintenance</h4>
                <p className="text-gray-700 mb-3">
                  Proper burner maintenance is essential for efficient combustion and reduced emissions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Remove and inspect burner tips for wear or damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Clean fuel nozzles using appropriate solvents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Inspect diffusers and swirl plates for carbon buildup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Check ignition electrodes for proper gap and condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Test ignition transformer output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Verify proper flame pattern after reassembly</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Safety Valve Maintenance</h4>
                <p className="text-gray-700 mb-3">
                  Safety valves are critical components that must be regularly maintained.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Test valve operation within prescribed pressure ranges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Inspect seating surfaces for damage or erosion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Check for proper spring tension and free movement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Verify valve discharge piping is clear and properly supported</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Replace valves that fail to operate correctly</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-red-700">
                  <strong>Important:</strong> Safety valve maintenance must be performed by certified personnel. Valves must be tested and certified according to regulations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Feedwater System</h4>
                <p className="text-gray-700 mb-3">
                  Reliable feedwater system operation is essential for boiler safety and efficiency.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Inspect and clean feedwater pumps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Check pump seals and packing for leaks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Clean and calibrate flow meters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Test feedwater regulators and controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Inspect check valves for proper operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>Verify proper operation of water treatment system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Troubleshooting Common Issues" className="bg-gray-50">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Level Problems</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Symptom</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Possible Causes</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Corrective Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Fluctuating water level</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improper feedwater control</li>
                        <li>Excessive steaming rate</li>
                        <li>Contaminants causing foaming</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Check and calibrate level controls</li>
                        <li>Verify feedwater pump operation</li>
                        <li>Perform water analysis and treat accordingly</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">False water level reading</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Blocked gauge glass connections</li>
                        <li>Faulty level transmitter</li>
                        <li>Improper blowdown procedure</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Clean gauge glass connections</li>
                        <li>Test and calibrate level sensors</li>
                        <li>Verify readings with multiple indicators</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Low water condition</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Feedwater pump failure</li>
                        <li>Excessive blowdown</li>
                        <li>Major leak in system</li>
                        <li>Faulty low water cutoff</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Immediately shut down if unsafe</li>
                        <li>Inspect pumps and repair as needed</li>
                        <li>Check for leaks throughout system</li>
                        <li>Test and repair low water cutoff</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Combustion Issues</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Symptom</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Possible Causes</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Corrective Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Flame failure or instability</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improper fuel-air ratio</li>
                        <li>Dirty or damaged burner tips</li>
                        <li>Faulty ignition system</li>
                        <li>Poor fuel quality</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Adjust fuel-air ratio</li>
                        <li>Clean or replace burner components</li>
                        <li>Inspect and repair ignition system</li>
                        <li>Test fuel quality and filter system</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Excessive smoke</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Insufficient combustion air</li>
                        <li>Improper fuel atomization</li>
                        <li>Fuel temperature too low</li>
                        <li>Burner misalignment</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Increase combustion air flow</li>
                        <li>Check and clean fuel nozzles</li>
                        <li>Verify fuel preheater operation</li>
                        <li>Adjust burner position and alignment</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">High stack temperature</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fouled heat transfer surfaces</li>
                        <li>Excess combustion air</li>
                        <li>Improper burner adjustment</li>
                        <li>Refractory damage</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Clean tubes and heat transfer surfaces</li>
                        <li>Adjust excess air to optimal level</li>
                        <li>Tune burner for proper operation</li>
                        <li>Inspect and repair refractory</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Steam and Pressure Issues</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Symptom</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Possible Causes</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Corrective Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Inability to maintain pressure</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Excessive steam demand</li>
                        <li>Inadequate firing rate</li>
                        <li>Fouled heat transfer surfaces</li>
                        <li>Steam leaks in system</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduce steam demand if possible</li>
                        <li>Check burner capacity and operation</li>
                        <li>Clean heat transfer surfaces</li>
                        <li>Inspect and repair steam leaks</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Pressure relief valve leakage</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Damaged seat or disc</li>
                        <li>Foreign material in valve</li>
                        <li>Improper pressure setting</li>
                        <li>Excessive pressure spikes</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Repair or replace valve</li>
                        <li>Clean valve and seat</li>
                        <li>Verify and adjust pressure settings</li>
                        <li>Check pressure control system</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Wet steam</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>High water level</li>
                        <li>Excessive steaming rate</li>
                        <li>Inadequate steam separation</li>
                        <li>Water carryover due to contamination</li>
                      </ul>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Adjust water level control</li>
                        <li>Maintain proper steaming rates</li>
                        <li>Inspect steam separator elements</li>
                        <li>Improve water treatment</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Documentation and Record Keeping" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Records</h3>
            <p className="text-gray-700 mb-6">
              Proper documentation is crucial for regulatory compliance, warranty maintenance, and establishing maintenance history. Maintain the following records:
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">1</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Maintenance Logs</h4>
                  <p className="text-gray-600 mt-1">
                    Record all maintenance activities, including routine tasks, repairs, and replacements. Document date, work performed, parts used, and technician information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">2</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Water Treatment Records</h4>
                  <p className="text-gray-600 mt-1">
                    Maintain detailed logs of water quality tests, chemical treatments, and blowdown procedures. Include test results, chemical additions, and any corrective actions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">3</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Inspection Reports</h4>
                  <p className="text-gray-600 mt-1">
                    Keep formal reports from all inspections, including annual examinations, special inspections, and regulatory surveys. Include inspector credentials and certification details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">4</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Operating Data</h4>
                  <p className="text-gray-600 mt-1">
                    Maintain logs of operational parameters including pressure, temperature, fuel consumption, and efficiency metrics. Use this data to identify trends and potential issues.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">5</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Equipment Documentation</h4>
                  <p className="text-gray-600 mt-1">
                    Keep manufacturer manuals, specifications, and warranty information for all boiler components. Include calibration certificates for testing equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
            <p className="text-gray-700 mb-6">
              Marine boilers are subject to various regulations depending on vessel type, flag state, and classification society. Ensure compliance with:
            </p>
            
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Common Regulatory Bodies</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <p className="font-medium text-gray-800">Classification Societies</p>
                    <p className="text-sm text-gray-600">
                      ABS, Lloyd's Register, DNV-GL, Bureau Veritas, etc.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <p className="font-medium text-gray-800">Flag State Authorities</p>
                    <p className="text-sm text-gray-600">
                      Maritime administrations of the vessel's country of registration
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <p className="font-medium text-gray-800">International Maritime Organization (IMO)</p>
                    <p className="text-sm text-gray-600">
                      SOLAS regulations and related codes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <p className="font-medium text-gray-800">Port State Control</p>
                    <p className="text-sm text-gray-600">
                      Inspection regimes in ports of call
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
      <h4 className="font-medium text-gray-900 mb-3">Documentation Best Practices</h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Maintain both digital and hard copy records</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Implement standardized forms and checklists</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Use document control procedures with revision tracking</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Ensure certificates are properly endorsed and current</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Develop organized filing system for quick retrieval</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Establish regular review and audit procedures</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Train crew on documentation requirements</span>
        </li>
      </ul>
    </div>

          </div>
        </div>
      </ContentSection>
      
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Have Questions About Ship Boilers?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Browse our frequently asked questions to find answers to common queries about marine boiler systems, operation, and maintenance.
          </p>
          <a 
            href="/faq" 
            className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            View FAQ Section
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;