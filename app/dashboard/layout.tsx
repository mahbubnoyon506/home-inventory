import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Box, Search } from "lucide-react";
import React from "react";
import Sidebar from "./components/Sidebar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC]">
      {/* Left Sidebar */}
      <aside className="w-20 md:w-64 flex-col border-r bg-white lg:flex">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        <section className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">
          {children}
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
