import { useState, useEffect } from "react";
import { Sun, CloudRain, Cloud } from "lucide-react";

export function WeatherWidget({ isScrolled }: { isScrolled: boolean }) {
  const [temp, setTemp] = useState(30);
  const [icon, setIcon] = useState(<Sun className="w-3 h-3" />);

  useEffect(() => {
    // Simulated weather update
    const interval = setInterval(() => {
      const newTemp = Math.floor(Math.random() * 5) + 28;
      setTemp(newTemp);
      
      const icons = [<Sun className="w-3 h-3" />, <Cloud className="w-3 h-3" />, <CloudRain className="w-3 h-3" />];
      setIcon(icons[Math.floor(Math.random() * icons.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center space-x-1 text-xs font-mono px-2 py-1 rounded-full ${isScrolled ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-white'}`}>
      {icon}
      <span>{temp}°C</span>
      <span className="hidden sm:inline">Karawang</span>
    </div>
  );
}
