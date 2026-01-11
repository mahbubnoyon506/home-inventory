// src/hooks/use-items.ts
import { api } from "@/app/api/axiosInstance";
import { MOCK_ITEM_DETAIL, MOCK_ITEMS } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";

export function useItems(page = 1) {
  return useQuery({
    queryKey: ["items", page],
    queryFn: async () => {
      try {
        const response = await api.get(`/items?page=${page}`);
        return response.data;
      } catch (error) {
        console.warn("API unavailable, falling back to static data.");
        return {
          items: MOCK_ITEMS,
          page: 1,
          pageSize: 10,
          total: MOCK_ITEMS.length,
        };
      }
    },

    initialData: {
      items: MOCK_ITEMS,
      page: 1,
      pageSize: 10,
      total: MOCK_ITEMS.length,
    },
  });
}

export function useItemDetails(id: string) {
  return useQuery({
    queryKey: ["item", id],
    queryFn: async () => {
      try {
        const response = await api.get(`/items/${id}`);
        return response.data;
      } catch (error) {
        return MOCK_ITEM_DETAIL;
      }
    },
    initialData: MOCK_ITEM_DETAIL,
  });
}
