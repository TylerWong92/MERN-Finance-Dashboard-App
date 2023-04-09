import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductResponse,
  GetTransectionResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transections"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpiResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransections: build.query<Array<GetTransectionResponse>, void>({
      query: () => "transection/transections/",
      providesTags: ["Transections"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransectionsQuery } =
  api;
