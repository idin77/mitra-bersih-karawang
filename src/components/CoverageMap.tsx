import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { primaryAreas } from './ServiceAreas';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function CoverageMap() {
  const center = { lat: -6.35, lng: 107.35 };
  const [openInfoWindowArea, setOpenInfoWindowArea] = useState<string | null>(null);

  if (!hasValidKey) {
    return (
      <div className="h-full w-full rounded-2xl border border-slate-200 flex items-center justify-center p-4">
        <p className="text-sm text-slate-500">Peta layanan belum dikonfigurasi.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-slate-200">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={center}
          defaultZoom={11}
          mapId="COVERAGE_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{width: '100%', height: '100%'}}
        >
          {primaryAreas.map((area) => (
            area.lat && area.lng && (
              <AdvancedMarker 
                key={area.name} 
                position={{lat: area.lat, lng: area.lng}} 
                title={area.name}
                onClick={() => setOpenInfoWindowArea(area.name)}
              >
                <Pin background="#059669" glyphColor="#fff" />
                {openInfoWindowArea === area.name && (
                  <InfoWindow position={{lat: area.lat, lng: area.lng}} onCloseClick={() => setOpenInfoWindowArea(null)}>
                    <div className="p-2">
                      <h3 className="font-bold text-sm">{area.name}</h3>
                      <p className="text-xs text-slate-600 mt-1">{area.highlight}</p>
                      <a 
                        href="https://wa.me/6281234567890" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block mt-2 text-xs font-bold text-emerald-600 hover:underline"
                      >
                        Hubungi via WhatsApp
                      </a>
                    </div>
                  </InfoWindow>
                )}
              </AdvancedMarker>
            )
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
