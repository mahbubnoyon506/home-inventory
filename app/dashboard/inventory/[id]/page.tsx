"use client";

import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { useItemDetails } from "@/hooks/useItems";
import HeaderBar from "./components/HeaderBar";
import { Label } from "@/lib/types";
import ItemContent from "./components/ItemContent";
import ItemDetailsTab from "./components/ItemDetailsTab";
import { ItemGallery } from "./components/ItemGallery";

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
          <ItemGallery />
          <ItemContent item={item} />
        </div>
        <ItemDetailsTab item={item} />
      </div>
    </div>
  );
}
