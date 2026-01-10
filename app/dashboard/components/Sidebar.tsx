"use client";
import {
  Home,
  Users,
  HatGlasses,
  ListTodo,
  Box,
  LocationEdit,
  LocationEditIcon,
  Tag,
  ChartLine,
  MapPin,
  Settings,
  EllipsisVertical,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
// import { useAuth } from "@/context/AuthContext";
import NavItem from "./NavItem";

const navItems = [
  {
    name: "Inventory",
    icon: <Home />,
    href: "inventory",
  },
  {
    name: "Locations",
    icon: <MapPin />,
    href: "locations",
  },
  {
    name: "Labels",
    icon: <Tag />,
    href: "labels",
  },
  {
    name: "Reports",
    icon: <ChartLine />,
    href: "all-agents",
  },
];

export default function Sidebar() {
  //   const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="flex items-center justify-center md:justify-start gap-3 p-6">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <Box size={24} />
        </div>
        <div className="hidden md:inline-block">
          <h2 className="font-bold text-slate-800">Home Inventory</h2>
          <p className="text-xs text-slate-500">Manage your items</p>
        </div>
      </div>
      <Separator />
      <nav className={`flex-1 p-3 space-y-2`}>
        {navItems.map((item, i) => (
          <NavItem
            key={i}
            href={`/dashboard/${item.href}`}
            icon={item.icon}
            label={item.name}
          />
        ))}
        <Separator />
        <NavItem
          href={`/dashboard/settings`}
          icon={<Settings />}
          label="Settings"
        />
      </nav>
      <div>
        <Separator />
        <div className="flex items-center justify-center md:justify-start gap-3 p-6">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Box size={24} />
          </div>
          <div className="hidden md:inline-block">
            <h2 className="font-medium text-slate-800">Home Inventory</h2>
            <p className="text-xs text-slate-500">Manage your items</p>
          </div>
          <EllipsisVertical className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
