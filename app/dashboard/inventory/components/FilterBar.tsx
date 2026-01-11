import { ArrowDownWideNarrow, Download, Plus, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FilterBar = () => {
  return (
    <div>
      <div className="bg-white p-2 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex-1 flex gap-3 items-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#0F172A]">
            Inventory
          </h1>
          <div className="relative md:w-full">
            <Search className=" w-4 h-4 text-gray-400 absolute top-3 left-2" />
            <Input
              name="search items"
              placeholder="Search items..."
              type="search"
              className="pl-7"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 md:justify-end">
          <Button
            variant="outline"
            className="text-[#334155] font-semibold cursor-pointer"
          >
            <Download /> Export
          </Button>
          <Button className="font-semibold bg-[#3B82F6] hover:bg-[#4179d3] cursor-pointer">
            <Plus /> Add Item
          </Button>
        </div>
      </div>
      <Separator />
      <div className="bg-white p-2 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex-1 flex gap-3 items-center">
          <p className="text-sm font-medium text-[#334155]">Filters:</p>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#EFF6FF] text-[#3B82F6] rounded-sm py-1.5">
              All Locations
              <X />
            </Badge>
            <Badge className="bg-[#EFF6FF] text-[#3B82F6] rounded-sm py-1.5">
              In Stock
              <X />
            </Badge>
            <Button
              className="font-medium text-[#334155] text-sm cursor-pointer"
              variant="outline"
              size="sm"
            >
              <Plus /> Add Filter
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 md:justify-end">
          <p className="text-[#475569] text-sm">248 items</p>
          <Button
            className="font-normal text-[#334155] text-sm cursor-pointer"
            variant="outline"
            size="sm"
          >
            <ArrowDownWideNarrow /> Sort: Updated
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default FilterBar;
