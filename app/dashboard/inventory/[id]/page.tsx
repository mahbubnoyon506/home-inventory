"use client";

import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import { useItemDetails } from "@/hooks/useItems";
import HeaderBar from "./components/HeaderBar";
import { Label } from "@/lib/types";
import ItemContent from "./components/ItemContent";
import ItemDetailsTab from "./components/ItemDetailsTab";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const { data: item, isLoading } = useItemDetails(id as string);
  if (isLoading) return <div className="p-8">Loading Item Details...</div>;

  return (
    <div className="">
      <HeaderBar name={item.name} />
      <div className="p-2 md:p-4 space-y-3 md:space-y-6">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] ">
            {item.name}
          </h1>
          <div className="flex gap-2">
            {item.labels.map((label: Label) => (
              <Badge
                key={label.id}
                style={{
                  backgroundColor: `${label.color}20`,
                  color: label.color,
                }}
              >
                {label.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div className="aspect-4/3 w-full rounded-2xl bg-slate-100 border flex items-center justify-center overflow-hidden">
              <div className="text-slate-400 flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <Tag className="text-slate-300" />
                </div>
                <span className="text-sm">Main Item Image</span>
              </div>
            </div>
          </div>
          <ItemContent item={item} />
        </div>
        <ItemDetailsTab item={item} />
      </div>
    </div>
  );
}
