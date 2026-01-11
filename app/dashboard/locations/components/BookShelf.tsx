import { Button } from "@/components/ui/button";
import {
  BookText,
  ChevronRight,
  Home,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

const BookShelf = () => {
  return (
    <div className="border-none shadow-sm rounded-xl bg-white">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#CCFBF1] flex items-center justify-center text-[#0D9488]">
              <BookText size={24} />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">
                Bookshelf
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <Home size={14} /> Home <ChevronRight size={12} /> Living Room
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="font-semibold text-[#334155] gap-2 cursor-pointer"
            >
              <Pencil size={14} /> Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="font-semibold gap-2 text-blue-600 bg-blue-50 border-blue-100 hover:bg-blue-100"
            >
              <Plus size={14} /> Add Child
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="font-semibold gap-2 text-red-600 border-red-100 hover:bg-red-50 cursor-pointer"
            >
              <Trash2 size={14} /> Delete
            </Button>
          </div>
        </div>

        <p className="mt-4 text-[#64748B] text-xs font-semibold uppercase tracking-wide">
          Description
        </p>
        <p className="mt-2 text-[#334155] trxt-sm">
          White wooden bookshelf in the living room containing books,
          decorations, and collectibles. Located next to the window.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-slate-50">
          <div>
            <p className="text-xs text-[#64748B] uppercase font-semibold tracking-wider mb-1">
              Items
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#0F172A]">2</p>
          </div>
          <div>
            <p className="text-xs text-[#64748B] uppercase font-semibold tracking-wider mb-1">
              Total Value
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#0F172A]">$245</p>
          </div>
          <div>
            <p className="text-xs text-[#64748B] uppercase font-semibold tracking-wider mb-1">
              Created
            </p>
            <p className="text-sm font-medium text-[#334155] pt-1">
              Jan 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
