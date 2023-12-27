import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../../types";

interface CardsState {
  value: Card[];
}

const initialState: CardsState = {
  value: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    getCards(state) {
      state.value = [];
    },
  },
});

export const { getCards } = cardsSlice.actions;
export default cardsSlice.reducer;
