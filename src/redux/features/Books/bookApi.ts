import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    // CreateEvent: builder.mutation({
    //   query: (payload) => ({
    //     url: `/events`,
    //     method: "POST",
    //     body: payload,
    //   }),
    // }),
    // joinEvent: builder.mutation({
    //   query: ({ eventId, email }) => ({
    //     url: `/events/join/${eventId}`,
    //     method: "PATCH",
    //     body: { email },
    //   }),
    // }),
  }),
});

export const { useGetBooksQuery } = bookApi;
