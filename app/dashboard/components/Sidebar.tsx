// src/components/Sidebar.tsx
"use client";
import { Tag, ChartLine, MapPin, Settings, Box } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import NavItem from "./NavItem";
import UserInfo from "./UserInfo";

const navItems = [
  { name: "Inventory", icon: <Box />, href: "inventory" },
  { name: "Locations", icon: <MapPin />, href: "locations" },
  { name: "Labels", icon: <Tag />, href: "#" },
  { name: "Reports", icon: <ChartLine />, href: "#" },
];

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-between bg-white overflow-hidden">
      <div className="flex-none">
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
      </div>
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto scrollbar-hide">
        {navItems.map((item, i) => (
          <NavItem
            key={i}
            href={`/dashboard/${item.href}`}
            icon={item.icon}
            label={item.name}
          />
        ))}
        <Separator className="my-2" />
        <NavItem href={`#`} icon={<Settings />} label="Settings" />
      </nav>
      <UserInfo />
    </div>
  );
}
