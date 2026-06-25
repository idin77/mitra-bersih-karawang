import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { primaryAreas } from './ServiceAreas';

// Fix for default marker icons in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function CoverageMap() {
  const center: [number, number] = [-6.3, 107.35]; // Roughly Karawang area center

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-slate-200">
      <MapContainer center={center} zoom={11} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {primaryAreas.map((area) => (
          area.lat && area.lng && (
            <Marker key={area.name} position={[area.lat, area.lng]}>
              <Popup>
                <div className="text-xs">
                  <h4 className="font-bold">{area.name}</h4>
                  <p>{area.highlight}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}
