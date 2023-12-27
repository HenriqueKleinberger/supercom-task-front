import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Card } from "../../../types";

export const cardsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:44376",
  }),
  endpoints(builder) {
    return {
      fetchCards: builder.query<Card[], void>({
        query() {
          return "/cards";
        },
      }),
    };
  },
});

export const { useFetchCardsQuery } = cardsApiSlice;
