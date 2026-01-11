import { Archive, ChevronRight, Home, Warehouse } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

const MOCK_LOCATIONS = [
  { id: "loc_home", name: "Home", icon: <Home size={16} />, count: 12 },
  { id: "loc_garage", name: "Garage", icon: <Warehouse size={16} />, count: 8 },
  {
    id: "loc_storage",
    name: "Storage Unit",
    icon: <Archive size={16} />,
    count: 15,
  },
];

const LocationsData = () => {
  const [activeLocation, setActiveLocation] = useState("loc_home");

  return (
    <div className="space-y-1">
      {MOCK_LOCATIONS.map((loc) => (
        <div
          key={loc.id}
          onClick={() => setActiveLocation(loc.id)}
          className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
            activeLocation === loc.id
              ? "bg-gray-50 shadow-sm"
              : "hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <ChevronRight
              size={14}
              className={
                activeLocation === loc.id ? "text-blue-500" : "text-slate-400"
              }
            />
            <span
              className={
                activeLocation === loc.id ? "text-blue-600" : "text-slate-400"
              }
            >
              {loc.icon}
            </span>
            <span
              className={`font-medium text-sm ${
                activeLocation === loc.id ? "text-[#0F172A]" : "text-[#334155]"
              }`}
            >
              {loc.name}
            </span>
          </div>
          <Badge
            variant="secondary"
            className="bg-slate-100 text-slate-500 font-normal"
          >
            {loc.count}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default LocationsData;
