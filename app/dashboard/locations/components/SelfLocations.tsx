import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Camera, Plus } from "lucide-react";
import Image from "next/image";

const MOCK_LOCATION_ITEMS = [
  {
    id: "item_v1",
    name: "Vintage Camera Collection",
    category: "Electronics",
    added: "Added 2 weeks ago",
    price: 180,
    status: "Good",
    statusColor: "#10B981",
    icon: <Camera className="text-white" size={18} />,
  },
  {
    id: "item_b1",
    name: "Book Collection",
    category: "Books",
    added: "Added 1 month ago",
    price: 65,
    status: "Good",
    statusColor: "#10B981",
    icon: <Book className="text-white" size={18} />,
  },
];
const SelfLocations = () => {
  return (
    <div className="space-y-4 bg-white border rounded-xl p-3 md:p-5">
      <div className="flex justify-between items-center">
        <h3 className="md:text-lg font-semibold text-[#0F172A]">
          Items in this Location
        </h3>
        <Button
          variant="link"
          className="text-[#3B82F6] gap-1 text-sm font-medium"
        >
          View All <ArrowRight size={14} />
        </Button>
      </div>

      <div className="space-y-3">
        {MOCK_LOCATION_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white border hover:border-blue-200 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  width={48}
                  height={48}
                  src="/assets/images/placeholder-image.png"
                  alt=""
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h4 className="text-sm font-medium text-[#0F172A] group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    {item.category} • {item.added}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-[#0F172A]">
                  ${item.price}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs h-5 border-none bg-[#DCFCE7] text-[#166534] px-2"
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full border border-dashed border-slate-200 text-blue-600 hover:bg-blue-50/50 py-8 gap-2"
      >
        <Plus size={18} /> Add Item to this Location
      </Button>
    </div>
  );
};

export default SelfLocations;
