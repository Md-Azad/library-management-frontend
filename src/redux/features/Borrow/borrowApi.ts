import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Inputs } from "../../../interfaces/input.interface";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ebon.vercel.app/api",
  }),
  tagTypes: ["createEvents"],
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => "/borrow/borrow-summary",
    }),

    borroBook: builder.mutation({
      query: ({ id, payload }: { id: string; payload: Inputs }) => ({
        url: `/borrow/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useBorroBookMutation, useGetSummaryQuery } = borrowApi;
