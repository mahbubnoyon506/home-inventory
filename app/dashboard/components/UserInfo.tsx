"use client";

import { useRouter } from "next/navigation";
import { LogOut, EllipsisVertical, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export default function UserInfo() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    router.push("/");
  };

  return (
    <div className="flex-none">
      <Separator />
      <div className="flex items-center justify-center md:justify-between gap-3 p-6">
        <div className="flex items-center gap-3">
          <div className="bg-slate-200 p-2 rounded-full text-slate-600">
            <User size={20} />
          </div>
          <div className="hidden md:inline-block">
            <h2 className="font-medium text-sm text-slate-800">John Doe</h2>
            <p className="text-[10px] text-slate-500">john@example.com</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="outline-none focus:ring-2 focus:ring-slate-100 rounded-md p-1 transition-colors hover:bg-slate-100 hidden md:block">
              <EllipsisVertical className="w-5 h-5 text-slate-400 cursor-pointer" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600 focus:text-red-600 cursor-pointer flex items-center gap-2"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
