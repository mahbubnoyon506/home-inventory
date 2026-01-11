import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { InventoryItem, Label } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface InventoryProps {
  item: InventoryItem;
}
const Inventory = ({ item }: InventoryProps) => {
  const router = useRouter();
  return (
    <tr
      key={item.id}
      className="hover:bg-slate-50 transition-colors cursor-pointer"
      onClick={() => router.push(`/dashboard/inventory/${item.id}`)}
    >
      <td className="p-4 font-medium text-[#334155]">
        <Checkbox
          className="cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        />
      </td>
      <td className="p-4 font-medium">
        <div className="flex gap-2 items-center">
          <Image
            width={48}
            height={48}
            src="/assets/images/placeholder-image.png"
            alt=""
            className="w-12 h-12 rounded"
          />
          <div>
            <p className="text-[#0F172A] font-medium">{item.name}</p>
            <p className="text-sm text-[#64748B]"> {item.description}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm text-[#64748B]">
        {item.location?.name || "N/A"}
      </td>
      <td className="p-4">
        <div className="flex gap-2">
          {item.labels.map((label: Label) => (
            <Badge
              key={label.id}
              variant="outline"
              className="border-none font-medium"
              style={{
                color: label.color,
                backgroundColor: label.background,
              }}
            >
              {label.name}
            </Badge>
          ))}
        </div>
      </td>
      <td className="p-4 text-sm text-[#64748B]">{item.quantity}</td>
      <td className="p-4 text-sm text-[#64748B]">
        {formatDistanceToNow(new Date(item.updatedAt))} ago
      </td>
      <td className="p-4 text-sm text-[#64748B]">
        <EllipsisVertical className="w-5 h-5 text-gray-400" />
      </td>
    </tr>
  );
};

export default Inventory;
