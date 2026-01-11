import { Bell, CircleQuestionMark } from "lucide-react";

const HeaderBar = () => {
  return (
    <div>
      <div className="border-b bg-white p-2 md:p-4 flex md:justify-between md:items-center gap-3">
        <div className="flex-1 flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <p className="text-[#0F172A] md:text-xl font-semibold">Locations</p>
            <p className="text-[#64748B] text-sm">
              Organize your items by location
            </p>
          </div>
        </div>
        <div className="md:flex-1 flex items-center gap-3 md:justify-end">
          <Bell className="text-[#64748B] w-5 h-5" />
          <CircleQuestionMark className="text-[#64748B] w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
