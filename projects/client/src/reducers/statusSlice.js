import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../api/api";

const initStatus = {
  statusCondition: [],
  isLoading: true,
};

const BASE_URL = `/status`;

const statusSlice = createSlice({
  name: "status",
  initialState: initStatus,
  reducers: {
    setStatusCondition(state, action) {
      state.statusCondition = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setStatusCondition, setLoading } = statusSlice.actions;

export function fetchStatusReturn() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await api.get(`${BASE_URL}`);
      dispatch(setStatusCondition(res.data.statusReturn));
      dispatch(setLoading(false));
    } catch (error) {
      console.log("err return", error);
    }
  };
}

export default statusSlice.reducer;
