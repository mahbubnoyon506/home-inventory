"use client";

import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderBar from "./components/HeaderBar";
import LocationsData from "./components/LocationsData";
import SelfLocations from "./components/SelfLocations";
import BookShelf from "./components/BookShelf";

export default function LocationsPage() {
  return (
    <>
      <HeaderBar />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-4 bg-white border-r">
          <div className="space-y-4 p-2 md:p-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-slate-400"
                size={18}
              />
              <Input
                placeholder="Search locations..."
                className="pl-10 bg-white"
              />
            </div>
            <Button className="w-full font-semibold bg-blue-600 hover:bg-blue-700 gap-2">
              <Plus size={18} /> New Location
            </Button>
          </div>
          <LocationsData />
        </div>

        <div className="md:col-span-8 space-y-6 p-2 md:p-4">
          <BookShelf />
          <SelfLocations />
        </div>
      </div>
    </>
  );
}
