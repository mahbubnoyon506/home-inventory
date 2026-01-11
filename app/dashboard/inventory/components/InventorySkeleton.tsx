import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const InventorySkeleton = () => {
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
};

export default InventorySkeleton;
