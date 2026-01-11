import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { ItemDetail } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  item: ItemDetail;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-50 pb-2">
      <span className="text-[#475569] text-sm">{label}</span>
      <span className="text-[#0F172A] text-sm font-medium">{value}</span>
    </div>
  );
}

const ItemDetailsTab = ({ item }: PageProps) => {
  return (
    <Tabs defaultValue="details" className="w-full mt-4">
      <TabsList className="bg-transparent border-b rounded-none justify-start h-auto px-3 py-1 gap-8">
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
            <InfoRow label="Serial Number" value={item.serialNumber || "N/A"} />
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
      <TabsContent value="attachments" className="pt-8">
        Will update later
      </TabsContent>
      <TabsContent value="activity" className="pt-8">
        Will update later
      </TabsContent>
    </Tabs>
  );
};

export default ItemDetailsTab;
