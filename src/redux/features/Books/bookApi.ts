import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "../../../interfaces/book.interface";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ebon.vercel.app/api",
    // baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ params }) => `/books${params ?? ""}`,
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: (payload: IBook) => ({
        url: "/books",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["books"],
      async onQueryStarted({ id, payload }, { dispatch, queryFulfilled }) {
        // Optimistically update the cache
        const patchResult = dispatch(
          bookApi.util.updateQueryData(
            "getBooks",
            { params: undefined },
            (draft) => {
              if (draft?.data) {
                const index = draft.data.findIndex(
                  (book: IBook) => book._id === id
                );
                if (index !== -1) {
                  draft.data[index] = { ...draft.data[index], ...payload };
                }
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          // Rollback if the request fails
          patchResult.undo();
        }
      },
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          bookApi.util.updateQueryData(
            "getBooks",
            { params: undefined },
            (draft) => {
              if (draft?.data) {
                draft.data = draft.data.filter(
                  (book: IBook) => book._id !== id
                );
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
