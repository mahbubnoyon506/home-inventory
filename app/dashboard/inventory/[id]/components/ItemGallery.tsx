"use client";

import { useState } from "react";
import { Camera, Plus, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ItemGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const placeholders = [0, 1, 2, 3];

  return (
    <div className="w-full max-w-2xl space-y-4 p-4 bg-white rounded-xl border">
      <div className="relative aspect-16/12 w-full overflow-hidden rounded-xl bg-slate-100/50 flex flex-col items-center justify-center group transition-all hover:bg-slate-50">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <div className="rounded-full bg-white p-4 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
            <Camera size={32} strokeWidth={1.5} />
          </div>
          <div className="text-center">
            <p className="font-medium text-slate-500">Primary Image</p>
            <div className="h-1px w-24 bg-slate-200 mt-2 mx-auto" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {placeholders.map((idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "relative h-20 w-20 shrink-0 rounded-xl border-2 transition-all overflow-hidden bg-slate-100/50 flex items-center justify-center",
              activeTab === idx
                ? "border-blue-500 ring-2 ring-blue-50 bg-white"
                : "border-slate-200 hover:border-slate-300"
            )}
          >
            <div className="absolute inset-0 opacity-20 blur-sm bg-linear-to-br from-blue-400 via-purple-400 to-pink-400" />
            <ImageIcon className="relative text-slate-300" size={20} />
          </button>
        ))}

        <button className="h-20 w-20 shrink-0 rounded-xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/50 transition-all">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}
