import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';

const OperationsPage = () => {
  return (
    <div>
      <Hero
        title="Marine Boiler Operations"
        subtitle="Master the essential procedures and best practices for safely operating marine boilers in maritime environments."
        imageSrc="https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg"
      />
      
      <ContentSection title="Operational Overview" className="bg-white">
        <div className="prose max-w-none">
          <p>
            Marine boiler operation requires careful attention to procedures, continuous monitoring, and adherence to safety protocols. Proper operation ensures efficiency, prolongs equipment life, and maintains vessel safety.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important Safety Notice:</strong> Marine boilers operate under high pressure and temperature conditions that present significant hazards. Always follow proper procedures and never bypass safety systems.
                </p>
              </div>
            </div>
          </div>
          
          <p>
            This guide covers the fundamental aspects of marine boiler operations, including startup, running procedures, monitoring requirements, and shutdown protocols.
          </p>
        </div>
      </ContentSection>
      
      <ContentSection title="Pre-Start Checks" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Pre-Start Checklist</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Verify water levels</p>
                  <p className="text-gray-600 text-sm">
                    Ensure water is at the proper level in the gauge glass. Never start a boiler with insufficient water.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Inspect fuel system</p>
                  <p className="text-gray-600 text-sm">
                    Check fuel lines, pumps, and filters for leaks or abnormalities. Verify fuel quality and temperature.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Test safety valves</p>
                  <p className="text-gray-600 text-sm">
                    Verify operation of all safety valves and pressure relief devices according to schedule.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Examine combustion control systems</p>
                  <p className="text-gray-600 text-sm">
                    Check burner components, flame scanners, and combustion control devices.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 font-medium">Inspect refractory and insulation</p>
                  <p className="text-gray-600 text-sm">
                    Look for damaged or deteriorated refractory materials that could affect efficiency or safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Conditions to Check</h3>
            
            <div className="overflow-hidden bg-white rounded-lg shadow-sm">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Acceptable Range</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Action if Outside Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Feedwater pH</td>
                    <td className="py-3 px-4 text-sm text-gray-600">8.5 - 9.5</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Adjust chemical dosing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Fuel Viscosity</td>
                    <td className="py-3 px-4 text-sm text-gray-600">12 - 18 cSt</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Adjust heater temperature</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Furnace Pressure</td>
                    <td className="py-3 px-4 text-sm text-gray-600">-5 to -15 mmWC</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Check forced draft fan</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Water Level</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Mid-glass ±25mm</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Add/drain water as needed</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Control Air Pressure</td>
                    <td className="py-3 px-4 text-sm text-gray-600">5.5 - 8.0 bar</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Check air compressors</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Never Start a Boiler If:</strong>
                  </p>
                  <ul className="list-disc pl-5 mt-1 text-sm text-red-700">
                    <li>Water level is not visible in gauge glass</li>
                    <li>Any safety device is known to be defective</li>
                    <li>Abnormal conditions exist in the furnace</li>
                    <li>Required permits and authorizations are not in place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Startup Procedure" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Standard Startup Sequence</h3>
            
            <ol className="relative border-l border-gray-300 ml-3 space-y-8">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">1</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Preliminary Checks</h4>
                <p className="text-gray-600 mb-2">Complete all pre-start checks as outlined in the checklist.</p>
                <p className="text-gray-600">Ensure all valves are in their correct startup positions.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">2</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Purge Cycle</h4>
                <p className="text-gray-600 mb-2">Activate forced draft fan to begin furnace purge.</p>
                <p className="text-gray-600">Allow complete air exchange (typically 5-10 minutes) to remove any combustible gases.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">3</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Ignition</h4>
                <p className="text-gray-600 mb-2">Enable ignition system and verify proper function.</p>
                <p className="text-gray-600">Introduce fuel at minimum firing rate only after ignition is confirmed.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">4</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Warm-up Period</h4>
                <p className="text-gray-600 mb-2">Maintain minimum firing rate during initial warm-up.</p>
                <p className="text-gray-600">Monitor expansion of boiler components and watch for abnormal noises.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">5</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">Pressure Build-up</h4>
                <p className="text-gray-600 mb-2">Gradually increase firing rate to raise steam pressure.</p>
                <p className="text-gray-600">Observe pressure gauges to ensure rate of rise does not exceed 1 bar per minute.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-800 font-bold">6</span>
                </span>
                <h4 className="text-lg font-semibold text-gray-900">System Integration</h4>
                <p className="text-gray-600 mb-2">Once at operating pressure, slowly open main steam valve.</p>
                <p className="text-gray-600">Integrate boiler with ship's steam system following warm-up of steam lines.</p>
              </li>
            </ol>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cold vs. Hot Startup</h3>
              <p className="text-gray-700 mb-4">
                Startup procedures vary based on boiler temperature at the beginning of the process.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Cold Startup (≤40°C)</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
                    <li>Requires full warm-up period (4-8 hours)</li>
                    <li>Slower pressure rise rate (0.5 bar/min)</li>
                    <li>Close attention to thermal expansion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Warm Startup (40-100°C)</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
                    <li>Moderate warm-up period (2-4 hours)</li>
                    <li>Standard pressure rise rate (0.8 bar/min)</li>
                    <li>Normal expansion monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Hot Startup (100°C)</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
                    <li>Minimal warm-up required (1-2 hours)</li>
                    <li>Faster pressure rise permitted (1 bar/min)</li>
                    <li>Reduced risk of thermal shock</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Startup Issues</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">Ignition Failure</p>
                    <p className="text-gray-600 text-sm">
                      Check fuel supply, ignition transformer, and flame scanner. Ensure proper purge was completed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">Water Level Fluctuations</p>
                    <p className="text-gray-600 text-sm">
                      Verify feedwater control system operation. Check for air in water system or faulty level indicators.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">High Stack Temperature</p>
                    <p className="text-gray-600 text-sm">
                      Indicates possible fouling or scaling. Check combustion settings and heat transfer surfaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">Abnormal Noises</p>
                    <p className="text-gray-600 text-sm">
                      Stop startup if unusual sounds occur. Check for thermal expansion issues or water hammer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Running Operations" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Normal Operating Parameters</h3>
            
            <div className="overflow-hidden bg-white rounded-lg shadow-sm">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Parameter</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Normal Range</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Check Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Steam Pressure</td>
                    <td className="py-3 px-4 text-sm text-gray-600">±5% of setpoint</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Hourly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Water Level</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Mid-glass ±25mm</td>
                    <td className="py-3 px-4 text-sm text-gray-600">30 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Fuel Pressure</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Per manufacturer</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Hourly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Combustion Air</td>
                    <td className="py-3 px-4 text-sm text-gray-600">10-15% excess O₂</td>
                    <td className="py-3 px-4 text-sm text-gray-600">2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Flue Gas Temp</td>
                    <td className="py-3 px-4 text-sm text-gray-600">150-350°C</td>
                    <td className="py-3 px-4 text-sm text-gray-600">2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Feedwater Temp</td>
                    <td className="py-3 px-4 text-sm text-gray-600">80-120°C</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Hourly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-800">Superheated Steam</td>
                    <td className="py-3 px-4 text-sm text-gray-600">350-450°C</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Hourly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Treatment</h3>
              <p className="text-gray-700 mb-4">
                Proper water chemistry is critical for boiler operation. The following parameters must be regularly monitored and maintained:
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">pH</span>
                  <span className="text-gray-600">8.5 - 9.5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-800">Alkalinity</span>
                  <span className="text-gray-600">100 - 300 ppm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-800">Hardness</span>
                  <span className="text-gray-600">&lt; 0.1 ppm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-800">Dissolved Oxygen</span>
                  <span className="text-gray-600">&lt; 0.02 ppm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-800">Silica</span>
                  <span className="text-gray-600">&lt; 0.3 ppm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Watchkeeping Duties</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Regular Monitoring</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Record operating parameters at required intervals in logbook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Perform blowdown procedures as scheduled</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Test water quality and add chemicals as needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Inspect fuel system for proper operation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Check burner flame pattern and combustion quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Monitor steam quality (wetness)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Test safety systems according to schedule</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Load Changes</h4>
              <p className="text-gray-700 mb-4">
                When changing boiler load in response to ship's steam demand:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium text-blue-700 mr-2">•</span>
                  <span>Make gradual changes to firing rate (max 10% per 5 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-blue-700 mr-2">•</span>
                  <span>Monitor water level closely during load changes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-blue-700 mr-2">•</span>
                  <span>Adjust feedwater flow to match steam production</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-blue-700 mr-2">•</span>
                  <span>Check combustion settings after stabilizing at new load</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Handling Alarms</h4>
              <p className="text-gray-700 mb-4">
                When alarms occur, follow this response procedure:
              </p>
              <ol className="space-y-2 pl-5 list-decimal text-gray-700">
                <li>Identify the specific alarm and its severity</li>
                <li>Take immediate action for critical alarms (low water, high pressure)</li>
                <li>For non-critical alarms, investigate cause while maintaining watch</li>
                <li>Record all alarms and responses in logbook</li>
                <li>Never reset alarms without addressing the root cause</li>
                <li>Report persistent or recurring alarms to senior engineer</li>
              </ol>
              
              <div className="mt-4 flex items-center bg-white p-3 rounded">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-800">
                  Complete alarm response procedures are detailed in the ship's boiler operating manual.
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Shutdown Procedures" className="bg-white">
        <div className="prose max-w-none">
          <p>
            Proper shutdown procedures are essential for boiler longevity and safety. The method used depends on whether the shutdown is planned or emergency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Normal Shutdown</h3>
              <ol className="space-y-3 pl-5 list-decimal">
                <li>Reduce load gradually to minimum firing rate</li>
                <li>Allow pressure to stabilize at each reduction</li>
                <li>Close main steam stop valve when permitted by operations</li>
                <li>Shut off fuel supply to burners</li>
                <li>Continue running forced draft fan for post-purge</li>
                <li>Maintain water circulation if available</li>
                <li>Allow natural cooling if boiler will be down for extended period</li>
                <li>Implement wet or dry storage procedures based on outage duration</li>
              </ol>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergency Shutdown</h3>
              <p className="text-gray-800 mb-4">
                Perform emergency shutdown only in these situations:
              </p>
              <ul className="space-y-2 pl-5 list-disc text-gray-800">
                <li>Water level not visible in gauge glass</li>
                <li>Pressure exceeds maximum allowable working pressure</li>
                <li>Major steam, water, or fuel leak detected</li>
                <li>Failure of critical safety systems</li>
                <li>Fire in the boiler area</li>
                <li>Abnormal furnace conditions (e.g., explosion)</li>
              </ul>
              
              <div className="mt-4 p-3 bg-white rounded-md">
                <h4 className="font-medium text-red-700 mb-2">Emergency Procedure</h4>
                <ol className="space-y-1 pl-5 list-decimal text-gray-800 text-sm">
                  <li>Activate emergency shutdown button</li>
                  <li>Shut off all fuel supply</li>
                  <li>Close main steam valve if safe to do so</li>
                  <li>Report situation to engine room and bridge</li>
                  <li>Do NOT add water to an overheated boiler</li>
                  <li>Follow vessel's emergency procedures</li>
                </ol>
              </div>
            </div>
          </div>
          
          <h3>Post-Shutdown Actions</h3>
          <p>
            After shutdown, several actions are required to preserve the boiler system:
          </p>
          
          <ul>
            <li>
              <strong>Short-term shutdown (less than 1 week):</strong> Maintain boiler in wet standby condition with proper water treatment.
            </li>
            <li>
              <strong>Medium-term shutdown (1-4 weeks):</strong> Use wet storage with nitrogen capping and additional protective chemicals.
            </li>
            <li>
              <strong>Long-term shutdown (over 1 month):</strong> Implement dry storage after thorough cleaning and drying of all surfaces.
            </li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-4">Documentation Requirements</h3>
            <p className="mb-4">
              Complete the following documentation for all shutdowns:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Boiler shutdown entry in engine room log</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Water treatment record with final readings</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Maintenance work list for downtime period</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Equipment handover form between watches</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>For emergency shutdowns: incident report with timeline and actions</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>
      
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Learn More About Boiler Maintenance?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Discover essential maintenance procedures and troubleshooting techniques to keep your marine boiler systems operating efficiently and safely.
          </p>
          <a 
            href="/maintenance" 
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Explore Maintenance Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;