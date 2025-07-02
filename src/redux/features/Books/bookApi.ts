import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Inputs } from "../../../interfaces/input.interface";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ebon.vercel.app/api",
  }),
  tagTypes: ["createEvents"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    borroBook: builder.mutation({
      query: ({ id, payload }: { id: string; payload: Inputs }) => ({
        url: `/borrow/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
    // joinEvent: builder.mutation({
    //   query: ({ eventId, email }) => ({
    //     url: `/events/join/${eventId}`,
    //     method: "PATCH",
    //     body: { email },
    //   }),
    // }),
  }),
});

export const { useGetBooksQuery, useBorroBookMutation, useGetBookQuery } =
  bookApi;
