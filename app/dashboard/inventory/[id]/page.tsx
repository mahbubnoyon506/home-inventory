"use client";

import { useParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { useItemDetails } from "@/hooks/useItems";
import HeaderBar from "./components/HeaderBar";
import { Label } from "@/lib/types";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const { data: item, isLoading } = useItemDetails(id as string);

  if (isLoading) return <div className="p-8">Loading Item Details...</div>;
  if (!item) return <div className="p-8">Item not found.</div>;

  return (
    <div className="">
      <HeaderBar item={item} />

      {/* Main Content Grid */}
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

          <div className="">
            <Card className="shadow-sm border-slate-200 rounded-2xl">
              <CardContent className="p-6 space-y-6">
                <h3 className="font-semibold md:text-lg text-[#0F172A]">
                  Key Details
                </h3>

                <DetailItem
                  icon={<MapPin className="text-blue-500" />}
                  label="Location"
                  value={item.location.name}
                />

                <div className="space-y-1">
                  <p className="text-sm text-[#334155] font-medium">Labels</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.labels.map((label: Label) => (
                      <Badge
                        key={label.id}
                        variant="secondary"
                        className="rounded-full font-normal"
                        style={{
                          color: label.color,
                          backgroundColor: label.background,
                        }}
                      >
                        {label.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <DetailItem label="Quantity" value={item.quantity.toString()} />
                <DetailItem
                  icon={<Calendar className="text-slate-400" />}
                  label="Purchase Date"
                  value={
                    item.purchaseTime
                      ? format(new Date(item.purchaseTime), "MMMM dd, yyyy")
                      : "N/A"
                  }
                />
                <DetailItem
                  label="Purchase Price"
                  value={`$${item.purchasePrice.toFixed(2)}`}
                />

                <div className="space-y-1">
                  <p className="text-sm text-[#334155] font-medium">Warranty</p>
                  <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
                    Active until{" "}
                    {item.warrantyExpires
                      ? format(new Date(item.warrantyExpires), "MMMM dd, yyyy")
                      : "N/A"}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-[#334155] font-medium">Notes</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full mt-4">
          <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[#3B82F6] data-[state=active]:bg-transparent data-[state=active]:text-[#3B82F6] px-0 pb-3 text-sm font-medium"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="attachments"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[#3B82F6] data-[state=active]:bg-transparent data-[state=active]:text-[#3B82F6] px-0 pb-3 text-sm font-medium"
            >
              Attachments
              <Badge className="ml-2 bg-slate-100 text-slate-600 hover:bg-slate-100">
                {item.attachments.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[#3B82F6] data-[state=active]:bg-transparent data-[state=active]:text-[#3B82F6] px-0 pb-3 text-sm font-medium"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="details"
            className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-[#0F172A] text-sm">
                Product Information
              </h4>
              <div className="space-y-3">
                <InfoRow label="Brand" value={item.manufacturer || "N/A"} />
                <InfoRow label="Model" value={item.modelNumber || "N/A"} />
                <InfoRow label="Color" value="Black" />{" "}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-[#0F172A] text-sm">
                Additional Details
              </h4>
              <div className="space-y-3">
                <InfoRow
                  label="Serial Number"
                  value={item.serialNumber || "N/A"}
                />
                <InfoRow
                  label="Purchased From"
                  value={item.purchaseFrom || "N/A"}
                />
                <InfoRow
                  label="Last Updated"
                  value={format(new Date(item.updatedAt), "PPP, p")}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Reusable Sub-components
function DetailItem({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-[#334155] font-medium">{label}</p>
      <div className="flex items-center gap-2 text-[#0F172A]">
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-50 pb-2">
      <span className="text-[#475569] text-sm">{label}</span>
      <span className="text-[#0F172A] text-sm font-medium">{value}</span>
    </div>
  );
}
