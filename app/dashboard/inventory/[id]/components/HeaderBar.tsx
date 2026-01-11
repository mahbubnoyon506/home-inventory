import { Button } from "@/components/ui/button";
import { ChevronRight, Paperclip, Pencil, Trash, Trash2 } from "lucide-react";
import React from "react";
interface PageProps {
  name: string;
}
const HeaderBar = ({ name }: PageProps) => {
  return (
    <div>
      <div className="border-b bg-white p-2 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex-1 flex gap-3 items-center">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="text-[#64748B] text-sm">Inventory</span>
            <ChevronRight size={14} />
            <span className="text-[#0F172A] font-medium text-sm">{name}</span>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 md:justify-end">
          <Button variant="outline" className="text-[#334155] font-semibold">
            <Pencil /> Edit
          </Button>
          <Button className="font-semibold bg-[#3B82F6] hover:bg-[#4179d3]">
            <Paperclip /> Add Attachment
          </Button>
          <Button
            variant="outline"
            className="font-semibold gap-2 text-red-600 border-red-100 hover:bg-red-50"
          >
            <Trash2 size={14} /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
