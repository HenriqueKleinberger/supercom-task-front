import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../../types";

interface CardsState {
  value: Card | null;
  isEditing: boolean;
}

const initialState: CardsState = {
  value: null,
  isEditing: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<Card | null>) {
      state.isEditing = action.payload !== null;
      state.value = action.payload;
    },
    updateCard(
      state,
      action: PayloadAction<{
        fieldName: Exclude<keyof Card, "id">;
        fieldValue: string;
      }>
    ) {
      const { fieldName, fieldValue } = action.payload;
      if (state.value) state.value[fieldName] = fieldValue;
    },
  },
});

export const { setCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
