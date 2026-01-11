import { GlobalPagination } from "@/components/ui/GlobalPagination";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const PaginationBar = ({
  currentPage = 1,
  totalPages = 10,
  setPage = () => "",
}) => {
  return (
    <div>
      <div className="border-t bg-white p-2 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="">
          <p className="text-sm text-[#64748B]">
            Showing <span className="text-[#0F172A] font-semibold">1-8</span> of
            <span className="text-[#0F172A] font-semibold"> 248</span> items
          </p>
        </div>
        <div className="">
          <GlobalPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationBar;
