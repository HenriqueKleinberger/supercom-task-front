import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cards-slice";
import { cardsApiSlice } from "../features/cards/cards-api-slice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [cardsApiSlice.reducerPath]: cardsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cardsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
