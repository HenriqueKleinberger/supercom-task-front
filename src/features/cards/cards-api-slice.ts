import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Card } from "../../../types";

const CARD_TAG = "card_tag";

export const cardsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:44376",
  }),
  tagTypes: [CARD_TAG],
  endpoints(builder) {
    return {
      fetchCards: builder.query<Card[], void>({
        query: () => "/cards",
        providesTags: [CARD_TAG],
      }),
      postCard: builder.mutation<Card, Card>({
        query({ id, ...body }) {
          return {
            url: "/cards",
            method: "POST",
            body,
          };
        },
        invalidatesTags: [CARD_TAG],
      }),
      deleteCard: builder.mutation<Card, number>({
        query(id) {
          return {
            url: `/cards/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: [CARD_TAG],
      }),
      putCard: builder.mutation<Card, Card>({
        query({ id, ...body }) {
          return {
            url: `/cards/${id}`,
            method: "PUT",
            body,
          };
        },
        invalidatesTags: [CARD_TAG],
      }),
    };
  },
});

export const {
  useFetchCardsQuery,
  usePostCardMutation,
  useDeleteCardMutation,
  usePutCardMutation,
} = cardsApiSlice;
