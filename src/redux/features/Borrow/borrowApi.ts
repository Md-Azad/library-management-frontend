import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Inputs } from "../../../interfaces/input.interface";
import { bookApi } from "../Books/bookApi";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ebon.vercel.app/api",
  }),
  tagTypes: ["books"],
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Invalidate the books tag in bookApi after successful borrow
          dispatch(bookApi.util.invalidateTags(["books"]));
        } catch {
          console.log("something went wrong");
        }
      },
    }),
  }),
});

export const { useBorroBookMutation, useGetSummaryQuery } = borrowApi;
