import React from "react";
import Sidebar from "./components/Sidebar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full bg-[#F8FAFC] ">
      {/* Left Sidebar */}
      <aside className="w-20 md:w-64 flex-col border-r bg-white lg:flex">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col">
        <section className="flex-1 bg-[#F8FAFC]">{children}</section>
      </main>
    </div>
  );
};

export default RootLayout;
