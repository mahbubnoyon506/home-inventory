"use client";

import { useItems } from "@/hooks/useItems";
import FilterBar from "./components/FilterBar";
import { Checkbox } from "@/components/ui/checkbox";
import PaginationBar from "./components/PaginationBar";
import InventorySkeleton from "./components/InventorySkeleton";
import Inventory from "./components/Inventory";
import { InventoryItem } from "@/lib/types";
import { useState } from "react";

export default function InventoryPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useItems();
  if (isLoading) return <InventorySkeleton />;

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
                  <Inventory key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <PaginationBar
          currentPage={page}
          totalPages={data.total}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
