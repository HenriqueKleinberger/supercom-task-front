import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/cards/card-slice";
import { cardsApiSlice } from "../features/cards/cards-api-slice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    [cardsApiSlice.reducerPath]: cardsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cardsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
