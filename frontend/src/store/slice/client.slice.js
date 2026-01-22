import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    updateClients: (state, action) => {
      state.clients = action.payload;
    },
  },
});

export const { updateClients } = clientsSlice.actions;
export default clientsSlice.reducer;
