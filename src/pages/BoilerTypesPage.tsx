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
        imageSrc=""
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
              imageSrc="https://iili.io/FEPJOI2.png" 
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
              imageSrc="https://iili.io/F1uXJwu.png" 
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
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* --- BAGIAN P&ID OSAKA BOILER --- */}
      <ContentSection title="Piping & Instrumentation Diagram (P&ID)" className="bg-gray-50" id="pid-diagram">
        <div className="prose max-w-none text-gray-700">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mb-6 rounded-r-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3 border-b border-blue-200 pb-2">Spesifikasi Boiler Diagram</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700 mb-1 font-semibold">Merek (Manufacturer)</p>
                <p className="text-lg text-blue-900 font-bold">Osaka Boiler Mfg. Co.</p>
              </div>
              <div>
                <p className="text-sm text-blue-700 mb-1 font-semibold">Tipe (Boiler Type)</p>
                <p className="text-lg text-blue-900 font-bold">Composite Boiler <span className="text-sm font-normal text-blue-800">(Exhaust Gas & Oil Fired)</span></p>
              </div>
            </div>
          </div>

          <p className="text-lg mb-6">
            Gambar di bawah ini adalah <strong>Piping & Instrumentation Diagram (P&ID)</strong> yang menunjukkan bagaimana air, uap, bahan bakar, dan udara mengalir serta bagaimana sistem tersebut dikontrol pada boiler di atas.
          </p>
          
          <div className="my-8 flex justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <img 
              src="https://i.ibb.co.com/Wvfs943t/Gemini-Generated-Image-debeizdebeizdebe.png" 
              alt="P&ID Osaka Boiler" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-800 mb-3 border-b border-gray-200 pb-2">1. Sistem Pengumpan Air (Feed Water System)</h3>
              <p className="text-sm mb-3">Di sisi kiri bawah, terdapat dua jalur masuk utama:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Main Feed Water Line:</strong> Jalur utama air pengisi boiler.</li>
                <li><strong>Aux Feed Water Line:</strong> Jalur cadangan (auxiliary) jika jalur utama bermasalah.</li>
                <li><strong>V3 & V4:</strong> Merupakan katup penahan (Stop Valve) dan katup satu arah (Check Valve) untuk memastikan air masuk ke boiler dan tidak berbalik arah saat tekanan boiler tinggi.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-800 mb-3 border-b border-gray-200 pb-2">2. Sistem Uap & Keamanan (Steam & Safety)</h3>
              <p className="text-sm mb-3">Bagian atas boiler adalah tempat uap berkumpul:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>V2 (Steam Stop Valve):</strong> Katup utama untuk menyalurkan uap keluar menuju sistem yang membutuhkan (misalnya pemanas atau mesin).</li>
                <li><strong>V1 (Safety Valve):</strong> Komponen paling krusial. Terdapat dua katup pengaman yang akan terbuka otomatis jika tekanan di dalam boiler melebihi batas aman untuk mencegah ledakan.</li>
                <li><strong>V11 (Air Vent Valve):</strong> Digunakan untuk membuang udara saat boiler pertama kali diisi air atau saat mulai dipanaskan.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-800 mb-3 border-b border-gray-200 pb-2">3. Sistem Pembakaran (Burner System)</h3>
              <p className="text-sm mb-3">Di sisi kanan, terdapat unit Burner (B1):</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Burner Cont. Panel:</strong> Panel kontrol yang mengatur kapan api harus menyala atau mati berdasarkan tekanan uap.</li>
                <li><strong>Fuel Burning Gas Outlet:</strong> Saluran gas hasil pembakaran menuju cerobong.</li>
                <li><strong>B2 (Pressure Switch):</strong> Sensor yang mendeteksi tekanan uap. Jika tekanan sudah cukup, sensor ini memberi sinyal ke panel untuk mematikan burner.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-800 mb-3 border-b border-gray-200 pb-2">4. Monitoring & Level Air (Instrumentation)</h3>
              <p className="text-sm mb-3">Boiler harus selalu memiliki level air yang pas:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>WLG (Water Level Gauge):</strong> Gelas duga di sisi kanan (V14) yang memungkinkan operator melihat langsung ketinggian air di dalam boiler secara visual.</li>
                <li><strong>T1 (Thermometer):</strong> Sensor suhu untuk memantau panas air dan uap.</li>
                <li><strong>M (Manometer/Pressure Gauge):</strong> Alat ukur tekanan yang dipasang di bagian atas agar operator tahu berapa tekanan kerja boiler saat ini.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-800 mb-3 border-b border-gray-200 pb-2">5. Sistem Pembersihan (Blow-off System)</h3>
              <p className="text-sm mb-3">Di bagian bawah terdapat jalur pembuangan:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>V5 (Surface Blow-off):</strong> Membuang kotoran atau minyak yang mengapung di permukaan air.</li>
                <li><strong>V6 (Bottom Blow-off):</strong> Membuang endapan lumpur atau kerak yang mengendap di dasar boiler.</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* --- BAGIAN BARU: DAFTAR MEREK & TIPE BOILER LAINNYA --- */}
      <ContentSection title="Popular Marine Boiler Manufacturers" className="bg-white" id="manufacturers">
        <div className="prose max-w-none text-gray-700 mb-8">
          <p>
            Selain Osaka Boiler, terdapat berbagai produsen (manufaktur) terkemuka lainnya di dunia perkapalan yang mensuplai berbagai tipe boiler untuk kebutuhan kapal komersial maupun angkatan laut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Alfa Laval */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Alfa Laval (Aalborg)</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Swedia / Denmark</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>Aalborg OL (Oil-Fired Boiler)</li>
              <li>Aalborg EX (Exhaust Gas Boiler)</li>
              <li>Aalborg Mission (Composite Boiler)</li>
            </ul>
          </div>

          {/* Miura */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Miura Co., Ltd.</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Jepang</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>HB Series (Marine Auxiliary Boiler)</li>
              <li>Gas-Fired Marine Boilers</li>
              <li>Thermal Fluid Heaters</li>
            </ul>
          </div>

          {/* KangRim */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">KangRim Heavy Ind.</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Korea Selatan</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>PB Series (Water Tube Boiler)</li>
              <li>PA Series (Composite Boiler)</li>
              <li>Exhaust Gas Economizers</li>
            </ul>
          </div>

          {/* SAACKE */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">SAACKE</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Jerman</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>FMB-VF (Vertical Fire-Tube Boiler)</li>
              <li>FMB-VD (Water-Tube Boiler)</li>
              <li>Composite Boilers</li>
            </ul>
          </div>

          {/* Mitsubishi */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Mitsubishi Heavy Ind.</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Jepang</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>MAC Series (Auxiliary Boiler)</li>
              <li>MCB Series (Composite Boiler)</li>
              <li>Two-Drum Water Tube Boilers</li>
            </ul>
          </div>

          {/* Babcock & Wilcox */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-blue-900 mb-2">Babcock & Wilcox</h4>
            <p className="text-sm text-gray-500 mb-3 border-b pb-2">Amerika Serikat</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>D-Type Water Tube Boilers</li>
              <li>M-Type Marine Boilers</li>
              <li>Header-Type Boilers (Naval)</li>
            </ul>
          </div>
        </div>
      </ContentSection>
      {/* --- AKHIR BAGIAN MEREK & TIPE BOILER --- */}
      
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
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Design Features</h3>
              <ul className="space-y-2">
                <li>Typically water-tube configuration</li>
                <li>Integrated with main engine exhaust system</li>
                <li>May include supplementary firing capability</li>
                <li>Often part of combined system with oil-fired boilers</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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