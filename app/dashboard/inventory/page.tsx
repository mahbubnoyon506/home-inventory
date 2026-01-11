"use client";

import { formatDistanceToNow } from "date-fns";
import { useItems } from "@/hooks/useItems";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import FilterBar from "./components/FilterBar";
import { InventoryItem } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PaginationBar from "./components/PaginationBar";

export default function InventoryPage() {
  const router = useRouter();
  const { data, isLoading, isError } = useItems();

  if (isLoading) return <InventorySkeleton />;
  if (isError)
    return <div className="p-4 text-red-500">Failed to load inventory.</div>;

  return (
    <div className="flex flex-col justify-between h-screen">
      <FilterBar />
      <div>
        <div className="px-2 md:px-4 pt-4 md:pt-10 ">
          <div className="rounded-t-xl border bg-white shadow-sm overflow-y-scroll max-h-96">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b text-slate-500 text-sm uppercase">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    <Checkbox />
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Item
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Location
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Labels
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Updated
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[#334155]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data?.items.map((item: InventoryItem) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/inventory/${item.id}`)
                    }
                  >
                    <td className="p-4 font-medium">
                      <Checkbox />
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
                          <p className="text-[#0F172A] font-medium">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#64748B]">
                            {" "}
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[#64748B]">
                      {item.location?.name || "N/A"}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {item.labels.map((label) => (
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
                    <td className="p-4 text-sm text-[#64748B]">
                      {item.quantity}
                    </td>
                    <td className="p-4 text-sm text-[#64748B]">
                      {formatDistanceToNow(new Date(item.updatedAt))} ago
                    </td>
                    <td className="p-4 text-sm text-[#64748B]">
                      <EllipsisVertical className="w-5 h-5 text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <PaginationBar />
      </div>
    </div>
  );
}

function InventorySkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-48" />
      <div className="rounded-xl border h-100">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4 p-6 border-b">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}
