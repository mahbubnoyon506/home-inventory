import { Badge } from "@/components/ui/badge";
import { ItemDetail, Label } from "@/lib/types";
import { Calendar, MapPin } from "lucide-react";
import React from "react";
import { format } from "date-fns";
interface PageProps {
  item: ItemDetail;
}

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

const ItemContent = ({ item }: PageProps) => {
  return (
    <div className="">
      <div className="border rounded-xl bg-white">
        <div className="p-6 space-y-6">
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
              {item?.notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
